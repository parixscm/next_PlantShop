import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="my-4 border w-80 shadow-md hover:shadow-lg">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.imageUrl}
          alt="product image"
          width={320}
          height={240}
        />
        <div className="p-2 flex justify-between items-baseline">
          <h2 className="text-bold font-bold">{product.title}</h2>
          <span>{product.price}</span>
        </div>
      </Link>
    </div>
  );
}
