import Head from "next/head";
import Image from "next/image";
import Title from "../../components/Title";
import { ApiError } from "lib/api";
import { getProduct, getProducts } from "lib/products";

export default function ProductPage({ product }) {
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title>{product.title}</Title>
        <div className="flex flex-col lg:flex-row">
          <div>
            <Image
              src={product.imageUrl}
              alt="product image"
              width={640}
              height={480}
            />
          </div>
          <div className="flex-1 mt-4 space-y-2 lg:ml-4 lg:mt-0">
            <p className="text-sm">{product.description}</p>
            <p className="text-lg font-bold">{product.price}</p>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps({ params: { id } }) {
  try {
    const product = await getProduct(id);

    return {
      props: {
        product,
      },
      revalidate: parseInt(process.env.REVALIDATE_SECONDS),
    };
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      return { notFound: true };
    }
    throw error;
  }
}

export async function getStaticPaths() {
  const products = await getProducts();

  return {
    paths: products.map(product => ({
      params: { id: product.id.toString() },
    })),
    fallback: "blocking",
  };
}
