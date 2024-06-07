<template>
    <div class="w-screen h-screen bg-mainWhite grid grid-cols-12">
        <div class="col-span-1  justify-self-center content-center min-h-full">
            <NavVer />
        </div>
        <div class="col-span-full">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>