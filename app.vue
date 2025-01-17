<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!--DONT REMOVE IS GOOD FOR SEO AND ACCESIBILITY-->
    <NuxtRouteAnnouncer />
  </div>
</template>
<script setup lang="ts">
useHead({
  title: 'Mastermind 3.0',
  meta: [{ name: 'description', content: 'Nuxtermind' }],
  bodyAttrs: {
    class: 'test',
  },
  script: [{ innerHTML: "console.log('Welcome to Nuxtermind!!!')" }],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.svg' }],
})
useSeoMeta({
  title: 'Nuxtermind',
  ogTitle: 'Nuxtermind',
  description:
    'Nuxtermind is modern version of the mastermind/secret code game with a touch of some modern features. Players will be allowed to choose a character and release powers during the gameplay. A timer will be alwys set and online torunament mode will be availble so that it is possible to play online in real time.',
  ogDescription:
    'Nuxtermind is modern version of the mastermind/secret code game with a touch of some modern features. Players will be allowed to choose a character and release powers during the gameplay. A timer will be alwys set and online torunament mode will be availble so that it is possible to play online in real time.',
  ogImage: '/public/icon.svg',
  twitterCard: 'summary_large_image',
})
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
