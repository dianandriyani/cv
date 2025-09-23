<script setup lang="ts">
// contoh data CV
const name = "Dian Andri"
const role = "Frontend Developer"
const summary = "Saya seorang frontend developer dengan pengalaman membangun aplikasi modern menggunakan Vue, Nuxt, dan React."
const skills: string[] = ["Vue", "Nuxt", "React", "TypeScript", "TailwindCSS"]
const contacts = {
  email: "dian@example.com",
  github: "https://github.com/dian",
  linkedin: "https://linkedin.com/in/dian"
}
</script>

<template>
  <main class="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 px-6">
    <!-- Header -->
    <section class="text-center mb-10">
      <h1 class="text-4xl font-bold mb-2">{{ name }}</h1>
      <h2 class="text-xl text-gray-600">{{ role }}</h2>
    </section>

    <!-- Summary -->
    <section class="max-w-2xl text-center mb-10">
      <p class="text-lg leading-relaxed">
        {{ summary }}
      </p>
    </section>

    <!-- Skills -->
    <section class="mb-10">
      <h3 class="text-2xl font-semibold mb-4">Skills</h3>
      <ul class="flex flex-wrap justify-center gap-3">
        <li
          v-for="skill in skills"
          :key="skill"
          class="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm"
        >
          {{ skill }}
        </li>
      </ul>
    </section>

    <!-- Contact -->
    <section class="text-center">
      <h3 class="text-2xl font-semibold mb-4">Contact</h3>
      <div class="flex flex-col gap-2">
        <a :href="`mailto:${contacts.email}`" class="text-blue-600 hover:underline">{{ contacts.email }}</a>
        <a :href="contacts.github" target="_blank" class="text-blue-600 hover:underline">GitHub</a>
        <a :href="contacts.linkedin" target="_blank" class="text-blue-600 hover:underline">LinkedIn</a>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* tambahan kecil kalau tanpa Tailwind */
body {
  font-family: system-ui, sans-serif;
}
</style>
