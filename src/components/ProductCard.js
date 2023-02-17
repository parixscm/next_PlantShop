import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="my-4 border w-80 shadow-md hover:shadow-lg">
      <Link href={`/products/${product.id}`}>
        <img src="https://dummyimage.com/320x240" />
        <div className="p-2 flex justify-between items-baseline">
          <h2 className="text-bold font-bold">{product.title}</h2>
          <span>{product.price}</span>
        </div>
      </Link>
    </div>
  );
}
