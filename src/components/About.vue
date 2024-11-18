<template>
    <section>
      <div class="flex items-center justify-between flex-wrap">
        <div class="flex justify-center md:w-42 w-30 mx-auto mt-6 md:mt-0 md:mx-0">
          <img
            class="w-30 md:h-43 md:w-42"
            src="/src/img/flower.jpg"
            alt="Flower"
          />
        </div>
  
        <!-- Text on the Right -->
        <div class="mt-20 md:mb-32 text-center md:text-left md:flex-1">
          <h1 class="text-6xl md:text-8xl font-serif">
            Kätlin
            <span
              style="font-family: 'Nippo', sans-serif;"
              class="italic text-transparent pr-4 bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-700">
              Epelbaum
            </span>
          </h1>
          <p class="pt-6 text-2xl font-light">
            Delivering Premium Web Design and Development <br> Services to Boost Your Online Presence.
          </p>
  
          <!-- "About Me" Button -->
          <div class="mt-8">
            <button
              class="flex items-center justify-center text-white bg-pink-400 hover:bg-pink-500 py-3 px-6 rounded-full shadow-md transition-all duration-300"
              @click="scrollToAboutMe"
            >
              <span class="mr-2">About Me</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
  
      <!-- About Me Section -->
      <div id="about" class="mt-12 md:mt-8 flex justify-center pb-10">
        <div class="relative w-full md:w-2/3 lg:w-1/2 mt-6 md:mt-0 px-4 md:px-8">
            <div class="p-8 bg-white border border-gray-300 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <!-- Name Section -->
            <p class="uppercase tracking-widest text-xs font-semibold text-pink-500 mb-3">Kätlin Epelbaum</p>
            
            <!-- Main Title -->
            <h2 class="text-3xl md:text-4xl font-extrabold mb-6 text-gray-800">
                Your Partner in Bringing Your Web Design Vision to Life
            </h2>
            
            <!-- Personal Introduction -->
            <p class="text-gray-600 font-semibold leading-relaxed mb-6">
                Hi there! I'm Kätlin, a freelance web designer and developer passionate about combining creativity and technology. I treat every project as an opportunity to craft something truly special—something that reflects your unique brand and vision. My goal is to design websites that are not only visually stunning but also intuitive, user-friendly, and highly functional.
            </p>
            
            <!-- Client Collaboration -->
            <p class="text-gray-600 font-semibold leading-relaxed mb-6">
                Collaboration is at the heart of my process. I take the time to listen carefully to your needs, ask thoughtful questions, and ensure we're always aligned. Whether I'm designing a brand-new website or optimizing an existing one for better performance and search engine visibility, my focus is on delivering results that feel just right for you.
            </p>
            
            <!-- Simplified Process -->
            <p class="text-gray-600 font-semibold leading-relaxed mb-6">
                I believe in making the complex simple. If the technical jargon feels overwhelming, don't worry—I'm here to break things down into clear, easy-to-understand language. My commitment is to exceed your expectations, delivering a site that not only looks great but also functions flawlessly.
            </p>
            
            <!-- Call to Action -->
            <p class="text-gray-600 font-semibold leading-relaxed">
                Let's create something amazing together!
            </p>
            </div>
        </div>
    </div>
    </section>
  </template>
  
  <script>
  export default {
    methods: {
      scrollToAboutMe() {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }
  </script>
  