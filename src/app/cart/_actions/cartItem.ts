"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "~/server/db";
import { cartItems } from "~/server/db/schema";

export async function removeItem(id: string) {
  await db.delete(cartItems).where(eq(cartItems.id, id));

  revalidatePath("/cart");
}