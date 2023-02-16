import Title from "../../components/Title";
import Head from "next/head";
import { getProduct, getProducts } from "lib/products";

export default function ProductPage({ product }) {
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title>{product.title}</Title>
        <p>{product.description}</p>
      </main>
    </>
  );
}

export async function getStaticProps({ params: { id } }) {
  const product = await getProduct(id);

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const products = await getProducts();

  return {
    paths: products.map(product => ({
      params: { id: product.id.toString() },
    })),
    fallback: false,
  };
}