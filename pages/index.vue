<script setup lang="ts">
import { CodeBracketIcon, ServerIcon, WrenchIcon } from '@heroicons/vue/24/solid';
import type { Component } from 'vue';
import unnur from '@/assets/images/unnur.png';
import smkn11 from '@/assets/images/smkn11.jpeg';
import education from '@/assets/images/education.svg';
import school from '@/assets/images/school.svg';

const isOpen = ref(false);

const unlocked = ref(true);

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

//gatau ini dipake atau engga gimana nanti
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

const projects = ref([
  // {
  //   name: 'Vision+ TV',
  //   desc: 'Smart TV app for Vision+, built using Vue 3 & Nuxt 3 for seamless streaming experience.',
  //   madeAt: 'Vision+',
  //   duration: 'Jun 2025 – Present',
  //   stack: ['Vue 3', 'Nuxt 3', 'Tailwind'],
  //   image: '/images/vision-tv.png',
  //   link: '',
  // },
  // {
  //   name: 'CMS Vision+ TV',
  //   desc: 'Internal CMS for Vision+ content management system.',
  //   madeAt: 'Vision+',
  //   duration: 'Jun 2025 – Present',
  //   stack: ['Vue 3', 'Pinia', 'REST API'],
  //   image: '/images/cms-vision.png',
  //   link: '',
  // },
  {
    name: 'Smart TV Vision+',
    desc: 'Cross-platform Smart TV app using SolidJS, TypeScript, Tailwind, and Nano Store',
    madeAt: 'Vision+',
    duration: 'Jun 2024 – Present',
    stack: ['SolidJS', 'TypeScript', 'Tailwind', 'Nano Store'],
    link: 'https://tv.visionplus.id/',
  },
  {
    name: 'Business Support System Vision+',
    desc: 'Internal web system for managing Vision+ business operations and support processes.',
    madeAt: 'Vision+',
    duration: 'Nov 2023 – Present',
    stack: ['Nuxt 3', 'TypeScript', 'TailwindCSS', 'Pinia'],
    link: 'https://visionplus.id/',
  },
  {
    name: 'Dashboard CMS Vision+',
    desc: 'Data visualization and content management dashboard with real-time analytics.',
    madeAt: 'Vision+',
    duration: 'Nov 2023 – Present',
    stack: ['Nuxt 3', 'TypeScript', 'ApexCharts.js', 'TailwindCSS', 'Pinia'],
    link: '',
  },
]);

const desktopProjects = computed(() => projects.value.slice(0, 3));
const mobileProjects = computed(() => projects.value.slice(0, 2));

useHead({
  title: 'Dian Andriyani',
});

const words = [
  'Front-End Developer | Ex Full-Stack Web Developer',
  'Building smooth web experiences ✨',
];

const typingSpeed = 80;
const deletingSpeed = 40;
const pauseAfterTyped = 1200;
const loop = true;

const display = ref('');
let wordIndex = 0;
let charIndex = 0;
let deleting = false;
let timer: ReturnType<typeof setTimeout> | null = null;
let stopped = false;

function schedule(fn: () => void, delay: number) {
  if (stopped) return;
  if (timer) clearTimeout(timer);
  timer = setTimeout(fn, delay);
}

function startTyping() {
  if (words.length === 0) {
    display.value = '';
    return;
  }
  const currentWord = words[wordIndex % words.length] ?? '';

  if (!deleting) {
    if (charIndex < currentWord.length) {
      display.value = currentWord.slice(0, ++charIndex);
      schedule(startTyping, typingSpeed);
    } else {
      schedule(() => {
        deleting = true;
        schedule(startTyping, deletingSpeed);
      }, pauseAfterTyped);
    }
  } else {
    if (charIndex > 0) {
      display.value = currentWord.slice(0, --charIndex);
      schedule(startTyping, deletingSpeed);
    } else {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      if (!loop && wordIndex === 0) {
        stopped = true;
        return;
      }
      schedule(startTyping, typingSpeed);
    }
  }
}

const eduList = [
  {
    title: 'Bachelor’s Degree in Informatics Engineering',
    school: 'Bandung Nurtanio University (2017 - 2021)',
    extra:
      'Thesis: Geographic Information System for Mount Burangrang Hiking Trail via Legok Haji Route',
    img: unnur,
  },
  {
    title: 'Vocational High School in Software Engineering',
    school: 'SMK Negeri 11 Bandung (2013 - 2016)',
    img: smkn11,
  },
];

