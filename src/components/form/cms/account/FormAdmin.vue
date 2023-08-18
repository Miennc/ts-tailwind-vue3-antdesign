<template>
  <a-modal :open="storeAdmin.openModalAddAdmin" :footer="false" style="width: 407px">
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
      <button @click="handleCancel"
              class="font-[500] text-[#6E6F73]  cursor-pointer outline-none border-none  text-[16px] w-[77px] h-[48px] rounded-[32px]">
        취소
      </button>
      <div>
        <button
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
      </div>

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

const openModalAddAdmin = ref<boolean>(false);

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

const handleCancel = () => {
  storeAdmin.setOpenModalAddAdmin(false);
};

</script>

<style>
.border-red-500 {
  border-color: #e53e3e !important;
}
</style>
