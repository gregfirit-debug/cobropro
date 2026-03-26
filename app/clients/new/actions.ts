"use server"

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"


export async function createClient(formData: FormData) {
  try {
   const userEmail = "gregfirit@gmail.com"

    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    })

    if (!user) {
      throw new Error("No se encontró el usuario en la base de datos")
    }

    const name = formData.get("name")?.toString().trim() || ""
    const clientEmail = formData.get("email")?.toString().trim() || ""
    const phone = formData.get("phone")?.toString().trim() || ""

    if (!name) {
      throw new Error("El nombre es obligatorio")
    }

    await prisma.client.create({
      data: {
        name,
        email: clientEmail || null,
        phone: phone || null,
        userId: user.id,
      },
    })

    revalidatePath("/clients")
    redirect("/clients")
  } catch (error) {
    console.error("CREATE_CLIENT_ERROR", error)
    throw error
  }
}