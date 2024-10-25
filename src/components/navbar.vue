<template>
  <section class="flex flex-col h-screen bg-[url('./src/img/background.jpg')]">
    <div class="flex justify-center mt-4">
      <nav class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-white p-2 bg-opacity-60 border-pink-400 border bg-pink-200 rounded-lg">
        <h3 class="font-bold text-xl text-pink-400">Kätlin .E</h3>
        <a href="#services" class="hover:underline hover:text-pink-400">Services</a>
        <a href="#work" class="hover:text-pink-400 hover:underline">Work</a>
        <a href="#about" class="hover:text-pink-400 hover:underline">About</a>
        <a href="#blog" class="hover:text-pink-400 hover:underline">Blog</a>
        <a href="#pages" class="hover:text-pink-400 hover:underline">Pages</a>
        <button class="bg-pink-400 p-2 rounded-xl hover:underline">Let's talk</button>
      </nav>
    </div>

    <div class="flex flex-row justify-center items-center flex-grow">
      <h1 class="text-white text-6xl md:text-9xl text-center mb-6">
        <span style="font-family: 'Nippo', sans-serif;">Web Designer</span> & <span style="font-family: 'Nippo', sans-serif;">Developer</span>
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Navbar',
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
