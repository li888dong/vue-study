<script>
    import Nav from '@/components/Nav.vue'
    export default {
        name: 'App',
        data(){
            return {

            }
        },
        computed: {

        },
        components:{
            'cart-nav':Nav
        }
    }
</script>
<template>
    <div id="root">
        <cart-nav></cart-nav>
        <router-view></router-view>
    </div>
</template>

