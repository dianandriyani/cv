<script setup lang="ts">
defineOptions({
  name: 'BaseIcon',
});

interface Props {
  icon: unknown;
}

defineProps<Props>();
</script>

<template>
  <component :is="icon" class="size-5" />
</template>
