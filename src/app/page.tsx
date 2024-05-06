import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

// async function getAllProducts() {
//   const products = await db.query.products.findMany();

//   return (
//     <div className="">
//       {products.map((product) => (
//         <div key={product.id}>
//           <img src={product.image} alt={product.title} />
//           <h2>{product.title}</h2>
//           <p>{product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

export default async function HomePage() {
  const products = await db.query.products.findMany();

  return (
    <main className="flex flex-wrap items-center justify-center gap-4">
      <div className="flex flex-row gap-4">
      {products.map((product) => (
        <div key={product.id}>
          <Image src={product.image} width={500} height={500} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.price}</p>
        </div>
      ))}
      </div>
    </main>
  );
}
