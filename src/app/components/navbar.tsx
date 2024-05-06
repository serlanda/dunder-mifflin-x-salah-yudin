"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="flex justify-between items-center w-full p-6 bg-black text-white"> 
        <ul className="flex gap-10">
            <li className={pathname === "/" ? "font-semibold" : ""}><Link href="/" className="text-xl">Ana Sayfa</Link></li>
            <li className={pathname === "/koleksiyonlar" ? "font-semibold" : ""}><Link href="/koleksiyonlar" className="text-xl">Koleksiyonlar</Link></li>
            <li className={pathname === "/koleksiyonlar/erkek" ? "font-semibold" : ""}><Link href="/koleksiyonlar/erkek" className="text-xl">Erkek</Link></li>
            <li className={pathname === "/koleksiyonlar/kadin" ? "font-semibold" : ""}><Link href="/koleksiyonlar/kadin" className="text-xl">Kadın</Link></li>
        </ul>
        <button>Giriş Yap</button>
        </header>
    )
}