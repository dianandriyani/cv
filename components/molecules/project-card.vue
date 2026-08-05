<script setup lang="ts">
import { Icon } from '@iconify/vue';

defineOptions({
  name: 'ProjectCard',
});

interface Props {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  link?: string;
}

defineProps<Props>();
</script>

<template>
  <article
    class="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary-300)] hover:shadow-xl"
  >
    <!-- Floating link -->
    <a
      v-if="link"
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      class="absolute top-5 right-5 z-10 text-slate-400 transition-colors hover:text-[var(--primary-600)]"
    >
      <Icon icon="solar:arrow-right-up-linear" class="h-5 w-5" />
    </a>

    <!-- Content -->
    <h3 class="text-2xl font-semibold text-slate-900">
      {{ title }}
    </h3>

    <p class="mt-3 text-sm text-slate-500">
      {{ description }}
    </p>

    <div class="mt-6 flex flex-wrap gap-2">
      <AtomsBadge v-for="tag in tags" :key="tag">
        {{ tag }}
      </AtomsBadge>
    </div>
  </article>
</template>
