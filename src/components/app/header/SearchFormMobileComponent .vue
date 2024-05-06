<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useHeaderSearchFormStore } from '@/stores/headerSearchForm'

const searchFromStore = useHeaderSearchFormStore()
const { searchInputValue } = storeToRefs(searchFromStore)

const emits = defineEmits<{
  'change-search-value': [value: string]
}>()

const handleChangeSearchInput = (value: string): void => {
  searchFromStore.setSearchInputValue(value)
  emits('change-search-value', value)
}
</script>

<template>
  <form id="search-form-mobile" class="w-full">
    <input
      id="search-input-mobile"
      type="text"
      :value="searchInputValue"
      class="w-full h-[60px] font-normal font-body opacity-90 text-accent bg-[#f7f8f9] border-accent border-2 rounded-[4px] py-[10px] px-[15px]"
      autocomplete="false"
      @input="event => handleChangeSearchInput(event.target?.value)"
    />
  </form>
</template>

<style scoped lang="css"></style>
