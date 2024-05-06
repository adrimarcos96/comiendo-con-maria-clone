<script setup lang="ts">
import StaffGridComponent from '@/components/teamDietPlan/staffGrid/StaffGridComponent.vue'

const descriptionTexts: string[] = [
  'Esta visita consiste en una entrevista para conocer al paciente y obtener toda la información necesaria sobre su historia clínica, dietética, rutinas, horarios, preferencias, aversiones, capacidades culinarias, objetivos… para poder proponer un tratamiento dietético 100% personalizado.',
  'El tratamiento dependerá de cada persona pero siempre cubre las necesidades expuestas y se adapta a cada paciente de forma personalizada.',
  'Elige al dietista & nutricionista que se adapte mejor a tu objetivo.'
]
</script>

<template>
  <div class="max-w-[1000px] w-full h-full mx-auto p-[30px] md:pt-[5px] md:px-10 md:pb-10">
    <!-- Page title -->
    <span class="font-body text-[42px] text-tertiary">Plan dietético</span>

    <!-- Page description -->
    <div id="page-description" class="w-full mt-[2em]">
      <p
        v-for="(text, index) in descriptionTexts"
        :key="`description-text-${index}`"
        class="text-base text-center text-tertiary font-body mb-[23px]"
      >
        {{ text }}
      </p>

      <p id="description-note" class="text-sm text-center text-tertiary font-body mb-5">
        *Los horarios variarán en función del profesional
      </p>
    </div>

    <!-- Staff grid -->
    <div id="staff-list" class="w-full">
      <StaffGridComponent />
    </div>
  </div>
</template>

<style scoped lang="css"></style>
