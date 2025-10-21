<script setup lang="ts">
import { ref, computed } from 'vue';

useHead({
  title: 'Projects | Dian Andriyani',
});

const allProjects = ref([
  // === Vision+ ===
  //   {
  //     year: '2025',
  //     name: 'Vision+ TV',
  //     madeAt: 'Vision+',
  //     client: '',
  //     duration: 'Jun 2025 – Present',
  //     stack: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Tailwind'],
  //     link: '',
  //   },
  //   {
  //     year: '2025',
  //     name: 'CMS Vision+ TV',
  //     madeAt: 'Vision+',
  //     client: '',
  //     duration: 'Jun 2025 – Present',
  //     stack: ['Vue 3', 'Pinia', 'REST API'],
  //     link: '',
  //   },
  {
    year: '2025',
    name: 'Smart TV Vision+',
    madeAt: 'Vision+',
    client: '',
    duration: 'Jun 2024 – Present',
    stack: ['SolidJS', 'TypeScript', 'TailwindCSS', 'nanostores'],
    link: 'https://tv.visionplus.id/',
  },
  {
    year: '2025',
    name: 'Business Support System Vision+',
    madeAt: 'Vision+',
    client: '',
    duration: 'Nov 2023 – Present',
    stack: ['Nuxt 3', 'TypeScript', 'TailwindCSS', 'Pinia'],
    link: 'https://visionplus.id/',
  },
  {
    year: '2025',
    name: 'Dashboard CMS Vision+',
    madeAt: 'Vision+',
    client: '',
    duration: 'Nov 2023 – Present',
    stack: ['Nuxt 3', 'TypeScript', 'ApexCharts.js', 'TailwindCSS', 'Pinia'],
    link: '',
  },
  {
    year: '2024',
    name: 'Vision+ Version 1',
    madeAt: 'Vision+',
    client: '',
    duration: 'Mar 2023 – Nov 2023',
    stack: ['Vue 2', 'Vuex', 'Quasar', 'HTML5'],
    link: '',
  },

  // === Phire Studio ===
  {
    year: '2022',
    name: 'Route Sales Portal',
    madeAt: 'Phire Studio',
    client: 'Daikin Airconditioning Pte. Ltd',
    duration: 'Apr 2022 – Nov 2022',
    stack: ['Vue 2', 'Vuex', 'TypeScript', 'Node.js'],
    link: '',
  },
  {
    year: '2022',
    name: 'PhibaseSuite Revamp Distribution',
    madeAt: 'Phire Studio',
    client: '',
    duration: 'Nov 2021 – Nov 2022',
    stack: [
      'Vue 2',
      'Vuex',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Docker',
      'Kubernetes',
      'Skaffold',
    ],
    link: '',
  },
  {
    year: '2022',
    name: 'LE Feu Jewelry',
    madeAt: 'Phire Studio',
    client: 'LE Feu Jewelry',
    duration: 'Apr 2021 – Feb 2022',
    stack: [
      'Vue 2',
      'Vuex',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Docker',
      'Kubernetes',
      'Skaffold',
    ],
    link: '',
  },
  // === College ===
  {
    year: '2021',
    name: 'GIS for the Mount Burangrang Climbing Route via Legok Haji',
    madeAt: 'Thesis Project',
    duration: 'Mar 2021 - May 2021',
    stack: ['React Native', 'Firebase'],
    link: 'https://gitlab.com/diandriii/jalurburangrang',
  },
  {
    year: '2021',
    name: 'Wahana Citra Nabati',
    madeAt: 'Phire Studio',
    client: 'Wahana Citra Nabati',
    duration: 'Oct 2020 – Apr 2021',
    stack: [
      'Vue 2',
      'Vuex',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Docker',
      'Kubernetes',
      'Skaffold',
    ],
    link: '',
  },
  {
    year: '2021',
    name: 'ERP Printing',
    madeAt: 'Phire Studio',
    client: '',
    duration: 'Jul 2020 – Apr 2021',
    stack: [
      'Vue 2',
      'Vuex',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Docker',
      'Kubernetes',
      'Skaffold',
    ],
    link: '',
  },
  // === College ===
  {
    year: '2021',
    name: 'Doa Harian',
    madeAt: 'College Group Project',
    duration: 'Dec 2020 - Feb 2021',
    stack: ['React Native'],
    link: 'https://gitlab.com/diandriii/doaharian',
  },
  {
    year: '2020',
    name: 'HR Software',
    madeAt: 'Phire Studio as Internship',
    client: 'Phire Studio',
    duration: 'Mar 2020 – Sep 2020',
    stack: ['Laravel', 'MySQL'],
    link: 'https://gitlab.com/diandriii/hrsoftware',
  },
  {
    year: '2022',
    name: 'ERP Carton',
    madeAt: 'Phire Studio',
    client: 'Cartonindus Sumber Jaya',
    duration: 'Nov 2021 – Mar 2022',
    stack: ['HTML', 'PHP', 'JavaScript', 'MySQL', 'CSS'],
    link: '',
  },
  {
    year: '2020',
    name: 'Phire Studio ERP',
    madeAt: 'Phire Studio',
    client: '',
    duration: 'Sep 2019 – Feb 2020',
    stack: ['HTML', 'PHP', 'JavaScript', 'MySQL', 'CSS'],
    link: '',
  },

  // === College ===
  {
    year: '2019',
    name: 'Kedirgantaraan',
    madeAt: 'College Group Project',
    duration: 'Nov 2018 - Jan 2019',
    stack: ['HTML', 'PHP', 'CSS', 'JavaScript', 'MySQL'],
    link: 'https://gitlab.com/diandriii/kedirgantaraan',
  },

  // === Appschef ===
  {
    year: '2018',
    name: 'Mofiz',
    madeAt: 'Appschef',
    client: 'PT Bank CIMB Niaga Tbk',
    duration: 'Sep 2017 – May 2018',
    stack: ['Java', 'Spring', 'Oracle', 'Joget Workflow'],
    link: '',
  },
  {
    year: '2017',
    name: 'SPIL/NSI Project',
    madeAt: 'Appschef',
    client: 'PT. NYK-SPIL INDORORO',
    duration: 'Dec 2016 – May 2017',
    stack: ['Java Server Pages', 'MySQL', 'Java'],
    link: '',
  },

  // === Internship ===
  {
    year: '2015',
    name: 'Online System Prakerin',
    madeAt: 'PT Dirgantara Indonesia',
    client: '',
    duration: 'Jun 2015 – Aug 2015',
    stack: ['Java Server Pages', 'MySQL', 'Bootstrap'],
    link: '',
  },
]);

