const BASE_URL = "https://fakestoreapi.in/api";

const buildQueryString = (params: Record<string, any>): string => {
  const esc = encodeURIComponent;
  return Object.keys(params)
    .filter(
      (k) => params[k] !== null && params[k] !== undefined && params[k] !== ""
    )
    .map((k) => esc(k) + "=" + esc(params[k]))
    .join("&");
};

export const getCategories = async () => {
  const response = await fetch(`${BASE_URL}/products/category`);
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  return response.json();
};

export const getProducts = async (params: { limit: string }) => {
  const queryString = buildQueryString(params);
  const response = await fetch(`${BASE_URL}/products?${queryString}`);
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  return response.json();
};

export const getProductsByType = async (params: {
  type?: string | null;
  limit: string;
}) => {
  const queryString = buildQueryString(params);
  const response = await fetch(`${BASE_URL}/products/category?${queryString}`);
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  return response.json();
};
