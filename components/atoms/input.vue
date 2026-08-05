<script setup lang="ts">
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline';
import { computed, ref } from 'vue';

defineOptions({
  name: 'BaseInput',
});

interface Props {
  modelValue?: string | number;
  label?: string;
  placeholder?: string;
  helper?: string;
  error?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  disabled?: boolean;
  required?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  disabled: false,
  required: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const showPassword = ref(false);

const inputType = computed(() => {
  if (props.type !== 'password') return props.type;

  return showPassword.value ? 'text' : 'password';
});

const value = computed({
  get: () => props.modelValue ?? '',

  set: (value: string) => emit('update:modelValue', value),
});

const inputClass = computed(() => [
  'w-full rounded-xl border bg-white px-4 py-3',
  'outline-none transition-all duration-200',

  props.error
    ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100'
    : 'border-neutral-200 focus:border-[var(--primary-600)] focus:ring-4 focus:ring-blue-100',

  props.disabled && 'cursor-not-allowed bg-neutral-100 opacity-60',
]);
</script>

<template>
  <div class="space-y-2">
    <label v-if="label" class="block text-sm font-medium text-neutral-800">
      {{ label }}

      <span v-if="required" class="text-red-500"> * </span>
    </label>

    <div class="relative">
      <input
        v-model="value"
        :type="inputType"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="inputClass"
      />

      <button
        v-if="type === 'password'"
        type="button"
        class="absolute inset-y-0 right-4 flex items-center text-neutral-500"
        @click="showPassword = !showPassword"
      >
        <EyeIcon v-if="!showPassword" class="size-5" />

        <EyeSlashIcon v-else class="size-5" />
      </button>
    </div>

    <p v-if="error" class="text-sm text-red-500">
      {{ error }}
    </p>

    <p v-else-if="helper" class="text-sm text-neutral-500">
      {{ helper }}
    </p>
  </div>
</template>
