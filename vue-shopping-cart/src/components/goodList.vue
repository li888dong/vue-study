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
  <div>

  </div>
</template>
<style>

</style>
