<template>
      <div class="body">
        <ul>
          <li v-for="(item,index) in lists" :key="index">{{item}}</li>
        </ul>
        <button>修改</button>
      </div>
</template>

<script>
    export default {
        props: ['lists'],
        methods:{
            changeProps(){
                
            }
        }
    }
</script>

<style lang="css" scoped>

</style>