onMounted(() => {
  stopped = false;
  startTyping();
});

onBeforeUnmount(() => {
  stopped = true;
  if (timer) clearTimeout(timer);
});
</script>

<template>
  <div
    :class="[
      'h-screen snap-y snap-mandatory scroll-smooth font-inter bg-off-white',
      unlocked ? 'overflow-y-scroll scroll-pt-16' : 'overflow-hidden',
    ]"
  >
    <nav
      v-if="unlocked"
      class="bg-sand shadow fixed w-full top-0 z-20 h-16 flex items-center justify-between px-4 md:justify-center"
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

      <span v-if="activeSection !== 'hero'" class="md:hidden text-dark-green focus:outline-none">
        {{ activeSection.charAt(0).toUpperCase() + activeSection.slice(1) }}
      </span>

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
            href="#education"
            :class="unlocked ? navClass('education') : 'text-white pointer-events-none'"
            >Education</a
          >
        </li>
        <li>
          <a
            href="#experience"
            :class="unlocked ? navClass('experience') : 'text-white pointer-events-none'"
            >Experience</a
          >
        </li>
        <li>
          <a
            href="#projects"
            :class="unlocked ? navClass('projects') : 'text-white pointer-events-none'"
            >Projects</a
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
            <a href="#education" :class="navClass('education')" @click="isOpen = false"
              >Education</a
            >
          </li>
          <li>
            <a href="#experience" :class="navClass('experience')" @click="isOpen = false"
              >Experience</a
            >
          </li>
          <li>
            <a href="#projects" :class="navClass('projects')" @click="isOpen = false">Projects</a>
          </li>
        </ul>
      </aside>
    </transition>

    <section
      id="hero"
      class="h-screen snap-start flex flex-col items-center justify-center bg-olive-green text-off-white text-center"
    >
      <img src="/assets/images/me.png" alt="Foto Profil" class="h-1/2 mx-auto mb-6" />
      <h1 class="text-5xl font-bold mb-6">Dian Andriyani</h1>
      <h3 class="text-xl font-semibold mb-6 inline-flex items-center">
        <span>{{ display }}</span>
        <span class="ml-1 blinker">|</span>
      </h3>
      <button
        v-if="!unlocked"
        class="px-6 py-3 bg-dark-green rounded-lg shadow hover:opacity-90 transition"
        @click="unlockSections"
      >
        Uncover the Details
      </button>
    </section>

    <!-- section summary -->
    <section
      id="summary"
      :class="[
        'snap-start flex items-center justify-center px-10 md:px-0 bg-off-white transition-all duration-700 overflow-hidden',
        unlocked
          ? 'md:h-screen h-[calc(100vh-4rem)] opacity-100'
          : 'h-0 opacity-0 pointer-events-none',
      ]"
    >
      <div class="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div class="flex justify-center">
          <img
            src="/assets/images/me-summary.png"
            alt="Foto Dian"
            class="md:h-1/2 h-[300px] object-cover"
          />
        </div>

        <div class="text-left">
          <h2 class="md:text-3xl text-xl font-bold text-dark-green mb-6">Hey, I'm Dian!</h2>
          <p class="text-olive-green md:text-base text-sm text-justify">
            Front-End Developer with 6 years of hands-on experience and a sprinkle of full-stack
            background. I geek out over clean code, elegant UI, and seamless user experiences. With
            thousands of hours turning ideas into real web apps, I’m always curious, always
            learning, and always up for a new challenge—whether it’s integrating APIs, optimizing
            performance, or exploring the latest front-end tech. Let’s build something awesome
            together! 💻
          </p>

          <div class="flex items-center justify-start space-x-3 md:mt-5 mt-1 text-gray-600">
            <a
              href="https://github.com/dianandriyani"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-black transition"
              aria-label="GitHub"
            >
              <IconsGithub class="w-8 h-8" />
            </a>

            <a
              href="https://gitlab.com/diandriii"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-orange-600 transition"
              aria-label="GitLab"
            >
              <IconsGitlab />
            </a>

            <a
              href="mailto:dian.andri.das@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-blue-600 transition"
              aria-label="Email"
            >
              <IconsMail class="w-8 h-8" />
            </a>

            <!-- phone -->
            <a
              href="https://wa.me/6282120292073"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center text-gray-500 text-sm ml-4 hover:text-green-600 transition"
              aria-label="WhatsApp"
            >
              <IconsPhone class="w-8 h-8 mr-2 translate-y-[0.5px]" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- <section
      id="education"
      :class="[
        'snap-start flex items-center justify-center p-16 bg-olive-green transition-all duration-700 overflow-hidden',
        unlocked
          ? 'h-[calc(100vh-4rem)] md:h-screen opacity-100'
          : 'h-0 opacity-0 pointer-events-none',
      ]"
    >
      <div class="relative w-full h-full flex items-center justify-center overflow-hidden">
        <img
          :src="education"
          alt=""
          class="absolute top-0 right-0 w-[300px] md:w-[400px] opacity-80 pointer-events-none select-none"
        />
        <img
          :src="school"
          alt=""
          class="absolute bottom-0 left-0 w-[300px] md:w-[400px] opacity-80 pointer-events-none select-none"
        />
      </div>
      <div class="w-full items-center justify-items-center">
        <div class="flex flex-col pb-6 relative">
          <ul class="relative ml-6">
            <li
              v-for="(edu, i) in eduList"
              :key="i"
              class="relative flex items-start gap-0 md:gap-4 pb-0 md:pb-10 last:pb-0 before:absolute before:left-[0.4rem] md:before:left-[1.4rem] before:top-0 before:h-full before:w-[3px] before:bg-white/30 before:content-[''] before:block first:before:top-1/2 first:before:h-1/2 last:before:h-1/2"
            >
              <span
                class="absolute left-0 md:left-[1rem] top-1/2 w-4 h-4 -translate-y-1/2 rounded-full bg-off-white border-2 border-dark-green"
              />

              <div
                class="bg-dark-green text-off-white rounded-2xl shadow p-10 flex flex-wrap md:flex-nowrap items-center gap-1 md:gap-3 mt-1 mb-1 md:mt-4 md:mb-4 w-full"
              >
                <img :src="edu.img" class="w-16 h-16 object-contain rounded-md bg-off-white p-2" />
                <div>
                  <h3 class="text-xl md:text-2xl font-semibold">{{ edu.title }}</h3>
                  <p class="text-sand text-sm md:text-base">{{ edu.school }}</p>
                  <p v-if="edu.extra" class="text-sand text-sm md:text-base">{{ edu.extra }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section> -->

    <section
      id="education"
      :class="[
        'snap-start flex items-center justify-center p-16 bg-olive-green transition-all duration-700 overflow-hidden relative',
        unlocked
          ? 'h-[calc(100vh-4rem)] md:h-screen opacity-100'
          : 'h-0 opacity-0 pointer-events-none',
      ]"
    >
      <img
        :src="education"
        alt=""
        class="absolute top-0 right-0 w-[50px] md:w-[200px] m-10 opacity-80 pointer-events-none select-none"
      />
      <img
        :src="school"
        alt=""
        class="absolute bottom-0 left-0 w-[50px] md:w-[200px] m-10 opacity-80 pointer-events-none select-none"
      />

      <div class="relative z-10 w-full items-center justify-items-center flex flex-col">
        <div class="flex flex-col pb-6">
          <ul class="relative ml-6">
            <li
              v-for="(edu, i) in eduList"
              :key="i"
              class="relative flex items-start gap-0 md:gap-4 pb-0 md:pb-10 last:pb-0 before:absolute before:left-[0.4rem] md:before:left-[1.4rem] before:top-0 before:h-full before:w-[3px] before:bg-white/30 before:content-[''] before:block first:before:top-1/2 first:before:h-1/2 last:before:h-1/2"
            >
              <span
                class="absolute left-0 md:left-[1rem] top-1/2 w-4 h-4 -translate-y-1/2 rounded-full bg-off-white border-2 border-dark-green"
              />

              <div
                class="bg-dark-green text-off-white rounded-2xl shadow p-10 flex flex-wrap md:flex-nowrap items-center gap-1 md:gap-3 mt-1 mb-1 md:mt-4 md:mb-4 w-full"
              >
                <img :src="edu.img" class="w-16 h-16 object-contain rounded-md bg-off-white p-2" />
                <div>
                  <h3 class="text-xl md:text-2xl font-semibold">{{ edu.title }}</h3>
                  <p class="text-sand text-sm md:text-base">{{ edu.school }}</p>
                  <p v-if="edu.extra" class="text-sand text-sm md:text-base">{{ edu.extra }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section
      id="experience"
      :class="[
        'snap-start flex items-center justify-center p-10 bg-dark-green transition-all duration-700 overflow-hidden',
        unlocked
          ? 'h-[calc(100vh-4rem)] md:h-screen opacity-100'
          : 'h-0 opacity-0 pointer-events-none',
      ]"
    >
      <div class="w-full items-center justify-items-center">
        <div
          class="bg-dark-green rounded-xl shadow flex flex-col mb-6 max-h-[80vh] overflow-y-auto"
        >
          <ul class="flex-1 p-4 space-y-6">
            <li
              class="bg-olive-green text-off-white rounded-xl shadow p-6 cursor-pointer hover:scale-[1.02] hover:bg-[#4b6043]"
            >
              <a
                href="https://visionplus.id"
                target="_blank"
                rel="noopener noreferrer"
                class="block transition-all duration-300"
              >
                <div class="flex flex-col gap-3">
                  <div class="flex items-center justify-between">
                    <p class="text-sand text-sm font-medium">Mar 2023 — Present</p>
                    <h3 class="text-off-white font-semibold text-lg flex flex-row gap-2">
                      Frontend Developer · Vision+ <IconsArrowRightUp />
                    </h3>
                  </div>
                  <p class="text-sand text-base leading-relaxed">
                    Built and maintained multiple projects for the Vision+ web platform, ensuring
                    responsive design and optimal performance across devices, and Agile
                    collaboration to deliver reliable, production-ready solutions.
                  </p>
                  <div class="flex flex-wrap gap-2 pt-2">
                    <span class="bg-sand text-off-white text-sm px-3 py-1 rounded-full">
                      Vue.js
                    </span>
                    <span class="bg-sand text-off-white text-sm px-3 py-1 rounded-full">
                      Nuxt
                    </span>
                    <span class="bg-sand text-off-white text-sm px-3 py-1 rounded-full">
                      SolidJS
                    </span>
                    <span class="bg-sand text-off-white text-sm px-3 py-1 rounded-full">
                      TailwindCSS
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li
              class="bg-olive-green text-off-white rounded-xl shadow p-6 cursor-pointer hover:scale-[1.02] hover:bg-[#4b6043]"
            >
              <a
                href="https://phirestudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="block transition-all duration-300"
              >
                <div class="flex flex-col gap-3">
                  <div class="flex items-center justify-between">
                    <p class="text-sand text-sm font-medium">Sep 2019 - Dec 2022</p>
                    <h3 class="text-off-white font-semibold text-lg flex flex-row gap-2">
                      Web Developer · Phire Studio <IconsArrowRightUp />
                    </h3>
                  </div>
                  <p class="text-sand text-base leading-relaxed">
                    Developed and shipped multiple client and internal projects, combining strong
                    API design, responsive UI development, and Agile collaboration to deliver
                    reliable, production-ready solutions.
                  </p>
                  <div class="flex flex-wrap gap-2 pt-2">
                    <span class="bg-sand text-off-white text-sm px-3 py-1 rounded-full">
                      Vue.js
                    </span>
                    <span class="bg-sand text-off-white text-sm px-3 py-1 rounded-full">
                      Vuex
                    </span>
                    <span class="bg-sand text-off-white text-sm px-3 py-1 rounded-full"> PHP </span>
                    <span class="bg-sand text-off-white text-sm px-3 py-1 rounded-full"> PHP </span>
                  </div>
                </div>
              </a>
            </li>
            <li
              class="bg-olive-green text-off-white rounded-xl shadow p-6 cursor-pointer hover:scale-[1.02] hover:bg-[#4b6043]"
            >
              <a
                href="https://appschef.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="block transition-all duration-300"
              >
                <div class="flex flex-col gap-3">
                  <div class="flex items-center justify-between">
                    <p class="text-sand text-sm font-medium">Dec 2017 - Apr 2018</p>
                    <h3 class="text-off-white font-semibold text-lg flex flex-row gap-2">
                      Java Developer · Appschef <IconsArrowRightUp />
                    </h3>
                  </div>
                  <p class="text-sand text-base leading-relaxed">
                    Developed and shipped multiple client, responsive UI development, and Agile
                    collaboration to deliver reliable, production-ready solutions.
                  </p>
                  <div class="flex flex-wrap gap-2 pt-2">
                    <span class="bg-sand text-off-white text-sm px-3 py-1 rounded-full">
                      Java
                    </span>
                    <span class="bg-sand text-off-white text-sm px-3 py-1 rounded-full">
                      Spring
                    </span>
                    <span class="bg-sand text-off-white text-sm px-3 py-1 rounded-full">
                      Java Server Pages
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li
              class="bg-olive-green text-off-white rounded-xl shadow p-6 cursor-pointer hover:scale-[1.02] hover:bg-[#4b6043]"
            >
              <a
                href="https://www.indonesian-aerospace.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="block transition-all duration-300"
              >
                <div class="flex flex-col gap-3">
                  <div class="flex items-center justify-between">
                    <p class="text-sand text-sm font-medium">Jun 2015 - Aug 2015</p>
                    <h3 class="text-off-white font-semibold text-lg flex flex-row gap-2">
                      Programmer Internship · PT Dirgantara Indonesia <IconsArrowRightUp />
                    </h3>
                  </div>
                  <p class="text-sand text-base leading-relaxed">
                    Developed a web application that streamlined the process of managing and
                    printing proof certificates.
                  </p>
                  <div class="flex flex-wrap gap-2 pt-2">
                    <span class="bg-sand text-off-white text-sm px-3 py-1 rounded-full">
                      Java
                    </span>
                    <span class="bg-sand text-off-white text-sm px-3 py-1 rounded-full">
                      Java Server Pages
                    </span>
                    <span class="bg-sand text-off-white text-sm px-3 py-1 rounded-full">
                      MySQL
                    </span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section
      id="projects"
      :class="[
        'snap-start flex items-center justify-center p-16 text-dark-green bg-off-white transition-all duration-700 overflow-hidden',
        unlocked
          ? 'h-[calc(100vh-4rem)] md:h-screen opacity-100'
          : 'h-0 opacity-0 pointer-events-none',
      ]"
    >
      <div class="max-w-5xl mx-auto">
        <div class="md:block hidden space-y-16 mt-20">
          <div
            v-for="(project, i) in desktopProjects"
            :key="i"
            class="flex flex-col md:flex-row items-start md:items-center gap-6"
          >
            <div>
              <h3 class="text-2xl font-medium mb-1">
                <a
                  v-if="project.link"
                  :href="project.link"
                  target="_blank"
                  class="hover:text-sand transition"
                >
                  {{ project.name }} <IconsArrowRightUp />
                </a>
                <span v-else class="hover:text-sand transition">
                  {{ project.name }}
                </span>
              </h3>
              <p class="text-sand/80 mb-2">{{ project.desc }}</p>
              <p class="text-sand/70 text-sm italic mb-2">
                {{ project.madeAt }} • {{ project.duration }}
              </p>

              <div class="flex flex-wrap gap-2 mt-2">
                <span
                  v-for="tech in project.stack"
                  :key="tech"
                  class="bg-deep-olive-green text-off-white px-3 py-1 rounded-full text-xs"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>

          <div class="mt-12">
            <NuxtLink
              to="/projects"
              class="inline-flex items-center gap-2 text-sand hover:text-off-white transition font-medium"
            >
              View Full Project Archive →
            </NuxtLink>
          </div>
        </div>

        <div class="block md:hidden space-y-10">
          <div
            v-for="(project, i) in mobileProjects"
            :key="i"
            class="flex flex-col md:flex-row items-start md:items-center gap-6"
          >
            <div>
              <h3 class="text-2xl font-medium mb-1">
                <a :href="project.link" target="_blank" class="hover:text-sand transition">
                  {{ project.name }} <IconsArrowRightUp />
                </a>
              </h3>
              <p class="text-sand/80 mb-2">{{ project.desc }}</p>
              <p class="text-sand/70 text-sm italic mb-2">
                {{ project.madeAt }} • {{ project.duration }}
              </p>

              <div class="flex flex-wrap gap-2 mt-2">
                <span
                  v-for="tech in project.stack"
                  :key="tech"
                  class="bg-deep-olive-green text-off-white px-3 py-1 rounded-full text-xs"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>

          <div class="mt-12">
            <NuxtLink
              to="/projects"
              class="inline-flex items-center gap-2 text-sand hover:text-off-white transition font-medium"
            >
              View Full Project Archive →
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.blinker {
  display: inline-block;
  animation: blink 1s steps(2, start) infinite;
}
@keyframes blink {
  to {
    visibility: hidden;
  }
}
</style>
