<template>
    <section class="flex flex-col p-20">
      <div class="flex flex-row justify-between pl-12 pr-12 ">
        <i v-for="skill in skills" :key="skill" :class="`devicon-${skill}-plain text-pink-400 text-8xl`"></i>
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
  