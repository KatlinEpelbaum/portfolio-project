<template>
  <section class="flex flex-col p-20">
    <div class="flex flex-row justify-between px-12">
      <i 
        v-for="skill in skills" 
        :key="skill" 
        :class="[ 
          `devicon-${skill}-plain`,
          'text-8xl',
          'animate-swirl',  
          'transition-colors',  
          'duration-1000'       
        ]"
      ></i>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  data() {
    return {
      skills: [
        'javascript',
        'python',
        'tailwindcss',
        'mysql',
        'vuejs',
        'php',
        'git',
        'figma',
      ],
    };
  },
};
</script>