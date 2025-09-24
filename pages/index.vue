<script setup lang="ts">
import { ref, onMounted } from "vue"

const unlocked = ref(false)

function unlockSections() {
  unlocked.value = true
  document.querySelector("#summary")?.scrollIntoView({ behavior: "smooth" })
}

const activeSection = ref("")

const navClass = (id: string) => {
  const base =
    "relative text-dark-green hover:text-brownish font-medium transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-brownish after:scale-x-0 after:origin-left after:transition-transform after:duration-300"
  const active = "text-brownish font-bold after:scale-x-100"
  return activeSection.value === id ? `${base} ${active}` : base
}

onMounted(() => {
  const sections = document.querySelectorAll("section[id]")
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { threshold: 0.6 }
  )
  sections.forEach((section) => observer.observe(section))
})
</script>

<template>
  <div
    :class="[
      'h-screen snap-y snap-mandatory scroll-smooth font-inter bg-off-white',
      unlocked ? 'overflow-y-scroll' : 'overflow-hidden'
    ]"
  >
    <nav v-if="unlocked" class="bg-sand shadow sticky top-0 z-10 h-16 flex items-center justify-center">
      <ul class="flex space-x-6">
        <li>
          <a
            href="#summary"
            :class="unlocked ? navClass('summary') : 'text-white pointer-events-none'"
          >Summary</a>
        </li>
        <li>
          <a
            href="#experience"
            :class="unlocked ? navClass('experience') : 'text-white pointer-events-none'"
          >Experience</a>
        </li>
        <li>
          <a
            href="#education"
            :class="unlocked ? navClass('education') : 'text-white pointer-events-none'"
          >Education</a>
        </li>
        <li>
          <a
            href="#skills"
            :class="unlocked ? navClass('skills') : 'text-white pointer-events-none'"
          >Skills</a>
        </li>
      </ul>
    </nav>

    <section
      id="hero"
      class="h-screen snap-start flex flex-col items-center justify-center bg-olive-green text-off-white text-center"
    >
      <img
        src="/assets/images/me.png"
        alt="Foto Profil"
        class="h-1/2 mx-auto mb-6"
      />
      <h1 class="text-5xl font-bold mb-6">Dian Andriyani</h1>
      <h3 class="text-xl font-semibold mb-6">Front-End Developer | Ex Full-Stack Web Developer</h3>
      <button
        v-if="!unlocked"
        @click="unlockSections"
        class="px-6 py-3 bg-dark-green rounded-lg shadow hover:opacity-90 transition"
      >
        Uncover the Details
      </button>
    </section>

    
    <section
      id="summary"
      :class="[
        'snap-start flex items-center justify-center p-10 bg-off-white transition-all duration-700 overflow-hidden',
        unlocked ? 'h-screen opacity-100' : 'h-0 opacity-0 pointer-events-none'
      ]"
    >
      <div class="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div class="flex justify-center">
          <img
            src="/assets/images/me-summary.png"
            alt="Foto Dian"
            class="h-1/2  object-cover"
          />
        </div>

        <div class="text-left mb-6">
          <h2 class="text-3xl font-bold text-dark-green mb-6">Hey, I'm Dian!</h2>
          <p class="text-olive-green text-lg text-justify">
            Front-End Developer with 6 years of hands-on experience and a sprinkle of full-stack background. I geek out over clean code, elegant UI, and seamless user experiences. With thousands of hours turning ideas into real web apps, I’m always curious, always learning, and always up for a new challenge—whether it’s integrating APIs, optimizing performance, or exploring the latest front-end tech. Let’s build something awesome together! 💻
          </p>
        </div>
      </div>
    </section>

    <section
      id="experience"
      :class="[
        'snap-start flex items-center justify-center p-16 bg-dark-green transition-all duration-700 overflow-hidden',
        unlocked ? 'h-screen opacity-100' : 'h-0 opacity-0 pointer-events-none'
      ]"
    >
      <div class="max-w-4xl w-full">
        <h2 class="text-5xl font-bold text-off-white mb-10 text-center">Experience</h2>

        <ul class="space-y-6">
          <li class="bg-olive-green text-off-white rounded-xl shadow p-6 flex items-center gap-6">
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

          <li class="bg-olive-green text-off-white rounded-xl shadow p-6 flex items-center gap-6">
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

          <li class="bg-olive-green text-off-white rounded-xl shadow p-6 flex items-center gap-6">
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

          <li class="bg-olive-green text-off-white rounded-xl shadow p-6 flex items-center gap-6">
            <img
              src="/assets/images/ptdi.jpeg"
              alt="Dirgantara Indonesia"
              class="w-16 h-16 object-contain rounded-md bg-off-white"
            />
            <div>
              <h3 class="text-xl font-semibold">Programmer Internship - PT Dirgantara Indonesia</h3>
              <p class="text-sand text-sm">Jun 2015 - Aug 2015</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- <section
      id="education"
      :class="[
        'snap-start flex items-center justify-center p-16 bg-olive-green transition-all duration-700 overflow-hidden',
        unlocked ? 'h-screen opacity-100' : 'h-0 opacity-0 pointer-events-none'
      ]"
    >
      <div class="max-w-3xl text-center">
        <h2 class="text-5xl font-bold text-off-white mb-6">Education</h2>
        
        <ul class="space-y-6">
          <li class="bg-dark-green text-off-white rounded-xl shadow p-6 flex items-center gap-6">
            <img
              src="/assets/images/vision.svg"
              alt="Vision+"
              class="w-16 h-16 object-contain rounded-md bg-black p-2"
            />
            <div>
              <h3 class="text-xl font-semibold">S1 Teknik Informatika</h3>
              <p class="text-sand text-sm">Universitas Nurtanio Bandung (2017 - 2021)</p>
            </div>
          </li>

          <li class="bg-dark-green text-off-white rounded-xl shadow p-6 flex items-center gap-6">
            <img
              src="/assets/images/phire.jpeg"
              alt="Phire Studio"
              class="w-16 h-16 object-contain rounded-md bg-off-white"
            />
            <div>
              <h3 class="text-xl font-semibold">Rekayasa Perangkat Lunak</h3>
              <p class="text-sand text-sm">SMK Negeri 11 Bandung (2013 - 2016)</p>
            </div>
          </li>
        </ul>
      </div>
    </section> -->

    <!-- <section
      id="education"
      :class="[
        'snap-start flex justify-center p-16 bg-olive-green transition-all duration-700 overflow-hidden gap-2',
        unlocked ? 'h-screen opacity-100' : 'h-0 opacity-0 pointer-events-none'
      ]"
    >
    <div class="max-w-4xl w-full">
        <h2 class="text-5xl font-bold text-off-white mb-10 text-center">Experience</h2>

        <ul class="space-y-6">
          <li class="bg-dark-green text-off-white rounded-xl shadow p-6 flex items-center gap-6">
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

          <li class="bg-dark-green text-off-white rounded-xl shadow p-6 flex items-center gap-6">
            <img
              src="/assets/images/phire.jpeg"
              alt="Phire Studio"
              class="w-16 h-16 object-contain rounded-md bg-off-white"
            />
            <div>
              <h3 class="text-xl font-semibold">Web Developer - Phire Studio</h3>
              <p class="text-sand text-sm">Sep 2019 - Dec 2022</p>
            </div>
          </li>

          <li class="bg-dark-green text-off-white rounded-xl shadow p-6 flex items-center gap-6">
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

          <li class="bg-dark-green text-off-white rounded-xl shadow p-6 flex items-center gap-6">
            <img
              src="/assets/images/ptdi.jpeg"
              alt="Dirgantara Indonesia"
              class="w-16 h-16 object-contain rounded-md bg-off-white"
            />
            <div>
              <h3 class="text-xl font-semibold">Programmer Internship - PT Dirgantara Indonesia</h3>
              <p class="text-sand text-sm">Jun 2015 - Aug 2015</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="max-w-4xl w-full">

        <h2 class="text-5xl font-bold text-off-white mb-10 text-center">Education</h2>

        <ul class="space-y-6">
          <li class="bg-dark-green text-off-white rounded-xl shadow p-6 flex items-center gap-6">
            <img
              src="/assets/images/vision.svg"
              alt="Vision+"
              class="w-16 h-16 object-contain rounded-md bg-black p-2"
            />
            <div>
              <h3 class="text-xl font-semibold">S1 Teknik Informatika</h3>
              <p class="text-sand text-sm">Universitas Nurtanio Bandung (2017 - 2021)</p>
            </div>
          </li>

          <li class="bg-dark-green text-off-white rounded-xl shadow p-6 flex items-center gap-6">
            <img
              src="/assets/images/phire.jpeg"
              alt="Phire Studio"
              class="w-16 h-16 object-contain rounded-md bg-off-white"
            />
            <div>
              <h3 class="text-xl font-semibold">Rekayasa Perangkat Lunak</h3>
              <p class="text-sand text-sm">SMK Negeri 11 Bandung (2013 - 2016)</p>
            </div>
          </li>
        </ul>
      </div>
    </section> -->

    <section
  id="education"
  :class="[
    'snap-start flex justify-center p-16 bg-olive-green transition-all duration-700 overflow-hidden gap-8',
    unlocked ? 'h-screen opacity-100' : 'h-0 opacity-0 pointer-events-none'
  ]"
