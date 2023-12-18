<template>
    <div>
        <Head ></Head>
        <List ></List>
    </div>
  </template>
  
  <script>
  import Head from '@/components/body4/Header.vue'
  import List from '@/components/body4/List.vue'
  
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
}
  </script>
  
  <style lang="css" scoped>
  </style>
  