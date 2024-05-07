import Image from "next/image";
import { deleteProduct, getProduct } from "~/server/queries";

export default async function ProductPage({
  params: { id: productId },
}: {
  params: { id: string };
}) {

  const idAsNumber = Number(productId);
  if (Number.isNaN(idAsNumber)) throw new Error("Not a number");

  const product = await getProduct(idAsNumber);
  return (
    <main className="flex justify-center items-center gap-80">
      <aside>
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
        />
      </aside>
      <section className="bg-white flex justify-center flex-col gap-2 p-32">
        <h1>{product.name}</h1>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <form action={async () => {
          "use server";

          await deleteProduct(idAsNumber);
        }}>
          <button className="bg-red-500 px-4 py-2 rounded-lg">Delete</button>
        </form>
      </section>
    </main>
  );
}
