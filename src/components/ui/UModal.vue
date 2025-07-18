<template>
  <div v-if="visible" class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{ title }}</h5>
        <button class="reset-button modal-close" @click="$emit('close')">
          <UIcon name="close-line" />
        </button>
      </div>

      <div class="modal-body">
        <slot name="body" />
      </div>

      <div class="modal-footer">
        <UButton @click="$emit('close')">Закрыть</UButton>
        <slot name="footer-btn" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UIcon from "./UIcon.vue";
import UButton from "./UButton.vue";

export default defineComponent({
  components: { UIcon, UButton },
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  emits: ["close"],
});
</script>

<style scoped>
.modal-overlay {
  cursor: default;
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  background: var(--shade-100);
  border-radius: 12px;
  padding: 24px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.modal-title {
  font-size: 24px;
  font-weight: 600;
  line-height: 38px;
}

.modal-footer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  color: var(--shade-500);
  border-radius: 8px;

  &:hover {
    background-color: var(--shade-300);
  }
}
</style>
