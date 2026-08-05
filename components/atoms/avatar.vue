<script setup lang="ts">
import { computed } from 'vue';

defineOptions({
  name: 'BaseAvatar',
});

interface Props {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const props = withDefaults(defineProps<Props>(), {
  alt: 'Avatar',
  size: 'md',
});

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'size-8';

    case 'lg':
      return 'size-16';

    case 'xl':
      return 'size-24';

    default:
      return 'size-12';
  }
});
</script>

<template>
  <img v-if="src" :src="src" :alt="alt" :class="['rounded-full object-cover', sizeClass]" />

  <div
    v-else
    :class="[
      'flex items-center justify-center rounded-full bg-neutral-200 font-semibold text-neutral-600',
      sizeClass,
    ]"
  >
    {{ alt.charAt(0).toUpperCase() }}
  </div>
</template>
