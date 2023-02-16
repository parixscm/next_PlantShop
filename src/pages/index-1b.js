import Head from "next/head";
import Title from "../components/Title";
import { getProducts } from "lib/products";

// 1-b) fetch products on the server side
// but with ISR(incremental static regeneration) in getStaticProps

export default function HomePage({ products }) {
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

export async function getStaticProps() {
  console.log("[HomePage] getStaticProps()");
  const products = await getProducts();

  return {
    props: {
      products,
    },
    revalidate: 60, // 60 = 1 minute
  };
}
