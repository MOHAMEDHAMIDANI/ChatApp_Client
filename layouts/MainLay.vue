<template>
    <div class="w-screen h-screen bg-WhiteBackground grid grid-cols-12">
        <div class="col-start-1 col-span-1  justify-self-center content-center h-screen min-h-full">
            <NavVer />
        </div>
        <div class="col-start-2 col-end-13">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>