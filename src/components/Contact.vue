<template>
    <section class="flex flex-col bg-gradient-to-b from-fuchsia-200 to-pink-100 pb-20 bg-center">
      <div class="flex flex-col md:flex-row justify-center md:justify-around items-center">
        <div class="flex flex-col justify-center items-start p-8 ">
            <h1 class="text-6xl font-semibold italic pb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700">Get in Touch</h1>
            <p class="text-gray-700 text-xl">I’d love to hear from you! Whether you’re looking for custom software <br> development,a tech consultation, or have any questions about my <br> services, feel free to reach out using the contact form below.</p>
            <ul class="space-y-4">
            <li>
              <a href="https://www.facebook.com/katlin.epelbaum/" class="flex text-3xl items-center pt-4 space-x-3 text-gray-700 hover:text-pink-500 transition">
                <i class="fab fa-facebook fa-lg"></i>
                <span class="text-xl">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/KatlinEpelbaum" class="flex text-3xl items-center pt-4 space-x-3 text-gray-700 hover:text-pink-500 transition">
                <i class="fab fa-github fa-lg"></i>
                <span class="text-xl">Github</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kätlin-epelbaum-138653339/" class="flex text-3xl items-center pt-4 space-x-3 text-gray-700 hover:text-pink-500 transition">
                <i class="fab fa-linkedin fa-lg"></i>
                <span class="text-xl">LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
        
        <div class="flex justify-center items-center p-16">
          <form action="contact.php" method="POST" class="bg-white rounded-lg shadow-lg max-w-sm p-8 w-101 md:w-100  space-y-6">
            <h2 class="font-bold text-gray-700 text-xl" style="font-family: 'Nippo', sans-serif;">Contact</h2>
            <h3 class="text-2xl font-bold text-pink-400">Let's get in touch</h3>
            
            <div class="space-y-2">
              <label for="name" class="block text-gray-700 font-medium">Name</label>
              <input type="text" id="name" name="name" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-700" required />
            </div>
            
            <div class="space-y-2">
              <label for="email" class="block text-gray-700 font-medium">Email</label>
              <input type="email" id="email" name="email" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-700" required />
            </div>
            
            <div class="space-y-2">
              <label for="message" class="block text-gray-700 font-medium">Message</label>
              <textarea id="message" name="message" rows="4" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-700" required></textarea>
            </div>
            
            <div class="flex justify-start">
              <button type="submit" class="bg-pink-400 text-white py-2 px-6 rounded-md hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-600 transition duration-200">
                Send Message
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  </template>
  
  
<script>

export default {
  name: 'Contact',
};


</script>
  