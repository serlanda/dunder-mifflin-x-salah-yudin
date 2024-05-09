/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from "next/image";
import Link from "next/link";

export default function Product({ product }) {
  // const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="bg-red-300">
        <Link
          href={`/products/${product.id}`}
          className="text-white"
          // onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={product.image}
            width={500}
            height={500}
            alt={product.title}
          />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </Link>
      </div>
    </>
  );
}
