<script setup lang="ts">
import { computed } from 'vue';

defineOptions({
  name: 'BaseSectionTitle',
});

type Align = 'left' | 'center';

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: Align;
  light?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  align: 'left',
  light: false,
});

const alignmentClass = computed(() => {
  return props.align === 'center' ? 'mx-auto text-center' : 'text-left';
});

const maxWidthClass = computed(() => {
  return props.align === 'center' ? 'max-w-2xl' : 'max-w-3xl';
});
</script>

<template>
  <div :class="['space-y-3', alignmentClass, maxWidthClass]">
    <h2
      :class="[
        'text-3xl font-bold leading-tight md:text-4xl',
        light ? 'text-white' : 'text-heading',
      ]"
    >
      {{ title }}
    </h2>

    <p
      v-if="description"
      :class="['text-base leading-7 md:text-lg', light ? 'text-white/80' : 'text-body']"
    >
      {{ description }}
    </p>
  </div>
</template>
