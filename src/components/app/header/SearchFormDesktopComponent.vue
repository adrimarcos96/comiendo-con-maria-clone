<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { XMarkIcon } from '@heroicons/vue/24/solid'
import { useHeaderSearchFormStore } from '@/stores/headerSearchForm'

const searchFromStore = useHeaderSearchFormStore()
const { searchInputValue } = storeToRefs(searchFromStore)

const emits = defineEmits<{
  'close-search-form': [value: void],
  'change-search-value': [value: string],
}>()

const handleCloseButtonClick = (event: Event) => {
  event.preventDefault()

  searchFromStore.clearSearchInputValue()
  emits('close-search-form')
}

const handleChangeSearchInput = (value: string) => {
  searchFromStore.setSearchInputValue(value)
  emits('change-search-value', value)
}
</script>

<template>
  <form id="search-form-desktop" class="w-full">
    <div class="w-full h-[60px] flex flex-row justify-end items-center">
      <input
        id="search-input-desktop"
        type="text"
        :value="searchInputValue"
        class="w-full h-full font-normal font-body text-accent bg-[#f7f8f9] border-[#f7f8f9] ring-0 focus:border-[#f7f8f9] border-2 rounded-[4px] py-[10px] pl-[15px] pr-16"
        autocomplete="false"
        @input="event => handleChangeSearchInput(event.target?.value)"
      />
      <button
        id="search-input-close-button"
        class="absolute h-full flex flex-row items-center px-5"
        @click="handleCloseButtonClick"
      >
        <XMarkIcon class="size-[18px] font-bold text-primary" />
      </button>
    </div>
  </form>
</template>

<style scoped lang="css"></style>
