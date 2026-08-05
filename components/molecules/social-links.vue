<script setup lang="ts">
import { Icon } from '@iconify/vue';
import type { Social } from '~/types/socials';

defineOptions({
  name: 'SocialLinks',
});

interface Props {
  items: Social[];
}

defineProps<Props>();
</script>

<template>
  <div class="flex gap-3">
    <a
      v-for="item in items"
      :key="item.label"
      :href="item.href"
      target="_blank"
      class="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 transition-all hover:border-(--primary-600) hover:bg-blue-50"
    >
      <Icon :icon="item.icon" class="size-5" />
    </a>
  </div>
</template>
