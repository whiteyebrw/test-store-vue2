<template>
  <div class="wrapper">
    <UInput v-model="search" icon="search-line" placeholder="Search" />

    <div class="category__list">
      <template v-if="filteredCategories.length">
        <CategoryCard
          v-for="category in filteredCategories"
          :key="category.id"
          :category="category"
          :active="activeCategory?.id === category.id"
          @click="setActiveCategory(category)"
        />
      </template>

      <p v-else>Категории не найдены</p>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import CategoryCard from "./CategoryCard.vue";
import UInput from "../../ui/UInput.vue";
import { useCategory } from "@/composables/useCategory";

export default defineComponent({
  components: { CategoryCard, UInput },
  setup() {
    const { categories, activeCategory, setActiveCategory } = useCategory();
    const search = ref("");
    const filteredCategories = computed(() => {
      return categories.value.filter((category) =>
        category.name.toLowerCase().includes(search.value.toLowerCase())
      );
    });

    return { search, filteredCategories, activeCategory, setActiveCategory };
  },
});
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
}

.category__list {
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  gap: 8px;
}
</style>
