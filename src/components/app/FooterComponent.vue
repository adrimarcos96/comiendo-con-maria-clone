<script setup lang="ts">
import type { NavigationOption } from '@/models/navigationOption.interface'
import TikTokIcon from '@/assets/icons/tik-tok-icon.svg'
import YouTubeIcon from '@/assets/icons/youtube-icon.svg'

interface SocialMediaItem {
  name: string
  icon: string
  url: string
}
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
  },
]

const socialMediaList: SocialMediaItem[] = [
  { name: 'TikTok', icon: TikTokIcon, url: '#' },
  { name: 'YouTube', icon: YouTubeIcon, url: '#' },
]
</script>

<template>
  <div class="w-full max-w-5xl bg-yellow py-[15px] px-[30px] min-[850px]:px-10 mx-auto">
    <div id="footer-nav-bar" class="flex flex-wrap justify-center items-center text-center mb-[1.4rem]">
      <template v-for="(option, index) in footerNavBarOptions">
        <span v-if="index !== 0" class="mx-2 mb-2">.</span>
        <RouterLink :to="option.url" class="font-body text-accent hover:text-dark-grey">
          {{ option.label }}
        </RouterLink>
      </template>
    </div>

    <div id="footer-social-media" class="flex flex-wrap justify-center items-center">
      <a v-for="socialMedia in socialMediaList" :href="socialMedia.url" class="social-media-item h-8 px-3 flex flex-row items-center justify-center mx-2">
        <img :src="socialMedia.icon" :alt="socialMedia.name" class="social-media-icon size-[26px] mx-2" />
        <span class="social-media-name text-accent text-[15px] font-body">{{ socialMedia.name }}</span>
      </a>
    </div>
  </div>
</template>

<style scoped lang="css">
  a.social-media-item:hover img.social-media-icon {
    width: 30px;
    height: 30px;
  }

  a.social-media-item:hover span.social-media-name {
    font-size: 18px;
  }
</style>
