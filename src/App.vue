<template>
  <div>
    <Header /> 
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';  


export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
};
</script>
<style>
div {
  animation: fadeIn 0.5s ease-in-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

