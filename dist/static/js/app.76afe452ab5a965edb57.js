webpackJsonp([1,0],[function(t,e,n){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}var s=n(12),a=u(s),r=n(6),i=u(r),o=n(11),c=u(o),l=n(10),f=u(l),d=n(7),p=u(d);a.default.use(c.default),a.default.use(f.default);var v=[{path:"/index",component:p.default}],_=new c.default({linkActiveClass:"active",routes:v});_.push("/index"),new a.default({el:"#app",template:"<App/>",components:{App:i.default},router:_}).$mount("#app")},,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{flag:!0}},created:function(){},methods:{change:function(t){this.flag&&this.$refs.index.setAttribute("class","fadeOut"),this.$refs.body.setAttribute("class","fadeIn")}}}},function(t,e){},function(t,e){},function(t,e,n){n(5);var u=n(1)(n(2),n(9),null,null);t.exports=u.exports},function(t,e,n){n(4);var u=n(1)(n(3),n(8),null,null);t.exports=u.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div"),t._v(" "),n("button",{staticClass:"button",on:{click:t.change}},[t._v("button")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view",{ref:"compoents",staticClass:"viewItem"})],1)},staticRenderFns:[]}},,,,function(t,e){}]);