webpackJsonp([1],{"/8vw":function(t,n,a){"use strict";var e=a("//Fk"),s=a.n(e),o=a("Zw6s");n.a={CHANGE_STYLE:function(t,n){return new s.a(function(a,e){t.commit(o.a,n),a("ok")})},CHANGE_PRICE:function(t,n){return new s.a(function(a,e){t.commit(o.b,n),a("ok")})},COUNT_DECREASE:function(t){return new s.a(function(n,a){t.commit(o.c),n("ok")})},COUNT_INCREASE:function(t){return new s.a(function(n,a){t.commit(o.d),n("ok")})},ADD_ITEM:function(t,n){return new s.a(function(a,e){t.commit(o.e,n),a("ok")})},REMOVE_ITEM:function(t,n){return new s.a(function(a,e){t.commit(o.f,n),a("ok")})}}},"/w5R":function(t,n,a){"use strict";n.a={name:"Cart",data:function(){return{}},computed:{cart:function(){return this.$store.getters.cart}},methods:{removeItem:function(t){this.$store.dispatch("REMOVE_ITEM",t)}}}},"42Hy":function(t,n,a){"use strict";function e(t){a("8tI1")}var s=a("DK6z"),o=a("cLDA"),i=a("VU/8"),c=e,r=i(s.a,o.a,c,null,null);n.a=r.exports},"8tI1":function(t,n){},BVJx:function(t,n){},DK6z:function(t,n,a){"use strict";n.a={name:"Index",data:function(){return{show:!1}},computed:{iPhone6S:function(){return this.$store.getters.iPhone6S}},methods:{changeStyle:function(){for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];this.$store.dispatch("CHANGE_STYLE",n)},changePrice:function(){for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];this.$store.dispatch("CHANGE_PRICE",n)},countIncrease:function(){this.$store.dispatch("COUNT_INCREASE")},countDecrease:function(){this.$store.dispatch("COUNT_DECREASE")},addItem:function(){this.show=!0;var t=this;setTimeout(function(){t.show=!1},10),this.$store.dispatch("ADD_ITEM")}}}},LSH0:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"root"}},[a("cart-nav"),t._v(" "),a("router-view")],1)},s=[],o={render:e,staticRenderFns:s};n.a=o},LeZM:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"cart  col-md-offset-2 col-sm-offset-2 col-md-8 col-sm-8",attrs:{id:"cart"}},[t.cart.length?a("div",{staticClass:"panel panel-danger"},[a("div",{staticClass:"panel-heading"},[a("span",{staticClass:"glyphicon glyphicon-shopping-cart"}),t._v(" 购物车\n      "),a("span",{staticClass:"pull-right"},[a("strong",[t._v("总计："+t._s(t.cart.price))])])]),t._v(" "),a("div",{staticClass:"panel-body cart-detail"},[a("ul",t._l(t.cart,function(n,e){return a("li",[a("span",{staticClass:"pomegranage glyphicon glyphicon-remove-circle",on:{click:function(n){t.removeItem(e)}}}),t._v(" "),a("span",[t._v("Apple/苹果 iPhone6s")]),t._v(" "),a("span",{staticClass:"label label-success",domProps:{textContent:t._s(n.type)}}),t._v(" "),a("span",{staticClass:"label label-danger",domProps:{textContent:t._s(n.count)}}),t._v(" "),a("span",{staticClass:"cart-price pomegranage pull-right",domProps:{textContent:t._s(n.price)}})])}))]),t._v(" "),t._m(0)]):a("div",{staticClass:"cart-empty"},[a("span",[t._v("购物车是空的")])])])},s=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"panel-footer"},[a("button",{staticClass:"btn btn-danger btn-block"},[t._v("结算 "),a("span",{staticClass:"glyphicon glyphicon-circle-arrow-right"})])])}],o={render:e,staticRenderFns:s};n.a=o},M93x:function(t,n,a){"use strict";var e=a("xJD8"),s=a("LSH0"),o=a("VU/8"),i=o(e.a,s.a,null,null,null);n.a=i.exports},NHnr:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a("7+uW"),s=a("M93x"),o=a("YaEn"),i=a("YtJ0");e.a.config.productionTip=!1,new e.a({el:"#app",router:o.a,store:i.a,template:"<App/>",components:{App:s.a}})},"Of+c":function(t,n){},Q6FB:function(t,n,a){"use strict";n.a={name:"Nav",data:function(){return{}},computed:{cart:function(){return this.$store.getters.cart}}}},"UTg/":function(t,n,a){"use strict";var e,s=a("bOdI"),o=a.n(s),i=a("d7EF"),c=a.n(i),r=a("Zw6s");n.a=(e={},o()(e,r.a,function(t,n){var a=c()(n,2),e=a[0],s=a[1];t.iPhone6S.activeStyle=e,t.iPhone6S.activeStyleUrl=s}),o()(e,r.b,function(t,n){var a=c()(n,2),e=a[0],s=a[1];t.iPhone6S.activeStorage=e,t.iPhone6S.price=s,t.iPhone6S.count=1,t.iPhone6S.isSelected=!1}),o()(e,r.d,function(t){t.iPhone6S.count++}),o()(e,r.c,function(t){t.iPhone6S.count=t.iPhone6S.count-1||1}),o()(e,r.e,function(t){var n=""===t.iPhone6S.activeStyle?"银色":t.iPhone6S.activeStyle,a=n+"，"+t.iPhone6S.activeStorage,e=t.iPhone6S.count,s={type:a,count:e,price:t.iPhone6S.price*t.iPhone6S.count};t.cart.push(s)}),o()(e,r.f,function(t,n){t.cart.splice(n,1)}),e)},YaEn:function(t,n,a){"use strict";var e=a("7+uW"),s=a("/ocq"),o=a("42Hy"),i=a("Zc39");e.a.use(s.a),n.a=new s.a({routes:[{path:"/index",name:"Index",component:o.a},{path:"/cart",name:"Cart",component:i.a},{path:"*",redirect:"/index"}]})},YtJ0:function(t,n,a){"use strict";var e=a("7+uW"),s=a("NYxO"),o=a("/8vw"),i=a("UTg/");e.a.use(s.a);var c={iPhone6S:{name:"Apple/苹果 iPhone 6S",desc:"3D Touch、1200万像素照片、4k视频，强大功能于一身。",price:"5288 - 6888",isSelected:!0,style:{"银色":"http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png","深空灰色":"http://o8yu724qs.bkt.clouddn.com/iphone6s-gray-select-2015.png","金色":"http://o8yu724qs.bkt.clouddn.com/iphone6s-gold-select-2015.png","玫瑰金色":"http://o8yu724qs.bkt.clouddn.com/iphone6s-rosegold-select-2015.png"},activePrice:"",activeStorage:"",activeStyle:"",count:0,activeStyleUrl:"http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png",storage:{"16GB":5288,"64GB":6088,"128GB":6888}},cart:[]};n.a=new s.a.Store({state:c,mutations:i.a,actions:o.a,getters:{iPhone6S:function(t){return t.iPhone6S},cart:function(t){return t.cart}}})},Zc39:function(t,n,a){"use strict";function e(t){a("BVJx")}var s=a("/w5R"),o=a("LeZM"),i=a("VU/8"),c=e,r=i(s.a,o.a,c,null,null);n.a=r.exports},Zw6s:function(t,n,a){"use strict";a.d(n,"b",function(){return e}),a.d(n,"a",function(){return s}),a.d(n,"e",function(){return o}),a.d(n,"f",function(){return i}),a.d(n,"d",function(){return c}),a.d(n,"c",function(){return r});var e="CHANGE_PRICE",s="CHANGE_STYLE",o="ADD_ITEM",i="REMOVE_ITEM",c="COUNT_INCREASE",r="COUNT_DECREASE"},cLDA:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"container"},[a("div",{staticClass:"row col-md-offset-1 col-sm-offset-2 col-md-10 col-sm-10"},[a("div",{staticClass:"col-md-6 col-sm-8"},[a("img",{staticClass:"img-responsive",attrs:{src:t.iPhone6S.activeStyleUrl,alt:"iPhone6"}})]),t._v(" "),a("transition",{attrs:{name:"addCart"}},[t.show?a("div",{staticClass:"col-md-6 col-sm-8 absolute"},[a("img",{staticClass:"img-responsive",attrs:{src:t.iPhone6S.activeStyleUrl,alt:"iPhone6"}})]):t._e()]),t._v(" "),a("div",{staticClass:"detail col-md-6 col-sm-8"},[a("h3",{staticClass:"name"},[a("span",{domProps:{textContent:t._s(t.iPhone6S.name)}})]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"options"},[a("dl",{staticClass:"dl-horizontal"},[a("dt",[t._v("描述：")]),t._v(" "),a("dd",[a("span",{domProps:{textContent:t._s(t.iPhone6S.desc)}})])]),t._v(" "),a("dl",{staticClass:"dl-horizontal"},[a("dt",[t._v("价格：")]),t._v(" "),a("dd",{staticClass:"pomegranage"},[a("strong",[a("span",{domProps:{textContent:t._s(t.iPhone6S.price)}})])])]),t._v(" "),a("dl",{staticClass:"option dl-horizontal"},[a("dt",[t._v("外观：")]),t._v(" "),a("dd",[a("ul",t._l(t.iPhone6S.style,function(n,e){return a("li",{class:{active:t.iPhone6S.activeStyleUrl===n},on:{click:function(a){t.changeStyle(e,n)}}},[a("span",[t._v(t._s(e))])])}))])]),t._v(" "),a("dl",{staticClass:"option dl-horizontal"},[a("dt",[t._v("存储容量：")]),t._v(" "),a("dd",[a("ul",t._l(t.iPhone6S.storage,function(n,e){return a("li",{class:{active:t.iPhone6S.price==n},on:{click:function(a){t.changePrice(e,n)}}},[a("span",[t._v(t._s(e))])])}))])]),t._v(" "),a("dl",{staticClass:"option dl-horizontal"},[a("dt",[t._v("\n                购买数量：\n              ")]),t._v(" "),a("dd",[a("div",{staticClass:"input-group"},[a("span",{staticClass:"btn input-group-addon",class:{"btn-primary":1!==t.iPhone6S.count},on:{click:function(n){t.countDecrease()}}},[t._v("-")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.iPhone6S.count,expression:"iPhone6S.count"}],staticClass:"form-control form-horizonal",attrs:{id:"count",type:"text"},domProps:{value:t.iPhone6S.count},on:{input:function(n){n.target.composing||(t.iPhone6S.count=n.target.value)}}}),t._v(" "),a("span",{staticClass:"btn btn-primary input-group-addon",on:{click:function(n){t.countIncrease()}}},[t._v("+")])])])])]),t._v(" "),a("hr"),t._v(" "),a("button",{staticClass:"btn btn-danger btn-block",attrs:{disabled:t.iPhone6S.isSelected},on:{click:function(n){t.addItem()}}},[a("span",{staticClass:"glyphicon glyphicon-shopping-cart"}),t._v("加入购物车\n          ")])])],1)])},s=[],o={render:e,staticRenderFns:s};n.a=o},ms8t:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("nav",{staticClass:"navbar navbar-default navbar-fixed-top"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"navbar-header"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"index",tag:"a"}},[t._v("购物车")]),t._v(" "),a("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar"}},[a("span",{staticClass:"sr-only"},[a("router-link",{attrs:{to:"index",tag:"a"}},[t._v("iPhone 6S ")])],1),t._v(" "),a("span",{staticClass:"sr-only"},[a("router-link",{attrs:{to:"cart",tag:"a"}},[t._v("购物车"),t.cart.length?a("span",{staticClass:"badge text-danger",domProps:{textContent:t._s(t.cart.length)}}):t._e()])],1),t._v(" "),a("span",{staticClass:"icon-bar"}),t._v(" "),a("span",{staticClass:"icon-bar"}),t._v(" "),a("span",{staticClass:"icon-bar"}),t._v(" "),t.cart.length?a("span",{staticClass:"badge text-danger",staticStyle:{position:"absolute",top:"0"},domProps:{textContent:t._s(t.cart.length)}}):t._e()])],1),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbar"}},[a("ul",{staticClass:"nav navbar-nav"},[a("li",[a("router-link",{attrs:{to:"index",tag:"a"}},[t._v("iPhone 6S "),a("span")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"cart",tag:"a"}},[t._v("购物车"),t.cart.length?a("span",{staticClass:"badge text-danger",domProps:{textContent:t._s(t.cart.length)}}):t._e()])],1)])])])])},s=[],o={render:e,staticRenderFns:s};n.a=o},uL8o:function(t,n,a){"use strict";function e(t){a("Of+c")}var s=a("Q6FB"),o=a("ms8t"),i=a("VU/8"),c=e,r=i(s.a,o.a,c,null,null);n.a=r.exports},xJD8:function(t,n,a){"use strict";var e=a("uL8o");n.a={name:"App",data:function(){return{}},components:{"cart-nav":e.a}}}},["NHnr"]);
//# sourceMappingURL=app.fdd9a9c3e857b7ebf907.js.map