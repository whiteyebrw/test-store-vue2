<template>
  <label :for="id" class="input">
    <UIcon class="input__icon" v-if="icon" :name="icon" />

    <input
      :id="id"
      :name="name"
      :value="value"
      @input="handleInput"
      :placeholder="placeholder"
      class="input__field"
    />
  </label>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import UIcon from "./UIcon.vue";
import { Icon } from "@/types";

export default defineComponent({
  components: { UIcon },
  props: {
    id: { type: String, default: window.crypto.randomUUID() },
    icon: { type: String as PropType<Icon> },
    name: { type: String, default: "" },
    value: { type: String, default: "" },
    placeholder: { type: String, default: "" },
  },
  methods: {
    handleInput(event: Event) {
      const target = event.target as HTMLInputElement;
      this.$emit("input", target.value);
    },
  },
});
</script>

<style scoped>
.input {
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid var(--shade-300);
  padding: 4px 0;
  font-family: "Ubuntu", sans-serif;

  &:focus-within {
    border-color: var(--purple-100);
  }
}

.input__icon {
  color: var(--shade-500);
}

.input__field {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  font-family: inherit;
  font-weight: 600;
}

.input__field::placeholder {
  color: var(--shade-400);
  font-size: 14px;
  font-weight: 600;
}
</style>
