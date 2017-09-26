<script>
    export default {
        name:'Cart',
        data(){
            return{
                qrcodeShow:false
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
            <transition name="slide-fade">
                <div class="absolute qrcode"  v-if="qrcodeShow">
                    <div class="col-md-4 col-sm-4 ali-qrcode">
                        <img src="../assets/alipay.jpg" alt="支付宝二维码" class="img-responsive">
                    </div>
                    <div class="col-md-4 col-sm-4 we-qrcode">
                        <img src="../assets/wepay.jpg" alt="微信二维码" class="img-responsive">
                    </div>
                </div>
            </transition>
            <div class="panel-footer">
                <button class="btn btn-danger btn-block" @click="qrcodeShow = !qrcodeShow">结算 <span class="glyphicon glyphicon-circle-arrow-right"></span></button>
            </div>
        </div>
        <div class="cart-empty" v-else>
            <span>购物车是空的</span>
        </div>
    </div>
</template>
<style>
    .panel{
        position: relative;
    }
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
    .qrcode{
        top:0;
        background-color: rgba(33,33,33,.5);
        display: flex;
        flex-flow: row;
        justify-content: space-around;
        align-items: center;
    }
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateY(10px);
        opacity: 0;
    }
</style>
