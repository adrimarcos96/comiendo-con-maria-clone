<script setup lang="ts">
import type { NavigationOption } from '@/models/navigationOption.interface'
import type { SocialMediaItem } from '@/models/socialMediaItem'
import TikTokIcon from '@/assets/icons/tik-tok-icon.svg'
import YouTubeIcon from '@/assets/icons/youtube-icon.svg'

const footerNavBarOptions: NavigationOption[] = [
  {
    label: 'Blog',
    url: '#'
  },
  {
    label: 'Libro',
    url: '#'
  },
  {
    label: 'Contactar',
    url: '#'
  },
  {
    label: '¿Quién soy?',
    url: '#'
  },
  {
    label: 'Aparición',
    url: '#'
  },

  {
    label: '¿Quieres trabajar con nosotros?',
    url: '#'
  },
  {
    label: 'RGPD',
    url: '#'
  }
]
const socialMediaList: SocialMediaItem[] = [
  { name: 'TikTok', icon: TikTokIcon, url: '#' },
  { name: 'YouTube', icon: YouTubeIcon, url: '#' }
]
</script>

<template>
  <div class="w-full max-w-5xl bg-yellow pt-[15px] pb-5 px-5 min-[850px]:px-10 mx-auto">
    <!-- Links section -->
    <div id="footer-nav-bar" class="flex flex-wrap justify-center items-center text-center mb-[1.4rem]">
      <template v-for="(option, index) in footerNavBarOptions" :key="`link-${index}`">
        <span v-if="index !== 0" class="mx-2 mb-2">.</span>
        <RouterLink :to="option.url" class="font-body text-accent hover:text-dark-grey">
          {{ option.label }}
        </RouterLink>
      </template>
    </div>

    <!-- Social media section -->
    <div id="footer-social-media" class="flex flex-wrap justify-center items-center gap-4 mb-9">
      <div v-for="(socialMedia, index) in socialMediaList" :key="`footer-social-media-${index}`">
        <a
          :key="`social-media-${index}`"
          :href="socialMedia.url"
          class="social-media-item h-8 flex flex-row items-center justify-center"
        >
          <img :src="socialMedia.icon" :alt="socialMedia.name" class="social-media-icon size-[30px] mr-2" />
          <span class="social-media-name text-accent text-[15px] font-body">{{ socialMedia.name }}</span>
        </a>
      </div>
    </div>

    <!-- Copyright section -->
    <div id="copyright" class="flex flex-wrap justify-center mt-[102px]">
      <span class="font-body text-[15px] text-tertiary">2024 © Comiendo con María</span>
    </div>
  </div>
</template>

<style scoped lang="css">
  a.social-media-item:hover  {
    transform: scale(1.1);
    transition: transform 0.1s ease;
  }
</style>
