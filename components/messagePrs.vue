<template>
  <div class="flex flex-col justify-around items-center rounded-lg overflow-hidden">
    <div
      class="h-14 w-full flex justify-around items-center  border-b hover:border-transparent duration-200 border-mainPurple hover:bg-PurpleHover cursor-pointer"
    >
      <div
        class="h-[40px] duration-200 border-transparent hover:border-mainYellow border-2 cursor-pointer min-w-[40px] min-h-[40px] w-[40px] overflow-hidden rounded-full flex justify-center items-center"
      >
        <img src="/assets/img/105168081.jpeg" alt="" />
      </div>
      <div class="flex flex-col justify-evenly h-11 w-[85%] ">
      <div class="flex h-5 items-center justify-between w-full">
        <h3 class="font-semibold text-balance text-sm h-full px-1">
          {{ name.length > 20 ? `${name.slice(0, 20)}...` : name }}
        </h3>
        <span class="text-xs text-center h-full text-slate-400">
            <span>today</span>, <span>8.02pm</span>
        </span>
      </div>
      <div class="flex h-5 items-center text-balance justify-between w-full ">
        <h3 class="font-light text-balance h-5 flex justify-start items-center overflow-hidden w-[90%] text-sm  px-1">
          {{ massage.length > 20 ? `${massage.slice(0, 33)}...` : massage }}
        </h3>
        <span v-if="true" :class=" read ? 'text-mainPurple' : 'text-slate-400'" class="text-xs text-center h-full text-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M15.493 6.935a.75.75 0 0 1 .072 1.058l-7.857 9a.75.75 0 0 1-1.13 0l-3.143-3.6a.75.75 0 0 1 1.13-.986l2.578 2.953l7.292-8.353a.75.75 0 0 1 1.058-.072m5.025.085c.3.285.311.76.025 1.06l-8.571 9a.75.75 0 0 1-1.14-.063l-.429-.563a.75.75 0 0 1 1.076-1.032l7.978-8.377a.75.75 0 0 1 1.06-.026" clip-rule="evenodd"/></svg>
        </span>
        <span v-if="false" class="text-[10px] font-medium size-5 flex justify-center items-center  text-mainBlack text-center bg-mainYellow rounded-full">
            {{ notify }}
        </span>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let name = "mohamed hamidate";
let massage = "mohamed hamidate the noob thing  noob thing hhhhh";
let bool = false ;
let read = true ; ;
let notify = 99 ;


</script>

<style scoped></style>
