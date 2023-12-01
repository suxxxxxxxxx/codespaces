<template>
    <div>
        用户名：{{ user }}
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    defineProps(['user'])
</script>

<style scoped>

</style>