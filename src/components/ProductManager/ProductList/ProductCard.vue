<template>
  <div class="product-card">
    <img class="product-card__image" :src="product.image" loading="lazy" />

    <p class="product-card__title">{{ product.title }}</p>

    <div class="product-card__actions">
      <ProductEdit :product="product" />
      <ProductDelete :product="product" />
    </div>
  </div>
</template>

<script lang="ts">
import { Product } from "@/types";
import { defineComponent, PropType } from "vue";
import ProductDelete from "./ProductDelete.vue";
import ProductEdit from "./ProductEdit.vue";

export default defineComponent({
  components: { ProductEdit, ProductDelete },
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
});
</script>

<style scoped>
.product-card {
  display: grid;
  grid-template-columns: 90px 1fr auto;
  padding: 8px 10px;
  column-gap: 20px;
  border-radius: 12px;
  background-color: var(--shade-100);
  border: 0.5px solid var(--shade-300);
}

.product-card__image {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 0.5px solid var(--shade-300);
}

.product-card__title {
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
}

.product-card__actions {
  display: flex;
  align-items: flex-start;
  gap: 4px;
}
</style>
