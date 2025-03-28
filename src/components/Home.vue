<template>
  <section class="relative flex flex-col h-screen">
    <canvas ref="bgCanvas" class="absolute inset-0 z-[-1] bg-pink-200"></canvas>
    <div class="flex flex-row justify-center items-center flex-grow">
      <h1 class="text-white text-4xl md:text-9xl text-center mb-6">
        <span class="inline-block" style="font-family: 'Pilcrow Rounded', sans-serif;">
          {{ typingLine }}
        </span>
        <span v-if="cursorVisible" class="text-pink-300">{{ cursor }}</span>
      </h1>
    </div>
    <div class="flex justify-center pb-20 mt-5 animate-bounce">
      <a  class="flex flex-col items-center text-white space-y-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-10 h-10" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 1.5a.5.5 0 0 1 .5.5v10.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 12.793V2a.5.5 0 0 1 .5-.5z"/>
        </svg>
        <span class="text-lg font-semibold">See More</span>
      </a>
    </div>
  </section>
  <!-- Skills -->
  <section id="skills" class="flex flex-col p-6 md:p-20">
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
      <!-- Service 1: Web Design -->
    <div class="flex flex-col bg-white p-6 rounded-lg border-2 border-[#c38aba] md:shadow-shadow1">
      <p class="text-3xl font-bold text-cyan-700" style="font-family: 'Pilcrow Rounded', sans-serif;">01</p>
      <h2 class="text-2xl font-semibold text-pink-400 mt-2">Web Design</h2>
      <p class="mt-4 text-gray-700">Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.</p>
      <div class="flex items-center mt-6">
        <router-link
          to="/services#web-design"
          class="bg-pink-400 text-white px-5 py-2 rounded-lg hover:bg-pink-500 transition ease-in-out duration-300"
        >
          About Web Design
        </router-link>
      </div>
    </div>

    <!-- Service 2: Development -->
    <div class="flex flex-col bg-white p-6 rounded-lg border-2 border-[#c38aba] md:shadow-shadow2">
      <p class="text-3xl font-bold text-cyan-700" style="font-family: 'Pilcrow Rounded', sans-serif;">02</p>
      <h2 class="text-2xl font-semibold text-pink-400 mt-2">Development</h2>
      <p class="mt-4 text-gray-700">Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience.</p>
      <div class="flex items-center mt-6">
        <router-link
          to="/services#development"
          class="bg-pink-400 text-white px-5 py-2 rounded-lg hover:bg-pink-500 transition ease-in-out duration-300"
        >
          About Development
        </router-link>
      </div>
    </div>

    <!-- Service  3: Website Accessibility Audits -->
    <div class="flex flex-col bg-white p-6 rounded-lg border-2 border-[#c38aba] md:shadow-shadow3 ">
      <p class="text-3xl font-bold text-cyan-700" style="font-family: 'Pilcrow Rounded', sans-serif;">03</p>
      <h2 class="text-2xl font-semibold text-pink-400 mt-2">Website Accessibility Audits</h2>
      <p class="mt-4 text-gray-700">Ensure your website is accessible to all users, including those with disabilities. I conduct thorough accessibility audits to make your site user-friendly and compliant with WCAG guidelines.</p>
      <div class="flex items-center mt-6">
        <router-link
          to="/services#accessibility-audits"
          class="bg-pink-400 text-white px-5 py-2 rounded-lg hover:bg-pink-500 transition ease-in-out duration-300"
        >
          About Website Accessibility Audits
        </router-link>
      </div>
    </div>
  </section>
    <!-- Timeline -->
    <section class="relative pl-10 pr-10 pb-8 md:pl-32 md:pr-32 text-slate-700">
    <div  class="text-center animate-delay-500">
      <p class="font-semibold">The Process</p>
      <h1 class="text-5xl md:text-8xl pb-4">
        Your Website <br>
        <span class="italic pr-5 bg-gradient-to-r from-cyan-500 via-pink-400 to-purple-500 text-transparent bg-clip-text">
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

      <!-- Step 1 -->
      <div data-aos="zoom-out" class="relative md:flex md:items-start md:space-x-8">
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
                <span class="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mr-3 mt-1"></span>
                <span>We get to know each other better</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mr-3 mt-1"></span>
                <span>Determine how I can best assist you</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mr-3 mt-1"></span>
                <span>Understand the goals you have for your website</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Step 2 -->
      <div data-aos="zoom-out" class="relative md:flex md:items-start md:space-x-8 md:flex-row-reverse">
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
                <span class="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mr-3 mt-1"></span>
                <span>UX Design</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mr-3 mt-1"></span>
                <span>Wireframes</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mr-3 mt-1"></span>
                <span>Interactive Prototype</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Step 3 -->
      <div data-aos="zoom-out" class="relative md:flex md:items-start md:space-x-8">
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
                <span class="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mr-3 mt-1"></span>
                <span>High-end web design tailored to your brand</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mr-3 mt-1"></span>
                <span>Interactive prototype of the design</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Step 4 -->
      <div data-aos="zoom-out" class="relative md:flex md:items-start md:space-x-8 md:flex-row-reverse">
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
                <span class="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mr-3 mt-1"></span>
                <span>Responsive coding for all devices</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mr-3 mt-1"></span>
                <span>Functional website with interactive elements</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mr-3 mt-1"></span>
                <span>Testing and quality assurance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Step 5 -->
      <div data-aos="zoom-out" class="relative md:flex md:items-start md:space-x-8">
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
                <span class="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mr-3 mt-1"></span>
                <span>Website launch</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mr-3 mt-1"></span>
                <span>Post-launch monitoring and optimization</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mr-3 mt-1"></span>
                <span>Ongoing support and updates</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
    <!-- Testimonials -->
  <section class="px-4">
        <div class="text-center mb-8">
            <h1 class="text-5xl md:text-7xl lg:text-8xl pb-4 text-slate-800">
                What my <br><span style="font-family: 'Pilcrow Rounded', sans-serif;" class="italic text-pink-400">co-workers say</span>
            </h1>
            <p class="font-semibold text-slate-800 text-lg md:text-xl">
                See what my co-workers have to say about working with me and the <br class="hidden md:block"> results I helped them achieve.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto p-8">
            <!-- Testimonial 1 -->
            <div data-aos="zoom-in" class="bg-white p-6 rounded-lg border border-pink-400 shadow-lg">
                <h2 class="text-xl font-bold text-slate-700 mb-2">
                  Outstanding Results with Katlin's Expert Web Development Services
                </h2>
                <p class="mt-4 leading-relaxed text-slate-600 italic">
                    "Katlin is a skilled web developer who consistently delivers high-quality work. They're great at solving problems and always willing to collaborate to get things done"
                </p>
                <div class="flex items-center mt-6">
                    <img 
                        src="https://i.pinimg.com/564x/7b/12/2b/7b122bfb0391eea8a55c6b331471b7db.jpg" 
                        class="h-16 w-16 rounded-full border-2 border-pink-400" 
                        alt="Client Image"
                    />
                    <div class="ml-4">
                        <h3 class="uppercase tracking-wider font-semibold text-pink-400">Co-worker one</h3>
                    </div>
                </div>
            </div>

            <!-- Testimonial 2 -->
            <div data-aos="zoom-in"  class="bg-white p-6 rounded-lg border border-pink-400 shadow-lg">
                <h2 class="text-xl font-bold text-slate-700 mb-2">
                  Exceptional Teamwork and Collaboration with Katlin's Web Design Expertise
                </h2>
                <p class="mt-4 leading-relaxed text-slate-600 italic">
                    "Katlin is an excellent team player, always supportive and ready to collaborate. They contribute ideas and work seamlessly with others to achieve the best results."
                </p>
                <div class="flex items-center mt-6">
                  <img 
                        src="https://i.pinimg.com/564x/7b/12/2b/7b122bfb0391eea8a55c6b331471b7db.jpg" 
                        class="h-16 w-16 rounded-full border-2 border-pink-400" 
                        alt="Client Image"
                    />
                    <div class="ml-4">
                        <h3 class="uppercase tracking-wider font-semibold text-pink-400">Co-worker two</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- About -->
    <section>
      <div class="relative bg-white text-slate-800 font-sans pb-8">
        <div class="flex items-center justify-between flex-wrap p-10">
          <h1 class="text-6xl md:text-8xl font-serif mt-20 md:mt-60 hidden md:block md:flex-1">
            Kätlin
          </h1>
          <div class="flex justify-center md:w-42 w-30 mx-auto mt-6 md:mt-0 md:mx-0">
            <img
              class="w-30 md:h-42 md:w-42"
              src="/src/assets/flower.webp"
              alt="Flower"
            />
          </div>
          <h1 class="text-6xl pr-6 md:text-8xl font-serif mt-20 md:mt-60 text-center md:text-left md:flex-1">
            Kätlin
            <span
              style="font-family: 'Pilcrow Rounded', sans-serif;"
              class="italic text-transparent pr-4 bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-700">
              Epelbaum
            </span>
          </h1>
        </div>
        <div class="max-w-7xl mx-auto mt-16 px-6 md:px-10">
          <div class="flex flex-col md:flex-row items-center md:items-end">
              <div class="md:w-1/2 flex flex-col justify-center text-center md:text-right mb-6 md:mb-12 pr-0 md:pr-8 md:border-r-4 border-cyan-700">
                <h2 class="text-2xl md:text-3xl font-light">
                  A website that leaves <br />
                  <span class="italic font-bold">a lasting impression!</span>
                </h2>
              </div>
              <div class="hidden md:block border-l border-gray-300 h-full mx-4"></div>
              <div class="md:w-1/2 flex flex-col justify-center text-center md:text-left mt-6 md:mt-0">
                <p class="max-w-2xl mx-auto text-gray-700 text-base md:text-lg leading-relaxed">
                    Hi, I'm Kätlin Epelbaum - a freelancer specializing in premium web
                    design and development. I'm passionate about creating
                    unique and effective solutions for my clients, and I bring a personal
                    touch to every project. Let's work together to bring your vision to
                    life!
                </p>
                <div class="flex justify-center md:justify-start gap-6 mt-6">
                    <a href="https://www.facebook.com/katlin.epelbaum/" class="text-gray-500 hover:text-black transition">
                      <i class="fab fa-facebook fa-2x"></i>
                    </a>
                    <a href="https://github.com/KatlinEpelbaum" class="text-gray-500 hover:text-black transition">
                      <i class="fab fa-github fa-2x"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/kätlin-epelbaum-138653339/" class="text-gray-500 hover:text-black transition">
                      <i class="fab fa-linkedin fa-2x"></i>
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    <!-- Contact -->
    <section class="text-white  flex flex-col justify-between bg-gradient-to-b from-white to-pink-300">
      <div class="text-center py-20 px-6">
        <p class="uppercase tracking-widest text-slate-800 text-xl">Project in Mind?</p>
        <h1 class="text-4xl md:text-7xl font-semibold mt-4 text-slate-900">
        Let's make your <br>
          <span class="text-pink-400 italic">Website</span> shine
        </h1>
        <p class="mt-6 text-xl text-slate-700 max-w-xl mx-auto pb-20">
        Premium web design, and development services to help your business stand out and make an impact.
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
      textParts: ["Web Designer", "&", "Developer"],
      typingSpeed: 100,
      cursor: "|",
      typingLine: "",
      cursorVisible: true,
    };
  },
  mounted() {
    this.initCanvasBackground();
    this.startTyping();
    this.startCursorBlinking();
  },
  methods: {
    initCanvasBackground() {
      const canvas = this.$refs.bgCanvas;
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const shapes = [];

      // Randomly generate shapes with different properties (stars, hearts, sparkles)
      for (let i = 0; i < 30; i++) {
        const shapeType = Math.random() < 0.33 ? 'star' : (Math.random() < 0.5 ? 'heart' : 'sparkle');
        shapes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 30 + 20,  // Varying sizes
          dx: Math.random() * 2 - 1,
          dy: Math.random() * 2 - 1,
          color: ["#FAD02E", "#FFC107", "#FF9800"][Math.floor(Math.random() * 3)],
          type: shapeType,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: Math.random() * 0.02 - 0.01,
          opacity: Math.random() * 0.5 + 0.3, 
          opacityDirection: Math.random() > 0.5 ? 1 : -1,  
        });
      }

      // Draws a 3D star with shadows and gradient
      function draw3DStar(ctx, x, y, size, color, rotation) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation);
        
        const gradient = ctx.createRadialGradient(
          0, 0, size * 0.2,
          0, 0, size * 1.5
        );
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.7, "gold");
        gradient.addColorStop(1, "darkgoldenrod");
        
        ctx.fillStyle = gradient;
        ctx.shadowColor = "rgba(0,0,0,0.5)";
        ctx.shadowBlur = 15;
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
        
        // Draw the star shape
        ctx.beginPath();
        for (let i = 0; i < 10; i++) {
          let angle = Math.PI / 5 * i;
          let radius = i % 2 === 0 ? size : size / 2.5;
          let sx = Math.cos(angle) * radius;
          let sy = Math.sin(angle) * radius;
          ctx.lineTo(sx, sy);
        }
        ctx.closePath();
        ctx.fill();
        
        ctx.shadowColor = "rgba(255,255,255,0.7)";
        ctx.shadowBlur = 20;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.fill();
        
        ctx.restore();
      }

      // Draw the Sparkle shape with varying opacity
      function drawSparkle(ctx, x, y, size, opacity) {
        ctx.save();
        ctx.translate(x, y);
        
        ctx.beginPath();
        ctx.arc(0, 0, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;  // White sparkle with varying opacity
        ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
        ctx.shadowBlur = 15;
        ctx.fill();
        
        ctx.restore();
      }

      // Draw the 3D heart shape
      function draw3DHeart(ctx, x, y, size, color, rotation) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation);
        
        // Create a linear gradient for the heart
        const gradient = ctx.createLinearGradient(-size, -size, size, size);
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.5, "#FF69B4");
        gradient.addColorStop(1, "#C2185B");
        
        ctx.fillStyle = gradient;
        ctx.shadowColor = "rgba(0,0,0,0.5)";
        ctx.shadowBlur = 15;
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
        
        // Draw the heart shape
        ctx.beginPath();
        ctx.moveTo(0, size / 4);
        ctx.bezierCurveTo(size / 2, -size / 2, size, size / 2, 0, size);
        ctx.bezierCurveTo(-size, size / 2, -size / 2, -size / 2, 0, size / 4);
        ctx.closePath();
        ctx.fill();
        
        ctx.restore();
      }

      // Function to update the canvas continuously
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas every frame
        shapes.forEach(shape => {
          ctx.save();
          
          // Drawing based on shape type
          if (shape.type === 'star') {
            draw3DStar(ctx, shape.x, shape.y, shape.size, shape.color, shape.rotation);
          } else if (shape.type === 'heart') {
            draw3DHeart(ctx, shape.x, shape.y, shape.size, shape.color, shape.rotation);
          } else if (shape.type === 'sparkle') {
            drawSparkle(ctx, shape.x, shape.y, shape.size, shape.opacity);
          }

          ctx.restore();
          
          // Update positions
          shape.x += shape.dx;
          shape.y += shape.dy;
          shape.rotation += shape.rotationSpeed;

          // Update sparkle opacity
          if (shape.type === 'sparkle') {
            if (shape.opacityDirection === 1) {
              shape.opacity += 0.01;  
              if (shape.opacity >= 0.8) shape.opacityDirection = -1; 
            } else {
              shape.opacity -= 0.01; 
              if (shape.opacity <= 0.3) shape.opacityDirection = 1; 
            }
          }

          // Jump back on edges
          if (shape.x < 0 || shape.x > canvas.width) shape.dx *= -1;
          if (shape.y < 0 || shape.y > canvas.height) shape.dy *= -1;
        });
        requestAnimationFrame(animate);
      }
      
      animate();
    },
    async startTyping() {
      for (const text of this.textParts) {
        await this.typeText(text);
      }
    },
    typeText(text) {
      return new Promise((resolve) => {
        let i = 0;
        const typingInterval = setInterval(() => {
          if (i < text.length) {
            this.typingLine += text.charAt(i);
            i++;
          } else {
            clearInterval(typingInterval);
            this.typingLine += " ";
            resolve();
          }
        }, this.typingSpeed);
      });
    },
    startCursorBlinking() {
      setInterval(() => {
        this.cursorVisible = !this.cursorVisible;
      }, 500);
    }
  }
};
document.body.style.overflowX = "hidden";
document.documentElement.style.overflowX = "hidden";
</script>
