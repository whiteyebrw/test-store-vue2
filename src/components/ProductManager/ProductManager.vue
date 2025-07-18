<template>
  <div class="wrapper">
    <ProductCreatePanel />
    <ProductFilter />
    <ProductList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductCreatePanel from "./ProductCreatePanel.vue";
import ProductFilter from "./ProductFilter.vue";
import ProductList from "./ProductList/ProductList.vue";

export default defineComponent({
  components: {
    ProductCreatePanel,
    ProductFilter,
    ProductList,
  },
});
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}
</style>
