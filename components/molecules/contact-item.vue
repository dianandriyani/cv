<script setup lang="ts">
defineOptions({
  name: 'ContactItem',
});

interface Props {
  icon: unknown;
  title: string;
  value: string;
  href?: string;
}

defineProps<Props>();
</script>

<template>
  <a
    class="flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-md transition hover:bg-white/20"
  >
    <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
      <component :is="icon" class="size-6 text-[var(--primary-600)]" />
    </div>

    <div>
      <p class="text-sm text-white/70">
        {{ title }}
      </p>

      <p class="font-medium text-white/70">
        {{ value }}
      </p>
    </div>
  </a>
</template>
