"server only";

import { redirect } from "next/navigation";
import { db } from "~/server/db";
import { products } from "./db/schema";

export async function getProduct(id: number) {
  const product = await db.query.products.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!product) throw new Error("Product not found");

  return product;
}

export async function deleteProduct(id: number) {
  // const product = await db.query.products.findFirst({
  //   where: (model, { eq }) => eq(model.id, id),
  // });

  // if (!product) throw new Error("Product not found");

  await db.delete(products).where(eq(products.id, id))

  redirect("/");
}
 
