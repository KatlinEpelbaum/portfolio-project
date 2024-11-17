<template>
  <div class="flex justify-between items-center p-4">
    <h3 class="font-bold text-xl text-pink-400">Kätlin .E</h3>

    <div class="md:hidden flex items-center" ref="hamburger">
      <button @click="toggleMenu" class="text-pink-400 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 5h18M3 12h18M3 19h18" />
        </svg>
      </button>
    </div>

    <div class="hidden md:flex items-center space-x-8">
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
    </div>

    <div v-if="isMenuOpen" class="md:hidden fixed top-0 right-0 w-3/4 h-full bg-white bg-opacity-90 z-50 p-6" ref="menu">
      <div class="flex flex-col space-y-6">
        <a v-for="link in links" :key="link.name" :href="link.href" @click.stop="closeMenu" class="text-pink-400 text-lg hover:underline">
          {{ link.name }}
        </a>
        <router-link to="/contact" @click.stop="closeMenu" class="flex items-center text-pink-400 font-bold p-2 rounded-xl hover:underline">
          Let's talk
        </router-link>
      </div>
    </div>
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
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu(event) {
      event.stopPropagation();
      this.isMenuOpen = !this.isMenuOpen; 
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    closeMenuIfClickedOutside(event) {
      if (this.isMenuOpen && !this.$refs.menu.contains(event.target) && !this.$refs.hamburger.contains(event.target)) {
        this.isMenuOpen = false; 
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.closeMenuIfClickedOutside);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.closeMenuIfClickedOutside);
  },
};
</script>

<style scoped>
.md:hidden {
  display: block;
}

.fixed {
  background-color: rgba(255, 255, 255, 0.9);
}
</style>
