<template>
  <section>
    <div class="flex items-center justify-between flex-wrap md:flex-row-reverse">
      <div class="mt-6 md:mt-0 text-center md:text-left md:flex-1 px-4 md:px-8 relative">
        <h1 class="text-6xl md:text-8xl font-serif">
          Kätlin
          <span
            style="font-family: 'Pilcrow Rounded', sans-serif;"
            class="italic text-transparent pr-4 bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-700">
            Epelbaum
          </span>
        </h1>
        <p class="pt-6 text-2xl font-light">
          Delivering Premium Web Design and Development <br> Services to Boost Your Online Presence.
        </p>

        <div class="mt-8">
          <button
            class="flex items-center justify-center text-white bg-pink-400 hover:bg-pink-500 py-3 px-6 rounded-full shadow-md transition-all duration-300"
            @click="toggleAboutMe"
          >
            <span class="mr-2">About Me</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      <div class="flex justify-center md:w-1/2 mx-auto mt-6 md:mt-10 md:mx-0 relative z-10">
        <img
          class="w-32 sm:w-40 md:w-60 lg:w-72 rounded-lg shadow-lg transform rotate-3 transition-all duration-500 hover:scale-110"
          src="/src/img/pebbles.webp"
          alt="Pebbles"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-pink-300 to-cyan-500 opacity-40 rounded-full blur-xl -z-10"></div>
      </div>
    </div>

    <div v-if="showAboutMe" id="about" class="mt-12 md:mt-8 flex justify-center pb-10 transition-all duration-500 ease-in-out">
      <div class="relative w-full md:w-2/3 lg:w-1/2 mt-6 md:mt-0 px-4 md:px-8">
        <div class="p-8 bg-white border border-gray-300 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
          <p class="uppercase tracking-widest text-xs font-semibold text-pink-500 mb-3">Kätlin Epelbaum</p>

          <h2 class="text-3xl md:text-4xl font-extrabold mb-6 text-gray-800">
            Your Partner in Bringing Your Web Design Vision to Life
          </h2>

          <p class="text-gray-600 font-semibold leading-relaxed mb-6">
            Hi there! I'm Kätlin, a freelance web designer and developer passionate about combining creativity and technology. I treat every project as an opportunity to craft something truly special—something that reflects your unique brand and vision. My goal is to design websites that are not only visually stunning but also intuitive, user-friendly, and highly functional.
          </p>

          <p class="text-gray-600 font-semibold leading-relaxed mb-6">
            Collaboration is at the heart of my process. I take the time to listen carefully to your needs, ask thoughtful questions, and ensure we're always aligned. Whether I'm designing a brand-new website or optimizing an existing one for better performance and search engine visibility, my focus is on delivering results that feel just right for you.
          </p>

          <p class="text-gray-600 font-semibold leading-relaxed mb-6">
            I believe in making the complex simple. If the technical jargon feels overwhelming, don't worry—I'm here to break things down into clear, easy-to-understand language. My commitment is to exceed your expectations, delivering a site that not only looks great but also functions flawlessly.
          </p>

          <p class="text-gray-600 font-semibold leading-relaxed">
            Let's create something amazing together!
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="text-white flex flex-col justify-between bg-gradient-to-b from-white to-pink-300">
    <div class="text-center py-20 px-6">
      <p class="uppercase tracking-widest text-slate-800 text-xl">Project in Mind?</p>
      <h1 class="text-4xl md:text-7xl font-semibold mt-4 text-slate-900">
        Let's make your <br>
        <span class="text-pink-400 italic">Website</span> shine
      </h1>
      <p class="mt-6 text-xl text-slate-700 max-w-xl mx-auto pb-20">
        Premium web design, Webflow, and SEO services to help your business stand out and make an impact.
      </p>
      <router-link
        to="/contact"
        class="mt-8 px-8 py-4 bg-pink-400 hover:bg-pink-500 font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        Get In Touch
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showAboutMe: false, 
    };
  },
  methods: {
    toggleAboutMe() {
      this.showAboutMe = !this.showAboutMe; 
    },
  },
};
</script>

<style scoped>
#about {
  transition: opacity 0.5s ease, transform 0.3s ease;
}
</style>
