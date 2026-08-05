<script setup lang="ts">
defineOptions({
  name: 'BackgroundGrid',
});
</script>

<template>
  <div
    class="absolute inset-0 opacity-60 pointer-events-none [background-size:40px_40px] [background-image: linear-gradient(to_right,rgba(37,99,235,.08)_1px,transparent_1px), linear-gradient(to_bottom,rgba(37,99,235,.08)_1px,transparent_1px) ]"
  />
</template>
