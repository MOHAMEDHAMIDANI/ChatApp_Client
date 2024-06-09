<template>
  <MainLay>
    <div class="grid grid-cols-11">
      <ContactSlide />
      <div class="col-start-4 flex flex-col items-center col-end-13 shadow-lg rounded-lg justify-self-center w-[90%] max-h-[650px] h-[650px] py-5 mt-10">
        <div class="w-full h-14  px-5 flex items-center justify-between ">
          <div class="  w-[20%] h-[90%] flex justify-evenly items-center">
            <div class=" w-full flex justify-between items-center h-full">
              <div class="size-9 rounded-full relative">
                <span class="absolute size-2 bg-green-500 top-0.5 right-0.5 rounded-full"></span>
                <img src="/assets/img/105168081.jpeg" alt="" class="rounded-full">
              </div>
              <div class=" capitalize w-[75%] h-full flex flex-col justify-evenly items-start">
                <h3 class="text-sm font h-5  w-full font-normal overflow-hidden">mohamed hamidani</h3>
                <span class="text-xs font-medium text-slate-500 w-full capitalize"> online </span>
              </div>
            </div>
          </div>
          <div class="bg-mainYellow w-[30%] h-[90%]">
            <button></button>
                <button></button>
                <button></button>
          </div>
        </div>
        <hr class="w-[95%] border-[1.5px] border-slate-200 rounded-full">
        <div>

        </div>
        <div>

        </div>
      </div>
    </div>
  </MainLay>
</template>

<script setup lang="ts">
import MainLay from '~/layouts/MainLay.vue';
</script>

<style scoped>

</style>
