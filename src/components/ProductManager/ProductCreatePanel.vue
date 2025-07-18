<template>
  <div class="product-panel">
    <span class="product-panel__label">Добавить продукт</span>

    <ProductCreate />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductCreate from "./ProductCreate.vue";

export default defineComponent({
  components: { ProductCreate },
});
</script>

<style scoped>
.product-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: var(--shade-200);
  border-radius: 12px;
}

.product-panel__label {
  color: var(--shade-500);
  font-weight: 700;
  font-size: 12px;
  line-height: 160%;
}
</style>
