<template>
  <div class="container mx-auto h-screen flex justify-center items-center ">
    <div class="w-[727px] h-[543px] bg-[#ffffff]">
      <div>
        <div class="w-full flex justify-center pt-[83px]">
          <img src="@/assets/images/login/logo.svg" alt="">
        </div>
        <form class="flex pt-[60px]  justify-center items-center">
          <div class="w-full px-[200px] ">
            <div class="h-[63px] w-full  relative">
              <input
                  class="w-full rounded-[8px] h-full outline-none  pl-[56px] pt-[29px] placeholder:font-[500] placeholder:text-[#A1A5AA] placeholder:text-[16px]"
                  style="border: 1px solid #CCCFD3;"
                  type="text" id="input1" name="input1" placeholder="bee@beestation.com"
              />
              <div class="absolute left-[19px] top-5">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M3 5.75H21V18.5C21 18.6989 20.921 18.8897 20.7803 19.0303C20.6397 19.171 20.4489 19.25 20.25 19.25H3.75C3.55109 19.25 3.36032 19.171 3.21967 19.0303C3.07902 18.8897 3 18.6989 3 18.5V5.75Z"
                      stroke="#6E6F73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M21 5.75L12 14L3 5.75" stroke="#6E6F73" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="absolute left-[3.4rem] top-[12px] text-[#A1A5AA] text-[12px] font-[500]">
                이메일
              </div>

            </div>

            <div class="h-[63px] w-full mt-[24px] mb-[60px] relative">
              <input
                  class="w-full rounded-[8px] h-full outline-none border border-[#CCCFD3] pl-[56px] pt-[29px] placeholder:font-[500] placeholder:text-[#A1A5AA] placeholder:text-[16px]"
                  type="password" id="input1" name="input1" placeholder="• • • • • • • •"
                  style="border: 1px solid #CCCFD3;"
              />
              <div class="absolute left-[19px] top-5">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M8.73433 12.0156C8.15618 10.5735 8.09367 8.97605 8.55738 7.4932C9.02108 6.01034 9.98256 4.73307 11.2793 3.87727C12.576 3.02148 14.1285 2.63967 15.6742 2.79636C17.22 2.95306 18.6642 3.63865 19.7628 4.73726C20.8614 5.83588 21.547 7.28012 21.7037 8.82586C21.8604 10.3716 21.4786 11.9241 20.6228 13.2208C19.767 14.5175 18.4897 15.479 17.0069 15.9427C15.524 16.4064 13.9265 16.3439 12.4844 15.7657L12.4845 15.7656L11.25 17.0001H9V19.2501H6.75V21.5001H3V17.7501L8.7345 12.0156L8.73433 12.0156Z"
                      stroke="#6E6F73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path
                      d="M16.875 8.75C17.4963 8.75 18 8.24632 18 7.625C18 7.00368 17.4963 6.5 16.875 6.5C16.2537 6.5 15.75 7.00368 15.75 7.625C15.75 8.24632 16.2537 8.75 16.875 8.75Z"
                      fill="#6E6F73"/>
                </svg>

              </div>
              <div class="absolute left-[3.4rem] top-[12px] text-[#A1A5AA] text-[12px] font-[500]">
                이메일
              </div>

            </div>

            <div class="flex justify-center items-center">
              <button type="submit"
                      class="bg-[#FFC53E] cursor-pointer h-[60px] w-full text-center rounded-[16px] text-[3424345] font-[700] text-[16px] border border-none">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>