/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Product({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="container mx-auto">
        <Link
          href={`/products/${product.id}`}
          className="group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative overflow-hidden border-2 border-black rounded-xl">
            <Image
              src={product.image}
              width={400}
              height={400}
              className="object-contain group-hover:scale-110 transition-transform duration-300"
              alt={product.title}
            />
            <p className="absolute bottom-0 right-0 px-5 py-2 rounded-tl-2xl bg-[#FFC8DD] text-xl font-semibold">₺ {product.price}</p>
          </div>
          <div className="text-black w-[400px]">
            <h2 className="text-xl font-semibold">{product.name}</h2>
          </div>
        </Link>
      </div>
    </>
  );
}
