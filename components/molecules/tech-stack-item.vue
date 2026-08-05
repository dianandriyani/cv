<script setup lang="ts">
import { Icon } from '@iconify/vue';

defineOptions({
  name: 'TechStackItem',
});

interface Props {
  name: string;
  icon: string;
}

defineProps<Props>();
</script>

<template>
  <div
    class="flex flex-col items-center gap-4 rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
  >
    <Icon :icon="icon" class="h-12 w-12" />

    <span class="text-sm font-medium text-slate-700">
      {{ name }}
    </span>
  </div>
</template>
