<script>
    import Nav from '@/components/Nav.vue'
    import SmallChatBox from '@/components/SmallChatBox.vue'
    export default {
        name: 'App',
        data(){
            return {

            }
        },
        computed: {

        },
        components:{
            'cart-nav':Nav,
            'small-chat-box':SmallChatBox
        }
    }
</script>
<template>
    <div id="root">
        <cart-nav></cart-nav>
        <small-chat-box></small-chat-box>
        <router-view></router-view>
    </div>
</template>
<style>

</style>
