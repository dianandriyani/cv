<script setup lang="ts">
import { Icon } from '@iconify/vue';
import type { Project } from '~/types/projects';
import { featuredProjects } from '~/content/projects';

defineOptions({
  name: 'ProjectSection',
});

interface Props {
  projects: Project[];
}

defineProps<Props>();
</script>

<template>
  <section id="projects" class="relative overflow-hidden bg-(--primary-50) pt-24 pb-20">
    <DecorationsBackgroundGrid />
    <div class="mx-auto max-w-7xl px-6">
      <div class="mb-12 grid items-end gap-6 lg:grid-cols-2">
        <AtomsSectionTitle
          eyebrow="Featured Projects"
          title="Featured Projects"
          description="Recent products and web applications I've built and contributed to throughout my career."
        />

        <div class="flex justify-start lg:justify-end">
          <NuxtLink
            to="/projects"
            class="inline-flex items-center gap-2 text-sm font-semibold text-(--primary-600) transition hover:gap-3"
          >
            View all projects

            <Icon icon="heroicons:arrow-right-20-solid" class="h-5 w-5" />
          </NuxtLink>
        </div>
      </div>

      <div class="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        <MoleculesProjectCard
          v-for="project in featuredProjects"
          :key="project.title"
          v-bind="project"
        />
      </div>
    </div>
  </section>
</template>
