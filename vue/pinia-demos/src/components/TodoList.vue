<template>
    <div>
      <ul>
        <li v-for="todo in todos">
          {{ todo.txt }}
        </li>
        <button type="button" @click="addTodo">添加</button>
      </ul>
    </div>
  </template>
  
  <script setup>
  
  const props =  defineProps({
    todos:{
      type:Array
    },
    addTodo:{
      type:Function
    }
  })
  </script>
  
  <style scoped>
  
  </style>