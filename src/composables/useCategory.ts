import { ref } from "vue";
import { createSharedComposable } from "./createSharedComposable";
import { getCategories } from "@/api";
import { Category } from "@/types";

export const useCategory = createSharedComposable(() => {
  const categories = ref<Category[]>([]);
  const activeCategory = ref<Category | null>(null);

  const fetchCategories = async () => {
    try {
      const data = await getCategories();
      categories.value = data.categories.map((category: string) => ({
        id: window.crypto.randomUUID(),
        name: category,
      }));
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const createCategory = (name: string) => {
    const newCategory: Category = {
      id: window.crypto.randomUUID(),
      name,
    };
    categories.value.push(newCategory);
  };

  const updateCategory = (id: string, newName: string) => {
    const categroy = categories.value.find((c) => c.id === id);
    if (!categroy) {
      return;
    }
    categroy.name = newName;
  };

  const deleteCategory = (id: string) => {
    categories.value = categories.value.filter((c) => c.id !== id);
    if (activeCategory.value?.id === id) {
      activeCategory.value = null;
    }
  };

  const setActiveCategory = (category: Category | null) => {
    activeCategory.value = category;
  };

  return {
    categories,
    activeCategory,
    fetchCategories,
    createCategory,
    updateCategory,
    deleteCategory,
    setActiveCategory,
  };
});
