<template>
  <div class="product-filter">
    <USelect v-model="sort" label="Sort" :options="sortOptions" />
    <USelect v-model="limit" label="Limit" :options="limitOptions" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import USelect from "../ui/USelect.vue";
import { useProducts } from "@/composables/useProducts";

export default defineComponent({
  components: { USelect },
  setup() {
    const { limit, sort } = useProducts();
    const sortOptions = [
      { label: "Title desc", value: "title-desc" },
      { label: "Title asc", value: "title-asc" },
      { label: "Price desc", value: "price-desc" },
      { label: "Price asc", value: "price-asc" },
    ];
    const limitOptions = [
      { label: "10", value: "10" },
      { label: "20", value: "20" },
      { label: "50", value: "50" },
    ];

    return { sortOptions, limitOptions, limit, sort };
  },
});
</script>

<style scoped>
.product-filter {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 8px;
  align-items: center;
  padding: 12px;
  background-color: var(--shade-200);
  border-radius: 12px;
}
</style>
