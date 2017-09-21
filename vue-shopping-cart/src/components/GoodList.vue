<script>
    export default {
        name:'goodList',
        data(){
            return{
                goodsInfo:[{
                    name:'iPhone 8',
                    price:'￥5888',
                    description:'Apple iPhone 8 (A1863) 64GB 金色 移动联通电信4G手机',
                    comments:['便宜好用'],
                    source:'京东Apple产品专营店',
                    market:'自营'
                },{
                    name:'iPhone 8',
                    price:'￥5888',
                    description:'Apple iPhone 8 (A1863) 64GB 金色 移动联通电信4G手机',
                    comments:['快递很快'],
                    source:'京东Apple产品专营店',
                    market:'自营'
                },{
                    name:'iPhone 8',
                    price:'￥5888',
                    description:'Apple iPhone 8 (A1863) 64GB 金色 移动联通电信4G手机',
                    comments:['手机垃圾'],
                    source:'京东Apple产品专营店',
                    market:'自营'
                },{
                    name:'iPhone 8',
                    price:'￥5888',
                    description:'Apple iPhone 8 (A1863) 64GB 金色 移动联通电信4G手机',
                    comments:[],
                    source:'京东Apple产品专营店',
                    market:'自营'
                }]
            }
        },
        computed: {
            cart () {
              return this.$store.getters.cart
            }
        },
        methods:{
            gotoIndex:function () {
                console.log(document.location.href.split('#')[1])
                this.$router.push('/index')
            }
        }
    }
</script>
<template>
    <div class="container" @click="gotoIndex()">
        <div class="row" id="list-container">
            <div class="col-md-2 col-md-offset-1"  v-for="goodInfo in goodsInfo">
                <img src="https://img10.360buyimg.com/n7/jfs/t9085/22/907696059/71305/93f88c62/59b85847N20776d8e.jpg" alt="iphone8">
                <div class="goodInfo">
                    <p><span class="red">{{goodInfo.name}}</span></p>
                    <p class="description">{{goodInfo.description}}</p>
                    <p class="comments">评价: <span>{{goodInfo.comments.length}}</span></p>
                    <p class="source">{{goodInfo.source}} <i class="glyphicon glyphicon-registration-mark"></i></p>
                    <p class="market"><i class="red">{{goodInfo.market}}</i></p>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .container{
        margin-left: 0;
    }
    img{
        margin: 0;
    }
    #list-container{
        width: 1440px;
    }
    #list-container>div{
        width: 220px;
        height: 400px;
        padding:0;
    }
    #list-container>div:hover{
        box-shadow: 0 0 10px #999;
        cursor: pointer;
    }
    .goodInfo{
        padding: 0 10px;
    }
    .red{
        color: #e4393c;
        font-weight: bold;
        font-size:14px;
    }
    .description{
        font-size:12px;
    }
</style>
