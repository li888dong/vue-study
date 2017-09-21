<script>
    export default {
        name: 'SmallChatBox',
        data(){
            return {
                chatBoxShow:false,
                nowTime:new Date()
            }
        },
        computed: {

        },
        components:{

        }
    }
</script>
<template>
    <div>
        <transition name="chatBox">
            <div class="small-chat-box" v-if="chatBoxShow">

                <div class="heading" draggable="true">
                    <small class="chat-date pull-right">
                        {{nowTime.toLocaleDateString()}}
                    </small>
                    与 李栋  聊天中
                </div>

                <div class="content">

                    <div class="left">
                        <div class="author-name">
                            李栋 <small class="chat-date">
                            10:02
                        </small>
                        </div>
                        <div class="chat-message active">
                            你好
                        </div>

                    </div>
                    <div class="right">
                        <div class="author-name">
                            游客
                            <small class="chat-date">
                                11:24
                            </small>
                        </div>
                        <div class="chat-message">
                            你好，请问iphone有货吗？
                        </div>
                    </div>
                    <div class="left">
                        <div class="author-name">
                            李栋
                            <small class="chat-date">
                                08:45
                            </small>
                        </div>
                        <div class="chat-message active">
                            有，购买iphone现在特价
                        </div>
                    </div>
                    <div class="right">
                        <div class="author-name">
                            游客
                            <small class="chat-date">
                                11:24
                            </small>
                        </div>
                        <div class="chat-message">
                            那售后服务怎么样？
                        </div>
                    </div>
                    <div class="left">
                        <div class="author-name">
                            李栋
                            <small class="chat-date">
                                08:45
                            </small>
                        </div>
                        <div class="chat-message active">
                            1.终身保修,免费更换
                            <br>2.七天退换
                            <br>3.七重好礼
                        </div>
                    </div>


                </div>
                <div class="form-chat">
                    <div class="input-group input-group-sm">
                        <input type="text" class="form-control">
                        <span class="input-group-btn">
                            <button class="btn myGreen-btn" type="button">发送</button>
                        </span>
                    </div>
                </div>

            </div>
        </transition>
        <div id="small-chat" @click="chatBoxShow=!chatBoxShow">
            <span class="badge badge-warning pull-right">5</span>
            <a class="open-small-chat">
                <i class="glyphicon glyphicon-plus" v-bind:class="{rotate45:chatBoxShow}"></i>

            </a>
        </div>
    </div>
</template>
<style>
    #small-chat {
        position: fixed;
        bottom: 50px;
        right: 26px;
        z-index: 999;
        cursor: pointer;
    }

    #small-chat .badge {
        position: absolute;
        top: -3px;
        right: -4px;
    }


    .rotate45{
        transform: rotate(45deg);
    }
    .open-small-chat {
        height: 38px;
        width: 38px;
        display: block;
        background: #1ab394;
        padding: 9px 8px;
        text-align: center;
        color: #fff;
        border-radius: 50%;
    }

    .open-small-chat:hover {
        color: white;
        background: #1ab394;
    }

    .small-chat-box {
        position: fixed;
        bottom: 50px;
        right: 80px;
        background: #fff;
        border: 1px solid #e7eaec;
        width: 230px;
        height: 320px;
        border-radius: 4px;
        z-index: 999;
    }
    .small-chat-box.ng-small-chat {
        display: block;
    }

    .body-small .small-chat-box {
        bottom: 70px;
        right: 20px;
    }

    .small-chat-box.active {
        display: block;
    }

    .small-chat-box .heading {
        background: #2f4050;
        padding: 8px 15px;
        font-weight: bold;
        color: #fff;
    }
    .small-chat-box .chat-date {
        opacity: 0.6;
        font-size: 10px;
        font-weight: normal;
    }

    .small-chat-box .content {
        width: auto;
        height: 234px;
        background-color: #fff;
        padding: 15px 15px;
        overflow-y: scroll;
    }
    .small-chat-box .content::-webkit-scrollbar{
        width: 5px;
        background-color: #f5f5f5;
    }
    .small-chat-box .content::-webkit-scrollbar-thumb{
        background-color: #1ab394;
    }
    .small-chat-box .content .author-name {
        font-weight: bold;
        margin-bottom: 3px;
        font-size: 11px;
    }

    .small-chat-box .content > div {
        padding-bottom: 20px;
    }

    .small-chat-box .content .chat-message {
        padding: 5px 10px;
        border-radius: 6px;
        font-size: 11px;
        line-height: 14px;
        max-width: 80%;
        background: #f3f3f4;
        margin-bottom: 10px;
    }

    .small-chat-box .content .chat-message.active {
        background: #1ab394;
        color: #fff;
    }

    .small-chat-box .content .left {
        text-align: left;
        clear: both;
    }

    .small-chat-box .content .left .chat-message {
        float: left;
    }

    .small-chat-box .content .right {
        text-align: right;
        clear: both;
    }

    .small-chat-box .content .right .chat-message {
        float: right;
    }

    .small-chat-box .form-chat {
        padding: 10px 10px;
    }
    .small-chat-box .form-chat .input-group{
        display: block;
    }
    .small-chat-box .form-chat .form-control {
        text-align: left;
        width: 141px;
    }
    .small-chat-box .form-chat .myGreen-btn{
        color: white;
        background-color: #1ab394;
    }
    .small-chat-box .form-chat .myGreen-btn:hover{
        color: whitesmoke;
    }
</style>
