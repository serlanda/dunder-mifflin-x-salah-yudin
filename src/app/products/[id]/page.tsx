import Image from "next/image";
import { getProduct } from "~/server/queries";

export default async function ProductPage({
  params: { id: productId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(productId);
  if (Number.isNaN(idAsNumber)) throw new Error("Not a number");

  const product = await getProduct(idAsNumber);
  return (
    <div className="flex items-center justify-center">
      <Image src={product.image} alt={product.name} width={500} height={500} />
    </div>
  );
}
