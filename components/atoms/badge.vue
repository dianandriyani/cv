<script setup lang="ts">
import { computed } from 'vue';

defineOptions({
  name: 'BaseBadge',
});

interface Props {
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'gray';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
});

const variantClass = computed(() => {
  switch (props.variant) {
    case 'success':
      return 'bg-green-100 text-green-700';

    case 'warning':
      return 'bg-amber-100 text-amber-700';

    case 'danger':
      return 'bg-red-100 text-red-700';

    case 'gray':
      return 'bg-neutral-100 text-neutral-700';

    default:
      return 'bg-blue-100 text-blue-700';
  }
});
</script>

<template>
  <span
    :class="['inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold', variantClass]"
  >
    <slot />
  </span>
</template>
