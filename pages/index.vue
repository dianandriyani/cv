<script setup lang="ts">
import { CodeBracketIcon, ServerIcon, WrenchIcon } from '@heroicons/vue/24/solid';
import type { Component } from 'vue';
import unnur from '@/assets/images/unnur.png';
import smkn11 from '@/assets/images/smkn11.jpeg';

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
    title: 'S1 Teknik Informatika',
    school: 'Universitas Nurtanio Bandung (2017 - 2021)',
    extra: 'Skripsi: Sistem Informasi Geografis Jalur Pendakian Gunung Burangrang via Legok Haji',
    img: unnur,
  },
  {
    title: 'Rekayasa Perangkat Lunak',
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
            <a href="#education" :class="navClass('education')" @click="isOpen = false"
              >Education</a
            >
          </li>
          <li>
            <a href="#experience" :class="navClass('experience')" @click="isOpen = false"
              >Experience</a
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

    <section
      id="education"
      :class="[
        'snap-start flex items-center justify-center p-16 bg-olive-green transition-all duration-700 overflow-hidden',
        unlocked
          ? 'h-[calc(100vh-4rem)] md:h-screen opacity-100'
          : 'h-0 opacity-0 pointer-events-none',
      ]"
    >
      <div class="w-full items-center justify-items-center">
        <div class="flex flex-col pb-6 relative">
          <ul class="relative ml-6">
            <li
              v-for="(edu, i) in eduList"
              :key="i"
              class="relative flex items-start gap-0 md:gap-4 pb-pb-10 last:pb-0 before:absolute before:left-[0.4rem] md:before:left-[1.4rem] before:top-0 before:h-full before:w-[3px] before:bg-white/30 before:content-[''] before:block first:before:top-1/2 first:before:h-1/2 last:before:h-1/2"
            >
              <span
                class="absolute left-0 md:left-[1rem] top-1/2 w-4 h-4 -translate-y-1/2 rounded-full bg-off-white border-2 border-dark-green"
              />

              <div
                class="bg-dark-green text-off-white rounded-2xl shadow p-10 flex flex-wrap md:flex-nowrap items-center gap-3 mt-4 mb-4 w-full"
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
            <li class="bg-olive-green text-off-white rounded-xl shadow p-6">
              <div class="flex flex-col gap-3">
                <div class="flex items-center justify-between">
                  <p class="text-sand text-sm font-medium">Mar 2023 — Present</p>
                  <h3 class="text-off-white font-semibold text-lg">Frontend Developer · Vision+</h3>
                </div>
                <p class="text-sand text-base leading-relaxed">
                  Responsible for building and maintaining the Vision+ web application, focusing on
                  responsive UI and optimal performance across devices.
                </p>
                <div class="flex flex-wrap gap-2 pt-2">
                  <span class="bg-sand text-off-white text-sm px-3 py-1 rounded-full">
                    Vue.js
                  </span>
                  <span class="bg-sand text-off-white text-sm px-3 py-1 rounded-full"> Nuxt </span>
                  <span class="bg-sand text-off-white text-sm px-3 py-1 rounded-full">
                    TailwindCSS
                  </span>
                </div>
              </div>
            </li>
            <li class="bg-olive-green text-off-white rounded-xl shadow p-6">
              <div class="flex flex-col gap-3">
                <div class="flex items-center justify-between">
                  <p class="text-sand text-sm font-medium">Sep 2019 - Dec 2022</p>
                  <h3 class="text-off-white font-semibold text-lg">Web Developer · Phire Studio</h3>
                </div>
                <p class="text-sand text-base leading-relaxed">Lorem ipsum</p>
                <div class="flex flex-wrap gap-2 pt-2">
                  <span class="bg-sand text-off-white text-sm px-3 py-1 rounded-full">
                    Vue.js
                  </span>
                  <span class="bg-sand text-off-white text-sm px-3 py-1 rounded-full"> Vuex </span>
                  <span class="bg-sand text-off-white text-sm px-3 py-1 rounded-full"> PHP </span>
                </div>
              </div>
            </li>
            <li class="bg-olive-green text-off-white rounded-xl shadow p-6">
              <div class="flex flex-col gap-3">
                <div class="flex items-center justify-between">
                  <p class="text-sand text-sm font-medium">Sep 2019 - Dec 2022</p>
                  <h3 class="text-off-white font-semibold text-lg">Java Developer · Appschef</h3>
                </div>
                <p class="text-sand text-base leading-relaxed">Lorem ipsum</p>
                <div class="flex flex-wrap gap-2 pt-2">
                  <span class="bg-sand text-off-white text-sm px-3 py-1 rounded-full"> Java </span>
                  <span class="bg-sand text-off-white text-sm px-3 py-1 rounded-full">
                    Spring
                  </span>
                  <span class="bg-sand text-off-white text-sm px-3 py-1 rounded-full">
                    Java Server Pages
                  </span>
                </div>
              </div>
            </li>
            <li class="bg-olive-green text-off-white rounded-xl shadow p-6">
              <div class="flex flex-col gap-3">
                <div class="flex items-center justify-between">
                  <p class="text-sand text-sm font-medium">Jun 2015 - Aug 2015</p>
                  <h3 class="text-off-white font-semibold text-lg">
                    Programmer Internship · PT Dirgantara Indonesia
                  </h3>
                </div>
                <p class="text-sand text-base leading-relaxed">Lorem ipsum</p>
                <div class="flex flex-wrap gap-2 pt-2">
                  <span class="bg-sand text-off-white text-sm px-3 py-1 rounded-full"> Java </span>
                  <span class="bg-sand text-off-white text-sm px-3 py-1 rounded-full">
                    Java Server Pages
                  </span>
                  <span class="bg-sand text-off-white text-sm px-3 py-1 rounded-full"> MySQL </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section
      id="skills"
      :class="[
        'snap-start flex items-center justify-center p-16 bg-off-white transition-all duration-700 overflow-hidden',
        unlocked
          ? 'h-[calc(100vh-4rem)] md:h-screen opacity-100'
          : 'h-0 opacity-0 pointer-events-none',
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
