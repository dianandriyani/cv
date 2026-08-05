<script setup lang="ts">
import type { Experience } from '~/types/experience';

defineOptions({
  name: 'ExperienceSection',
});

interface Props {
  experiences: Experience[];
}

defineProps<Props>();
</script>

<template>
  <section id="experience" class="relative overflow-hidden bg-white py-28">

    <div class="relative mx-auto max-w-6xl px-6">
      <AtomsSectionTitle
        eyebrow="Career"
        title="Professional Experience"
        description="Delivering production-ready web applications, CMS platforms, and Smart TV experiences across multiple industries."
      />

      <div class="relative mt-20">
        <!-- Timeline line -->
        <div
          class="absolute left-2.75 top-3 bottom-10 w-px bg-linear-to-b from-(--primary-400) via-slate-200 to-transparent"
        />

        <MoleculesTimelineItem
          v-for="(item, index) in experiences"
          :key="`${item.company}-${item.period}`"
          :is-last="index === experiences.length - 1"
          v-bind="item"
        />
      </div>
    </div>
  </section>
</template>
