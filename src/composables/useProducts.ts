import { computed, ref, watch } from "vue";
import { createSharedComposable } from "./createSharedComposable";
import { getProducts, getProductsByType } from "@/api";
import { Product } from "@/types";
import { useCategory } from "./useCategory";

const debounce = <T extends unknown[]>(
  callback: (...args: T) => void,
  delay = 500
) => {
  let timeoutTimer: ReturnType<typeof setTimeout>;

  return (...args: T) => {
    clearTimeout(timeoutTimer);

    timeoutTimer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

export const useProducts = createSharedComposable(() => {
  const { activeCategory } = useCategory();
  const products = ref<Product[]>([]);
  const limit = ref("10");
  const sort = ref<string>("title-asc");

  const sortedProducts = computed(() => {
    return [...products.value].sort((a, b) => {
      switch (sort.value) {
        case "title-asc":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        default:
          return 0;
      }
    });
  });

  const fetchProducts = async () => {
    try {
      const data = await getProducts({
        limit: limit.value,
      });
      products.value = data.products;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchProductsByType = async () => {
    try {
      const data = await getProductsByType({
        limit: limit.value,
        type: activeCategory.value?.name,
      });
      products.value = data.products;
    } catch (error) {
      products.value = [];
      console.error("Error fetching products:", error);
    }
  };

  const debouncedFetchProducts = debounce(fetchProducts);
  const debouncedFetchProductsByType = debounce(fetchProductsByType);

  watch(
    [activeCategory, limit],
    () => {
      if (activeCategory.value) {
        debouncedFetchProductsByType();
      } else {
        debouncedFetchProducts();
      }
    },
    { deep: true }
  );

  const createProduct = (name: string) => {
    const newProduct: Product = {
      id: Date.now(),
      title: name,
      image: "",
      price: 100,
      description: "",
      brand: "",
      model: "",
      color: "",
      category: "",
      discount: 0,
    };
    products.value.push(newProduct);
  };

  const updateProduct = (id: number, newName: string) => {
    const product = products.value.find((product) => product.id === id);
    if (!product) {
      return;
    }
    product.title = newName;
  };

  const deleteProduct = (id: number) => {
    products.value = products.value.filter((product) => product.id !== id);
  };
  return {
    sortedProducts,
    limit,
    sort,
    fetchProducts,
    createProduct,
    updateProduct,
    deleteProduct,
  };
});
