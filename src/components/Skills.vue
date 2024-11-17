<template>
  <section class="flex flex-col p-6 md:p-20">
    <div class="relative overflow-hidden">
      <div class="flex animate-marquee w-max">
        <div class="flex">
          <i
            v-for="skill in skills"
            :key="skill"
            :class="[ 
              `devicon-${skill}-plain`,
              'text-6xl md:text-8xl text-pink-400',
              'mx-8'  
            ]"
          ></i>
        </div>
        <div class="flex">
          <i
            v-for="skill in skills"
            :key="'repeat-' + skill"
            :class="[ 
              `devicon-${skill}-plain`,
              'text-6xl md:text-8xl text-pink-400',
              'mx-8'  
            ]"
          ></i>
        </div>
      </div>
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
