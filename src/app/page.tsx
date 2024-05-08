import { db } from "~/server/db";
import Product from "./components/product";

export const dynamic = "force-dynamic";


export default async function HomePage() {
  const products = await db.query.products.findMany();

  // const users = await db.query.users.findFirst({
  //   with: {
  //     userAddress: true,
  //     cartItems: true,
  //   }
  // })
  
  // console.log(users);

  return (
    <main className="flex flex-wrap items-center justify-center gap-4">
      <div className="flex flex-row gap-4">
        {products.map((product) => (
          <div key={product.id}>
            <Product product={product} />
          </div>
              ))}
        </div>
    </main>
  );
}