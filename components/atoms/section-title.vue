<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';

defineOptions({
  name: 'BaseSectionTitle',
});

type Align = 'left' | 'center';

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: Align;
  light?: boolean;
  typing?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  align: 'left',
  light: false,
  typing: false,
});

const alignmentClass = computed(() =>
  props.align === 'center' ? 'mx-auto text-center' : 'text-left'
);

const maxWidthClass = computed(() => (props.align === 'center' ? 'max-w-2xl' : 'max-w-3xl'));

const displayedDescription = ref('');

function startTyping() {
  displayedDescription.value = '';

  if (!props.description) return;

  let index = 0;

  const timer = setInterval(() => {
    displayedDescription.value += props.description![index];
    index++;

    if (index >= props.description!.length) {
      clearInterval(timer);
    }
  }, 50);
}

onMounted(() => {
  if (props.typing) {
    startTyping();
  } else {
    displayedDescription.value = props.description ?? '';
  }
});

watch(
  () => props.description,
  () => {
    if (props.typing) {
      startTyping();
    } else {
      displayedDescription.value = props.description ?? '';
    }
  }
);
</script>

<template>
  <div :class="['space-y-3', alignmentClass, maxWidthClass]">
    <h2
      :class="[
        'text-3xl font-bold leading-tight md:text-4xl',
        light ? 'text-white' : 'text-heading',
      ]"
    >
      {{ title }}
    </h2>

    <p
      v-if="description"
      :class="['text-base leading-7 md:text-lg', light ? 'text-white/80' : 'text-body']"
    >
      {{ displayedDescription }}

      <span
        v-if="typing"
        class="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-current align-middle"
      />
    </p>
  </div>
</template>
