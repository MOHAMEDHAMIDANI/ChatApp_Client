<template>
  <MainLay>
    <div class="grid grid-cols-11">
      <div class="col-start-1 col-end-4 flex justify-between flex-col  w-full max-h-[650px] h-[650px] py-5 mt-10">
        <div>
          <Search />
        </div>
        <div>
          <Group />
        </div>
        <div>
          <Person />
        </div>
      </div>
    </div>
  </MainLay>
</template>

<script setup lang="ts">
import MainLay from '~/layouts/MainLay.vue';
</script>

<style scoped></style>
