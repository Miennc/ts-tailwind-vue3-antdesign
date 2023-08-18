<template>
  <a-modal :open="true" @ok="handleSubmit" style="width: 407px">
    <div class="mt-[30px] flex justify-start items-center gap-x-[8px] pb-[40px]">
      <!-- ... (phần mã HTML khác giữ nguyên) ... -->
    </div>

    <form>
      <div>
        <div class="pb-[8px] font-[700] text-[14px] text-[#343436]">
          <label for="name">이름 </label>
        </div>
        <input
            v-model="formState.name"
            type="text"
            id="name"
            name="name"
            placeholder="김현지"
            class="w-full pl-[16px] rounded-[8px] h-[46px] placeholder:font-[700] placeholder:text-[#343436] outline-none"
            :class="stateError.name ? 'border-red-500' : '' "
            style="border: 1px solid #CCCFD3"
        />
        <div class="text-red-500 text-[12px] mt-1">{{ stateError.name }}</div>
      </div>
    </form>
  </a-modal>
</template>

<script setup lang="ts">
import {reactive, ref, watch} from 'vue';

interface formState {
  name: string;
}

interface stateError {
  name: string;
}

const formState = reactive<formState>({
  name: '',
});
const stateError = reactive({
  name: '',
})
const openModalAddAdmin = ref<boolean>(false);


watch(formState, () => {
  stateError.name = formState.name ? '' : '이름을 입력하세요.';
});


const validate = () => {
  stateError.name = formState.name ? '' : '이름을 입력하세요.';
  return !stateError.name;
};

const handleSubmit = () => {
  if (validate()) {
    console.log('done');
  } else {
    console.log('error')
  }
};
</script>

<style>
.border-red-500 {
  border-color: #e53e3e !important;
}
</style>
