function stripProduct(product) {
  return {
    id: product.id,
    title: product.attributes.Title,
  };
}

export async function getProducts() {
  const response = await fetch("http://localhost:1337/api/products");
  const products = await response.json();

  return products.data.map(stripProduct);
}
