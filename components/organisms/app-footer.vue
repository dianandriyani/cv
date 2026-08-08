<script setup lang="ts">
import DianLogo from '~/assets/images/logo_dian.svg';

import { socials } from '~/content/socials';
</script>

<template>
  <footer class="border-t border-slate-800 bg-slate-950 py-10 text-slate-300">
    <div
      class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row"
    >
      <div class="flex flex-rows gap-2">
        <NuxtLink to="/" aria-label="Dian Andriyani - Home">
          <img :src="DianLogo" alt="Dian Andriyani" class="h-14 w-auto brightness-0 invert" />
        </NuxtLink>
        <div>
          <p class="text-lg font-semibold text-white">Dian Andriyani</p>

          <p class="mt-2 text-sm text-slate-400">
            © {{ new Date().getFullYear() }}
            All rights reserved.
          </p>
        </div>
      </div>

      <MoleculesSocialLinks :items="socials" />
    </div>
  </footer>
</template>
