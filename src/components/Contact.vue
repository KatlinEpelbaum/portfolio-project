<template>
  <section class="min-h-screen px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-32 py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-pink-200">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-8 lg:gap-12 xl:gap-16">
        <!-- Left Column - Info -->
        <div class="flex flex-col justify-center items-center lg:items-start text-center lg:text-left max-w-xl lg:max-w-none lg:flex-1">
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold italic pb-4 sm:pb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700 leading-tight">
            Get in Touch
          </h1>
          
          <p class="text-gray-700 font-semibold text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-2xl">
            I'd love to hear from you! Whether you're looking for custom software development, a tech consultation, or have any questions about my services, feel free to reach out using the contact form.
          </p>
          
          <!-- Social Links -->
          <div class="w-full">
            <h3 class="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Connect with me:</h3>
            <ul class="space-y-3 sm:space-y-4 lg:space-y-5">
              <li>
                <a href="https://www.facebook.com/katlin.epelbaum/" 
                   class="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4 text-gray-700 hover:text-pink-500 transition-colors duration-200 group">
                  <i class="fab fa-facebook text-2xl sm:text-3xl lg:text-2xl xl:text-3xl group-hover:scale-110 transition-transform duration-200"></i>
                  <span class="text-base sm:text-lg lg:text-base xl:text-lg font-medium">Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/KatlinEpelbaum" 
                   class="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4 text-gray-700 hover:text-pink-500 transition-colors duration-200 group">
                  <i class="fab fa-github text-2xl sm:text-3xl lg:text-2xl xl:text-3xl group-hover:scale-110 transition-transform duration-200"></i>
                  <span class="text-base sm:text-lg lg:text-base xl:text-lg font-medium">GitHub</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/kätlin-epelbaum-138653339/" 
                   class="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4 text-gray-700 hover:text-pink-500 transition-colors duration-200 group">
                  <i class="fab fa-linkedin text-2xl sm:text-3xl lg:text-2xl xl:text-3xl group-hover:scale-110 transition-transform duration-200"></i>
                  <span class="text-base sm:text-lg lg:text-base xl:text-lg font-medium">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Right Column - Contact Form -->
        <div class="w-full max-w-md lg:max-w-lg lg:flex-shrink-0">
          <form @submit.prevent="submitForm" 
                class="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 space-y-6">
            
            <!-- Form Header -->
            <div class="space-y-2 text-center sm:text-left">
              <h2 class="font-bold text-gray-800 text-2xl sm:text-3xl lg:text-2xl xl:text-3xl">Contact</h2>
              <h3 class="text-lg sm:text-xl lg:text-lg xl:text-xl text-gray-700">Let's get in touch</h3>
            </div>

            <!-- Email Input -->
            <div class="space-y-2">
              <label for="email" class="block text-gray-700 font-medium text-sm sm:text-base">
                Email Address
              </label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email" 
                placeholder="your.email@example.com"
                class="w-full p-3 sm:p-4 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 hover:border-pink-300"
                required 
              />
            </div>

            <!-- Message Input -->
            <div class="space-y-2">
              <label for="message" class="block text-gray-700 font-medium text-sm sm:text-base">
                Your Message
              </label>
              <textarea 
                id="message" 
                v-model="formData.message" 
                rows="4"
                placeholder="Tell me about your project or ask me anything..."
                :disabled="isSubmitting"
                class="w-full p-3 sm:p-4 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 hover:border-pink-300 resize-y min-h-[100px] sm:min-h-[120px]"
                :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }"
                required
              ></textarea>
            </div>

            <!-- Submit Button -->
            <div class="flex justify-center sm:justify-start pt-2">
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="relative bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl min-w-[140px] sm:min-w-[160px]"
              >
                <span :class="{ 'opacity-0': isSubmitting }" class="text-sm sm:text-base">
                  Send Message
                </span>
                <span v-if="isSubmitting" 
                      class="absolute inset-0 flex items-center justify-center">
                  <i class="fas fa-circle-notch fa-spin text-sm sm:text-base"></i>
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
              <div v-if="feedback" 
                   :class="[
                     'mt-4 p-3 sm:p-4 rounded-lg text-sm sm:text-base text-center sm:text-left border-l-4 font-medium',
                     feedbackClass
                   ]">
                <i :class="feedbackIcon" class="mr-2"></i>
                {{ feedback }}
              </div>
            </transition>
          </form>
        </div>
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
      feedbackClass: '',
      feedbackIcon: ''
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
          this.feedback = 'Message sent successfully! I\'ll get back to you soon.'
          this.feedbackClass = 'text-green-700 bg-green-50 border-green-400'
          this.feedbackIcon = 'fas fa-check-circle text-green-500'
          this.formData.email = ''
          this.formData.message = ''
        }
      } catch (error) {
        console.error('Error:', error)
        this.feedback = 'Failed to send message. Please try again or contact me directly.'
        this.feedbackClass = 'text-red-700 bg-red-50 border-red-400'
        this.feedbackIcon = 'fas fa-exclamation-circle text-red-500'
      } finally {
        this.isSubmitting = false
      }
    }
  }
};
</script>