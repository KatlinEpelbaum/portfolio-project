<template>
    <section class="flex flex-row space-x-6 pl-12 pr-12 pb-10 text-slate-800">
      <ServiceCard
        number="01"
        title="Web Design"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        buttonText="About Web Design"
        shadowClass="shadow-shadow1"
      />
      
      <ServiceCard
        number="02"
        title="Development"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        buttonText="About Development"
        shadowClass="shadow-shadow2"
      />
  
      <ServiceCard
        number="03"
        title="SEO Optimization"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        buttonText="About SEO"
        shadowClass="shadow-shadow3"
      />
    </section>
  </template>
  
  <script>
  import ServiceCard from './serviceCard.vue';
  
  export default {
    name: 'ServicesSection',
    components: {
      ServiceCard,
    },
  };
  </script>
  

  