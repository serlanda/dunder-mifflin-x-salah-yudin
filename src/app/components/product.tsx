/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Product({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/products/${product.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={product.image} width={500} height={500} alt={product.title}/>
      <h2>{product.title}</h2>
      <p>{product.price}</p>
    </Link>
  );
}
