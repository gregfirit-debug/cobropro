"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export async function deleteClient(clientId: string) {
  const charges = await prisma.charge.findMany({
    where: { clientId },
  });

  const hasPending = charges.some((c) => !c.paid);

 if (hasPending) {
  redirect(`/clients/${clientId}?error=pending`);
}

  await prisma.client.delete({
    where: { id: clientId },
  });

  revalidatePath("/clients");
}