>
  <div class="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
    
    <div class="flex flex-col justify-center h-full space-y-6 overflow-y-auto pr-2">
      <h2 class="text-5xl font-bold text-off-white mb-6">Experience</h2>

      <ul class="space-y-4">
        <li class="bg-dark-green text-off-white rounded-xl shadow p-6 flex items-start gap-6">
          <img src="/assets/images/vision.svg" alt="Vision+" class="w-16 h-16 object-contain rounded-md bg-black p-2" />
          <div>
            <h3 class="text-xl font-semibold">Frontend Developer - Vision+</h3>
            <p class="text-sand text-sm">Mar 2023 - Present</p>
          </div>
        </li>

        <li class="bg-dark-green text-off-white rounded-xl shadow p-6 flex items-start gap-6">
          <img src="/assets/images/phire.jpeg" alt="Phire Studio" class="w-16 h-16 object-contain rounded-md bg-off-white" />
          <div>
            <h3 class="text-xl font-semibold">Web Developer - Phire Studio</h3>
            <p class="text-sand text-sm">Sep 2019 - Dec 2022</p>
          </div>
        </li>

        <li class="bg-dark-green text-off-white rounded-xl shadow p-6 flex items-start gap-6">
          <img src="/assets/images/phire.jpeg" alt="Phire Studio" class="w-16 h-16 object-contain rounded-md bg-off-white" />
          <div>
            <h3 class="text-xl font-semibold">Web Developer - Phire Studio</h3>
            <p class="text-sand text-sm">Sep 2019 - Dec 2022</p>
          </div>
        </li>

      </ul>
    </div>

    <div class="flex flex-col justify-center h-full space-y-6">
      <h2 class="text-5xl font-bold text-off-white mb-6 text-center md:text-left">Education</h2>

       <ul class="space-y-6">
          <li class="bg-dark-green text-off-white rounded-xl shadow p-6 flex items-center gap-6">
            <img
              src="/assets/images/vision.svg"
              alt="Vision+"
              class="w-16 h-16 object-contain rounded-md bg-black p-2"
            />
            <div>
              <h3 class="text-xl font-semibold">S1 Teknik Informatika</h3>
              <p class="text-sand text-sm">Universitas Nurtanio Bandung (2017 - 2021)</p>
            </div>
          </li>

          <li class="bg-dark-green text-off-white rounded-xl shadow p-6 flex items-center gap-6">
            <img
              src="/assets/images/phire.jpeg"
              alt="Phire Studio"
              class="w-16 h-16 object-contain rounded-md bg-off-white"
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
        unlocked ? 'h-screen opacity-100' : 'h-0 opacity-0 pointer-events-none'
      ]"
    >
      <div class="max-w-3xl text-center">
        <h2 class="text-5xl font-bold text-dark-green mb-6">Skills</h2>
        <div class="flex flex-wrap justify-center gap-3">
          <span class="bg-olive-green text-off-white px-4 py-2 rounded-full">Vue.js</span>
          <span class="bg-olive-green text-off-white px-4 py-2 rounded-full">Nuxt</span>
          <span class="bg-dark-green text-off-white px-4 py-2 rounded-full">JavaScript</span>
          <span class="bg-dark-green text-off-white px-4 py-2 rounded-full">Tailwind CSS</span>
        </div>
      </div>
    </section>
  </div>
</template>
