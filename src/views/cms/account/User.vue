<script lang="ts" setup>
import type {DataAdd} from "@/interfaces/DataAdd.ts";
import {demoServices} from "@/services/demoServices";
import {computed, onBeforeMount, onMounted, ref, watch} from "vue";
import iconClose from '@/assets/images/cms/account/admin/icon_close.svg'
const current1 = ref<number>(1);

const addDemo = async () => {
  const newData: DataAdd = {
    name: 'test',
    content: 'test',
  };
  await demoServices.addDemo(newData)
};

const onChange = (pageNumber: number) => {
  console.log('Page: ', pageNumber);
};

</script>

<template>

  <div class="relative ">
    <div class="bg-[#ffffff] py-[28px] text-[#343436] font-[700] text-[24px] ">
      사용자 관리
    </div>
    <div class="h-[2px]  absolute left-[-30px] right-[-30px] bg-[#ECEFF2]">

    </div>

    <div class="bg-[#ffffff] py-[28px] text-[#343436] font-[700] text-[20px] ">
      사용자 목록
    </div>


    <div class="flex justify-between items-center mb-[20px]">
      <div class="w-[327px] h-[48px] relative">
        <input type="text"
               class="w-full h-full  rounded-[8px] outline-none pl-[16px] placeholder:text-[#A1A5AA] placeholder:font-[500]"
               placeholder="관리자를 검색해주세요"
               style="border: 1px solid #CCCFD3"
        >
        <div class="absolute right-[20px] top-[0.9rem]">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M19 19L14.6569 14.6569M14.6569 14.6569C16.1046 13.2091 17 11.2091 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17C11.2091 17 13.2091 16.1046 14.6569 14.6569Z"
                stroke="#343436" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        </div>
      </div>


    </div>

    <div class="overflow-hidden border border-gray-200 rounded-[20px] " style="border: 1px solid #ECEFF2">
      <table class="table-auto min-w-full">
        <thead>
        <tr>
          <th
              class="px-[10px] py-4 text-left text-sm  font-medium text-[#6E6F73] font-[500] text-[12px] "
              scope="col"
              style="border-left: 1px solid #ECEFF2"
          >
            이름/닉네임
          </th>
          <th
              class="px-[10px] py-4 text-left text-sm  font-medium text-[#6E6F73] font-[500] text-[12px]"
              scope="col"
              style="border-left: 1px solid #ECEFF2"
          >
            생년월일
          </th>
          <th
              class="px-[10px] py-4 text-left text-sm  font-medium text-[#6E6F73] font-[500] text-[12px]"
              scope="col"
              style="border-left: 1px solid #ECEFF2"
          >
            성별
          </th>
          <th
              class="px-[10px] py-4 text-left text-sm  font-medium text-[#6E6F73] font-[500] text-[12px]"
              scope="col"
              style="border-left: 1px solid #ECEFF2"
          >
            이메일
          </th>

          <th
              class="px-[10px] py-4 text-left text-sm  font-medium text-[#6E6F73] font-[500] text-[12px]"
              scope="col"
              style="border-left: 1px solid #ECEFF2"
          >
            전화번호
          </th>

          <th
              class="px-[10px] py-4 text-left text-sm  font-medium text-[#6E6F73] font-[500] text-[12px]"
              scope="col"
              style="border-left: 1px solid #ECEFF2"
          >
            관리자
          </th>
          <th
              class="px-[10px] py-4 text-left text-sm  font-medium text-[#6E6F73] font-[500] text-[12px]"
              scope="col"

          >
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            class="border-b bg-white transition duration-300 ease-in-out "
        >
          <td
              class="whitespace-nowrap  px-[10px] py-[20px] text-sm font-medium text-[#1E1E1E] font-[500] text-[14px]"
              style="border: 1px solid #ECEFF2"
          >
            <!--                {{ totalElements - 10 * (currentPage - 1) - indexDevice }}-->
            김현지
          </td>
          <td
              class="whitespace-nowrap  px-[10px] py-[20px] text-sm font-medium text-[#1E1E1E] font-[500] text-[14px]"
              style="border: 1px solid #ECEFF2"
          >
            1993.03.03
          </td>
          <td
              class="whitespace-nowrap  px-[10px] py-[20px] text-sm font-medium text-[#1E1E1E] font-[500] text-[14px]"
              style="border: 1px solid #ECEFF2"
          >
            여성
          </td>
          <td
              class="whitespace-nowrap  px-[10px] py-[20px] text-sm font-medium text-[#1E1E1E] font-[500] text-[14px]"
              style="border: 1px solid #ECEFF2"
          >
            loe@leolap.com
          </td>
          <td
              class="whitespace-nowrap  px-[10px] py-[20px] text-sm font-medium text-[#1E1E1E] font-[500] text-[14px]"
              style="border: 1px solid #ECEFF2"
          >
            010-0003-0303
          </td>
          <td
              class="whitespace-nowrap  px-[10px] py-[20px] text-sm font-medium text-[#1E1E1E] font-[500] text-[14px]"
              style="border: 1px solid #ECEFF2"
          >
            <svg width="150" height="60" viewBox="0 0 150 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="30" r="11" fill="#FFC53E"/>
              <path d="M26.4843 29.6167C27.1621 30.3177 27.5 31.1021 27.5 31.9735C27.4776 32.9745 27.0848 33.8122 26.3215 34.4866C25.5582 35.161 24.6321 35.5 23.5411 35.5H19.0144C18.2104 35.5 17.7402 35.3101 17.6038 34.9303C17.5346 34.7599 17.5 34.5008 17.5 34.1494V25.8204C17.5 25.5808 17.5081 25.4051 17.5265 25.2951C17.5427 25.1851 17.5977 25.0555 17.6893 24.9046C17.8501 24.6349 18.2979 24.5 19.0327 24.5H23.3701C24.4265 24.5 25.3099 24.8195 26.0203 25.4601C26.7652 26.1115 27.1397 26.8906 27.1397 27.8011C27.1397 28.4613 26.9219 29.0665 26.4864 29.6167H26.4843ZM24.453 31.8227C24.453 31.5831 24.4204 31.3932 24.3594 31.253C24.2963 31.1128 24.1904 31.0134 24.0418 30.953C23.8118 30.8732 23.4902 30.8324 23.077 30.8324C22.6639 30.8324 22.3545 30.7631 22.1469 30.6229C21.9413 30.4827 21.8375 30.1952 21.8375 29.7604C21.8375 29.3256 21.9433 29.0381 22.155 28.8979C22.3667 28.7577 22.7208 28.6884 23.2134 28.6884C23.6714 28.6884 23.9482 28.5837 24.0398 28.3725C24.0744 28.2625 24.0907 28.0833 24.0907 27.833C24.0907 27.5828 23.995 27.4088 23.8057 27.3077C23.6164 27.2083 23.3315 27.1568 22.9529 27.1568H20.5429V32.8449H23.3661C24.0886 32.8449 24.4509 32.5042 24.4509 31.8245L24.453 31.8227Z" fill="white"/>
              <path d="M63.275 25.332H68.847V26.522H63.275V25.332ZM65.053 28.244H66.495V31.436H65.053V28.244ZM68.273 25.332H69.715V26.06C69.715 26.928 69.715 28.202 69.393 29.84L67.965 29.686C68.273 28.048 68.273 26.914 68.273 26.06V25.332ZM71.227 24.366H72.711V33.97H71.227V24.366ZM72.081 28.412H74.405V29.63H72.081V28.412ZM64.423 35.72H73.117V36.91H64.423V35.72ZM64.423 33.102H65.893V36.084H64.423V33.102ZM62.645 32.08L62.505 30.904C64.759 30.904 67.867 30.862 70.443 30.498L70.541 31.548C67.895 32.024 64.871 32.08 62.645 32.08ZM84.1099 24.352H85.5799V37.176H84.1099V24.352ZM75.7379 32.934H76.8299C79.0279 32.934 80.8899 32.85 83.0459 32.486L83.1999 33.676C80.9879 34.054 79.0839 34.138 76.8299 34.138H75.7379V32.934ZM75.7099 25.5H81.6739V30.246H77.2219V33.382H75.7379V29.07H80.1899V26.69H75.7099V25.5ZM90.4268 26.284H91.5888V28.076C91.5888 30.834 90.1468 33.662 87.9908 34.726L87.1508 33.564C89.1108 32.626 90.4268 30.218 90.4268 28.076V26.284ZM90.7208 26.284H91.8828V28.076C91.8828 30.064 93.1288 32.332 95.0888 33.242L94.2628 34.404C92.1068 33.368 90.7208 30.694 90.7208 28.076V26.284ZM87.6268 25.64H94.5848V26.858H87.6268V25.64ZM95.8448 24.366H97.3148V37.162H95.8448V24.366ZM96.9788 29.406H99.3028V30.624H96.9788V29.406ZM102.398 26.438H108.642V27.614H102.398V26.438ZM105.534 28.342C107.144 28.342 108.306 29.574 108.306 31.324C108.306 33.074 107.144 34.292 105.534 34.292C103.938 34.292 102.762 33.074 102.762 31.324C102.762 29.574 103.938 28.342 105.534 28.342ZM105.534 29.574C104.68 29.574 104.064 30.274 104.064 31.324C104.064 32.388 104.68 33.06 105.534 33.06C106.388 33.06 107.004 32.388 107.004 31.324C107.004 30.274 106.388 29.574 105.534 29.574ZM111.918 24.366H113.318V37.162H111.918V24.366ZM110.098 29.672H112.38V30.862H110.098V29.672ZM109.202 24.632H110.574V36.574H109.202V24.632ZM104.82 24.73H106.262V27.166H104.82V24.73ZM124.311 24.366H125.711V37.162H124.311V24.366ZM119.845 28.86H122.155V30.064H119.845V28.86ZM121.735 24.618H123.107V36.532H121.735V24.618ZM117.255 26.396H118.375V27.88C118.375 30.708 117.423 33.452 115.477 34.684L114.595 33.592C116.415 32.472 117.255 30.162 117.255 27.88V26.396ZM117.577 26.396H118.683V27.88C118.683 30.064 119.495 32.248 121.287 33.298L120.419 34.376C118.473 33.214 117.577 30.624 117.577 27.88V26.396ZM115.001 25.766H120.783V26.956H115.001V25.766Z" fill="#FF453A"/>
              <rect x="50.5" y="10.5" width="89.001" height="39" rx="19.5" stroke="#CCCFD3"/>
              <path d="M1 60V0H-1V60H1Z" fill="#ECEFF2" mask="url(#path-1-inside-1_1445_171)"/>
            </svg>



          </td>
          <td
              class="whitespace-nowrap cursor-pointer  px-[20px] py-[20px] text-sm font-medium text-[#1E1E1E] font-[500] text-[14px]"
              style="border: 1px solid #ECEFF2"
          >
            <div class="flex justify-end items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 16C16.7337 16 21 16 21 16" stroke="#A2A5AA" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M5 20C11.2484 20 21 20 21 20" stroke="#A2A5AA" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M14.2408 4.47305C14.8715 3.84231 15.8941 3.84232 16.5249 4.47305L17.527 5.47515C18.1577 6.10588 18.1577 7.1285 17.527 7.75924L9.58097 15.7052C9.38688 15.8993 9.14654 16.0407 8.88262 16.1161L5.88237 16.9733C5.64065 17.0424 5.38051 16.975 5.20276 16.7972C5.025 16.6195 4.95759 16.3594 5.02665 16.1177L5.88387 13.1174C5.95927 12.8535 6.10069 12.6131 6.29478 12.419L14.2408 4.47305Z"
                      stroke="#A2A5AA" stroke-width="2"/>
                <path d="M13 6L16 9" stroke="#A2A5AA" stroke-width="2"/>
              </svg>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="mt-[32px]">
    <a-pagination v-model:current="current1" :total="200" @change="onChange" :showSizeChanger="false"
                  :showTitle="true"/>
  </div>



</template>


