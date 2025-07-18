<template>
  <div
    :class="['category-card', { 'category-card--active': active }]"
    @click.self="$emit('click')"
  >
    <p class="category-card__name">{{ category.name }}</p>
    <div class="category-card__actions">
      <CategoryEdit :category="category" />
      <CategoryDelete :category="category" />
    </div>
  </div>
</template>

<script lang="ts">
import { Category } from "@/types";
import { defineComponent, PropType } from "vue";
import CategoryEdit from "./CategoryEdit.vue";
import CategoryDelete from "./CategoryDelete.vue";

export default defineComponent({
  components: { CategoryDelete, CategoryEdit },
  props: {
    category: {
      type: Object as PropType<Category>,
      required: true,
    },
    active: {
      type: Boolean,
    },
  },
});
</script>

<style scoped>
.category-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  border-radius: 12px;
  padding: 0 8px;
  background-color: var(--shade-200);
  border: 1px solid var(--shade-300);
  cursor: pointer;

  &:hover {
    border-color: var(--purple-100);
  }
}

.category-card--active {
  background-color: var(--purple-100);
  border-color: var(--purple-100);

  & .category-card__name {
    color: var(--shade-100);
  }
}

.category-card__name {
  text-transform: capitalize;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
}

.category-card__actions {
  display: flex;
  gap: 8px;
}
</style>
