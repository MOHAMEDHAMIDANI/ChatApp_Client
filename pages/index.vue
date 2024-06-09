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
              <div class=" capitalize w-[75%] h-[85%] flex flex-col justify-evenly items-start">
                <h3 class="text-sm font h-5  w-full font-normal overflow-hidden">mohamed hamidani</h3>
                <span class="text-green-400 text-xs font-medium  w-full capitalize"> online </span>
              </div>
            </div>
          </div>
          <div class=" w-[20%] h-[90%]">
            <ul class="w-full h-full flex justify-around items-center *:text-mainPurple *:cursor-pointer ">
              <li class="hover:text-PurpleHover border-2 rounded-full border-transparent hover:border-mainYellow duration-200 "><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38"/></svg></li>
              <li class="hover:text-PurpleHover border-2 p-1 rounded-full border-transparent hover:border-mainYellow duration-200 "> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h12q.825 0 1.413.588T18 6v4.5l4-4v11l-4-4V18q0 .825-.587 1.413T16 20z"/></svg></li>
              <li class="hover:text-PurpleHover border-2 rounded-full border-transparent hover:border-mainYellow duration-200 "><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="3.75" d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"/></svg></li>
            </ul>
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