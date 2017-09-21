<script>
    export default {
        name: 'Register',
        data(){
            return {

            }
        },
        computed: {

        },
        components:{

        }
    }
</script>
<template>
    <div class="middle-box text-center loginscreen   animated fadeInDown">
        <div>
            <div>

                <h1 class="logo-name">LD</h1>

            </div>
            <h3>欢迎注册</h3>
            <p>创建一个新账户</p>
            <form class="m-t" role="form" onsubmit="return false">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="请输入用户名" required="">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="请输入密码" required="">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="请再次输入密码" required="">
                </div>
                <div class="form-group text-left">
                    <div class="checkbox i-checks">
                        <label class="no-padding">
                            <input type="checkbox"><i></i> 我同意注册协议</label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary block full-width m-b">注 册</button>

                <p class="text-muted text-center"><small>已经有账户了？</small><router-link to="login">点此登录</router-link>
                </p>

            </form>
        </div>
    </div>
</template>
<style>
    /* ERROR & LOGIN & LOCKSCREEN*/

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
