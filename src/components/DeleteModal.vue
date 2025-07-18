<template>
  <UModal :visible="open" @close="$emit('close')" :title="title">
    <template #body>
      <p>Вы уверены, что хотите удалить?</p>
    </template>
    <template #footer-btn>
      <UButton type="danger" @click="$emit('delete')">
        <UIcon name="delete-bin-6-line" />
        Удалить
      </UButton>
    </template>
  </UModal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UModal from "./ui/UModal.vue";
import UButton from "./ui/UButton.vue";
import UIcon from "./ui/UIcon.vue";

export default defineComponent({
  components: { UModal, UButton, UIcon },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
  },
  emits: ["delete", "close"],
});
</script>

<style scoped></style>
