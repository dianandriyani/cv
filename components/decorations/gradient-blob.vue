<script setup lang="ts">
defineOptions({
  name: 'GradientBlob',
});

interface Props {
  size?: string;
}

withDefaults(defineProps<Props>(), {
  size: '500px',
});
</script>

<template>
  <div
    :style="{
      width: size,
      height: size,
    }"
    class="absolute rounded-full bg-blue-500/20 blur-[120px]"
  />
</template>
