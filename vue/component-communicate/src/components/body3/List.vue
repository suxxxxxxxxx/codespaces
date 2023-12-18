<template>
    <div class="body">
      <ul>
        <li v-for="(item, index) in lists" :key="index">{{ item }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
        lists: {
            type: Array,
            default: () => []
        }
    },
    computed: {
      list() {
        let list = ['html', 'css']
        lists.push(this.lists)
        return list
      }
    },
    data() {
      return {
        // lists: ['html', 'css']
      }
    },
  }
  </script>
  
  <style lang="scss" scoped>
  </style>
  