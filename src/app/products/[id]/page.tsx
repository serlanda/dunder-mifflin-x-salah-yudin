"use client";

import { usePathname } from "next/navigation"


export default function ProductPage() {
    const pathname = usePathname().split("/")[2]

    return (
        <div className="flex justify-center text-xl font-semibold">Product Sayfası</div>
    )
}