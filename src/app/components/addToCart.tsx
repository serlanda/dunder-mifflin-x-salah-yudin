import { auth } from "@clerk/nextjs/server";
import { db } from "~/server/db";
import { cartItem } from "~/server/db/schema";

export default function AddToCart({ product }) {
  const user = auth();

  async function handleCart(data: FormData) {
    "use server";

    await db.insert(cartItem).values({
      userId: user.userId,
      productId: product.id,
      quantity: 4,
    });
  }

  return (
    <form action={handleCart}>
      <button
        className="rounded-lg border px-4 py-2 text-white transition-colors bg-black hover:bg-red-500"
        type="submit"
      >
        Add to Cart
      </button>
    </form>
  );
}
