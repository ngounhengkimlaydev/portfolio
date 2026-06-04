<template>
    <SectionHero />
    <LayoutLine />
    <div class="relative">
     <div class="rounded-full bg-blue-700 top-0 -right-52 w-80 h-[40rem] absolute blur-[200px]"></div>
    <SectionAbout />
   </div>
    <LayoutLine />
    <SectionService /> 
    <LayoutLine />
   <div class="relative">
     <div class="rounded-full bg-blue-700 top-0 -left-52 w-80 h-[40rem] absolute blur-[200px]"></div>
    <SectionWork />
   </div>
    <!-- Testimonials -->
    <SectionCta />
</template>
<script setup>
import { useSeoMeta } from '#imports'
useSeoMeta({
  title: "Ngoun Hengkimlay | Web Fullstack Developer",
  ogTitle: "Ngoun Hengkimlay | Web Fullstack Developer",
  description: "Portfolio of Ngoun Hengkimlay — Web Fullstack Developer creating responsive, efficient, and visually appealing web applications and websites.",
  ogDescription: "Explore the portfolio of Ngoun Hengkimlay, a Web Fullstack Developer specializing in fullstack web applications, UI/UX design, and custom web solutions.",
  ogImage: "/images/seo.png",
  twitterCard: "summary_large_image",
  twitterImage: "/images/seo.png",
})
</script>
