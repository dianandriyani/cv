<script setup lang="ts">
import { computed } from 'vue';

defineOptions({
  name: 'BaseButton',
});

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';
type Size = 'sm' | 'md' | 'lg';

interface Props {
  variant?: Variant;
  size?: Size;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  loading: false,
  disabled: false,
  fullWidth: false,
});

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-[var(--primary-600)] text-white hover:bg-[var(--primary-700)]',

  secondary: 'border border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50',

  ghost: 'bg-transparent text-neutral-700 hover:bg-neutral-100',

  danger: 'bg-red-500 text-white hover:bg-red-600',
};

const SIZES: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
};

const classes = computed(() => [
  'inline-flex items-center justify-center gap-2',
  'rounded-xl',
  'font-semibold',
  'transition-all duration-200',
  'select-none',
  'cursor-pointer',
  'focus:outline-none',
  'focus:ring-4',
  'focus:ring-blue-200',
  'active:scale-[0.98]',
  'disabled:pointer-events-none',
  'disabled:opacity-50',

  VARIANTS[props.variant],
  SIZES[props.size],

  props.fullWidth && 'w-full',
]);
</script>

<template>
  <button :type="type" :disabled="disabled || loading" :aria-busy="loading" :class="classes">
    <slot name="left" />

    <svg v-if="loading" class="size-4 animate-spin" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" class="opacity-20" />

      <path fill="currentColor" d="M22 12a10 10 0 0 1-10 10v-4a6 6 0 0 0 6-6h4z" />
    </svg>

    <span>
      <slot />
    </span>

    <slot name="right" />
  </button>
</template>
