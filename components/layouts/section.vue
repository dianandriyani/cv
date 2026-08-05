<script setup lang="ts">
defineOptions({
  name: 'BaseSection',
});

interface Props {
  id?: string;
}

defineProps<Props>();
</script>

<template>
  <section :id="id" class="py-24 md:py-32">
    <slot />
  </section>
</template>
