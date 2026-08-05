<script setup lang="ts">
defineOptions({
  name: 'StatCard',
});

interface Props {
  value: string | number;
  label: string;
  description?: string;
}

defineProps<Props>();
</script>

<template>
  <AtomsCard hover class="text-center">
    <div class="space-y-2">
      <h3 class="text-4xl font-bold text-[var(--primary-600)]">
        {{ value }}
      </h3>

      <p class="font-medium text-neutral-900">
        {{ label }}
      </p>

      <p v-if="description" class="text-sm text-neutral-500">
        {{ description }}
      </p>
    </div>
  </AtomsCard>
</template>
