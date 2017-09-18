<script>
  export default {
    name:'Index',
    data(){
      return{
        show:false
      }
    },
    computed: {
      iPhone6S () {
        return this.$store.getters.iPhone6S
      }
    },
    methods:{
        changeStyle:function (...args) {
          this.$store.dispatch('CHANGE_STYLE',args)
        },
        changePrice:function (...args) {
          this.$store.dispatch('CHANGE_PRICE',args)
        },
        countIncrease:function () {
          this.$store.dispatch('COUNT_INCREASE')
        },
        countDecrease:function () {
          this.$store.dispatch('COUNT_DECREASE')
        },
        addItem:function () {
          this.show = true;
          let that = this;
          setTimeout(function () {
            that.show = false;
          },10);
          this.$store.dispatch('ADD_ITEM')
        }
    }

  }
</script>
<template>
  <div class="container">
      <div class="row col-md-offset-1 col-sm-offset-2 col-md-10 col-sm-10">
          <div class="col-md-6 col-sm-8">
            <img :src="iPhone6S.activeStyleUrl" alt="iPhone6" class="img-responsive">
          </div>
          <transition name="addCart">
            <div class="col-md-6 col-sm-8 absolute" v-if="show">
              <img :src="iPhone6S.activeStyleUrl" alt="iPhone6" class="img-responsive">
            </div>
          </transition>
          <div class="detail col-md-6 col-sm-8">
            <h3 class="name"><span v-text="iPhone6S.name"></span></h3>
            <hr>
            <div class="options">
              <dl class="dl-horizontal">
                <dt>描述：</dt>
                <dd><span v-text="iPhone6S.desc"></span></dd>
              </dl>
              <dl class="dl-horizontal">
                <dt>价格：</dt>
                <dd class="pomegranage"><strong><span v-text="iPhone6S.price"></span></strong></dd>
              </dl>
              <dl class="option dl-horizontal">
                <dt>外观：</dt>
                <dd>
                  <ul>
                    <li v-for="(styleUrl,key) in iPhone6S.style"
                        @click="changeStyle(key,styleUrl)"
                        :class="{active:iPhone6S.activeStyleUrl === styleUrl}">
                        <span>{{key}}</span>
                    </li>
                  </ul>
                </dd>
              </dl>
              <dl class="option dl-horizontal">
                <dt>存储容量：</dt>
                <dd>
                  <ul>
                    <li v-for="(price,key) in iPhone6S.storage"
                        @click="changePrice(key,price)"
                        :class="{active:iPhone6S.price == price}">
                      <span>{{key}}</span>
                    </li>
                  </ul>
                </dd>
              </dl>
              <dl class="option dl-horizontal">
                <dt>
                  购买数量：
                </dt>

                <dd>
                  <div class="input-group">
                  <span class="btn input-group-addon" v-bind:class="{'btn-primary':iPhone6S.count!==1}" @click="countDecrease()">-</span>
                    <input id="count" type="text" class="form-control form-horizonal" v-model="iPhone6S.count">
                  <span class="btn btn-primary input-group-addon" @click="countIncrease()">+</span>
                  </div>
                </dd>
              </dl>
            </div>
            <hr>
            <button class="btn btn-danger btn-block" @click="addItem()" :disabled="iPhone6S.isSelected">
              <span class="glyphicon glyphicon-shopping-cart"></span>加入购物车
            </button>
          </div>
        </div>
      </div>
</template>
<style>
  .input-group{
    width: 120px;
  }
  .input-group input{
    text-align: center;
  }
  .input-group span{
    cursor: pointer;
  }
  .absolute{
    position: absolute;
  }
  .addCart-leave-active {
    animation: addCart 0.5s ease-out;
  }
  @keyframes addCart {
    0% {
      transform: scale(1) translate(0,0);
      transform-origin: left top;

    }
    100% {
      transform: scale(0) translate(-100px,-100px);
      transform-origin: left top;

    }
  }
  .pomegranage {
    color: #c0392b;
  }
  .detail dt {
    color: #95a5a6;
    width: 70px;
    padding: 4px 0;
  }
  .detail dd {
    margin-left: 64px;
    padding: 4px;
  }
  .option ul {
    padding: 0;
    list-style: none;
  }
  .option ul > li {
    float: left;
    margin-right: 4px;
    padding: 0 8px;
    border: 2px solid #eee;
  }
  .option ul > li:hover {
    border: 2px solid #c0392b;
    cursor: pointer;
  }
  .option ul .active {
    border: 2px solid #c0392b;
  }
</style>
