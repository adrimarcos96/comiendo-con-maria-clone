<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { TeamWorker } from '@/models/teamWorker'
import LinkedInIcon from '@/assets/icons/linked-in-icon.svg'
import EmailIcon from '@/assets/icons/email-icon.svg'
import StaffGridItemComponent from './StaffItemComponent.vue'

const staff = ref<TeamWorker[]>([])

onMounted(() => {
  fetchStaffData()
})

const fetchStaffData = (): void => {
  staff.value = [
    {
      name: 'María Merino',
      jobRole: 'Dietista & Nutricionista (CAT396)',
      jobDescriptions: [
        'Pérdida de peso, cambio de hábitos <strong>y educación nutricional.</strong>',
        'Dietoterapia para <strong>alteraciones metabólicas,</strong> dislipemias.'
      ],
      specialty: 'Especializada en <strong>psiconutrición</strong> y <strong>TCA</strong>: trastorno por atracón, anorexia, bulimia…',
      contactMeLinks: [
        { name: 'LinkedIn', icon: LinkedInIcon, url: '#', backgroundColor: '#0d66c2' },
        { name: 'Email', icon: EmailIcon, url: '#', backgroundColor: '#f0f0f0' }
      ],
      isReserved: true,
      imageUrl: 'https://www.comiendoconmaria.com/wp-content/uploads/2024/04/maria-web-150x150.png'
    },
    {
      name: 'Carlota Hijosa',
      jobRole: 'Dietista & Nutricionista (CAT1951)',
      jobDescriptions: [
        'Pérdida de peso, cambio de hábitos <strong>y educación nutricional.</strong>',
        'Planificación familiar y coaching nutricional.'
      ],
      specialty: 'Especializada en <strong>patología digestiva, intolerancias</strong> y <strong>alergias alimentarias.</strong>',
      contactMeLinks: [
        { name: 'LinkedIn', icon: LinkedInIcon, url: '#', backgroundColor: '#0d66c2' },
        { name: 'Email', icon: EmailIcon, url: '#', backgroundColor: '#f0f0f0' }
      ],
      isReserved: true,
      imageUrl: 'https://www.comiendoconmaria.com/wp-content/uploads/2024/04/carlota-web-150x150.png'
    },
    {
      name: 'Valentina Esteban',
      jobRole: 'Dietista & Nutricionista (CAT2371)',
      jobDescriptions: [
        'Pérdida de peso, cambio de hábitos <strong>y educación nutricional.</strong>',
        'Dietoterapia en <strong>fertilidad</strong>, <strong>salud hormonal</strong> y <strong>diabetes.</strong>'
      ],
      specialty: 'Especializada en nutrición <strong>obesidad</strong> y <strong>alteraciones hormonales</strong>: tiroides, amenorrea, SOP, menopausia…',
      contactMeLinks: [
        { name: 'LinkedIn', icon: LinkedInIcon, url: '#', backgroundColor: '#0d66c2' },
        { name: 'Email', icon: EmailIcon, url: '#', backgroundColor: '#f0f0f0' }
      ],
      isReserved: false,
      imageUrl: 'https://www.comiendoconmaria.com/wp-content/uploads/2024/04/valentina-150x150.png'
    },
    {
      name: 'Mónica Espinosa',
      jobRole: 'Dietista & Nutricionista (CAT2117)',
      jobDescriptions: [
        'Pérdida de peso, cambio de hábitos <strong>y educación nutricional.</strong>',
        'Dietoterapia para <strong>alteraciones metabólicas,</strong> dislipemias.'
      ],
      specialty: 'Especializada en <strong>obesidad</strong> y <strong>TCA</strong>: trastorno por atracón, anorexia, bulimia…',
      contactMeLinks: [
        { name: 'LinkedIn', icon: LinkedInIcon, url: '#', backgroundColor: '#0d66c2' },
        { name: 'Email', icon: EmailIcon, url: '#', backgroundColor: '#f0f0f0' }
      ],
      isReserved: true,
      imageUrl: 'https://www.comiendoconmaria.com/wp-content/uploads/2024/04/monica-web-150x150.png'
    },
    {
      name: 'Lorena Villa',
      jobRole: 'Dietista & Nutricionista (CAT2306)',
      jobDescriptions: [
        'Pérdida de peso, cambio de hábitos <strong>y educación nutricional.</strong>',
        'Dietoterapia para <strong>alteraciones hormonales</strong>.'
      ],
      specialty: 'Especializada en <strong>salud femenina</strong>: menopausia, SOP, endometriosis, post-parto, cambios hormonales…',
      contactMeLinks: [
        { name: 'LinkedIn', icon: LinkedInIcon, url: '#', backgroundColor: '#0d66c2' },
        { name: 'Email', icon: EmailIcon, url: '#', backgroundColor: '#f0f0f0' }
      ],
      isReserved: true,
      imageUrl: 'https://www.comiendoconmaria.com/wp-content/uploads/2024/04/lorena-web-150x150.png'
    }
  ]
}
</script>

<template>
  <div class="w-full mb-8">
    <div class="w-full flex flex-row justify-center">
      <span class="font-body text-tertiary text-2xl mb-5">Dietistas & Nutricionistas</span>
    </div>

    <div class="w-full grid grid-cols-1 min-[767px]:grid-cols-3 gap-10">
      <template v-for="(teamWorker, index) in staff" :key="`worker-${index}`">
        <StaffGridItemComponent
          :name="teamWorker.name"
          :jobRole="teamWorker.jobRole"
          :jobDescriptions="teamWorker.jobDescriptions"
          :specialty="teamWorker.specialty"
          :contactMeLinks="teamWorker.contactMeLinks"
          :is-reserved="teamWorker.isReserved"
          :imageUrl="teamWorker.imageUrl"
        />
      </template>
    </div>
  </div>
</template>

<style scoped lang="css"></style>
