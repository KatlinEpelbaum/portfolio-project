<template>
<section class="your-section-class flex flex-col h-screen bg-[url('https://images.beta.cosmos.so/76a93c90-627c-44d2-b5cf-65492341b08a?format=jpeg')]">
  <div class="flex justify-center mt-4">
      <nav class="flex flex-col md:flex-row items-center text-[#c19cbb]  space-y-4 md:space-y-0 md:space-x-8 text- p-2 bg-opacity-60 border-[#b1c9d4] border bg-white rounded-lg">
        <h3 class="font-bold text-xl text-[#c19cbb]">Kätlin .E</h3>
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
<style>
.your-section-class {
    background-position: center   50%; /* Adjust the percentage as needed */
}
</style>