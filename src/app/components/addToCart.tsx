import { auth } from "@clerk/nextjs/server";
import { db } from "~/server/db";
import { cartItem } from "~/server/db/schema";

export default function AddToCart({ product }) {
  const user = auth()

  async function handleCart(data: FormData) {
    "use server";
    
    // console.log(user.userId)

    const activeUser = await db.query.users.findFirst({
      where: (model, { eq }) => eq(model.clerkId, user.userId)
    })

    // console.log(product.id)
    const activeUserCard = await db.insert(cartItem).values({
      userId: activeUser.clerkId,
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