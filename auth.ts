import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { prisma } from "@/lib/prisma"

const allowedEmails = ["gregfirit@gmail.com"]

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false
      if (!allowedEmails.includes(user.email)) return false

      await prisma.user.upsert({
        where: { email: user.email },
        update: {
          name: user.name ?? null,
          image: user.image ?? null,
        },
        create: {
          email: user.email,
          name: user.name ?? null,
          image: user.image ?? null,
        },
      })

      return true
    },
  },
  trustHost: true,
})