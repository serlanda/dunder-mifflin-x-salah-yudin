import { auth } from "@clerk/nextjs/server";
import ProductForm from "./_components/productForm";
import AdminProductsTable from "./_components/productTable";

export default function AdminPage() {
  const { sessionClaims } = auth();

  if (sessionClaims?.metadata.role !== "admin") {
    return (
      <div className="text-center text-xl font-semibold text-white">
        <h1>Sayfa bulunamadı</h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 rounded-lg text-xl font-semibold text-white md:grid-cols-2 lg:grid-cols-3">
      <ProductForm />
      <div className="col-span-2 border">
        <AdminProductsTable />
      </div>
    </div>
  );
}
