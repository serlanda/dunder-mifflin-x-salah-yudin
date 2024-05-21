import { db } from "~/server/db";
import Product from "./components/product";
import ImageSlider from "./components/imageSlider";
import Carousel from "./components/carousel";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const products = await db.query.products.findMany();

  return (
    <>
      <ImageSlider />
      <Carousel />
      <main>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {products.map((product) => (
            <div key={product.id} className="w-max h-[460px]">
              <Product product={product} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
