webpackJsonp([1],{"/8vw":function(t,n,s){"use strict";var a=s("//Fk"),e=s.n(a),i=s("Zw6s");n.a={CHANGE_STYLE:function(t,n){return new e.a(function(s,a){t.commit(i.a,n),s("ok")})},CHANGE_PRICE:function(t,n){return new e.a(function(s,a){t.commit(i.b,n),s("ok")})},COUNT_DECREASE:function(t){return new e.a(function(n,s){t.commit(i.c),n("ok")})},COUNT_INCREASE:function(t){return new e.a(function(n,s){t.commit(i.d),n("ok")})},ADD_ITEM:function(t,n){return new e.a(function(s,a){t.commit(i.e,n),s("ok")})},REMOVE_ITEM:function(t,n){return new e.a(function(s,a){t.commit(i.f,n),s("ok")})}}},"/w5R":function(t,n,s){"use strict";n.a={name:"Cart",data:function(){return{qrcodeShow:!1}},computed:{cart:function(){return this.$store.getters.cart}},methods:{removeItem:function(t){this.$store.dispatch("REMOVE_ITEM",t)}}}},"42Hy":function(t,n,s){"use strict";function a(t){s("8tI1")}var e=s("DK6z"),i=s("cLDA"),o=s("VU/8"),c=a,r=o(e.a,i.a,c,null,null);n.a=r.exports},"690/":function(t,n){},"8tI1":function(t,n){},BVJx:function(t,n){},DK6z:function(t,n,s){"use strict";n.a={name:"Index",data:function(){return{show:!1}},computed:{iPhone6S:function(){return this.$store.getters.iPhone6S}},methods:{changeStyle:function(){for(var t=arguments.length,n=Array(t),s=0;s<t;s++)n[s]=arguments[s];this.$store.dispatch("CHANGE_STYLE",n)},changePrice:function(){for(var t=arguments.length,n=Array(t),s=0;s<t;s++)n[s]=arguments[s];this.$store.dispatch("CHANGE_PRICE",n)},countIncrease:function(){this.$store.dispatch("COUNT_INCREASE")},countDecrease:function(){this.$store.dispatch("COUNT_DECREASE")},addItem:function(){this.show=!0;var t=this;setTimeout(function(){t.show=!1},10),this.$store.dispatch("ADD_ITEM")}}}},IPI3:function(t,n,s){"use strict";n.a={name:"goodList",data:function(){return{goodsInfo:[{name:"iPhone 8",price:"￥5888",description:"Apple iPhone 8 (A1863) 64GB 银色 移动联通电信4G手机",imgSrc:"http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png",comments:["便宜好用"],source:"京东Apple产品专营店",market:"自营"},{name:"iPhone 8",price:"￥5888",description:"Apple iPhone 8 (A1863) 64GB 灰色 移动联通电信4G手机",imgSrc:"http://o8yu724qs.bkt.clouddn.com/iphone6s-gray-select-2015.png",comments:["快递很快"],source:"京东Apple产品专营店",market:"自营"},{name:"iPhone 8",price:"￥5888",description:"Apple iPhone 8 (A1863) 64GB 金色 移动联通电信4G手机",imgSrc:"http://o8yu724qs.bkt.clouddn.com/iphone6s-gold-select-2015.png",comments:["手机垃圾"],source:"京东Apple产品专营店",market:"自营"},{name:"iPhone 8",price:"￥5888",description:"Apple iPhone 8 (A1863) 64GB 玫瑰色 移动联通电信4G手机",imgSrc:"http://o8yu724qs.bkt.clouddn.com/iphone6s-rosegold-select-2015.png",comments:[],source:"京东Apple产品专营店",market:"自营"}]}},computed:{cart:function(){return this.$store.getters.cart}},methods:{gotoIndex:function(){console.log(document.location.href.split("#")[1]),this.$router.push("/index")}}}},JJT7:function(t,n,s){"use strict";n.a={name:"Register",data:function(){return{}},computed:{},components:{}}},Js1V:function(t,n,s){t.exports=s.p+"static/img/alipay.ef40677.jpg"},LSH0:function(t,n,s){"use strict";var a=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{attrs:{id:"root"}},[s("cart-nav"),t._v(" "),s("small-chat-box"),t._v(" "),s("router-view")],1)},e=[],i={render:a,staticRenderFns:e};n.a=i},LeZM:function(t,n,s){"use strict";var a=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"cart  col-md-offset-2 col-sm-offset-2 col-md-8 col-sm-8",attrs:{id:"cart"}},[t.cart.length?a("div",{staticClass:"panel panel-danger"},[a("div",{staticClass:"panel-heading"},[a("span",{staticClass:"glyphicon glyphicon-shopping-cart"}),t._v(" 购物车\n            "),a("span",{staticClass:"pull-right"},[a("strong",[t._v("总计："+t._s(t.cart.price))])])]),t._v(" "),a("div",{staticClass:"panel-body cart-detail"},[a("ul",t._l(t.cart,function(n,s){return a("li",[a("span",{staticClass:"pomegranage glyphicon glyphicon-remove-circle",on:{click:function(n){t.removeItem(s)}}}),t._v(" "),a("span",[t._v("Apple/苹果 iPhone6s")]),t._v(" "),a("span",{staticClass:"label label-success",domProps:{textContent:t._s(n.type)}}),t._v(" "),a("span",{staticClass:"label label-danger",domProps:{textContent:t._s(n.count)}}),t._v(" "),a("span",{staticClass:"cart-price pomegranage pull-right",domProps:{textContent:t._s(n.price)}})])}))]),t._v(" "),a("transition",{attrs:{name:"slide-fade"}},[t.qrcodeShow?a("div",{staticClass:"absolute qrcode"},[a("div",{staticClass:"col-md-4 col-sm-4 ali-qrcode"},[a("img",{staticClass:"img-responsive",attrs:{src:s("Js1V"),alt:"支付宝二维码"}})]),t._v(" "),a("div",{staticClass:"col-md-4 col-sm-4 we-qrcode"},[a("img",{staticClass:"img-responsive",attrs:{src:s("aMH8"),alt:"微信二维码"}})])]):t._e()]),t._v(" "),a("div",{staticClass:"panel-footer"},[a("button",{staticClass:"btn btn-danger btn-block",on:{click:function(n){t.qrcodeShow=!t.qrcodeShow}}},[t._v("结算 "),a("span",{staticClass:"glyphicon glyphicon-circle-arrow-right"})])])],1):a("div",{staticClass:"cart-empty"},[a("span",[t._v("购物车是空的")])])])},e=[],i={render:a,staticRenderFns:e};n.a=i},M93x:function(t,n,s){"use strict";function a(t){s("s1mH")}var e=s("xJD8"),i=s("LSH0"),o=s("VU/8"),c=a,r=o(e.a,i.a,c,null,null);n.a=r.exports},NHnr:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=s("7+uW"),e=s("M93x"),i=s("YaEn"),o=s("YtJ0");a.a.config.productionTip=!1,new a.a({el:"#app",router:i.a,store:o.a,template:"<App/>",components:{App:e.a}})},"Of+c":function(t,n){},Q6FB:function(t,n,s){"use strict";n.a={name:"Nav",data:function(){return{}},computed:{cart:function(){return this.$store.getters.cart}}}},QqmG:function(t,n){},Rz2L:function(t,n,s){"use strict";var a=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",[s("transition",{attrs:{name:"chatBox"}},[t.chatBoxShow?s("div",{staticClass:"small-chat-box"},[s("div",{staticClass:"heading",attrs:{draggable:"true"}},[s("small",{staticClass:"chat-date pull-right"},[t._v("\n                    "+t._s(t.nowTime.toLocaleDateString())+"\n                ")]),t._v("\n                与 李栋  聊天中\n            ")]),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"left"},[s("div",{staticClass:"author-name"},[t._v("\n                        李栋 "),s("small",{staticClass:"chat-date"},[t._v("\n                        10:02\n                    ")])]),t._v(" "),s("div",{staticClass:"chat-message active"},[t._v("\n                        你好\n                    ")])]),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"author-name"},[t._v("\n                        游客\n                        "),s("small",{staticClass:"chat-date"},[t._v("\n                            11:24\n                        ")])]),t._v(" "),s("div",{staticClass:"chat-message"},[t._v("\n                        你好，请问iphone有货吗？\n                    ")])]),t._v(" "),s("div",{staticClass:"left"},[s("div",{staticClass:"author-name"},[t._v("\n                        李栋\n                        "),s("small",{staticClass:"chat-date"},[t._v("\n                            08:45\n                        ")])]),t._v(" "),s("div",{staticClass:"chat-message active"},[t._v("\n                        有，购买iphone现在特价\n                    ")])]),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"author-name"},[t._v("\n                        游客\n                        "),s("small",{staticClass:"chat-date"},[t._v("\n                            11:24\n                        ")])]),t._v(" "),s("div",{staticClass:"chat-message"},[t._v("\n                        那售后服务怎么样？\n                    ")])]),t._v(" "),s("div",{staticClass:"left"},[s("div",{staticClass:"author-name"},[t._v("\n                        李栋\n                        "),s("small",{staticClass:"chat-date"},[t._v("\n                            08:45\n                        ")])]),t._v(" "),s("div",{staticClass:"chat-message active"},[t._v("\n                        1.终身保修,免费更换\n                        "),s("br"),t._v("2.七天退换\n                        "),s("br"),t._v("3.七重好礼\n                    ")])])]),t._v(" "),s("div",{staticClass:"form-chat"},[s("div",{staticClass:"input-group input-group-sm"},[s("input",{staticClass:"form-control",attrs:{type:"text"}}),t._v(" "),s("span",{staticClass:"input-group-btn"},[s("button",{staticClass:"btn myGreen-btn",attrs:{type:"button"}},[t._v("发送")])])])])]):t._e()]),t._v(" "),s("div",{attrs:{id:"small-chat"},on:{click:function(n){t.chatBoxShow=!t.chatBoxShow}}},[s("span",{staticClass:"badge badge-warning pull-right"},[t._v("5")]),t._v(" "),s("a",{staticClass:"open-small-chat"},[s("i",{staticClass:"glyphicon glyphicon-plus",class:{rotate45:t.chatBoxShow}})])])],1)},e=[],i={render:a,staticRenderFns:e};n.a=i},"UTg/":function(t,n,s){"use strict";var a,e=s("bOdI"),i=s.n(e),o=s("d7EF"),c=s.n(o),r=s("Zw6s");n.a=(a={},i()(a,r.a,function(t,n){var s=c()(n,2),a=s[0],e=s[1];t.iPhone6S.activeStyle=a,t.iPhone6S.activeStyleUrl=e}),i()(a,r.b,function(t,n){var s=c()(n,2),a=s[0],e=s[1];t.iPhone6S.activeStorage=a,t.iPhone6S.price=e,t.iPhone6S.count=1,t.iPhone6S.isSelected=!1}),i()(a,r.d,function(t){t.iPhone6S.count++}),i()(a,r.c,function(t){t.iPhone6S.count=t.iPhone6S.count-1||1}),i()(a,r.e,function(t){var n=""===t.iPhone6S.activeStyle?"银色":t.iPhone6S.activeStyle,s=n+"，"+t.iPhone6S.activeStorage,a=t.iPhone6S.count,e={type:s,count:a,price:t.iPhone6S.price*t.iPhone6S.count};t.cart.push(e)}),i()(a,r.f,function(t,n){t.cart.splice(n,1)}),a)},UuxQ:function(t,n,s){"use strict";function a(t){s("ctzl")}var e=s("YAo3"),i=s("Rz2L"),o=s("VU/8"),c=a,r=o(e.a,i.a,c,null,null);n.a=r.exports},VPfp:function(t,n){},YAo3:function(t,n,s){"use strict";n.a={name:"SmallChatBox",data:function(){return{chatBoxShow:!1,nowTime:new Date}},computed:{},components:{}}},YaEn:function(t,n,s){"use strict";var a=s("7+uW"),e=s("/ocq"),i=s("42Hy"),o=s("Zc39"),c=s("prJd"),r=s("xJsL"),l=s("dIqY");a.a.use(e.a),n.a=new e.a({routes:[{path:"/index",name:"Index",component:i.a},{path:"/cart",name:"Cart",component:o.a},{path:"/goodList",name:"GoodList",component:c.a},{path:"/login",name:"Login",component:r.a},{path:"/register",name:"Register",component:l.a},{path:"*",redirect:"/goodList"}]})},YtJ0:function(t,n,s){"use strict";var a=s("7+uW"),e=s("NYxO"),i=s("/8vw"),o=s("UTg/");a.a.use(e.a);var c={iPhone6S:{name:"Apple/苹果 iPhone 6S",desc:"3D Touch、1200万像素照片、4k视频，强大功能于一身。",price:"5288 - 6888",isSelected:!0,style:{"银色":"http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png","深空灰色":"http://o8yu724qs.bkt.clouddn.com/iphone6s-gray-select-2015.png","金色":"http://o8yu724qs.bkt.clouddn.com/iphone6s-gold-select-2015.png","玫瑰金色":"http://o8yu724qs.bkt.clouddn.com/iphone6s-rosegold-select-2015.png"},activePrice:"",activeStorage:"",activeStyle:"",count:0,activeStyleUrl:"http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png",storage:{"16GB":5288,"64GB":6088,"128GB":6888}},cart:[]};n.a=new e.a.Store({state:c,mutations:o.a,actions:i.a,getters:{iPhone6S:function(t){return t.iPhone6S},cart:function(t){return t.cart}}})},Zc39:function(t,n,s){"use strict";function a(t){s("BVJx")}var e=s("/w5R"),i=s("LeZM"),o=s("VU/8"),c=a,r=o(e.a,i.a,c,null,null);n.a=r.exports},Zw6s:function(t,n,s){"use strict";s.d(n,"b",function(){return a}),s.d(n,"a",function(){return e}),s.d(n,"e",function(){return i}),s.d(n,"f",function(){return o}),s.d(n,"d",function(){return c}),s.d(n,"c",function(){return r});var a="CHANGE_PRICE",e="CHANGE_STYLE",i="ADD_ITEM",o="REMOVE_ITEM",c="COUNT_INCREASE",r="COUNT_DECREASE"},aMH8:function(t,n,s){t.exports=s.p+"static/img/wepay.31b0d02.jpg"},bPFu:function(t,n,s){"use strict";var a=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"middle-box text-center loginscreen gray-bg "},[s("div",[t._m(0),t._v(" "),s("h3",[t._v("欢迎")]),t._v(" "),s("form",{staticClass:"m-t",attrs:{role:"form",onsubmit:"return false"}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"email",placeholder:"用户名",required:""},domProps:{value:t.username},on:{input:function(n){n.target.composing||(t.username=n.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"密码",required:""},domProps:{value:t.password},on:{input:function(n){n.target.composing||(t.password=n.target.value)}}})]),t._v(" "),s("button",{staticClass:"btn btn-primary block full-width m-b",attrs:{type:"submit"},on:{click:function(n){t.login()}}},[t._v("登 录")]),t._v(" "),s("p",{staticClass:"text-muted text-center"},[t._m(1),t._v(" | "),s("router-link",{attrs:{to:"register",tag:"a"}},[t._v("注册一个新账号")])],1)])])])},e=[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",[s("h1",{staticClass:"logo-name"},[t._v("LD")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("a",{attrs:{href:"#"}},[s("small",[t._v("忘记密码了？")])])}],i={render:a,staticRenderFns:e};n.a=i},cLDA:function(t,n,s){"use strict";var a=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"container"},[s("div",{staticClass:"row col-md-offset-1 col-sm-offset-2 col-md-10 col-sm-10"},[s("div",{staticClass:"col-md-6 col-sm-8"},[s("img",{staticClass:"img-responsive",attrs:{src:t.iPhone6S.activeStyleUrl,alt:"iPhone6"}})]),t._v(" "),s("transition",{attrs:{name:"addCart"}},[t.show?s("div",{staticClass:"col-md-6 col-sm-8 absolute"},[s("img",{staticClass:"img-responsive",attrs:{src:t.iPhone6S.activeStyleUrl,alt:"iPhone6"}})]):t._e()]),t._v(" "),s("div",{staticClass:"detail col-md-6 col-sm-8"},[s("h3",{staticClass:"name"},[s("span",{domProps:{textContent:t._s(t.iPhone6S.name)}})]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"options"},[s("dl",{staticClass:"dl-horizontal"},[s("dt",[t._v("描述：")]),t._v(" "),s("dd",[s("span",{domProps:{textContent:t._s(t.iPhone6S.desc)}})])]),t._v(" "),s("dl",{staticClass:"dl-horizontal"},[s("dt",[t._v("价格：")]),t._v(" "),s("dd",{staticClass:"pomegranage"},[s("strong",[s("span",{domProps:{textContent:t._s(t.iPhone6S.price)}})])])]),t._v(" "),s("dl",{staticClass:"option dl-horizontal"},[s("dt",[t._v("外观：")]),t._v(" "),s("dd",[s("ul",t._l(t.iPhone6S.style,function(n,a){return s("li",{class:{active:t.iPhone6S.activeStyleUrl===n},on:{click:function(s){t.changeStyle(a,n)}}},[s("span",[t._v(t._s(a))])])}))])]),t._v(" "),s("dl",{staticClass:"option dl-horizontal"},[s("dt",[t._v("存储容量：")]),t._v(" "),s("dd",[s("ul",t._l(t.iPhone6S.storage,function(n,a){return s("li",{class:{active:t.iPhone6S.price==n},on:{click:function(s){t.changePrice(a,n)}}},[s("span",[t._v(t._s(a))])])}))])]),t._v(" "),s("dl",{staticClass:"option dl-horizontal"},[s("dt",[t._v("\n                      购买数量：\n                    ")]),t._v(" "),s("dd",[s("div",{staticClass:"input-group"},[s("span",{staticClass:"btn input-group-addon",class:{"btn-primary":1!==t.iPhone6S.count},on:{click:function(n){t.countDecrease()}}},[t._v("-")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.iPhone6S.count,expression:"iPhone6S.count"}],staticClass:"form-control form-horizonal",attrs:{id:"count",type:"text"},domProps:{value:t.iPhone6S.count},on:{input:function(n){n.target.composing||(t.iPhone6S.count=n.target.value)}}}),t._v(" "),s("span",{staticClass:"btn btn-primary input-group-addon",on:{click:function(n){t.countIncrease()}}},[t._v("+")])])])])]),t._v(" "),s("hr"),t._v(" "),s("button",{staticClass:"btn btn-danger btn-block",attrs:{disabled:t.iPhone6S.isSelected},on:{click:function(n){t.addItem()}}},[s("span",{staticClass:"glyphicon glyphicon-shopping-cart"}),t._v("加入购物车\n            ")])])],1)])},e=[],i={render:a,staticRenderFns:e};n.a=i},ctzl:function(t,n){},dIqY:function(t,n,s){"use strict";function a(t){s("VPfp")}var e=s("JJT7"),i=s("tgRs"),o=s("VU/8"),c=a,r=o(e.a,i.a,c,null,null);n.a=r.exports},ms8t:function(t,n,s){"use strict";var a=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("nav",{staticClass:"navbar navbar-default navbar-fixed-top"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"navbar-header"},[s("router-link",{staticClass:"navbar-brand",attrs:{to:"index",tag:"a"}},[t._v("购物车")]),t._v(" "),s("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar"}},[s("span",{staticClass:"sr-only"},[s("router-link",{attrs:{to:"index",tag:"a"}},[t._v("iPhone 6S ")])],1),t._v(" "),s("span",{staticClass:"sr-only"},[s("router-link",{attrs:{to:"cart",tag:"a"}},[t._v("购物车"),t.cart.length?s("span",{staticClass:"badge text-danger",domProps:{textContent:t._s(t.cart.length)}}):t._e()])],1),t._v(" "),s("span",{staticClass:"icon-bar"}),t._v(" "),s("span",{staticClass:"icon-bar"}),t._v(" "),s("span",{staticClass:"icon-bar"}),t._v(" "),t.cart.length?s("span",{staticClass:"badge text-danger",staticStyle:{position:"absolute",top:"0"},domProps:{textContent:t._s(t.cart.length)}}):t._e()])],1),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbar"}},[s("ul",{staticClass:"nav navbar-nav"},[s("li",[s("router-link",{attrs:{to:"index",tag:"a"}},[t._v("iPhone 6S "),s("span")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"cart",tag:"a"}},[t._v("购物车"),t.cart.length?s("span",{staticClass:"badge text-danger",domProps:{textContent:t._s(t.cart.length)}}):t._e()])],1)]),t._v(" "),s("ul",{staticClass:"nav navbar-nav pull-right"},[s("li",[s("router-link",{attrs:{to:"login",tag:"a"}},[t._v("登陆")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"register",tag:"a"}},[t._v("注册")])],1)])])])])},e=[],i={render:a,staticRenderFns:e};n.a=i},"nKb+":function(t,n,s){"use strict";n.a={name:"Login",data:function(){return{username:"",password:""}},computed:{},methods:{login:function(){this.$router.push("/goodList")}},components:{}}},prJd:function(t,n,s){"use strict";function a(t){s("QqmG")}var e=s("IPI3"),i=s("s3XH"),o=s("VU/8"),c=a,r=o(e.a,i.a,c,null,null);n.a=r.exports},s1mH:function(t,n){},s3XH:function(t,n,s){"use strict";var a=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"container",on:{click:function(n){t.gotoIndex()}}},[s("div",{staticClass:"row",attrs:{id:"list-container"}},t._l(t.goodsInfo,function(n){return s("div",{staticClass:"col-md-2 col-md-offset-1"},[s("img",{attrs:{src:n.imgSrc,alt:"iphone8"}}),t._v(" "),s("div",{staticClass:"goodInfo"},[s("p",[s("span",{staticClass:"red"},[t._v(t._s(n.name))])]),t._v(" "),s("p",{staticClass:"description"},[t._v(t._s(n.description))]),t._v(" "),s("p",{staticClass:"comments"},[t._v("评价: "),s("span",[t._v(t._s(n.comments.length))])]),t._v(" "),s("p",{staticClass:"source"},[t._v(t._s(n.source)+" "),s("i",{staticClass:"glyphicon glyphicon-registration-mark"})]),t._v(" "),s("p",{staticClass:"market"},[s("i",{staticClass:"red"},[t._v(t._s(n.market))])])])])}))])},e=[],i={render:a,staticRenderFns:e};n.a=i},tgRs:function(t,n,s){"use strict";var a=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"middle-box text-center loginscreen   animated fadeInDown"},[s("div",[t._m(0),t._v(" "),s("h3",[t._v("欢迎注册")]),t._v(" "),s("p",[t._v("创建一个新账户")]),t._v(" "),s("form",{staticClass:"m-t",attrs:{role:"form",onsubmit:"return false"}},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("button",{staticClass:"btn btn-primary block full-width m-b",attrs:{type:"submit"}},[t._v("注 册")]),t._v(" "),s("p",{staticClass:"text-muted text-center"},[s("small",[t._v("已经有账户了？")]),s("router-link",{attrs:{to:"login"}},[t._v("点此登录")])],1)])])])},e=[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",[s("h1",{staticClass:"logo-name"},[t._v("LD")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"form-group"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"请输入用户名",required:""}})])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"form-group"},[s("input",{staticClass:"form-control",attrs:{type:"password",placeholder:"请输入密码",required:""}})])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"form-group"},[s("input",{staticClass:"form-control",attrs:{type:"password",placeholder:"请再次输入密码",required:""}})])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"form-group text-left"},[s("div",{staticClass:"checkbox i-checks"},[s("label",{staticClass:"no-padding"},[s("input",{attrs:{type:"checkbox"}}),s("i"),t._v(" 我同意注册协议")])])])}],i={render:a,staticRenderFns:e};n.a=i},uL8o:function(t,n,s){"use strict";function a(t){s("Of+c")}var e=s("Q6FB"),i=s("ms8t"),o=s("VU/8"),c=a,r=o(e.a,i.a,c,null,null);n.a=r.exports},xJD8:function(t,n,s){"use strict";var a=s("uL8o"),e=s("UuxQ");n.a={name:"App",data:function(){return{}},computed:{},components:{"cart-nav":a.a,"small-chat-box":e.a}}},xJsL:function(t,n,s){"use strict";function a(t){s("690/")}var e=s("nKb+"),i=s("bPFu"),o=s("VU/8"),c=a,r=o(e.a,i.a,c,null,null);n.a=r.exports}},["NHnr"]);
//# sourceMappingURL=app.f001b61323a5e23d4136.js.map