import { auth } from "@clerk/nextjs/server";

export default function AdminPage() {
  const { sessionClaims } = auth();

  // If the user does not have the admin role, redirect them to the home page
  if (sessionClaims?.metadata.role !== "admin") {
    // redirect("/");
    return (
        <div className="flex justify-center text-xl font-semibold">Yetkisiz giriş</div>
    )
  }
  return (
    <div className="flex justify-center text-xl font-semibold">Admin sayfasi</div>
)
}