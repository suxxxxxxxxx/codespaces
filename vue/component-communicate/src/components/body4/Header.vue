<template>
    <div class="head">
      <input type="text" name="" v-model="message">
      <button >确定</button>
    </div>
  </template>
  
  <script>
  import {mapMutations} from 'vuex'
  export default {
    data() {
      return {
        message: ''
      }
    },
    mutations:{//methods
        submit() {
            this.listsAdd(message)
        },
        ...mapMutations(['listsAdd'])
    },
    
  }
  </script>
  
  <style lang="css" scoped></style>