import { fetchJson } from "./api";

const { CMS_URL } = process.env;

function stripProductTitlesPriceImage(product) {
  return {
    id: product.id,
    title: product.attributes.Title,
    price: "$" + product.attributes.Price.toFixed(2),
    imageUrl: CMS_URL + product.attributes.Image.data.attributes.url,
  };
}

function stripProductTitleDesc(product) {
  return {
    id: product.data.id,
    title: product.data.attributes.Title,
    description: product.data.attributes.Description,
  };
}

export async function getProduct(id) {
  const product = await fetchJson(`${CMS_URL}/api/products/${id}`);

  return stripProductTitleDesc(product);
}

export async function getProducts() {
  const products = await fetchJson(`${CMS_URL}/api/products?populate=*`);

  return products.data.map(stripProductTitlesPriceImage);
}
