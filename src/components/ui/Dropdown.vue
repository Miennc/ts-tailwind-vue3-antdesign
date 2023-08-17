<template>
  <div class="w-full px-[24px] py-[32px] relative ">
    <button
        @click="handleIsOpen"
        class="w-full flex cursor-pointer justify-between items-center bg-[#1D223E] h-[50px] text-white rounded-[12px] outline-none border-2 border-[#333851]"
    >
      <div class="ml-[16px]">
        김지민 <span class="text-[#A2A5AA]">님</span>
      </div>
      <div class="mr-[16px]">
        <svg
            class="w-4 h-4 ml-2 transform transition-transform duration-200"
            :class="{ 'rotate-180': isOpen }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </button>
    <div
        v-if="isOpen"
        class="absolute z-[999999999] mt-2 bg-white rounded-lg shadow-md w-[190px]"
    >
      <ul class="py-1">
        <li v-for="(itemDropdown,index) in dataSelect" :key="index">
          <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 text-black"
              @click="handleItemClick(itemDropdown)"
          >
            {{ itemDropdown.name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue'

const isOpen = ref(false)
const dataSelect = ref([
  {
    name: 'item1',
  },
  {
    name: 'item2',
  },
  {
    name: 'item3',
  },
  {
    name: 'item4',
  },
])

const handleClickOutside = (event) => {
  if (!isOpen.value) return

  const dropdownElement = event.target.closest('.relative')

  if (!dropdownElement) {
    isOpen.value = false
  }
}

const handleIsOpen = () => {
  isOpen.value = !isOpen.value
}

const handleItemClick = (item) => {
  // Do something with the selected item
  console.log(item.name) // For example, log the selected item's name
  isOpen.value = false
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside)
})
</script>

<style>
.rotate-180 {
  transform: rotate(180deg);
}
</style>
