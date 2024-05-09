import { auth } from "@clerk/nextjs/server";
import { db } from "~/server/db";
// import { getCartItems } from "~/server/queries";

// console.log(userId)

export default async function CartPage() {
  //   const userCartItems = await getCartItems();

  const user = auth();
  const cartItems = await db.query.cartItem.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
  });

  console.log(cartItems);

  return (
    <div className="h-screen w-screen bg-red-200 text-white">
      {/* {userCartItems.map((cartItem) => (
        <div key={cartItem.id}>
          <p className="text-[20px] text-white">{cartItem.quantity}</p>
        </div> */}
      {/* ))} */}
    </div>
  );
}
