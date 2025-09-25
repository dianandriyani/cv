<script setup lang="ts">
import { CodeBracketIcon, ServerIcon, WrenchIcon } from '@heroicons/vue/24/solid';
import type { Component } from 'vue';

const isOpen = ref(false);

const unlocked = ref(false);

function unlockSections() {
  unlocked.value = true;
  document.querySelector('#summary')?.scrollIntoView({ behavior: 'smooth' });
}

const activeSection = ref('');

const navClass = (id: string) => {
  const base =
    "relative text-dark-green hover:text-brownish font-medium transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-brownish after:scale-x-0 after:origin-left after:transition-transform after:duration-300";
  const active = 'text-brownish font-bold after:scale-x-100';
  return activeSection.value === id ? `${base} ${active}` : base;
};

onMounted(() => {
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    { threshold: 0.6 }
  );
  sections.forEach((section) => observer.observe(section));
});

interface Skill {
  category: string;
  icon: Component;
  items: string[];
}

const skills: Skill[] = [
  {
    category: 'Frontend',
    icon: CodeBracketIcon,
    items: ['Vue.js', 'Nuxt', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    icon: ServerIcon,
    items: ['Node.js', 'Express', 'REST API'],
  },
  {
    category: 'Tools',
    icon: WrenchIcon,
    items: ['Git/GitHub', 'VS Code', 'Figma'],
  },
];

useHead({
  title: 'Dian Andriyani',
});
</script>

<template>
  <div
    :class="[
      'h-screen snap-y snap-mandatory scroll-smooth font-inter bg-off-white',
      unlocked ? 'overflow-y-scroll' : 'overflow-hidden',
    ]"
  >
    <nav
      v-if="unlocked"
      class="bg-sand shadow sticky top-0 z-20 h-16 flex items-center justify-between px-4 md:justify-center"
    >
      <button class="md:hidden text-dark-green focus:outline-none" @click="isOpen = !isOpen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <ul class="hidden md:flex space-x-6">
        <li>
          <a
            href="#summary"
            :class="unlocked ? navClass('summary') : 'text-white pointer-events-none'"
            >Summary</a
          >
        </li>
        <li>
          <a
            href="#experience-education"
            :class="unlocked ? navClass('experience-education') : 'text-white pointer-events-none'"
            >Experience & Education</a
          >
        </li>
        <li>
          <a
            href="#skills"
            :class="unlocked ? navClass('skills') : 'text-white pointer-events-none'"
            >Skills</a
          >
        </li>
      </ul>
    </nav>

    <transition name="slide">
      <aside v-if="isOpen" class="fixed inset-y-0 left-0 w-64 bg-sand shadow-lg z-30 p-6 md:hidden">
        <button class="absolute top-4 right-4 text-dark-green" @click="isOpen = false">✕</button>
        <ul class="space-y-6 mt-10">
          <li>
            <a href="#summary" :class="navClass('summary')" @click="isOpen = false">Summary</a>
          </li>
          <li>
            <a
              href="#experience-education"
              :class="navClass('experience-education')"
              @click="isOpen = false"
              >Experience & Education</a
            >
          </li>
          <li><a href="#skills" :class="navClass('skills')" @click="isOpen = false">Skills</a></li>
        </ul>
      </aside>
    </transition>

    <section
      id="hero"
      class="h-screen snap-start flex flex-col items-center justify-center bg-olive-green text-off-white text-center"
    >
      <img src="/assets/images/me.png" alt="Foto Profil" class="h-1/2 mx-auto mb-6" />
      <h1 class="text-5xl font-bold mb-6">Dian Andriyani</h1>
      <h3 class="text-xl font-semibold mb-6">Front-End Developer | Ex Full-Stack Web Developer</h3>
      <button
        v-if="!unlocked"
        class="px-6 py-3 bg-dark-green rounded-lg shadow hover:opacity-90 transition"
        @click="unlockSections"
      >
        Uncover the Details
      </button>
    </section>

    <section
      id="summary"
      :class="[
        'snap-start flex items-center justify-center p-10 bg-off-white transition-all duration-700 overflow-hidden',
        unlocked ? 'h-screen opacity-100' : 'h-0 opacity-0 pointer-events-none',
      ]"
    >
      <div class="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div class="flex justify-center">
          <img
            src="/assets/images/me-summary.png"
            alt="Foto Dian"
            class="md:h-1/2 h:1/4 object-cover"
          />
        </div>

        <div class="text-left mb-6 pb-12">
          <h2 class="text-3xl font-bold text-dark-green mb-6">Hey, I'm Dian!</h2>
          <p class="text-olive-green text-lg text-justify">
            Front-End Developer with 6 years of hands-on experience and a sprinkle of full-stack
            background. I geek out over clean code, elegant UI, and seamless user experiences. With
            thousands of hours turning ideas into real web apps, I’m always curious, always
            learning, and always up for a new challenge—whether it’s integrating APIs, optimizing
            performance, or exploring the latest front-end tech. Let’s build something awesome
            together! 💻
          </p>
        </div>
      </div>
    </section>

    <section
      id="experience-education"
      :class="[
        'snap-start flex items-center justify-center p-16 bg-olive-green transition-all duration-700 overflow-hidden',
        unlocked ? 'h-screen opacity-100' : 'h-0 opacity-0 pointer-events-none',
      ]"
    >
      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div class="bg-dark-green rounded-xl shadow flex flex-col h-80 md:h-[32rem] pb-6">
          <h2 class="text-2xl font-bold text-off-white text-center px-4 py-3">Experience</h2>

          <ul class="flex-1 overflow-y-auto p-4 space-y-4">
            <li class="bg-olive-green text-off-white rounded-xl shadow p-3 flex items-center gap-3">
              <img
                src="/assets/images/vision.svg"
                alt="Vision+"
                class="w-16 h-16 object-contain rounded-md bg-black p-2"
              />
              <div>
                <h3 class="text-xl font-semibold">Frontend Developer - Vision+</h3>
                <p class="text-sand text-sm">Mar 2023 - Present</p>
              </div>
            </li>

            <li class="bg-olive-green text-off-white rounded-xl shadow p-3 flex items-center gap-3">
              <img
                src="/assets/images/phire.jpeg"
                alt="Phire Studio"
                class="w-16 h-16 object-contain rounded-md bg-off-white p-1"
              />
              <div>
                <h3 class="text-xl font-semibold">Web Developer - Phire Studio</h3>
                <p class="text-sand text-sm">Sep 2019 - Dec 2022</p>
              </div>
            </li>

            <li class="bg-olive-green text-off-white rounded-xl shadow p-3 flex items-center gap-3">
              <img
                src="/assets/images/appschef.jpeg"
                alt="Appschef"
                class="w-16 h-16 object-contain rounded-md bg-off-white"
              />
              <div>
                <h3 class="text-xl font-semibold">Java Developer - Appschef</h3>
                <p class="text-sand text-sm">Dec 2016 - May 2018</p>
              </div>
            </li>

            <li class="bg-olive-green text-off-white rounded-xl shadow p-3 flex items-center gap-3">
              <img
                src="/assets/images/ptdi.jpeg"
                alt="Dirgantara Indonesia"
                class="w-16 h-16 object-contain rounded-md bg-off-white"
              />
              <div>
                <h3 class="text-xl font-semibold">
                  Programmer Internship - PT Dirgantara Indonesia
                </h3>
                <p class="text-sand text-sm">Jun 2015 - Aug 2015</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="bg-dark-green rounded-xl shadow flex flex-col h-80 md:h-[32rem] pb-6">
          <h2 class="text-2xl font-bold text-center text-off-white px-4 py-3">Education</h2>

          <ul class="flex-1 overflow-y-auto p-4 space-y-4">
            <li class="bg-olive-green text-off-white rounded-xl shadow p-3 flex items-center gap-3">
              <img
                src="/assets/images/unnur.png"
                alt="S1"
                class="w-16 h-16 object-contain rounded-md bg-off-white p-2"
              />
              <div>
                <h3 class="text-xl font-semibold">S1 Teknik Informatika</h3>
                <p class="text-sand text-sm">Universitas Nurtanio Bandung (2017 - 2021)</p>
              </div>
            </li>

            <li class="bg-olive-green text-off-white rounded-xl shadow p-3 flex items-center gap-3">
              <img
                src="/assets/images/smkn11.jpeg"
                alt="SMK"
                class="w-16 h-16 object-contain rounded-md bg-off-white p-1"
              />
              <div>
                <h3 class="text-xl font-semibold">Rekayasa Perangkat Lunak</h3>
                <p class="text-sand text-sm">SMK Negeri 11 Bandung (2013 - 2016)</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section
      id="skills"
      :class="[
        'snap-start flex items-center justify-center p-16 bg-sand transition-all duration-700 overflow-hidden',
        unlocked ? 'h-screen opacity-100' : 'h-0 opacity-0 pointer-events-none',
      ]"
    >
      <div class="max-w-3xl text-center">
        <h2 class="text-5xl font-bold text-dark-green mb-10">Skills</h2>

        <div class="space-y-6">
          <div v-for="(skill, index) in skills" :key="index" class="text-left">
            <h3 class="text-2xl font-semibold text-olive-green mb-3 flex flex-row">
              <component :is="skill.icon" class="w-5 h-5 mt-3 mr-2" />
              {{ skill.category }}
            </h3>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="(item, idx) in skill.items"
                :key="idx"
                class="bg-olive-green text-off-white px-4 py-2 rounded-full"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
