<script setup lang="ts">
import DianLogo from '~/assets/images/logo_dian.svg';

import { about } from '~/content/about';
import { contacts } from '~/content/contacts';
import { experiences } from '~/content/experiences';
import { hero } from '~/content/hero';
import { projects } from '~/content/projects';
import { socials } from '~/content/socials';

import { useScrollSpy } from '~/composables/useScrollSpy';

useSeoMeta({
  title: 'Dian Andriyani | Frontend Engineer',
  description: 'Frontend Engineer specializing in Vue, Nuxt, React, Next.js and TypeScript.',
});

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: DianLogo,
    },
  ],
});

useScrollSpy(['about', 'projects', 'experience', 'contact']);
</script>

<template>
  <div>
    <OrganismsAppNavbar />

    <main>
      <OrganismsHeroSection :hero="hero" :socials="socials" />

      <OrganismsAboutSection :about="about" />

      <OrganismsProjectSection :projects="projects" />

      <OrganismsExperienceSection :experiences="experiences" />

      <OrganismsContactSection :contacts="contacts" />
    </main>

    <OrganismsAppFooter />
  </div>
</template>
