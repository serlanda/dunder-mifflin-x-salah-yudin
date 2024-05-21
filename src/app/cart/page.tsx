import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { db } from "~/server/db";

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
      <h1 className="text-2xl font-semibold">Sepetim</h1>
      <section className="flex flex-col gap-4 py-4">
        {cartItems.map((cartItem) => (
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
            <div className="flex flex-col gap-2 w-[800px]">
              <h2 className="text-xl font-semibold">
                {cartItem.products.name}
              </h2>
              <span>Adet: {cartItem.quantity}</span>
              <span>Fiyat ₺ {cartItem.products.price}</span>
              <p className="mt-auto text-sm">
                Ürün Kodu: {cartItem.products.id}
              </p>
            </div>
            <div className="flex flex-row justify-center items-center gap-2 mx-auto">
              <span className="text-2xl font-semibold">₺ {cartItem.products.price * cartItem.quantity}</span>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
