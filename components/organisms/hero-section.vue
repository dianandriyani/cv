<script setup lang="ts">
import type { Hero } from '~/types/hero';
import type { Social } from '~/types/socials';

defineOptions({
  name: 'HeroSection',
});

interface Props {
  hero: Hero;
  socials: Social[];
}

defineProps<Props>();
</script>

<template>
  <section
    class="relative overflow-hidden bg-linear-to-b from-(--primary-50) via-white to-white pt-28 pb-20 lg:pt-36 lg:pb-28"
  >
    <!-- Decoration -->
    <DecorationsBackground />

    <div class="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
      <!-- LEFT -->

      <div class="order-2 lg:order-1">
        <AtomsSectionTitle
          :eyebrow="hero.eyebrow"
          :title="hero.title"
          :description="hero.description"
          typing
        />

        <div class="mt-8">
          <MoleculesSocialLinks :items="socials" />
        </div>
      </div>

      <!-- RIGHT -->

      <div class="order-1 flex justify-center lg:order-2 lg:-translate-y-8">
        <div class="relative">
          <!-- Glow -->

          <div
            class="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--primary-400) opacity-20 blur-[100px]"
          />

          <img
            :src="hero.avatar"
            :alt="hero.title"
            class="relative z-10 w-full max-w-107.5 object-contain drop-shadow-[0_40px_80px_rgba(37,99,235,.25)]"
          />
        </div>
      </div>
    </div>
  </section>
</template>
