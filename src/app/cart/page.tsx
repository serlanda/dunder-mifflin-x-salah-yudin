import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { db } from "~/server/db";
import FormPayment from "./_components/formPayment";
import Link from "next/link";
import CheckoutButton from "./_components/checkoutButton";

export default async function CartPage() {
  const user = auth();

  const cartItems = await db.query.cartItems.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    with: {
      products: true,
    },
  });

  return (
    <main className="p-10">
      <h1 className="text-2xl font-semibold">Sepetim ({cartItems?.length})</h1>
      <section className="flex flex-col gap-4 py-4">
        {cartItems?.map((cartItem) => (
          <div
            key={cartItem.id}
            className="flex flex-row gap-2 border border-black p-2"
          >
            <Image
              src={cartItem.products.image}
              alt={cartItem.products.name}
              width={200}
              height={200}
            />
            <div className="flex w-[800px] flex-col gap-2">
              <h2 className="text-xl font-semibold">
                {cartItem.products.name}
              </h2>
              <span>Adet: {cartItem.quantity}</span>
              <span>Fiyat ₺ {cartItem.products.price}</span>
              <p className="mt-auto text-sm">
                Ürün Kodu: {cartItem.products.id}
              </p>
            </div>
            <div className="mx-auto flex flex-row items-center justify-center gap-2">
              <span className="text-2xl font-semibold">
                ₺ {cartItem.products.price * cartItem.quantity}
              </span>
            </div>
          </div>
        ))}
      </section>
        <CheckoutButton/>
    </main>
  );
}

// {cartItems.map((cartItem) => (
//   <div
//     key={cartItem.id}
//     className="flex flex-row gap-2 border border-black p-2"
//   >
//     <Image
//       src={cartItem.products.image}
//       alt={cartItem.products.name}
//       width={200}
//       height={200}
//     />
//     <div className="flex flex-col gap-2 w-[800px]">
//       <h2 className="text-xl font-semibold">
//         {cartItem.products.name}
//       </h2>
//       <span>Adet: {cartItem.quantity}</span>
//       <span>Fiyat ₺ {cartItem.products.price}</span>
//       <p className="mt-auto text-sm">
//         Ürün Kodu: {cartItem.products.id}
//       </p>
//     </div>
//     <div className="flex flex-row justify-center items-center gap-2 mx-auto">
//       <span className="text-2xl font-semibold">₺ {cartItem.products.price * cartItem.quantity}</span>
//     </div>
//   </div>
// ))}
