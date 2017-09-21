import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import Cart from '@/components/Cart.vue'
import GoodList from '@/components/GoodList.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'

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
        path:'/login',
        name:'Login',
        component:Login
    },
    {
        path:'/register',
        name:'Register',
        component:Register
    },
    {
        path:'*',
        redirect:'/goodList'
    }
    ]
})
