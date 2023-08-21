<template>
  <a-modal :open="storeAdmin.openModalDelAdmin" :footer="false" style="width: 288px">
    <div class="mt-[30px] flex justify-start items-center gap-x-[8px] ">
      <div class="flex justify-center gap-x-[8px] items-center">
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M16 5L15.133 17.142C15.0971 17.6466 14.8713 18.1188 14.5011 18.4636C14.1309 18.8083 13.6439 19 13.138 19H4.862C4.35614 19 3.86907 18.8083 3.49889 18.4636C3.1287 18.1188 2.90292 17.6466 2.867 17.142L2 5M1 5H17H1ZM6 5V2C6 1.73478 6.10536 1.48043 6.29289 1.29289C6.48043 1.10536 6.73478 1 7 1H11C11.2652 1 11.5196 1.10536 11.7071 1.29289C11.8946 1.48043 12 1.73478 12 2V5H6ZM7 9V15V9ZM11 9V15V9Z"
              stroke="#343436" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <div class="font-[700] text-[20px] text-[#343436]">
          정말 삭제하시겠어요?
        </div>
      </div>
    </div>
    <div class="text-[#343436] text-center font-[500] text-[16px] mt-[16px] mb-[40px]">
      다시 되돌릴 수 없어요.
    </div>

    <div class="flex justify-center items-center gap-x-[8px]">

      <button
          style="border: 1px solid #CCCFD3"
          @click="handleCancel"
          class="font-[500] text-[#6E6F73] bg-[#ffffff] cursor-pointer outline-none border-none  text-[16px] w-[77px] h-[48px] rounded-[32px]">
        취소
      </button>

      <button
          class="font-[700] flex  cursor-pointer justify-center outline-none border-none gap-x-[10px] items-center text-[#FFFFFF] bg-[#FF453A] text-[16px] w-[106px] h-[48px] rounded-[32px]"
          type="primary">
        삭제하기
      </button>


    </div>
  </a-modal>


</template>

<script lang="ts" setup>
import {reactive, ref, watch} from 'vue';
import {formState, stateError} from '@/interfaces/cms/account/Admin.ts';
import {adminStore} from "@/stores/cms/account/admin.store.ts";

const storeAdmin = adminStore();


const handleCancel = () => {
  storeAdmin.setOpenModalDelAdmin(false)
}


</script>

<style scoped>

</style>