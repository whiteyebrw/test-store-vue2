<template>
  <UModal :visible="open" @close="$emit('close')" :title="title">
    <template #body>
      <UInput v-model.trim="newName" placeholder="Введите название" />
    </template>
    <template #footer-btn>
      <UButton type="primary" @click="handleSave">
        <UIcon name="check-line" />
        Сохранить
      </UButton>
    </template>
  </UModal>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import UModal from "./ui/UModal.vue";
import UButton from "./ui/UButton.vue";
import UIcon from "./ui/UIcon.vue";
import UInput from "./ui/UInput.vue";

export default defineComponent({
  components: { UModal, UButton, UIcon, UInput },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
  },
  emits: ["save", "close"],
  setup(props, { emit }) {
    const newName = ref(props.name);

    const handleSave = () => {
      if (!newName.value) {
        return;
      }
      emit("save", newName.value);
    };

    return { newName, handleSave };
  },
});
</script>

<style scoped></style>
