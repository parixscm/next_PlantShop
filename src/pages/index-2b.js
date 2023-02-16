import Head from "next/head";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import { getProducts } from "../../lib/products";

// fetch products on the client side (useEffect)
// from an internal API (API route)

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/products");
      const products = await response.json();
      setProducts(products);
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title>Next Shop</Title>
        <ul>
          {products.map(product => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
