<script setup lang="ts">
import { computed } from 'vue';

defineOptions({
  name: 'BackgroundDecoration',
});

type Variant = 'hero' | 'light' | 'grid';

interface Props {
  variant?: Variant;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'hero',
});

const showGrid = computed(() => props.variant === 'hero' || props.variant === 'grid');

const showBlob = computed(() => props.variant === 'hero' || props.variant === 'light');
</script>

<template>
  <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <DecorationsBackgroundGrid v-if="showGrid" />

    <DecorationsGradientBlob v-if="showBlob" class="-left-40 -top-32" />

    <DecorationsGradientBlob v-if="showBlob" class="bottom-0 right-0" size="320px" />
  </div>
</template>
