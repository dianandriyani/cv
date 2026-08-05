<script setup lang="ts">
import type { Component } from 'vue';

import type { Contact } from '~/types/contacts';

defineOptions({
  name: 'ContactSection',
});

interface Props {
  contacts: Contact[];
}

defineProps<Props>();
</script>

<template>
  <section
    id="contact"
    class="relative overflow-hidden bg-gradient-to-br from-[var(--primary-600)] to-[var(--primary-700)] py-20"
  >
    <div class="mx-auto max-w-5xl px-6 text-center">
      <AtomsSectionTitle
        light
        eyebrow="Contact"
        title="Let's Build Something Together."
        description="Whether it's a new opportunity, collaboration, or just saying hello, my inbox is always open."
        align="center"
      />

      <div class="mt-12 flex flex-wrap items-center justify-center gap-4">
        <MoleculesContactItem v-for="contact in contacts" :key="contact.title" v-bind="contact" />
      </div>
    </div>
  </section>
</template>
