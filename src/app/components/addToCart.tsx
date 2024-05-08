import { db } from "~/server/db";
import { cartItem } from "~/server/db/schema";

export default function AddToCart() {

  async function handleCart(data: FormData) {
    "use server";

    const product = await db.query.products.findFirst();

      await db.insert(cartItem).values({
        userId: "1d787b96-7bba-45fc-bd0b-83b5368f0788",
        productId: product.id,
        quantity: 4,
      });
  }

  return (
    <form action={handleCart}>
      <button
        className="rounded-lg border px-4 py-2 text-white transition-colors hover:bg-red-500"
        type="submit"
      >
        Add to Cart
      </button>
    </form>
  );
}
