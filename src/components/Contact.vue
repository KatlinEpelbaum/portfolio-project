<template>
    <section class="flex flex-col bg-gradient-to-b from-fuchsia-200 to-pink-100 pb-20 bg-center">
      <div class="flex flex-col md:flex-row justify-center md:justify-around items-center">
        <div class="flex flex-col justify-center items-start p-6 ">
            <h1 class="text-6xl font-semibold italic pb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700">Get in Touch</h1>
            <p class="text-gray-700 font-semibold text-lg mb:text-xl">I’d love to hear from you! Whether you’re looking for custom software <br> development,a tech consultation, or have any questions about my <br> services, feel free to reach out using the contact form below.</p>
            <ul class="space-y-4">
            <li>
              <a href="https://www.facebook.com/katlin.epelbaum/" class="flex text-3xl items-center pt-4 space-x-3 text-gray-700 hover:text-pink-500 transition">
                <i class="fab fa-facebook fa-lg"></i>
                <span class="text-lg mb:text-xl">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/KatlinEpelbaum" class="flex text-3xl items-center pt-4 space-x-3 text-gray-700 hover:text-pink-500 transition">
                <i class="fab fa-github fa-lg"></i>
                <span class="text-lg mb:text-xl">Github</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kätlin-epelbaum-138653339/" class="flex text-3xl items-center pt-4 space-x-3 text-gray-700 hover:text-pink-500 transition">
                <i class="fab fa-linkedin fa-lg"></i>
                <span class="text-lg mb:text-xl">LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="flex justify-center items-center p-12">
          <form @submit.prevent="submitForm" class="bg-white rounded-lg shadow-lg max-w-sm p-8 w-101 md:w-100 space-y-2">
            <h2 class="font-bold text-gray-700 text-2xl" style="font-family: 'Nippo', sans-serif;">Contact</h2>
            <h3 class="text-xl font-bold text-gray-700">Let's get in touch</h3>
            
            <div class="space-y-1">
              <label for="email" class="block text-gray-700 font-medium">Enter Your Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email" 
                class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-700" 
                required 
              />
            </div>
            
            <div class="space-y-2">
              <label for="message" class="block text-gray-700 font-medium">Enter Your Message</label>
              <textarea 
                id="message" 
                v-model="formData.message" 
                rows="4" 
                class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-700" 
                required
              ></textarea>
            </div>
            
            <div class="flex justify-start">
              <button 
                type="submit" 
                class="bg-pink-400 text-white py-2 px-6 rounded-md hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-600 transition duration-200"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </div>

            <p v-if="feedback" :class="feedbackClass" class="mt-4">
              {{ feedback }}
            </p>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  
<script>
import emailjs from '@emailjs/browser';

export default {
  name: 'Contact',
  
  data() {
    return {
      formData: {
        email: '',
        message: ''
      },
      feedback: '',
      isSubmitting: false,
      feedbackClass: ''
    }
  },

  mounted() {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true
      this.feedback = ''
      
      try {
        const templateParams = {
          from_email: this.formData.email,
          message: this.formData.message,
        }

        const response = await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams
        )

        if (response.status === 200) {
          this.feedback = 'Message sent successfully!'
          this.feedbackClass = 'text-green-600'
          this.formData.email = ''
          this.formData.message = ''
        }
      } catch (error) {
        console.error('Error:', error)
        this.feedback = 'Failed to send message. Please try again.'
        this.feedbackClass = 'text-red-600'
      } finally {
        this.isSubmitting = false
      }
    }
  }
};
</script>