const sortedProjects = computed(() =>
  [...allProjects.value].sort((a, b) => Number(b.year) - Number(a.year))
);
</script>

<template>
  <section class="bg-dark-green text-off-white py-16 px-6 md:px-12">
    <div class="max-w-6xl mx-auto">
      <NuxtLink
        to="/"
        class="text-brownish font-medium hover:text-off-white transition mb-6 inline-block"
      >
        ← Back
      </NuxtLink>

      <h1 class="text-4xl md:text-5xl font-bold mb-10">All Projects</h1>

      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="border-b border-olive-green/30">
              <th class="py-3 pr-4 text-sand text-xl">Year</th>
              <th class="py-3 pr-4 text-sand text-xl">Project</th>
              <th class="py-3 pr-4 text-sand text-xl">Made at</th>
              <th class="py-3 pr-4 text-sand text-xl hidden md:table-cell">Client</th>
              <th class="py-3 pr-4 text-sand text-xl hidden md:table-cell">Built with</th>
              <th class="py-3 pr-4 text-sand text-xl hidden md:table-cell">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(p, i) in sortedProjects"
              :key="i"
              class="border-b border-olive-green/20 hover:bg-deep-olive-green/20 transition"
            >
              <td class="py-4 pr-4">{{ p.year }}</td>
              <td class="py-4 pr-4 font-medium">
                <a
                  v-if="p.link"
                  :href="p.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="transition-all duration-300 inline-flex items-center cursor-pointer flex-wrap"
                >
                  <span class="flex-1">{{ p.name }}</span>
                  <IconsArrowRightUp
                    class="w-4 h-4 ml-2 text-dark-green hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform"
                  />
                </a>
                <span v-else>{{ p.name }}</span>
              </td>
              <td class="py-4 pr-4">{{ p.madeAt }}</td>
              <td class="py-4 pr-4 hidden md:table-cell">{{ p.client || '-' }}</td>
              <td class="py-4 pr-4 hidden md:table-cell">
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in p.stack"
                    :key="tech"
                    class="px-3 py-1 rounded-full text-xs bg-olive-green hover:bg-[#4b6043] text-off-white"
                  >
                    {{ tech }}
                  </span>
                </div>
              </td>
              <td class="py-4 pr-4 text-sand/80 text-sm hidden md:table-cell">{{ p.duration }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
