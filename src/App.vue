<template>
  <section class="flex flex-col h-screen bg-[url('./src/img/background.jpg')] flex2">
    
    <div class="flex justify-center mt-4">
      <nav style="font-family: 'Nippo', sans-serif;" class="flex flex-row items-center space-x-8 text-white p-2 bg-opacity-60 border-pink-400 border bg-pink-200 rounded-lg">
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
      <h1 class="text-white text-9xl text-center mb-6">
        <span style="font-family: 'Nippo', sans-serif;">Web Designer</span> & <span style="font-family: 'Nippo', sans-serif;">Developer</span></h1>
    </div>
  </section>
  <section class="flex flex-col p-20">
    <div class="flex flex-row justify-between pl-12 pr-12"> 
      <i class="devicon-javascript-plain text-pink-400 text-8xl"></i>
      <i class="devicon-python-plain text-pink-400 text-8xl"></i>
      <i class="devicon-tailwindcss-original text-pink-400 text-8xl"></i> 
      <i class="devicon-mysql-plain-wordmark text-pink-400 text-8xl"></i>
      <i class="devicon-vuejs-plain text-pink-400 text-8xl"></i>
      <i class="devicon-php-plain text-pink-400 text-8xl"></i>
      <i class="devicon-git-plain-wordmark text-pink-400 text-8xl"></i>
      <i class="devicon-figma-plain text-pink-400 text-8xl"></i>
    </div>
  </section>
  <section class="flex flex-row space-x-6 pl-12 pr-12 pb-10">
  <div class="flex flex-col bg-slate-50 p-6 rounded-lg shadow-shadow1 border-2 border-pink-400" >
    <p class="text-xl font-bold" style="font-family: 'Nippo', sans-serif;">01</p>
    <h2 class="text-2xl font-semibold">Web Design</h2>
    <p class="mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur at eaque aliquid exercitationem numquam quo?</p>
    <div class="flex items-center mt-4">
      <button class="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500 transition">About Web Design</button>
    </div>
  </div>

  <div class="flex flex-col bg-slate-50 p-6 rounded-lg shadow-shadow2 border-2 border-pink-400">
    <p class="text-xl font-bold" style="font-family: 'Nippo', sans-serif;">02</p>
    <h2 class="text-2xl font-semibold">Development</h2>
    <p class="mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur at eaque aliquid exercitationem numquam quo?</p>
    <div class="flex items-center mt-4">
      <button class="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500 transition">About Development</button>
    </div>
  </div>

  <div class="flex flex-col bg-slate-50 p-6 rounded-lg shadow-shadow3 border-2 border-pink-400 ">
    <p class="text-xl font-bold" style="font-family: 'Nippo', sans-serif;">03</p>
    <h2 class="text-2xl font-semibold">Development</h2>
    <p class="mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur at eaque aliquid exercitationem numquam quo?</p>
    <div class="flex items-center mt-4">
      <button class="bg-pink-400 text-white px-4 py-2 rounded  hover:bg-pink-500 transition">About Development</button>
    </div>
  </div>
</section>

</template>

<style>
.flex2 {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
