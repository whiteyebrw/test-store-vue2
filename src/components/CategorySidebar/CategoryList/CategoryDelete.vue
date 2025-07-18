<template>
  <div>
    <UButton @click="open = true">
      <UIcon name="delete-bin-6-line" :size="12" />
    </UButton>

    <DeleteModal
      :open="open"
      @close="close"
      title="Удалить категорию?"
      @delete="handleDelete"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import UButton from "@/components/ui/UButton.vue";
import UIcon from "@/components/ui/UIcon.vue";
import { useCategory } from "@/composables/useCategory";
import { Category } from "@/types";
import DeleteModal from "@/components/DeleteModal.vue";

export default defineComponent({
  components: { DeleteModal, UButton, UIcon },
  props: {
    category: {
      type: Object as PropType<Category>,
      required: true,
    },
  },
  setup(props) {
    const { deleteCategory } = useCategory();
    const open = ref(false);

    const close = () => {
      open.value = false;
    };

    const handleDelete = async () => {
      deleteCategory(props.category.id);
      close();
    };

    return { open, handleDelete, close };
  },
});
</script>

<style scoped></style>
