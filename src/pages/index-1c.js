import Head from "next/head";
import Title from "../components/Title";
import { getProducts } from "lib/products";

// 1-c) fetch products on the server side in getServerSideProps

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

export async function getServerSideProps(context) {
  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
}
