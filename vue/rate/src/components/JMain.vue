<!-- view -->
<template>
    <div>
        JMain
        <div v-for="user in users">
            <Item :user="user" />
        </div>

    </div>
</template>

<script setup>
    import Item from './Item.vue'
    import { ref } from 'vue';
    //提供数据 ，模型
    //Model-View-ViewModel
    setTimeout(() =>{
        users.value = [...users.value, '红太狼']
    }, 2000)
    fetch('https://ztj8kh.laf.run/get-list')
        .then(res => res.json())
        .then(data => {
            users.value = data.data.map(item => item.txt)
        })
</script>

<style scoped>

</style>