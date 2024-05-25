import Image from "next/image";
import AddToCart from "~/app/products/_components/addToCart";
import { db } from "~/server/db";
import { getProduct } from "~/server/queries";
import Comment from "../_components/comment";
import AddComment from "../_components/addComment";

export default async function ProductPage({
  params: { id: productId },
}: {
  params: { id: string };
}) {
  const product = await getProduct(productId);

  const comments = await db.query.comments.findMany({
    where: (model, { eq }) => eq(model.productId, productId),
  });

  // const userComments = await db.query.users.findMany({
  //   with: {
  //     comments: {
  //       where: (model, { eq }) => eq(model.productId, productId),
  //     },
  //   },
  // });

  return (
    <>
      <main className="flex items-center justify-evenly gap-10 bg-[#f8f8f4] lg:flex-col xl:flex-row p-6">
        <section className="m-6 rounded-xl">
          <Image
            src={product.image}
            alt={product.name}
            className="rounded-2xl object-contain"
            width={800}
            height={800}
          />
        </section>
        <section className="m-6 flex w-[900px] flex-col items-center">
          <div className="overflow-hidden text-left lg:h-[500px] xl:h-[700px]">
            <span className="w-fit rounded-md border border-[#FFAFCC] px-1.5 py-0.5 text-[14px] text-[#FFAFCC]">
              MUTLU ÇOCUK
            </span>
            <h1 className="mt-2 text-[30px] font-semibold">{product.name}</h1>
            <p className="mt-8 text-[24px]">{product.description}</p>
          </div>
          <AddToCart product={product} />
        </section>
      </main>
      <div className="h-screen bg-red- px-6">
        <h2 className="text-xl font-semibold my-6">Değerlendirmeler</h2>
        <div className="flex flex-wrap gap-4">
          <div className="px-4 py-2 h-[350px] w-[500px] border bg-[#BDE0FE] rounded-xl">
            <h3 className="font-semibold text-xl mb-2">Bir Yorum Yaz</h3>
            <AddComment product={productId} />
          </div>
        {comments.map((comment) => (
          <section key={comment.id} className="w-max">
            <Comment comment={comment} />
          </section>
        ))}
        </div>
      </div>
    </>
  );
}
