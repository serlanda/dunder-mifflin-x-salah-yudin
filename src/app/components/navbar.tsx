"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className=" w-[100%] border-gray-200 bg-[#FFFF] px-8 py-[30px] lg:py-[42px] xl:py-7 border-b">
      <div className="container mx-auto flex flex-grow-0 lg:justify-between justify-center items-center flex-row">
        <ul className="mr-auto flex gap-10">
          <li className={pathname === "/" ? "font-semibold" : ""}>
            <Link href="/" className="text-xl">
              Ana Sayfa
            </Link>
          </li>
          <li className={pathname === "/koleksiyonlar" ? "font-semibold" : ""}>
            <Link href="/koleksiyonlar" className="text-xl">
              Koleksiyonlar
            </Link>
          </li>
          <li
            className={
              pathname === "/koleksiyonlar/erkek" ? "font-semibold" : ""
            }
          >
            <Link href="/koleksiyonlar/erkek" className="text-xl">
              Erkek
            </Link>
          </li>
          <li
            className={
              pathname === "/koleksiyonlar/kadin" ? "font-semibold" : ""
            }
          >
            <Link href="/koleksiyonlar/kadin" className="text-xl">
              Kadın
            </Link>
          </li>
        </ul>
        <div className="ml-auto flex gap-10 text-xl font-semibold">
          <Link href="/cart" className="">Sepeti Goruntule</Link>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
