import { auth } from "@clerk/nextjs/server";
import ProductForm from "./_components/productForm";
import AdminProductsTable from "./_components/productTable";

export default function AdminPage() {
  const { sessionClaims } = auth();

  // If the user does not have the admin role, redirect them to the home page
  if (sessionClaims?.metadata.role !== "admin") {
    return (
      <div className="text-white text-center text-xl font-semibold">
        <h1>Sayfa bulunamadı</h1>
      </div>
    )
  }

  // flex h-[800px] items-center justify-around rounded-lg text-xl font-semibold text-white

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white font-semibold rounded-lg text-xl">
      <ProductForm/>
      <div className="border col-span-2">
       <AdminProductsTable/>
      </div>
      {/* <div className="border"><ProductForm/></div> */}
  
    </div>
  );
}