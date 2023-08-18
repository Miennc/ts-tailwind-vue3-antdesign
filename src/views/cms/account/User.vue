<script lang="ts" setup>
import type {DataAdd} from "@/interfaces/DataAdd.ts";
import {demoServices} from "@/services/demoServices";
import {computed, onBeforeMount, onMounted, ref, watch} from "vue";
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


    <div class="overflow-hidden border border-gray-200 rounded-[20px] " style="border: 1px solid #ECEFF2">
      <table class="table-auto min-w-full">
        <thead>
        <tr>
          <th
              class="px-[10px] py-4 text-left text-sm  font-medium text-[#6E6F73] font-[500] text-[12px] "
              scope="col"
              style="border-left: 1px solid #ECEFF2"
          >
            NO
          </th>
          <th
              class="px-[10px] py-4 text-left text-sm  font-medium text-[#6E6F73] font-[500] text-[12px]"
              scope="col"
              style="border-left: 1px solid #ECEFF2"
          >
            NO
          </th>
          <th
              class="px-[10px] py-4 text-left text-sm  font-medium text-[#6E6F73] font-[500] text-[12px]"
              scope="col"
              style="border-left: 1px solid #ECEFF2"
          >
            NO
          </th>
          <th
              class="px-[10px] py-4 text-left text-sm  font-medium text-[#6E6F73] font-[500] text-[12px]"
              scope="col"
              style="border-left: 1px solid #ECEFF2"
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
            vfvf
          </td>
          <td
              class="whitespace-nowrap  px-[10px] py-[20px] text-sm font-medium text-[#1E1E1E] font-[500] text-[14px]"
              style="border: 1px solid #ECEFF2"
          >
            vfvf
          </td>
          <td
              class="whitespace-nowrap  px-[10px] py-[20px] text-sm font-medium text-[#1E1E1E] font-[500] text-[14px]"
              style="border: 1px solid #ECEFF2"
          >
            vfvf
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

  <div>
    <a-pagination v-model:current="current1" show-quick-jumper :total="500" @change="onChange" />
  </div>


</template>


