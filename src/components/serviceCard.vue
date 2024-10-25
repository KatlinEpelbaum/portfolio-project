<template>
    <div :class="['flex flex-col bg-slate-50 p-6 rounded-lg border-2 border-pink-400', shadowClass]">
      <p class="text-xl font-bold" style="font-family: 'Nippo', sans-serif;">{{ number }}</p>
      <h2 class="text-2xl font-semibold">{{ title }}</h2>
      <p class="mt-2">{{ description }}</p>
      <div class="flex items-center mt-4">
        <button class="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500 transition">{{ buttonText }}</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ServiceCard',
    props: {
      number: String,
      title: String,
      description: String,
      buttonText: String,
      shadowClass: String,
    },
  };
  </script>
  