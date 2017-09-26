<script>
    export default {
        name: 'Login',
        data(){
            return {
                username:'',
                password:''
            }
        },
        computed: {

        },
        methods:{
            login:function () {
                this.$router.push('/goodList')
            }
        },
        components:{

        }
    }
</script>
<template>
    <div class="middle-box text-center loginscreen gray-bg ">
        <div>
            <div>

                <h1 class="logo-name">LD</h1>

            </div>
            <h3>欢迎</h3>

            <form class="m-t" role="form" onsubmit="return false">
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="用户名" required="" v-model="username">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="密码" required="" v-model="password">
                </div>
                <button type="submit" class="btn btn-primary block full-width m-b" @click="login()">登 录</button>


                <p class="text-muted text-center"> <a href="#"><small>忘记密码了？</small></a> | <router-link to="register" tag="a">注册一个新账号</router-link>
                </p>

            </form>
        </div>
    </div>

</template>
<style>
    /* ERROR & LOGIN & LOCKSCREEN*/
    .gray-bg {
        color: #a7aaab;
    }
    .middle-box {
        max-width: 400px;
        z-index: 100;
        margin: 0 auto;
        padding-top: 40px;
    }

    .lockscreen.middle-box {
        width: 200px;
        padding-top: 110px;
    }

    .loginscreen.middle-box {
        width: 300px;
    }

    .loginColumns {
        max-width: 800px;
        margin: 0 auto;
        padding: 100px 20px 20px 20px;
    }

    .passwordBox {
        max-width: 460px;
        margin: 0 auto;
        padding: 100px 20px 20px 20px;
    }

    .logo-name {
        color: #e6e6e6;
        font-size: 180px;
        font-weight: 800;
        letter-spacing: -10px;
        margin-bottom: 0px;
    }

    .middle-box h1 {
        font-size: 170px;
    }

    .wrapper .middle-box {
        margin-top: 140px;
    }

    .lock-word {
        z-index: 10;
        position: absolute;
        top: 110px;
        left: 50%;
        margin-left: -470px;
    }

    .lock-word span {
        font-size: 100px;
        font-weight: 600;
        color: #e9e9e9;
        display: inline-block;
    }

    .lock-word .first-word {
        margin-right: 160px;
    }
</style>
