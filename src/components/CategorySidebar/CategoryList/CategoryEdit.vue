<template>
  <div>
    <UButton @click="open = true">
      <UIcon name="pencil-line" :size="12" />
    </UButton>

    <EditModal
      :open="open"
      :name="category.name"
      is-edit
      @close="close"
      title="Редактирование категории"
      @save="handleSave"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import EditModal from "@/components/EditModal.vue";
import UButton from "@/components/ui/UButton.vue";
import UIcon from "@/components/ui/UIcon.vue";
import { useCategory } from "@/composables/useCategory";
import { Category } from "@/types";

export default defineComponent({
  components: { EditModal, UButton, UIcon },
  props: {
    category: {
      type: Object as PropType<Category>,
      required: true,
    },
  },
  setup(props) {
    const { updateCategory } = useCategory();
    const open = ref(false);

    const close = () => {
      open.value = false;
    };

    const handleSave = async (name: string) => {
      updateCategory(props.category.id, name);
      close();
    };

    return { open, handleSave, close };
  },
});
</script>

<style scoped></style>
