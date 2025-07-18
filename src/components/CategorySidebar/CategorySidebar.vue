<template>
  <div class="category-sidebar">
    <h3>Список</h3>
    <CategorySearchList />

    <CategoryCreate />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CategorySearchList from "./CategoryList/CategorySearchList.vue";
import CategoryCreate from "./CategoryCreate.vue";

export default defineComponent({
  components: { CategorySearchList, CategoryCreate },
});
</script>

<style scoped>
.category-sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 360px;
}
</style>
