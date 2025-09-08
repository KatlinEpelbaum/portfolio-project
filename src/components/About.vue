<template>
  <section>
    <div class="flex items-center justify-between flex-wrap md:flex-row">
      <div class="flex justify-center md:w-1/2 mx-auto mt-6 md:mt-10 md:mx-0 relative z-10">
        <img
          class="w-32 sm:w-40 md:w-60 lg:w-72 rounded-lg shadow-lg transform rotate-3 transition-all duration-500 hover:scale-110"
          src="/src/assets/pebbles.webp"
          alt="Pebbles"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-pink-300 to-cyan-500 opacity-40 rounded-full blur-xl -z-10"></div>
      </div>
      <div class="mt-6 md:mt-0 text-center md:text-left md:flex-1 px-4 md:px-8 relative">
        <h1 class="text-6xl md:text-8xl" >
          Kätlin
          <span
            class="italic pr-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-700">
            Epelbaum
          </span>
        </h1>
        <p class="pt-6 text-3xl font-light pb-6">
          Premium Web Design & Development Services<br>To Boost Your Online Presence.
        </p>
        <div class="space-y-4 text-gray-700">
            <p class="text-lg leading-relaxed">
              I transform ideas into stunning, functional websites that capture your brand's essence. With a perfect blend of creativity and technical expertise, I create digital experiences that leave lasting impressions.
            </p>
            <p class="text-lg leading-relaxed">
              Every project is a journey we take together. Through thoughtful collaboration and clear communication, I ensure your vision comes to life exactly as you imagined – or even better.
            </p>
          </div>

          <div class="pt-6 space-y-8">
            <p class="text-xl font-light">
              Download my Curriculum Vitae below:
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="public/Katlin CV.pdf"
                download="Curriculum-Vitae.pdf"
                class="px-8 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 inline-block text-center"
              >
                Download CV
              </a>
              <button 
                @click="toggleAboutMe"
                class="px-8 py-3 bg-slate-50 text-pink-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                Me as a person
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  class="h-5 w-5 transform transition-transform duration-300"
                  :class="{ 'rotate-180': showAboutMe }"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
        </div>
      </div>
    </div>


    <div v-if="showAboutMe" id="about" class="mt-12 md:mt-8 flex justify-center pb-10 transition-all duration-500 ease-in-out">
      <div class="relative w-full md:w-2/3 lg:w-1/2 mt-6 md:mt-0 px-4 md:px-8">
        <div class="p-8 bg-white border border-gray-300 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
          <p class="uppercase tracking-widest text-xl font-bold text-pink-500 mb-3">Kätlin Epelbaum</p>

          <p class="text-gray-600 font-semibold leading-relaxed mb-6">
            I’m from Kuressaare, where I’m currently studying to become a junior software developer at Kuressaare Ametikool. The world of IT has always fascinated me. I remember watching my brother study technology, which deepened my interest and inspired me to pursue this path.
          </p>
          <p class="text-gray-600 font-semibold leading-relaxed mb-6">
            In my free time, I’m a very creative person and love to express myself through various activities. Fantasy books are a huge passion of mine—magical worlds, adventures, and unique characters constantly inspire me. I also enjoy watching movies with my friends, whether they’re dramas, thrillers, or comedies. Movie nights always bring us together and spark interesting conversations.          </p>

          <p class="text-gray-600 font-semibold leading-relaxed mb-6">
            My personal style is ever-changing, though I often lean toward darker tones. I frequently dye my hair as a way to express myself—it’s one of my favorite forms of self-expression. I love experimenting with my appearance, embracing styles that reflect my mood and creativity.          </p>
          <p class="text-gray-600 font-semibold leading-relaxed">
            A special part of my daily life is my cat, Pebbles. She’s black, independent, and incredibly adorable. Cats have always been close to my heart—their calm presence and funny little quirks make every day better.          </p>
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