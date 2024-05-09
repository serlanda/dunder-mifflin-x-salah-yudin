import { auth } from "@clerk/nextjs/server";
import { inArray } from "drizzle-orm";
import { db } from "~/server/db";

export default async function CartPage() {

  const user = auth();

  const cartItems = await db.query.cartItem.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
  });

  const productIds = cartItems.map((cartItem) => cartItem.productId)

    const foundProducts = await db.query.products.findMany({
      where: (model) => inArray(model.id, productIds),
    })

  console.log(foundProducts)

  return (
    <div className="h-screen w-screen bg-red-200 text-white">
      {foundProducts.map((product) => (
        <div key={product.id}>
          <p className="text-[20px] text-white">{product.name}</p>
        </div>
      ))}
    </div>
  );
}