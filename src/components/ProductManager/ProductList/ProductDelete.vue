<template>
  <div>
    <UButton @click="open = true">
      <UIcon name="delete-bin-6-line" :size="12" />
    </UButton>

    <DeleteModal
      :open="open"
      @close="close"
      title="Удалить продукт?"
      @delete="handleDelete"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import UButton from "@/components/ui/UButton.vue";
import UIcon from "@/components/ui/UIcon.vue";
import { Product } from "@/types";
import DeleteModal from "@/components/DeleteModal.vue";
import { useProducts } from "@/composables/useProducts";

export default defineComponent({
  components: { DeleteModal, UButton, UIcon },
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  setup(props) {
    const { deleteProduct } = useProducts();
    const open = ref(false);

    const close = () => {
      open.value = false;
    };

    const handleDelete = async () => {
      deleteProduct(props.product.id);
      close();
    };

    return { open, handleDelete, close };
  },
});
</script>

<style scoped></style>
