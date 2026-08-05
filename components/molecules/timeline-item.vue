<script setup lang="ts">
defineOptions({
  name: 'TimelineItem',
});

interface Props {
  period: string;
  company: string;
  position: string;
  description: string;
  stack: string[];
  isLast?: boolean;
}

defineProps<Props>();
</script>

<template>
  <article
    class="relative pb-14 pl-14"
    :class="{
      'pb-0': isLast,
    }"
  >
    <!-- Bullet -->

    <div
      class="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white"
    >
      <div class="h-3 w-3 rounded-full bg-[var(--primary-600)] ring-4 ring-[var(--primary-50)]" />
    </div>

    <!-- Period -->

    <p class="text-sm font-medium tracking-wide text-slate-500">
      {{ period }}
    </p>

    <!-- Position -->

    <h3 class="mt-2 text-3xl font-bold tracking-tight text-slate-900">
      {{ position }}
    </h3>

    <!-- Company -->

    <p class="mt-2 font-semibold text-[var(--primary-600)]">
      {{ company }}
    </p>

    <!-- Description -->

    <p class="mt-6 max-w-3xl leading-8 text-slate-600">
      {{ description }}
    </p>

    <!-- Stack -->

    <div class="mt-6 flex flex-wrap gap-2">
      <AtomsBadge v-for="item in stack" :key="item">
        {{ item }}
      </AtomsBadge>
    </div>
  </article>
</template>
