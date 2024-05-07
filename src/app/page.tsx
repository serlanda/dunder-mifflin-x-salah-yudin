import { db } from "~/server/db";
import Product from "./components/product";

export const dynamic = "force-dynamic";


export default async function HomePage() {
  const products = await db.query.products.findMany();

  return (
    <main className="flex flex-wrap items-center justify-center gap-4">
      <div className="flex flex-row gap-4">
        {products.map((product) => (
          <div key={product.id} className="group overflow-hidden border">
            <Product product={product} />
          </div>
              ))}
        </div>
    </main>
  );
}