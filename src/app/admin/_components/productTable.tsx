import { db } from "~/server/db";
import { deleteTableProduct } from "../_actions/products";

export default async function AdminProductTable() {
  const products = await db.query.products.findMany();

  return (
    <div>
      <table className="w-full">
        <thead>
          <tr>
          <th>Ürün İsmi</th>
          <th>Ürün Fiyatı</th>
          <th>Ürünü Kaldır</th>
          </tr>
        </thead>
        {products.map((product) => (
          <tbody key={product.id} className="border-b">
            <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            {/* <button className="rounded-lg bg-red-500" onClick={() => deleteTableProduct(product.id)}>Kaldır</button> */}
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
