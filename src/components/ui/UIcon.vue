<template>
  <i class="icon" :style="containerStyles"></i>
</template>

<script lang="ts">
import { Icon } from "@/types";
import { computed, defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    name: {
      type: String as PropType<Icon>,
      required: true,
    },
    size: {
      type: Number,
      default: 24,
    },
  },
  setup(props) {
    const containerStyles = computed(() => {
      const { name, size } = props;

      const imageUrl = `/svg/${name}.svg`;

      return {
        width: size + "px",
        minWidth: size + "px",
        height: size + "px",
        maskImage: `url('${imageUrl}')`,
      };
    });

    return { containerStyles };
  },
});
</script>

<style scoped>
.icon {
  display: block;
  background-color: currentColor;
}
</style>
