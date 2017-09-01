<script>
  export default {
    name:'Nav',
    data(){
      return{
        totalItem:'2'
      }
    }
  }
</script>
<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="nav-header">
        <a href="#" class="nav-brand" router-link="{path:'/'}">Shopping Cart</a>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link to="index" tag="li">iPhone 6S <span></span></router-link>
          <router-link to="cart" tag="li">购物车<span class="badge text-danger" v-text="totalItem" v-if="totalItem"></span></router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style media="screen">
  .text-danger {
    color: #fff;
    background-color: #d9534f;
  }
</style>
