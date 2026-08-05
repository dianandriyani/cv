<script setup lang="ts">
defineOptions({
  name: 'TechBadge',
});

interface Props {
  label: string;
}

defineProps<Props>();
</script>

<template>
  <div
    class="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium transition-all duration-200 hover:border-[var(--primary-600)] hover:bg-blue-50 hover:text-[var(--primary-600)]"
  >
    {{ label }}
  </div>
</template>
