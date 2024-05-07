"server only";

import { db } from "~/server/db";

export async function getProduct(id: number) {

    const product = await db.query.products.findFirst({
      where: (model, { eq }) => eq(model.id, id),
    });
  
    if (!product) throw new Error("Product not found");
      
    return product;
  }