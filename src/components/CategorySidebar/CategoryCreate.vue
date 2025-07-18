<template>
  <div class="wrapper">
    <UButton class="create-btn" @click="open = true" type="primary">
      <UIcon name="add-line" />
      Добавить
    </UButton>

    <EditModal
      :open="open"
      @close="close"
      title="Создание категории"
      @save="handleSave"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import EditModal from "../EditModal.vue";
import UButton from "@/components/ui/UButton.vue";
import UIcon from "@/components/ui/UIcon.vue";
import { useCategory } from "@/composables/useCategory";

export default defineComponent({
  components: { EditModal, UButton, UIcon },
  setup() {
    const { createCategory } = useCategory();
    const open = ref(false);

    const close = () => {
      open.value = false;
    };

    const handleSave = async (name: string) => {
      createCategory(name);
      close();
    };

    return { open, handleSave, close };
  },
});
</script>

<style scoped>
.wrapper {
  flex-shrink: 0;
}

.create-btn {
  width: 100%;
}
</style>
