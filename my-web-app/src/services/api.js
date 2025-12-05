const BASE = "https://dummyjson.com";
export const getProducts = async () =>
  fetch(`${BASE}/products?limit=100`).then((res) => res.json());
export const getProduct = async (id) =>
  fetch(`${BASE}/products/${id}`).then((res) => res.json());
