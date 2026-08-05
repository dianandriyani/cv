<script setup lang="ts">
import { computed } from 'vue';

defineOptions({
  name: 'BaseCard',
});

interface Props {
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  bordered?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  hover: false,
  padding: 'md',
  bordered: true,
});

const paddingClass = computed(() => {
  switch (props.padding) {
    case 'none':
      return '';

    case 'sm':
      return 'p-4';

    case 'lg':
      return 'p-8';

    default:
      return 'p-6';
  }
});
</script>

<template>
  <div
    :class="[
      'rounded-2xl bg-white shadow-sm transition-all duration-200',
      bordered && 'border border-neutral-200',
      hover && 'hover:-translate-y-1 hover:shadow-xl',
      paddingClass,
    ]"
  >
    <slot />
  </div>
</template>
