import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import Cart from '@/components/Cart.vue'
import GoodList from '@/components/GoodList.vue'

Vue.use(Router)

export default new Router({
    routes: [
    {
        path: '/index',
        name: 'Index',
        component: Index
    },
    {
        path:'/cart',
        name:'Cart',
        component: Cart
    },
    {
        path:'/goodList',
        name:'GoodList',
        component:GoodList
    },
    {
        path:'*',
        redirect:'/goodList'
    }
    ]
})
