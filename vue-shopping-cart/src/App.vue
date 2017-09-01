<script>
  import Nav from '@/components/Nav.vue'

  export default {
    name: 'Nav',
    data(){
      return {

      }
    },
    components:{
      'cart-nav':Nav
    }
  }
</script>
<template>
  <div id="nav">
    <cart-nav></cart-nav>
    <router-view></router-view>
  </div>

</template>

<style>
#nav {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
