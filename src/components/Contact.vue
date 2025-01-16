<template>
    <section class=" mx-auto md:px-32 py-12 bg-gradient-to-b from-slate-50 to-pink-200 pb-20">
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
        <!-- Right Column - Contact Form -->
        <div class="w-full max-w-md mx-auto md:p-0 p-6">
          <form @submit.prevent="submitForm" 
                class="bg-white rounded-xl shadow-xl p-6 md:p-8 space-y-6">
            <div class="space-y-2">
              <h2 class="font-bold text-gray-800 text-2xl md:text-3xl">Contact</h2>
              <h3 class="text-xl text-gray-700">Let's get in touch</h3>
            </div>

            <!-- Email Input -->
            <div class="space-y-2">
              <label for="email" class="block text-gray-700 font-medium">
                Email Address
              </label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email" 
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-200"
                required 
              />
            </div>

            <!-- Message Input -->
            <div class="space-y-2">
              <label for="message" class="block text-gray-700 font-medium">
                Your Message
              </label>
              <textarea 
                id="message" 
                v-model="formData.message" 
                rows="4" 
                :disabled="isSubmitting"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-200"
                :class="{ 'opacity-50': isSubmitting }"
                required
              ></textarea>
            </div>

            <!-- Submit Button -->
            <div class="flex justify-start">
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="relative bg-pink-500 text-white py-3 px-8 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span :class="{ 'opacity-0': isSubmitting }">
                  Send Message
                </span>
                <span v-if="isSubmitting" 
                      class="absolute inset-0 flex items-center justify-center">
                  <i class="fas fa-circle-notch fa-spin"></i>
                </span>
              </button>
            </div>

            <!-- Feedback Message -->
            <transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <p v-if="feedback" 
                 :class="[
                   'mt-4 p-3 rounded-lg text-sm',
                   feedbackClass
                 ]">
                {{ feedback }}
              </p>
            </transition>
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