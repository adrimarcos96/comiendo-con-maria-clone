<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid'
import { useHeaderSearchFormStore } from '@/stores/headerSearchForm'
import SearchFormDesktopComponent from './SearchFormDesktopComponent.vue'
import SearchFormMobileComponent from './SearchFormMobileComponent .vue'
interface NavOption {
  label: string
  url: string
}

const navOptions: NavOption[] = [
  {
    label: 'Cursos',
    url: '#'
  },
  {
    label: 'Consulta',
    url: '#'
  },
  {
    label: 'Blog',
    url: '#'
  },
  {
    label: 'Newsletter',
    url: '#'
  },
  {
    label: 'Acceder',
    url: '#'
  }
]

const searchFromStore = useHeaderSearchFormStore()

const navOptionsDesktopRef = ref<HTMLElement>()
const showMobileNavLinks = ref<boolean>(false)
const showSearchForm = ref<boolean>(false)

onMounted(() => {
  console.log('width:', navOptionsDesktopRef.value?.clientWidth)
})

const handleClickMobileNavIcon = () => {
  showSearchForm.value = false
  showMobileNavLinks.value = !showMobileNavLinks.value
}

const handleClickSearchIcon = () => {
  showMobileNavLinks.value = false
  const newValue = !showSearchForm.value

  if (!newValue) {
    searchFromStore.clearSearchInputValue()
  }

  showSearchForm.value = newValue
}

const handleCloseSearchForm = () => showSearchForm.value = false

const handleChangeSearchValue = (searchValue: string) => {
  console.log(`Searching by keyword: ${searchValue}`)
}
</script>

<template>
  <div class="w-full py-[15px] px-[30px] min-[850px]:px-10">
    <div class="w-full flex max-xs:flex-wrap xs:flex-row items-center justify-between">
      <!-- Header image -->
      <div id="logo-container">
        <img src="@/assets/icons/logo.svg" alt="logo" class="w-[250px] h-10">
      </div>

      <div id="nav-options" class="h-[60px] flex flex-row justify-end max-xs:w-full">
        <div id="nav-options-desktop" class="h-full flex flex-col justify-center">
          <div ref="navOptionsDesktopRef" class="flex flex-row items-center">
            <!-- Navigation bar for desktop -->
            <div class="h-[60px] flex flex-row items-center max-md:hidden">
              <template v-for="option in navOptions">
                <RouterLink :to="option.url" class="h-full px-5 flex items-center font-body text-[15px] justify-center text-tertiary hover:text-primary">
                  {{ option.label }}
                </RouterLink>
              </template>
            </div>

            <!-- Search button for desktop and mobile -->
            <div class="h-[60px]">
              <button
                id="search-button"
                class="h-full flex flex-row items-center px-5"
                @click="handleClickSearchIcon"
              >
                <MagnifyingGlassIcon v-if="!showSearchForm" class="size-[18px] font-bold hover:text-primary" />
                <XMarkIcon v-else class="size-[18px] font-bold hover:text-primary" />
              </button>
            </div>
          </div>

          <!-- Search form for desktop -->
          <div v-if="showSearchForm" class="absolute max-md:hidden min-w-[521px]" :style="{width: `${navOptionsDesktopRef?.clientWidth || 0}px`, height: 'fit-content'}">
            <SearchFormDesktopComponent
              @close-search-form="handleCloseSearchForm"
              @change-search-value="handleChangeSearchValue"
            />
          </div>
        </div>

        <!-- Menu button for mobile -->
        <div class="h-full md:hidden">
          <button
            id="mobile-menu-button"
            class="h-full flex flex-row items-center px-5 bg-[#00000005]"
            @click="handleClickMobileNavIcon"
          >
            <Bars3Icon v-if="!showMobileNavLinks" class="size-[18px] font-bold hover:text-primary" />
            <XMarkIcon v-else class="size-[18px] font-bold hover:text-primary" />
          </button>
        </div>
      </div>
    </div>

    <!-- Search form and navigation bar for mobile -->
    <div v-if="showSearchForm || showMobileNavLinks" class="md:hidden w-full mt-6">
      <!-- Search form for mobile -->
      <template v-if="showSearchForm">
        <SearchFormMobileComponent
          @change-search-value="handleChangeSearchValue"
        />
      </template>

      <!-- Navigation bar for mobile -->
      <div
        id="nav-options-mobile"
        class="flex flex-col bg-[#00000005]"
        v-if="showMobileNavLinks"
      >
        <template v-for="option in navOptions">
          <RouterLink :to="option.url" class="h-[60px] px-5 flex items-center font-body text-[15px] justify-start text-tertiary hover:text-primary">
            {{ option.label }}
          </RouterLink>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
#search-button:hover img#search-icon {
  color: #84a212;
}
</style>
