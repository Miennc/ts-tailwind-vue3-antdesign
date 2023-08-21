<script lang="ts" setup>
import type {DataAdd} from "@/interfaces/DataAdd.ts";
import {demoServices} from "@/services/demoServices";
import {computed, onBeforeMount, onMounted, ref, watch} from "vue";
import iconClose from '@/assets/images/cms/account/admin/icon_close.svg'
import FormAdmin from "@/components/form/cms/account/FormAdmin.vue";
import {adminStore} from "@/stores/cms/account/admin.store.ts";
import FormDelAdmin from "@/components/form/cms/account/FormDelAdmin.vue";

const storeAdmin = adminStore();
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

const showModalAddAdmin = () => {
  storeAdmin.setIdAdmin(0);
  storeAdmin.setOpenModalAddAdmin(true);
};

const modalEditAdmin = (id: number) => {
  storeAdmin.setOpenModalAddAdmin(true);
  storeAdmin.setIdAdmin(id);
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


      <div>
        <button @click="showModalAddAdmin"
                class="w-[120px] h-[40px] rounded-[32px] bg-[#1D223E] text-[#FFFFFF] font-[500] text-[14px] leading-[20px] outline-none cursor-pointer">
          관리자 추가하기
        </button>
      </div>

    </div>

    <div class="overflow-hidden border border-gray-200 rounded-[20px] " style="border: 1px solid #ECEFF2">
      <table class="table-auto min-w-full">
        <thead class="bg-[#F6F9FC]">
        <tr>
          <th
              class="px-[10px] py-4 text-left text-sm  font-medium text-[#6E6F73] font-[500] text-[12px] "
              scope="col"
              style="border-left: 1px solid #ECEFF2"
          >
            이름
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
            loe@leolap.com
          </td>
          <td
              class="whitespace-nowrap  px-[10px] py-[20px] text-sm font-medium text-[#1E1E1E] font-[500] text-[14px]"
              style="border: 1px solid #ECEFF2"
          >
            010-0003-0303
          </td>
          <td
              @click="modalEditAdmin(2)"
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


  <FormAdmin/>
  <FormDelAdmin/>

</template>


