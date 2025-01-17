<template>
    <section class="bg-gradient-to-b from-white to-pink-300 py-20">
      <div class="container mx-auto px-6">
        <div class="mb-16 bg-white/90 rounded-3xl shadow-lg overflow-hidden">
          <div class="flex flex-col lg:flex-row">
            <div class="lg:w-1/2 bg-pink-100">
              <div class="h-72 lg:h-full bg-pink-100 overflow-hidden">
                <img src="/src/assets/Selgeton.webp" alt="Selgeton" class="w-full h-full object-cover">
              </div>
            </div>
            <!-- Featured Project Content -->
            <div class="lg:w-1/2 p-8 lg:p-12">
              <h2 class="text-4xl md:text-5xl font-bold text-slate-800 mb-6" >
                My <span class="text-pink-400 italic">Projects</span>
              </h2>
              <h3 class="text-2xl font-bold text-slate-700 mb-4">Selgeton OÜ</h3>
              <p class="text-slate-600 mb-6 text-lg">
                Internship, my teammate and I developed a website for Selgeton OÜ. We completed it on time, collaborating on both the design and coding process.
              </p>
              <div class="space-y-6">
                <div>
                  <h4 class="text-pink-400  mb-2 font-bold">Contribution Highlights</h4>
                  <ul class="text-slate-600 space-y-2">
                    <li>✓ Documentation</li>
                    <li>✓ Designed in Figma</li>
                    <li>✓ Coordinated team workflows</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div class="bg-white/90 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8">
            <h3 class="text-2xl font-bold text-slate-800 mb-3 group-hover:text-pink-500">
                Custom File Sharing Platform Project
            </h3>
            <p class="text-slate-600 mb-6 text-lg">
                The project’s goal was to learn how to utilize AI effectively in workflow. We used AI to create an action plan, assist with the design, and even contribute to the coding process.
            </p>
            <div class="space-y-4">
              <div>
                <h4 class="text-pink-400 font-bold mb-2">Key Achievements</h4>
                <ul class="text-slate-600 space-y-2">
                  <li>✓ Coordinated team workflows</li>
                  <li>✓ Documentation</li>
                  <li>✓ Designed using AI-assisted tools</li>
                </ul>
              </div>
            </div>
          </div>
  
          <div class="bg-white/90 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8">
            <h3 class="text-2xl font-bold text-slate-800 mb-3 group-hover:text-pink-500">
                System Of A Down Project
            </h3>
            <p class="text-slate-600 mb-6 text-lg">
                A dynamic band website featuring creative solutions. 
                This was a school project where we collaborated with third-year students to mentor first-year newcomers while building the website.
            </p>
            <div class="space-y-4">
              <div>
                <h4 class="text-pink-400 font-bold mb-2">Key Achievements</h4>
                <ul class="text-slate-600 space-y-2">
                  <li>✓ Mentoring</li>
                  <li>✓ Designed in Figma</li>
                  <li>✓ Implemented creative solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
  
        <a href="https://github.com/KatlinEpelbaum" target="_blank" class="relative block mt-20 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div class="absolute inset-0 bg-gradient-to-r from-red-400/80 to-pink-600/80 z-10 rounded-3xl"></div>
            <img src="/src/assets/Work.webp" alt="Decorative" class="w-full h-48 md:h-64 object-cover rounded-3xl transform hover:scale-105 transition-transform duration-300">
            <div class="absolute inset-0 z-20 flex items-center justify-center rounded-3xl">
                <p class="text-white text-2xl md:text-4xl font-bold italic">
                     Click here to see more of my work
                </p>
            </div>
        </a>
      </div>
    </section>
    <!-- Contact -->
  <section class="text-white flex flex-col justify-between bg-gradient-to-b from-pink-300 to-white">
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