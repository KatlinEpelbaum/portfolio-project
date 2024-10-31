<template>
    <section class="py-8 px-4">
        <div class="text-center mb-8">
            <h1 class="text-5xl md:text-7xl lg:text-8xl pb-4 text-slate-800">
                What my <br><span style="font-family: 'Nippo', sans-serif;" class="italic">clients say</span>
            </h1>
            <p class="font-semibold text-slate-800 text-lg md:text-xl">
                See what my clients have to say about working with me and the <br class="hidden md:block"> results I helped them achieve.
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto p-8">
            <TestimonialCard 
                name="The Cat" 
                position="CEO of Whiskers" 
                testimonial="Katlin is a top-notch web designer who created a stunning website for my business. She was attentive to my needs and provided excellent customer service throughout the entire process. I highly recommend her services." 
                image="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
            />
            <TestimonialCard 
                name="The Cat 2" 
                position="CEO of Whiskers" 
                testimonial="Katlin is a top-notch web designer who created a stunning website for my business. She was attentive to my needs and provided excellent customer service throughout the entire process. I highly recommend her services." 
                image="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
            />
            <TestimonialCard 
                name="The Cat 3" 
                position="CEO of Whiskers" 
                testimonial="Katlin is a top-notch web designer who created a stunning website for my business. She was attentive to my needs and provided excellent customer service throughout the entire process. I highly recommend her services." 
                image="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
            />
            <TestimonialCard 
                name="The Cat 4" 
                position="CEO of Whiskers" 
                testimonial="Katlin is a top-notch web designer who created a stunning website for my business. She was attentive to my needs and provided excellent customer service throughout the entire process. I highly recommend her services." 
                image="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
            />
        </div>
    </section>
</template>

<script>
import TestimonialCard from './TestimonialCard.vue';

export default {
    components: {
        TestimonialCard,
    },
};
</script>


