import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useHeaderSearchFormStore = defineStore('headerSearchForm', () => {
  const _searchInputValue = ref<string>('')

  const searchInputValue = computed<string>(() => _searchInputValue.value)

  const setSearchInputValue = (value: string): void => {
    _searchInputValue.value = value
  }

  const clearSearchInputValue = (): void => {
    _searchInputValue.value = ''
  }

  return {
    searchInputValue,
    setSearchInputValue,
    clearSearchInputValue
  }
})
