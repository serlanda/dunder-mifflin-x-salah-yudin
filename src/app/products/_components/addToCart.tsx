import { auth } from "@clerk/nextjs/server";
import { db } from "~/server/db";
import { cartItems, productOnCartItems } from "~/server/db/schema";
import ProductCount from "./productCount";

export default function AddToCart({ product }) {
  const user = auth();

  async function handleCart(data: FormData) {
    "use server";

    await db.insert(cartItems).values({
      userId: user.userId,
      productId: product.id,
      quantity: Object.fromEntries(data.entries())["quantity"],
    });

    // await db.insert(productOnCartItems).values({
    //   productId: product.id,
    //   cartItemId: cartItems.id,
    // });

  }

  return (

    <form action={handleCart}>
      <ProductCount product={product} />
      <button
        className="rounded-lg border px-4 py-2 text-white transition-colors bg-black hover:bg-red-500"
        type="submit"
      >
        Add to Cart
      </button>
    </form>
  );
}
