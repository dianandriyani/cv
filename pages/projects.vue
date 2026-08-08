<script setup lang="ts">
import DianLogo from '~/assets/images/logo_dian.svg';
import { Icon } from '@iconify/vue';

import { projects } from '~/content/projects';

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: DianLogo,
    },
  ],
});

useSeoMeta({
  title: 'Projects | Dian Andriyani',
  description: 'A collection of projects I have worked on throughout my career.',
});

const groupedProjects = Object.entries(
  projects.reduce<Record<number, typeof projects>>((acc, project) => {
    (acc[project.year] ??= []).push(project);

    return acc;
  }, {})
).sort(([a], [b]) => Number(b) - Number(a));
</script>

<template>
  <div>
    <OrganismsAppNavbar />

    <main>
      <!-- Hero -->

      <section class="bg-gradient-to-b from-[var(--primary-50)] to-white pt-16">
        <div class="mx-auto max-w-7xl px-6">
          <!-- Back -->
          <NuxtLink
            to="/"
            class="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-all duration-300 hover:-translate-x-1 hover:text-[var(--primary-600)]"
          >
            <Icon icon="solar:alt-arrow-left-linear" class="size-5" />

            Back to Home
          </NuxtLink>

          <AtomsSectionTitle
            eyebrow="Portfolio"
            title="All Projects"
            description="A collection of professional and personal projects I've worked on throughout my career."
          />

          <div class="mt-10 flex items-center justify-between border-t border-slate-200 pt-6">
            <span class="text-sm text-slate-500"> {{ projects.length }} Projects </span>
          </div>
        </div>
      </section>

      <!-- Project List -->

      <section class="pb-28">
        <div class="mx-auto max-w-7xl px-6">
          <div
            v-for="[year, items] in groupedProjects"
            :key="year"
            class="grid gap-8 border-b border-slate-200 py-12 lg:grid-cols-[90px_1fr]"
          >
            <!-- Year -->

            <div>
              <span class="sticky top-24 text-3xl font-bold text-[var(--primary-600)]">
                {{ year }}
              </span>
            </div>

            <!-- List -->

            <div class="space-y-8">
              <article
                v-for="project in items"
                :key="project.slug"
                class="group rounded-2xl border border-transparent p-6 transition-all duration-300 hover:border-slate-200 hover:bg-slate-50"
              >
                <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div class="flex items-center gap-2">
                      <h2 class="text-xl font-semibold text-slate-900">
                        {{ project.name }}
                      </h2>

                      <a
                        v-if="project.link"
                        :href="project.link"
                        target="_blank"
                        class="text-slate-400 hover:text-[var(--primary-600)]"
                      >
                        <Icon icon="solar:arrow-right-up-linear" class="h-5 w-5" />
                      </a>
                    </div>

                    <p class="mt-2 text-sm text-slate-500">
                      {{ project.madeAt }}

                      <span v-if="project.client"> • {{ project.client }} </span>

                      • {{ project.duration }}
                    </p>

                    <div class="mt-5 flex flex-wrap gap-2">
                      <AtomsBadge v-for="stack in project.stack" :key="stack">
                        {{ stack }}
                      </AtomsBadge>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>

    <OrganismsAppFooter />
  </div>
</template>
