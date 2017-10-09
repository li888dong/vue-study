<script>
    export default {
        name: 'Nav',
        data(){
            return {

            }
        },
        computed: {
            cart () {
                return this.$store.getters.cart
            }
        }
    }
</script>
<template>
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="index" class="navbar-brand" tag="a">购物车</router-link>
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only"><router-link to="index" tag="a">iPhone 6S </router-link></span>
                    <span class="sr-only"><router-link to="cart" tag="a">购物车<span class="badge text-danger" v-text="cart.length"
                                                                                  v-if="cart.length"></span></router-link></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="badge text-danger" v-text="cart.length"
                          v-if="cart.length" style="position: absolute;top: 0;"></span>
                </button>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li>
                        <router-link to="index" tag="a">iPhone 6S <span></span></router-link>
                    </li>
                    <li>
                        <router-link to="cart" tag="a">购物车<span class="badge text-danger" v-text="cart.length"
                                                              v-if="cart.length"></span></router-link>
                    </li>

                </ul>
                <ul class="nav navbar-nav pull-right">
                    <li>
                        <router-link to="login" tag="a">登陆</router-link>
                    </li>
                    <li>
                        <router-link to="register" tag="a">注册</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<style media="screen">
  body{
    padding-top: 80px;
  }
  .text-danger {
    color: #fff;
    background-color: #d9534f;
  }

  .navbar-nav li {
    cursor: pointer;
    padding: 0 4px;
  }

</style>
