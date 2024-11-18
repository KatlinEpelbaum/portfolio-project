<template>
  <section class="flex flex-col h-screen bg-[url(./src/img/background.jpg)] bg-cover bg-center">
    <div class="flex flex-row justify-center items-center flex-grow">
      <h1 class="text-white text-6xl md:text-9xl text-center mb-6 ">
        <span class="inline-block " style="font-family: 'Nippo', sans-serif;">
          Web Designer
        </span> & 
        <span class="inline-block" style="font-family: 'Nippo', sans-serif;">
          Developer
        </span>
      </h1>
    </div>
  </section>
      <!-- Skills -->
  <section class="flex flex-col p-6 md:p-20">
    <div class="relative overflow-hidden">
      <div class="flex animate-marquee w-max">
        <div class="flex">
          <i
            v-for="skill in skills"
            :key="skill"
            :class="[ 
              `devicon-${skill}-plain`,
              'text-6xl md:text-8xl text-pink-400',
              'mx-8'  
            ]"
          ></i>
        </div>
        <div class="flex">
          <i
            v-for="skill in skills"
            :key="'repeat-' + skill"
            :class="[ 
              `devicon-${skill}-plain`,
              'text-6xl md:text-8xl text-pink-400',
              'mx-8'  
            ]"
          ></i>
        </div>
      </div>
    </div>
  </section>
      <!-- Services -->
  <section class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 px-6 md:px-12 py-10 text-slate-800">
    <!-- Service Card 1: Web Design -->
    <div class="flex flex-col bg-white p-6 rounded-lg  border-2 border-[#c38aba] md:shadow-shadow1">
      <p class="text-3xl font-bold text-cyan-700" style="font-family: 'Nippo', sans-serif;">01</p>
      <h2 class="text-2xl font-semibold text-pink-400 mt-2">Web Design</h2>
      <p class="mt-4 text-gray-700">Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.</p>
      <div class="flex items-center mt-6">
        <button class="bg-pink-400 text-white px-5 py-2 rounded-lg hover:bg-pink-500 transition ease-in-out duration-300">
          About Web Design
        </button>
      </div>
    </div>

    <!-- Service Card 2: Development -->
    <div class="flex flex-col bg-white p-6 rounded-lg  border-2 border-[#c38aba] md:shadow-shadow2">
      <p class="text-3xl font-bold text-cyan-700" style="font-family: 'Nippo', sans-serif;">02</p>
      <h2 class="text-2xl font-semibold text-pink-400 mt-2">Development</h2>
      <p class="mt-4 text-gray-700">Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience.</p>
      <div class="flex items-center mt-6">
        <button class="bg-pink-400 text-white px-5 py-2 rounded-lg hover:bg-pink-500 transition ease-in-out duration-300">
          About Development
        </button>
      </div>
    </div>

    <!-- Service Card 3: SEO Optimization -->
    <div class="flex flex-col bg-white p-6 rounded-lg  border-2 border-[#c38aba] md:shadow-shadow3">
      <p class="text-3xl font-bold text-cyan-700" style="font-family: 'Nippo', sans-serif;">03</p>
      <h2 class="text-2xl font-semibold text-pink-400 mt-2">SEO Optimization</h2>
      <p class="mt-4 text-gray-700">Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results.</p>
      <div class="flex items-center mt-6">
        <button class="bg-pink-400 text-white px-5 py-2 rounded-lg hover:bg-pink-500 transition ease-in-out duration-300">
          About SEO
        </button>
      </div>
    </div>
  </section>
    <!-- Timeline -->
  <section class="flex flex-col items-center p-10 text-slate-700">
    <div class="text-center">
      <p class="font-semibold">The Process</p>
      <h1 class="text-5xl md:text-8xl pb-4">
        Your Website <br>
        <span 
          style="font-family: 'Nippo', sans-serif;" 
          class="italic bg-gradient-to-r from-cyan-500 via-pink-400 to-purple-500 text-transparent bg-clip-text">
          in 5 steps
        </span>
      </h1>
      <p class="font-semibold">
        Our process ensures that we create a website <br> tailored to your business needs.
      </p>
    </div>
  </section>

  <section class="relative pl-10 pr-10 pb-8 md:pl-32 md:pr-32 text-slate-700">
    <div class="relative space-y-16 before:absolute before:inset-0 before:mx-auto before:w-0.5 before:bg-gradient-to-b from-gray-100 via-pink-400 to-gray-100">

      <!-- Step 1: Discovery Call -->
      <div class="relative md:flex md:items-start md:space-x-8">
        <div class="flex justify-center md:ml-19 md:justify-end md:w-1/2">
          <div class="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 text-white shadow">
            1
          </div>
        </div>
        <div class="relative w-full md:w-1/2 mt-6 md:mt-0 md:pl-10">
          <div class="p-6 border border-gray-300 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <p class="uppercase tracking-widest text-xs font-semibold text-pink-500 mb-3">Do we match?</p>
            <h2 class="text-3xl font-extrabold mb-4 text-gray-800">Discovery Call</h2>
            <p class="mb-6 text-gray-600 font-semibold leading-relaxed">
              Before we start, we determine if and how I can help you. What are your requirements for your new website? Why do you need a new website? What goals do you have, and what problems can we solve with a new website?
            </p>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <span class="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mr-3"></span>
                <span>We get to know each other better</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mr-3"></span>
                <span>Determine how I can best assist you</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mr-3"></span>
                <span>Understand the goals you have for your website</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Step 2: Concept & Strategy -->
      <div class="relative md:flex md:items-start md:space-x-8 md:flex-row-reverse">
        <div class="flex justify-center md:mr-19 md:justify-start md:w-1/2">
          <div class="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 text-white shadow">
            2
          </div>
        </div>
        <div class="relative w-full md:w-1/2 mt-6 md:mt-0 md:pr-10">
          <div class="p-6 border border-gray-300 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <p class="uppercase tracking-widest text-xs font-semibold text-pink-500 mb-3">Strategy</p>
            <h2 class="text-3xl font-extrabold mb-4 text-gray-800">Concept & Strategy</h2>
            <p class="mb-6 text-gray-600 font-semibold leading-relaxed">
              Together, we develop a strategy that successfully combines your goals with the needs of your target audience. Based on this concept, I create the first wireframes and an interactive prototype.
            </p>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <span class="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mr-3"></span>
                <span>UX Design</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mr-3"></span>
                <span>Wireframes</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mr-3"></span>
                <span>Interactive Prototype</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Step 3: Web Design -->
      <div class="relative md:flex md:items-start md:space-x-8">
        <div class="flex justify-center md:ml-19 md:justify-end md:w-1/2">
          <div class="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 text-white shadow">
            3
          </div>
        </div>
        <div class="relative w-full md:w-1/2 mt-6 md:mt-0 md:pl-10">
          <div class="p-6 border border-gray-300 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <p class="uppercase tracking-widest text-xs font-semibold text-pink-500 mb-3">Design</p>
            <h2 class="text-3xl font-extrabold mb-4 text-gray-800">Web Design</h2>
            <p class="mb-6 text-gray-600 font-semibold leading-relaxed">
              Now comes the magic! Based on the previously developed concept, I create a high-end screen design tailored to your brand.
            </p>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <span class="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mr-3"></span>
                <span>High-end web design tailored to your brand</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mr-3"></span>
                <span>Interactive prototype of the design</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Step 4: Development -->
      <div class="relative md:flex md:items-start md:space-x-8 md:flex-row-reverse">
        <div class="flex justify-center md:mr-19 md:justify-start md:w-1/2">
          <div class="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 text-white shadow">
            4
          </div>
        </div>
        <div class="relative w-full md:w-1/2 mt-6 md:mt-0 md:pr-10">
          <div class="p-6 border border-gray-300 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <p class="uppercase tracking-widest text-xs font-semibold text-pink-500 mb-3">More Magic</p>
            <h2 class="text-3xl font-extrabold mb-4 text-gray-800">Development</h2>
            <p class="mb-6 text-gray-600 font-semibold leading-relaxed">
              In this step, we breathe life into your website. I translate the web design into code, ensuring responsiveness and functionality.
            </p>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <span class="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mr-3"></span>
                <span>Responsive coding for all devices</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mr-3"></span>
                <span>Functional website with interactive elements</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mr-3"></span>
                <span>Testing and quality assurance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Step 5: Launch & Support -->
      <div class="relative md:flex md:items-start md:space-x-8">
        <div class="flex justify-center md:ml-19 md:justify-end md:w-1/2">
          <div class="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 text-white shadow">
            5
          </div>
        </div>
        <div class="relative w-full md:w-1/2 mt-6 md:mt-0 md:pl-10">
          <div class="p-6 border border-gray-300 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <p class="uppercase tracking-widest text-xs font-semibold text-pink-500 mb-3">Final Step</p>
            <h2 class="text-3xl font-extrabold mb-4 text-gray-800">Launch & Support</h2>
            <p class="mb-6 text-gray-600 font-semibold leading-relaxed">
              It's time to go live! I deploy your website and provide ongoing support to ensure it runs smoothly and securely. We also monitor and analyze the site to make improvements based on real user data.
            </p>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <span class="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mr-3"></span>
                <span>Website launch</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mr-3"></span>
                <span>Post-launch monitoring and optimization</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mr-3"></span>
                <span>Ongoing support and updates</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
    <!-- Testimonials -->
  <section class="py-8 px-4">
        <div class="text-center mb-8">
            <h1 class="text-5xl md:text-7xl lg:text-8xl pb-4 text-slate-800">
                What my <br><span style="font-family: 'Nippo', sans-serif;" class="italic">clients say</span>
            </h1>
            <p class="font-semibold text-slate-800 text-lg md:text-xl">
                See what my clients have to say about working with me and the <br class="hidden md:block"> results I helped them achieve.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto p-8">
            <!-- Testimonial Card 1 -->
            <div class="bg-white p-6 rounded-lg border border-pink-400 shadow-lg">
                <h2 class="text-xl font-bold text-slate-700 mb-2">
                    Amazing Results with Katlin's Premium Web Design Services.
                </h2>
                <p class="mt-4 leading-relaxed text-slate-600 italic">
                    "Katlin is a top-notch web designer who created a stunning website for my business. She was attentive to my needs and provided excellent customer service throughout the entire process. I highly recommend her services."
                </p>
                <div class="flex items-center mt-6">
                    <img 
                        src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" 
                        class="h-16 w-16 rounded-full border-2 border-pink-400" 
                        alt="Client Image"
                    />
                    <div class="ml-4">
                        <h3 class="uppercase tracking-wider font-semibold text-pink-400">The Cat</h3>
                        <p class="text-slate-600">CEO of Whiskers</p>
                    </div>
                </div>
            </div>

            <!-- Testimonial Card 2 -->
            <div class="bg-white p-6 rounded-lg border border-pink-400 shadow-lg">
                <h2 class="text-xl font-bold text-slate-700 mb-2">
                    Amazing Results with Katlin's Premium Web Design Services.
                </h2>
                <p class="mt-4 leading-relaxed text-slate-600 italic">
                    "Katlin is a top-notch web designer who created a stunning website for my business. She was attentive to my needs and provided excellent customer service throughout the entire process. I highly recommend her services."
                </p>
                <div class="flex items-center mt-6">
                    <img 
                        src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" 
                        class="h-16 w-16 rounded-full border-2 border-pink-400" 
                        alt="Client Image"
                    />
                    <div class="ml-4">
                        <h3 class="uppercase tracking-wider font-semibold text-pink-400">The Cat 2</h3>
                        <p class="text-slate-600">CEO of Whiskers</p>
                    </div>
                </div>
            </div>

            <!-- Testimonial Card 3 -->
            <div class="bg-white p-6 rounded-lg border border-pink-400 shadow-lg">
                <h2 class="text-xl font-bold text-slate-700 mb-2">
                    Amazing Results with Katlin's Premium Web Design Services.
                </h2>
                <p class="mt-4 leading-relaxed text-slate-600 italic">
                    "Katlin is a top-notch web designer who created a stunning website for my business. She was attentive to my needs and provided excellent customer service throughout the entire process. I highly recommend her services."
                </p>
                <div class="flex items-center mt-6">
                    <img 
                        src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" 
                        class="h-16 w-16 rounded-full border-2 border-pink-400" 
                        alt="Client Image"
                    />
                    <div class="ml-4">
                        <h3 class="uppercase tracking-wider font-semibold text-pink-400">The Cat 3</h3>
                        <p class="text-slate-600">CEO of Whiskers</p>
                    </div>
                </div>
            </div>

            <!-- Testimonial Card 4 -->
            <div class="bg-white p-6 rounded-lg border border-pink-400 shadow-lg">
                <h2 class="text-xl font-bold text-slate-700 mb-2">
                    Amazing Results with Katlin's Premium Web Design Services.
                </h2>
                <p class="mt-4 leading-relaxed text-slate-600 italic">
                    "Katlin is a top-notch web designer who created a stunning website for my business. She was attentive to my needs and provided excellent customer service throughout the entire process. I highly recommend her services."
                </p>
                <div class="flex items-center mt-6">
                    <img 
                        src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" 
                        class="h-16 w-16 rounded-full border-2 border-pink-400" 
                        alt="Client Image"
                    />
                    <div class="ml-4">
                        <h3 class="uppercase tracking-wider font-semibold text-pink-400">The Cat 4</h3>
                        <p class="text-slate-600">CEO of Whiskers</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
      <!-- Mobile Menu -->

    <section>
      <div class="relative bg-white text-slate-800 font-sans pb-8">
        <!-- Header Section -->
        <div class="flex items-center justify-between flex-wrap p-10">
          <!-- First Text on the Left -->
          <h1 class="text-6xl md:text-8xl font-serif mt-20 md:mt-60 hidden md:block md:flex-1">
            Kätlin
          </h1>

          <!-- Profile Image in the Center -->
          <div class="flex justify-center md:w-42 w-30 mx-auto mt-6 md:mt-0 md:mx-0">
            <img
              class="w-30 md:h-42 md:w-42"
              src="/src/img/flower.jpg"
              alt="Flower"
            />
          </div>

          <!-- Second Text on the Right -->
          <h1 class="text-6xl md:text-8xl font-serif mt-20 md:mt-60 text-center md:text-left md:flex-1">
            Kätlin
            <span
              style="font-family: 'Nippo', sans-serif;"
              class="italic text-transparent pr-4 bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-700">
              Epelbaum
            </span>
          </h1>
        </div>
            <!-- Description Section -->
        <div class="max-w-7xl mx-auto mt-16 px-6 md:px-10">
          <div class="flex flex-col md:flex-row items-center md:items-end">
                <!-- Left Column -->
              <div class="md:w-1/2 flex flex-col justify-center text-center md:text-right mb-6 md:mb-12 pr-0 md:pr-8 md:border-r-8 border-cyan-700">
                <h2 class="text-2xl md:text-3xl font-light">
                  A website that leaves <br />
                  <span class="italic font-bold">a lasting impression!</span>
                </h2>
              </div>
                <!-- Vertical Divider (Only for Desktop) -->
              <div class="hidden md:block border-l border-gray-300 h-full mx-4"></div>

                <!-- Right Column -->
              <div class="md:w-1/2 flex flex-col justify-center text-center md:text-left mt-6 md:mt-0">
                <p class="max-w-2xl mx-auto text-gray-700 text-base md:text-lg leading-relaxed">
                    Hi, I'm Kätlin Epelbaum - a freelancer specializing in premium web
                    design, development, and SEO services. I'm passionate about creating
                    unique and effective solutions for my clients, and I bring a personal
                    touch to every project. Let's work together to bring your vision to
                    life!
                </p>

                <!-- Social Media Icons -->
                <div class="flex justify-center md:justify-start gap-6 mt-6">
                    <a href="#" class="text-gray-500 hover:text-black transition">
                      <i class="fab fa-facebook fa-2x"></i>
                    </a>
                    <a href="#" class="text-gray-500 hover:text-black transition">
                      <i class="fab fa-instagram fa-2x"></i>
                    </a>
                    <a href="#" class="text-gray-500 hover:text-black transition">
                      <i class="fab fa-github fa-2x"></i>
                    </a>
                    <a href="#" class="text-gray-500 hover:text-black transition">
                      <i class="fab fa-linkedin fa-2x"></i>
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    <section class="text-white  flex flex-col justify-between bg-gradient-to-b from-white to-pink-300">
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
          class="mt-8 px-8 py-4 bg-pink-400 hover:bg-pink-500 font-light rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Get In Touch
        </router-link>
    </div>
  </section>
</template>
<script>

  export default {
    name: 'App',
    data() {
      return {
        skills: [
          'javascript',
          'python',
          'tailwindcss',
          'mysql',
          'vuejs',
          'php',
          'git',
          'figma',
        ],
      };
    },
  };
</script>
