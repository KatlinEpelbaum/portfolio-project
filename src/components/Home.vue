<template>
  <section class="flex flex-col h-screen bg-[url(./src/img/background.jpg)] bg-center">
    <Header />
    <div class="flex flex-row justify-center items-center flex-grow">
      <h1 class="text-white text-6xl md:text-9xl text-center mb-6">
        <span style="font-family: 'Nippo', sans-serif;">Web Designer</span> & 
        <span style="font-family: 'Nippo', sans-serif;">Developer</span>
      </h1>
    </div>
  </section>
</template>
<script>
import Header from './Header.vue';

  export default {
    components: {
      Header, 
    },
  };
</script>




