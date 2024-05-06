<script setup lang="ts">
import type { TeamWorker } from '@/models/teamWorker'

const props = defineProps<TeamWorker>()

const handleClickReserveButton = (): void => {
  console.log(`Reserving worker ${props.name}...`)
}
</script>

<template>
  <div class="border-2 border-primary w-full max-w-[703px] px-[5px] pt-5 pb-[15px]">
    <div class="w-full mb-[23px]">
      <div class="w-full flex flex-col items-center mb-[25px]">
        <div class="image-container w-full h-[150px] flex flex-row justify-center items-center">
          <img
            :src="imageUrl"
            :alt="name"
            class="rounded-full h-full"
          />
        </div>

        <span class="worker-name font-body text-[26px] text-tertiary">{{ name }}</span>
      </div>

      <div class="job-role w-full mb-[23px] flex flex-wrap justify-center">
        <em class="text-base font-body font-base text-tertiary italic">{{ jobRole }}</em>
      </div>

      <div class="job-description w-full mb-[23px]">
        <template
          v-for="(description, index) in jobDescriptions"
          :key="`job-description-${index}`"
        >
          <p v-html="description" class="text-tertiary font-body text-base text-center"></p>
        </template>
      </div>

      <div class="specialty w-full">
        <p v-html="specialty" class="text-tertiary font-body text-base text-center"></p>
      </div>
    </div>

    <div class="actions w-full flex flex-row justify-center mb-[15px]">
      <button
        v-if="isReserved"
        disabled
        class="flex flex-row justify-center bg-secondary text-white text-[25px] font-body rounded-[50px] py-[15px] px-5"
      >
        Agenda completa
      </button>
      <button
        v-else
        class="bg-accent text-white text-[25px] font-body rounded-[50px] py-[15px] px-5"
        @click="handleClickReserveButton"
      >
        Reservar
      </button>
    </div>

    <div class="item-footer w-full flex flex-row justify-center items-center gap-3">
      <div
        v-for="(contactMe, index) in contactMeLinks"
        :key="`worker-social-media-${index}`"
        class="flex flex-row justify-center items-center"
      >
        <a
          :key="`social-media-${index}`"
          :href="contactMe.url"
          class="social-media-item size-[36px] flex flex-row items-center justify-center rounded-full"
          :style="{ backgroundColor: contactMe.backgroundColor }"
        >
          <img :src="contactMe.icon" :alt="contactMe.name" class="social-media-icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
  a.social-media-item:hover  {
    transform: scale(1.1);
    transition: transform 0.1s ease;
  }
</style>
