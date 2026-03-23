"use server"

import { redirect } from "next/navigation"

export async function createClient() {
  redirect("/dashboard")
}