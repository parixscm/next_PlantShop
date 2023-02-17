import Page from "../components/Page";
import ProductCard from "../components/ProductCard";
import { getProducts } from "lib/products";

export default function HomePage({ products }) {
  return (
    <Page title="Indoor Plants">
      <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {products.map(product => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </Page>
  );
}

export async function getStaticProps() {
  const products = await getProducts();

  return {
    props: {
      products,
    },
    revalidate: parseInt(process.env.REVALIDATE_SECONDS),
  };
}
