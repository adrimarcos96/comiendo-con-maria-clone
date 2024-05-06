<script setup lang="ts">
import HeaderComponent from '@/components/app/header/HeaderComponent.vue'
import FooterComponent from '@/components/app/FooterComponent.vue'
</script>

<template>
  <div class="w-full min-h-screen h-screen bg-white flex flex-col">
    <HeaderComponent />

    <main id="content" class="grow">
      <router-view />
    </main>

    <FooterComponent />
  </div>
</template>

<style scoped lang="css">
</style>
