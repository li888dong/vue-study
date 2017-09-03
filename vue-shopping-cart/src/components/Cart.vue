<script>
  export default {
    name:'Cart',
    data(){
      return{

      }
    },
    computed: {
      cart () {
        return this.$store.getters.cart
      }
    },
    methods:{
        removeItem:function (index) {
          this.$store.dispatch('REMOVE_ITEM',index)
        }
    }
  }
</script>
<template>
  <div id="cart" class="cart  col-md-offset-2 col-sm-offset-2 col-md-8 col-sm-8">
    <div class="panel panel-danger" v-if="cart.length">
      <div class="panel-heading">
        <span class="glyphicon glyphicon-shopping-cart"></span> 购物车
        <span class="pull-right"><strong>总计：{{cart.price}}</strong></span>
      </div>
      <div class="panel-body cart-detail">
        <ul>
          <li v-for="(item, index) in cart">
            <span class="pomegranage glyphicon glyphicon-remove-circle" @click="removeItem(index)"></span>
            <span>Apple/苹果 iPhone6s</span>
            <span class="label label-success" v-text="item.type"></span>
            <span class="label label-danger" v-text="item.count"></span>
            <span class="cart-price pomegranage pull-right" v-text="item.price"></span>
          </li>
        </ul>
      </div>
      <div class="panel-footer">
        <button class="btn btn-danger btn-block">结算 <span class="glyphicon glyphicon-circle-arrow-right"></span></button>
      </div>
    </div>
    <div class="cart-empty" v-else>
      <span>购物车是空的</span>
    </div>
  </div>
</template>
<style>
  .cart ul {
    padding: 0;
  }

  .cart ul> li {
    list-style: none;
    padding: 4px 8px;
  }

  .cart-empty {
    padding: 100px;
    border-radius: 4px;
    border: 2px dashed rgb(170, 170, 170);
  }
  .pomegranage {
    color: #c0392b;
    cursor: pointer;
  }
</style>
