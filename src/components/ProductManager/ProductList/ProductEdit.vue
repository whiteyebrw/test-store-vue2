<template>
  <div>
    <UButton @click="open = true">
      <UIcon name="pencil-line" :size="12" />
    </UButton>

    <EditModal
      :open="open"
      :name="product.title"
      is-edit
      @close="close"
      title="Редактирование продукта"
      @save="handleSave"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import EditModal from "@/components/EditModal.vue";
import UButton from "@/components/ui/UButton.vue";
import UIcon from "@/components/ui/UIcon.vue";
import { Product } from "@/types";
import { useProducts } from "@/composables/useProducts";

export default defineComponent({
  components: { EditModal, UButton, UIcon },
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  setup(props) {
    const { updateProduct } = useProducts();
    const open = ref(false);

    const close = () => {
      open.value = false;
    };

    const handleSave = async (name: string) => {
      updateProduct(props.product.id, name);
      close();
    };

    return { open, handleSave, close };
  },
});
</script>

<style scoped></style>
