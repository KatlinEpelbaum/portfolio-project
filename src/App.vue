<template>
  <div>
    <Navbar />
    <SkillsSection />
    <ServicesSection />
    <ProcessSection />
  </div>
</template>

<script>
import Navbar from './components/navbar.vue';
import SkillsSection from './components/skillsSection.vue';
import ServicesSection from './components/servicesSection.vue';
import ProcessSection from './components/processSection.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    SkillsSection,
    ServicesSection,
    ProcessSection,
  },
};
</script>
