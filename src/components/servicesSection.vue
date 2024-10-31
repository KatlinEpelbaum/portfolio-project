<template>
    <section class="flex flex-row space-x-6 pl-12 pr-12 pb-10 text-slate-800">
      <ServiceCard
        number="01"
        title="Web Design"
        description="Visually stunning web designs that captivate your audience by blending your brand voice and customer needs."
        buttonText="About Web Design"
        shadowClass="shadow-shadow1"
      />
      
      <ServiceCard
        number="02"
        title="Development"
        description="Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience."
        buttonText="About Development"
        shadowClass="shadow-shadow2"
      />
  
      <ServiceCard
        number="03"
        title="SEO Optimization"
        description="Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results."
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
  

  