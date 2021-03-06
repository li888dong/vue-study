import Vue from 'vue';
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex);
const state = {
    iPhone6S: {
        name: 'Apple/苹果 iPhone 8',
        desc: '3D Touch、1200万像素照片、4k视频，强大功能于一身。',
        price: '5288 - 6888',
        isSelected: true,
        style: {
            '银色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
            '深空灰色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gray-select-2015.png',
            '金色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gold-select-2015.png',
            '玫瑰金色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-rosegold-select-2015.png'
        },
        activePrice:'',
        activeStorage:'',
        activeStyle:'',
        count:0,
        activeStyleUrl: 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
        storage: {
            '16GB': 5288,
            '64GB': 6088,
            '128GB': 6888
        }
  },
  cart: []
};
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters:{
        iPhone6S: state => {
          return state.iPhone6S
        },
        cart: state => {
          return state.cart
        }
    }
})
