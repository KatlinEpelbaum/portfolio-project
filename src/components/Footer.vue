<template>
    <footer class="bg-gray-50 py-10 text-gray-600 text-sm">
      <div class="container mx-auto px-6 md:px-12 flex flex-wrap justify-between items-start space-y-8 md:space-y-0">
        <div class="w-full md:w-1/3 space-y-6">
          <h3 class="font-bold text-2xl text-pink-500">Kätlin .E</h3>
          <ul class="space-y-4">
            <li>
              <a href="https://www.facebook.com/katlin.epelbaum/" class="flex items-center space-x-3 text-gray-500 hover:text-pink-500 transition">
                <i class="fab fa-facebook fa-lg"></i>
                <span class="text-base">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/KatlinEpelbaum" class="flex items-center space-x-3 text-gray-500 hover:text-pink-500 transition">
                <i class="fab fa-github fa-lg"></i>
                <span class="text-base">Github</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kätlin-epelbaum-138653339/" class="flex items-center space-x-3 text-gray-500 hover:text-pink-500 transition">
                <i class="fab fa-linkedin fa-lg"></i>
                <span class="text-base">LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/3 space-y-6">
          <h3 class="text-pink-500 text-2xl font-semibold">Pages</h3>
          <ul class="space-y-3">
            <li>
              <router-link to="/" class="block text-gray-500 hover:text-pink-500 transition">Home</router-link>
            </li>
            <li>
              <router-link to="/services" class="block text-gray-500 hover:text-pink-500 transition">Services</router-link>
            </li>
            <li>
              <router-link to="/about" class="block text-gray-500 hover:text-pink-500 transition">About</router-link>
            </li>
            <li>
              <router-link to="/contact" class="block text-gray-500 hover:text-pink-500 transition">Contact</router-link>
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/3 space-y-6">
          <h3 class="text-pink-500 text-2xl font-semibold">Let's Connect</h3>
          <p class="text-gray-500">
            Reach out to collaborate or ask any questions about building your perfect website!
          </p>
          <router-link to="/contact" class="inline-block bg-pink-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-pink-600 transition">
            Contact Me
          </router-link>
        </div>
      </div>
      <div class="mt-10 text-center border-t border-gray-200 pt-6">
        <p class="text-gray-500 text-sm">&copy; 2024 Made by Kätlin Epelbaum. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  