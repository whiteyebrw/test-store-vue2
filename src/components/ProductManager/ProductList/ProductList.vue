<template>
  <div class="product-list">
    <USpinner v-if="isLoading" />
    <template v-else-if="sortedProducts.length">
      <ProductCard
        v-for="product in sortedProducts"
        :key="product.id"
        :product="product"
      />
    </template>
    <p v-else>Продуктов нет</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import ProductCard from "./ProductCard.vue";
import { useProducts } from "@/composables/useProducts";
import USpinner from "@/components/ui/USpinner.vue";

export default defineComponent({
  components: {
    ProductCard,
    USpinner,
  },
  setup() {
    const { sortedProducts, fetchProducts } = useProducts();
    const isLoading = ref(false);

    const loadProducts = async () => {
      isLoading.value = true;
      await fetchProducts();
      isLoading.value = false;
    };

    onMounted(loadProducts);

    return { sortedProducts, isLoading };
  },
});
</script>

<style scoped>
.product-list {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
  padding: 12px;
  background-color: var(--shade-200);
  border-radius: 12px;
  overflow-y: auto;
}
</style>
