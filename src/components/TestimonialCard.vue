<template>
    <div class=" bg-white p-6 rounded-lg border border-pink-400 shadow-lg ">
        <h2 class="text-xl font-bold text-slate-800 mb-2">
            Amazing Results with Katlin's Premium Web Design Services.
        </h2>
        <p class="mt-4 leading-relaxed text-slate-600 italic">
            "{{ testimonial }}"
        </p>
        <div class="flex items-center mt-6">
            <img :src="image" class="h-16 w-16 rounded-full border-2 border-pink-400" alt="Client Image"/>
            <div class="ml-4">
                <h3 class="uppercase tracking-wider font-semibold text-pink-400">{{ name }}</h3>
                <p class="text-slate-600">{{ position }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            required: true,
        },
        testimonial: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
