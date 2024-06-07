<template>
    <div class=" flex flex-col justify-around items-center ">
      <div class="h-14 w-full flex justify-around items-center border-b hover:border-transparent duration-200 border-mainPurple hover:bg-PurpleHover cursor-pointer">
        <div
          class="h-[40px] duration-200 border-transparent hover:border-mainYellow border-2 cursor-pointer min-w-[40px] min-h-[40px] w-[40px] overflow-hidden rounded-full flex justify-center items-center"
        >
          <img src="/assets/img/105168081.jpeg" alt="" />
        </div>
        <div class="flex flex-col justify-between w-[250px]">
          <h3 class="font-semibold text-balance text-sm">
            {{ name.length > 20 ? `${name.slice(0, 16)}...` : name }}
          </h3>
          <h5 class="font-light text-balance text-xs">
            {{ massage.length > 44 ? `${massage.slice(0, 44)}...` : massage }}
          </h5>
        </div>
        <div
          class="text-xs flex flex-col text-gray-300 justify-between items-center w-[50px]"
        >
          <span class="font-medium">today</span>
          <h3>90:25</h3>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
let name = "mohamed hamidate";
let massage = "mohamed hamidate the noob thing  noob thing hhhhh";
</script>

<style scoped>

</style>