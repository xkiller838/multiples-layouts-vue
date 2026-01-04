<template>
    <Header/>
    <div class="text-dark flex flex-col min-h-screen bg-[#f0f3f9]">
        <slot />
    </div>
</template>

<script setup>
import Header from '@/components/header.vue'
</script>

<style lang="scss" scoped></style>