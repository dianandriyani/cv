<script setup lang="ts">
import { socials } from '~/content/socials';

</script>

<template>
  <footer class="border-t border-slate-800 bg-slate-950 py-10 text-slate-300">
    <div
      class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row"
    >
      <div>
        <p class="text-lg font-semibold text-white">Dian Andriyani</p>

        <p class="mt-2 text-sm text-slate-400">
          © {{ new Date().getFullYear() }}
          All rights reserved.
        </p>
      </div>

      <MoleculesSocialLinks :items="socials" />
    </div>
  </footer>
</template>
