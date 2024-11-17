<template>
  <div>
    <Home />
    <Skills />
    <Services />
    <Timeline />
    <Testimonials />
    <About />
    <Contact />
    <letsTalk />
  </div>
</template>

<script>
import Home from './components/Home.vue';
import Skills from './components/Skills.vue';
import Services from './components/Services.vue';
import Timeline from './components/Timeline.vue';
import Testimonials from './components/Testimonials.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import letsTalk from './components/letsTalk.vue';
export default {
  name: 'App',
  components: {
    Home,
    Skills,
    Services,
    Timeline,
    Testimonials,
    About,
    Contact,
    letsTalk,
  },
};
</script>
