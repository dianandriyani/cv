<script setup lang="ts">
import { techStacks } from '~/content/tech-stack';
import type { Stat, About } from '~/types/about';

defineOptions({
  name: 'AboutSection',
});

interface Props {
  about: About;
}

defineProps<Props>();
</script>

<template>
  <section id="about" class="relative overflow-hidden py-28">
    <!-- Decoration -->
    <DecorationsGradientBlob class="-right-52 top-16" size="420px" />

    <div class="relative mx-auto max-w-7xl px-6">
      <div class="grid gap-16 lg:grid-cols-[1.2fr_.8fr] lg:items-start">
        <!-- LEFT -->

        <div>
          <AtomsSectionTitle
            eyebrow="About Me"
            title="About Me"
            :description="about.description"
          />
        </div>

        <!-- RIGHT -->

        <div class="grid grid-cols-2 gap-5">
          <MoleculesStatCard v-for="stat in about.stats" :key="stat.label" v-bind="stat" />
        </div>
      </div>

      <!-- Tech Stack -->

      <div class="mt-20">
        <AtomsSectionTitle eyebrow="Tech Stack" title="Technologies I work with" />

        <div
          class="mt-8 rounded-3xl border border-slate-200 bg-linear-to-r from-slate-50 to-white p-8"
        >
          <div class="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
            <MoleculesTechStackItem v-for="tech in techStacks" :key="tech.name" v-bind="tech" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
