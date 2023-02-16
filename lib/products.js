function stripProductTitles(product) {
  return {
    id: product.id,
    title: product.attributes.Title,
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
  const response = await fetch(`http://localhost:1337/api/products/${id}`);
  const product = await response.json();

  return stripProductTitleDesc(product);
}

export async function getProducts() {
  const response = await fetch("http://localhost:1337/api/products");
  const products = await response.json();

  return products.data.map(stripProductTitles);
}
