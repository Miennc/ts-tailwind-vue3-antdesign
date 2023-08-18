<template>
  <div class="w-full px-[24px] py-[32px] relative ">
    <button
        @click="handleIsOpen"
        class="w-full flex cursor-pointer justify-between items-center bg-[#1D223E] h-[50px] text-white rounded-[12px] outline-none"
        style="border: 2px solid #333851;"
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
      <!--      <ul class="py-1">-->
      <!--        <li v-for="(itemDropdown,index) in dataSelect" :key="index">-->
      <!--          <a-->
      <!--              href="#"-->
      <!--              class="block px-4 py-2 hover:bg-gray-100 text-black"-->
      <!--              @click="handleItemClick(itemDropdown)"-->
      <!--          >-->
      <!--            {{ itemDropdown.name }}-->
      <!--          </a>-->
      <!--        </li>-->
      <!--      </ul>-->


      <div class="px-[20px] py-[20px]">
        <div class="flex justify-start items-center gap-[8px]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4 18C4 15.7909 5.79086 14 8 14H16C18.2091 14 20 15.7909 20 18V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V18Z"
                stroke="#424345" stroke-width="2" stroke-linejoin="round"/>
            <circle cx="12" cy="7" r="3" stroke="#424345" stroke-width="2"/>
          </svg>
          <div class="text-[#424345] font-[700] text-[14px]">
            내 프로필
          </div>
        </div>

        <div class="text-[#A1A5AA] font-[500] text-[14px] py-[8px]">
          <div>
            김지민
          </div>
          <div class="my-[6px]">
            loe@leolap.com
          </div>
          <div>
            관리자
          </div>
        </div>
        <div class="bg-[#F6F9FC] h-[7px] absolute left-0  right-0">

        </div>

        <div class="flex justify-start items-center gap-[8px] py-[10px]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 16C16.7337 16 21 16 21 16" stroke="#A1A5AA" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path d="M5 20C11.2484 20 21 20 21 20" stroke="#A1A5AA" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M14.2408 4.47305C14.8715 3.84231 15.8941 3.84232 16.5249 4.47305L17.527 5.47515C18.1577 6.10588 18.1577 7.1285 17.527 7.75924L9.58097 15.7052C9.38688 15.8993 9.14654 16.0407 8.88262 16.1161L5.88237 16.9733C5.64065 17.0424 5.38051 16.975 5.20276 16.7972C5.025 16.6195 4.95759 16.3594 5.02665 16.1177L5.88387 13.1174C5.95927 12.8535 6.10069 12.6131 6.29478 12.419L14.2408 4.47305Z"
                  stroke="#A1A5AA" stroke-width="2"/>
            <path d="M13 6L16 9" stroke="#A1A5AA" stroke-width="2"/>
          </svg>
          <div class="font-[500] text-[14px] text-[#A1A5AA]">
            프로필 편집
          </div>
        </div>

        <div class="bg-[#F6F9FC] h-[7px] absolute left-0  right-0">

        </div>

        <div class="pt-[20px] ">
          <div class="flex rounded-[20px] cursor-pointer  justify-start items-center  w-[110px] h-[40px] bg-[#F6F9FC]">
            <div class="p-[10px]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16 17L21 12M21 12L16 7M21 12H9M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                    stroke="#FF453A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

            <div class="font-[500] text-[14px] pr-[5px] text-[#FF453A]">
              로그아웃
            </div>
          </div>
        </div>

      </div>

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
