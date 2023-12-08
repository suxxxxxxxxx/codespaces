<script setup>
import  Menu  from '@/components/layout/menu/Menu.vue'
import Header from '@/components/layout/header/Header.vue'
</script>

<template>
  <!-- <div class="w-56 h-56 bg-green-500"></div> -->
  <!-- 原子性 -->
  <div class="w-screen h-screen flex items-stretch overflow-hidden">
    <div class="w-56 h-screen flex-shrink-0">
      <Menu>
        
      </Menu>
    </div>
    <div class="flex-1 flex flex-col">
      <div class="h-14">
        <Header></Header>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
