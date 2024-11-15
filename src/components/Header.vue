<template>
    <div class="flex justify-center mt-4">
      <nav class="flex flex-col md:flex-row items-center text-cyan-700 space-y-4 md:space-y-0 md:space-x-8 p-2 bg-opacity-60 border-[#c38aba] border bg-white rounded-lg">
        
        <h3 class="font-bold text-xl text-pink-400">Kätlin .E</h3>
        
        <div class="flex flex-wrap items-center space-x-8">
          <a v-for="link in links" :key="link.name" :href="link.href" class="hover:underline hover:text-pink-400">
            {{ link.name }}
          </a>
        </div>
        
        <router-link to="/contact" class="flex items-center text-pink-400 font-bold p-2 rounded-xl hover:underline">
          Let's talk
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </router-link>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Header',
    data() {
      return {
        links: [
          { name: 'Services', href: '#services' },
          { name: 'Work', href: '#work' },
          { name: 'About', href: '#about' },
          { name: 'Blog', href: '#blog' },
          { name: 'Pages', href: '#pages' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add additional custom styles if needed */
  </style>
  