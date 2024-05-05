import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useHeaderSearchFormStore = defineStore('headerSearchForm', () => {
  const _searchInputValue = ref<string>('')

  const searchInputValue = computed<string>(() => _searchInputValue.value)

  const setSearchInputValue = (value: string) =>  _searchInputValue.value = value

  const clearSearchInputValue = () =>  _searchInputValue.value = ''

  return {
    searchInputValue,
    setSearchInputValue,
    clearSearchInputValue
  }
})
