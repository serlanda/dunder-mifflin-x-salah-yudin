"use server";

import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { z } from "zod";
import { db } from "~/server/db";
import { products } from "~/server/db/schema";
// import fs from "fs/promises";
// import { File } from "buffer";

// const fileSchema = z.instanceof(File, { message: "Resim dosyası seçiniz" });
// const imageSchema = fileSchema.refine(file => file.size === 0 || file.type.startsWith("image/"));

const addSchema =z.object({
    name: z.string().min(1),
    price: z.coerce.number().int().min(1),
    description: z.string().min(1),
    category: z.string().min(1),
    image: z.string().min(1),
    // image: imageSchema.refine(file => file.size > 0, "Required"), 
})

export async function addProduct(formData: FormData) {
    const result = addSchema.safeParse(Object.fromEntries(formData.entries()))
    if (result.success === false ) return result.error.formErrors.fieldErrors;
    
    const data = result.data;

    // await fs.mkdir("products", { recursive: true });
    // const imagePath = `products/${crypto.randomUUID()}-${data.image.name}`;
    // await fs.writeFile(imagePath, Buffer.from(await data.image.arrayBuffer()));


    await db.insert(products).values({
        name: data.name,
        price: data.price,
        description: data.description,
        category: data.category,
        image: data.image,
    });
}

export async function deleteTableProduct(id: string) {
    const product = await db.delete(products).where(eq(products.id, id))

    if (product === null) notFound();
}