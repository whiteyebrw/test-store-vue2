<template>
  <div id="app">
    <header>
      <h1>Заголовок</h1>
    </header>

    <main class="container">
      <USpinner v-if="isLoading" :size="48" />
      <template v-else>
        <CategorySidebar />
        <ProductManager />
      </template>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import CategorySidebar from "./components/CategorySidebar/CategorySidebar.vue";
import ProductManager from "./components/ProductManager/ProductManager.vue";
import USpinner from "./components/ui/USpinner.vue";
import { useCategory } from "./composables/useCategory";

export default defineComponent({
  components: {
    CategorySidebar,
    ProductManager,
    USpinner,
  },
  setup() {
    const isLoading = ref(false);
    const { fetchCategories } = useCategory();

    const loadCategories = async () => {
      isLoading.value = true;
      await fetchCategories();
      isLoading.value = false;
    };

    onMounted(loadCategories);

    return { isLoading };
  },
});
</script>

<style scoped>
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 80px;
}

.container {
  display: flex;
  flex: 1;
  gap: 20px;
  overflow: hidden;
}
</style>
