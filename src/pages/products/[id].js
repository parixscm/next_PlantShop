import Image from "next/image";
import Page from "../../components/Page";
import { ApiError } from "lib/api";
import { getProduct, getProducts } from "lib/products";

export default function ProductPage({ product }) {
  return (
    <Page title={product.title}>
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
    </Page>
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
