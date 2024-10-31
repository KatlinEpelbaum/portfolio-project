<template>
  <div>
    <Navbar />
    <SkillsSection />
    <ServicesSection />
    <ProcessSection />
    <Timeline />
    <ClientTestimonials />
    <About /> 
  </div>
</template>

<script>
import Navbar from './components/navbar.vue';
import SkillsSection from './components/skillsSection.vue';
import ServicesSection from './components/servicesSection.vue';
import ProcessSection from './components/processSection.vue';
import Timeline from './components/Timeline.vue';
import ClientTestimonials from './components/ClientTestimonials.vue';
import About from './components/About.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    SkillsSection,
    ServicesSection,
    ProcessSection,
    Timeline,
    ClientTestimonials,
    About,
  },
};
</script>
