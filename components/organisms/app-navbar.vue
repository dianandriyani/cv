<script setup lang="ts">
defineOptions({
  name: 'AppNavbar',
});

const menus = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/80 backdrop-blur-xl">
    <div class="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
      <NuxtLink to="/" class="text-xl font-bold tracking-tight"> Dian. </NuxtLink>

      <nav class="hidden items-center gap-8 md:flex">
        <a
          v-for="menu in menus"
          :key="menu.label"
          :href="menu.href"
          class="text-sm font-medium text-neutral-600 transition-colors hover:text-[var(--primary-600)]"
        >
          {{ menu.label }}
        </a>
      </nav>

    </div>
  </header>
</template>
