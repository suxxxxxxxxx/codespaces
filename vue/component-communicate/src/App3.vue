<template>
    <div>
      <Head @add="add"></Head>
      <List :lists="lists"></List>
    </div>
  </template>
  
  <script>
  import Head from '@/components/body3/Head.vue'
  import List from '@/components/body3/List.vue'
  
  export default {
    components: {
      Head,
      List
    },
    data() {
      return {
        lists: ['html', 'css'],
        message: ''
      }
    },
    methods: {
      add(message) {
        this.lists.push(message);
      }
    }
  }
  </script>
  
  <style lang="css" scoped>
  </style>
  