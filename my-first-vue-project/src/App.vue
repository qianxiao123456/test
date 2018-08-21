<template>
  <div id="app">
    <router-view></router-view>
    <foot></foot>
  </div>
</template>
<script>
  import foot from "@/components/footmenu";
  export default {
    name: 'App',
    components:{
//      子组件的注册方式
    foot:foot
    }
  }
</script>
<style scoped>

</style>

