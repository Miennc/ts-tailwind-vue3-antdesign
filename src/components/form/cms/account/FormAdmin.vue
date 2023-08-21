<template>
  <a-modal :open="storeAdmin.openModalAddAdmin" :footer="false" style="width: 407px" :closeIcon="false"
           class="relative">

    <div class="flex justify-end items-center cursor-pointer absolute right-0 top-0 z-[999999999]"
         @click="handleCancel">
      <svg width="407" height="52" viewBox="0 0 407 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M365 32C365 26.4772 369.477 22 375 22C380.523 22 385 26.4772 385 32C385 37.5228 380.523 42 375 42C369.477 42 365 37.5228 365 32Z"
            fill="#CCCFD3"/>
        <path d="M379 28L371 35.9996M379 36L371 28.0004" stroke="white" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </div>

    <div class="mt-[30px] flex justify-start items-center gap-x-[8px] pb-[40px]">
      <!-- ... (phần mã HTML khác giữ nguyên) ... -->

      <div class="flex justify-start gap-x-[8px] items-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M4 18C4 15.7909 5.79086 14 8 14H16C18.2091 14 20 15.7909 20 18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18Z"
              fill="#343436"/>
          <circle cx="12" cy="7" r="3" fill="#343436"/>
        </svg>
        <div class="text-[#343436] font-[700] text-[20px]">
          관리자 추가하기
        </div>
      </div>

    </div>
    <form class="space-y-[16px]">
      <div>
        <div class="pb-[8px] font-[500] text-[14px] text-[#343436]">
          <label for="name">이름 </label>
        </div>
        <input
            v-model="formState.name"
            type="text"
            id="name"
            name="name"
            placeholder="김현지"
            class="w-full pl-[16px] rounded-[8px] h-[46px] placeholder:font-[500] placeholder:text-[#343436] outline-none"
            :class="stateError.name ? 'border-red-500' : '' "
            style="border: 1px solid #CCCFD3"
        />
        <div class="text-red-500 text-[12px] mt-1">{{ stateError.name }}</div>
      </div>


      <div>
        <div class="pb-[8px] font-[500] text-[14px] text-[#343436]">
          <label for="name">이메일 </label>
        </div>
        <input
            v-model="formState.email"
            type="text"
            id="name"
            name="name"
            placeholder="dfdk@naver.com"
            class="w-full pl-[16px] rounded-[8px] h-[46px] placeholder:font-[500] placeholder:text-[#343436] outline-none"
            :class="stateError.email ? 'border-red-500' : '' "
            style="border: 1px solid #CCCFD3"
        />
        <div class="text-red-500 text-[12px] mt-1">{{ stateError.email }}</div>
      </div>


      <div>
        <div class="pb-[8px] font-[500] text-[14px] text-[#343436]">
          <label for="name">전화번호 </label>
        </div>
        <input
            v-model="formState.phone"
            type="text"
            id="name"
            name="name"
            placeholder="010-0002-9234"
            class="w-full pl-[16px] rounded-[8px] h-[46px] placeholder:font-[500] placeholder:text-[#343436] outline-none"
            :class="stateError.phone ? 'border-red-500' : '' "
            style="border: 1px solid #CCCFD3"
        />
        <div class="text-red-500 text-[12px] mt-1">{{ stateError.phone }}</div>
      </div>


      <div>
        <div class="pb-[8px] font-[500] text-[14px] text-[#343436]">
          <label for="name">비밀번호 </label>
        </div>
        <input
            v-model="formState.password"
            type="text"
            id="name"
            name="name"
            placeholder="dkfk32323"
            class="w-full pl-[16px] rounded-[8px] h-[46px] placeholder:font-[500] placeholder:text-[#343436] outline-none"
            :class="stateError.password ? 'border-red-500' : '' "
            style="border: 1px solid #CCCFD3"
        />
        <div class="text-red-500 text-[12px] mt-1">{{ stateError.password }}</div>
      </div>

      <div>
        <div class="pb-[8px] font-[500] text-[14px] text-[#343436]">
          <label for="name">비밀번호 확인 </label>
        </div>
        <input
            v-model="formState.confirmPassword"
            type="text"
            id="name"
            name="name"
            placeholder="dkfk32323"
            class="w-full pl-[16px] rounded-[8px] h-[46px] placeholder:font-[500] placeholder:text-[#343436] outline-none"
            :class="stateError.confirmPassword ? 'border-red-500' : '' "
            style="border: 1px solid #CCCFD3"
        />
        <div class="text-red-500 text-[12px] mt-1">{{ stateError.confirmPassword }}</div>
      </div>
    </form>

    <div class="flex justify-end items-center gap-x-[8px]">
      <button
          style="border: 1px solid #CCCFD3"
          @click="handleCancel"
          class="font-[500] text-[#6E6F73] bg-[#ffffff] cursor-pointer outline-none border-none  text-[16px] w-[77px] h-[48px] rounded-[32px]">
        취소
      </button>

      <div>
        <button v-if="!storeAdmin.idAdmin"
                class="font-[700] flex  cursor-pointer justify-center outline-none border-none gap-x-[10px] items-center text-[#FFFFFF] bg-[#50AFC9] text-[16px] w-[138px] h-[48px] rounded-[32px]"
                type="primary"
                @click="handleSubmit">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1431_7787)">
              <path
                  d="M2.83252 11.9987C2.83252 6.93609 6.93658 2.83203 11.9992 2.83203C17.0618 2.83203 21.1659 6.93609 21.1659 11.9987C21.1659 17.0613 17.0618 21.1654 11.9992 21.1654C6.93658 21.1654 2.83252 17.0613 2.83252 11.9987Z"
                  stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.99902 11.8L10.9081 15L15.999 9" stroke="white" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_1431_7787">
                <rect width="22" height="22" fill="white" transform="translate(0.999023 1)"/>
              </clipPath>
            </defs>
          </svg>
          저장하기
        </button>


        <button v-else
                class="font-[700] flex  cursor-pointer justify-center outline-none border-none gap-x-[10px] items-center text-[#FFFFFF] bg-[#50AFC9] text-[16px] w-[138px] h-[48px] rounded-[32px]"
                type="primary"
                @click="handleEdit">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1431_7787)">
              <path
                  d="M2.83252 11.9987C2.83252 6.93609 6.93658 2.83203 11.9992 2.83203C17.0618 2.83203 21.1659 6.93609 21.1659 11.9987C21.1659 17.0613 17.0618 21.1654 11.9992 21.1654C6.93658 21.1654 2.83252 17.0613 2.83252 11.9987Z"
                  stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.99902 11.8L10.9081 15L15.999 9" stroke="white" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_1431_7787">
                <rect width="22" height="22" fill="white" transform="translate(0.999023 1)"/>
              </clipPath>
            </defs>
          </svg>
          ẻklgjergjero
        </button>
      </div>

    </div>

    <div @click="openModalDelAdmin" class="flex justify-end items-center mt-[26px] cursor-pointer"
         v-if="storeAdmin.idAdmin">
      <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M16 5L15.133 17.142C15.0971 17.6466 14.8713 18.1188 14.5011 18.4636C14.1309 18.8083 13.6439 19 13.138 19H4.862C4.35614 19 3.86907 18.8083 3.49889 18.4636C3.1287 18.1188 2.90292 17.6466 2.867 17.142L2 5M1 5H17H1ZM6 5V2C6 1.73478 6.10536 1.48043 6.29289 1.29289C6.48043 1.10536 6.73478 1 7 1H11C11.2652 1 11.5196 1.10536 11.7071 1.29289C11.8946 1.48043 12 1.73478 12 2V5H6ZM7 9V15V9ZM11 9V15V9Z"
            stroke="#FF453A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div class="text-[#FF453A] text-[14px] font-[500] ml-[8px]">관리자 삭제</div>
    </div>


  </a-modal>
</template>

<script setup lang="ts">
import {reactive, ref, watch} from 'vue';
import {formState, stateError} from '@/interfaces/cms/account/Admin.ts';
import {adminStore} from "@/stores/cms/account/admin.store.ts";

const storeAdmin = adminStore();


const formState = reactive<formState>({
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
});
const stateError = reactive<stateError>({
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
})

const fieldsToWatch = ['name', 'email', 'phone', 'password', 'confirmPassword'];

fieldsToWatch.forEach(field => {
  watch(() => formState[field], () => {
    stateError[field] = formState[field] ? '' : getErrorMessage(field);
  });
});

function getErrorMessage(field) {
  const fieldTitles = {
    name: '이름',
    email: '이메일',
    phone: '전화번호',
    password: '비밀번호',
    confirmPassword: '비밀번호 확인'
  };
  return `${fieldTitles[field]}을(를) 입력하세요.`;
}

const validate = () => {
  stateError.name = formState.name ? '' : '이름을 입력하세요.';
  stateError.email = formState.email ? '' : '이메일을 입력하세요.';
  stateError.phone = formState.phone ? '' : '전화번호를 입력하세요.';
  stateError.password = formState.password ? '' : '비밀번호를 입력하세요.';
  stateError.confirmPassword = formState.confirmPassword ? '' : '비밀번호를 입력하세요.';
  return !stateError.name && !stateError.email && !stateError.phone && !stateError.password && !stateError.confirmPassword;
};

const handleSubmit = (event) => {
  event.preventDefault();
  if (validate()) {
    console.log('done');
  } else {
    console.log('error')
  }
};

const handleEdit = (event) => {
  event.preventDefault();
  if (validate()) {
    console.log('done');
  } else {
    console.log('error')
  }
};


const openModalDelAdmin = () => {
  storeAdmin.setOpenModalAddAdmin(false);
  storeAdmin.setOpenModalDelAdmin(true);
};

const handleCancel = () => {
  storeAdmin.setOpenModalAddAdmin(false);
};

</script>

<style>
.border-red-500 {
  border-color: #e53e3e !important;
}

.ant-modal-close-x {
  display: none !important;
}
</style>
