import{_ as g,e as S,a as R,l as H,g as M,f as P}from"./iframe-router.686e676c.js";import{a as l,t as y,f as K,i as x,o as c,n as z,d as h,r as w,F as D,b as C,c as b,w as L,h as V,e as T,l as X,m as Y,x as W,q,j as U,v as G,y as J,K as Q,s as Z}from"./vue-libs.1f54df60.js";const I={name:"DemoBlock",props:{card:Boolean,title:String}},ee={class:"van-doc-demo-block"},te={key:0,class:"van-doc-demo-block__title"},ne={key:1,class:"van-doc-demo-block__card"};function oe(e,r,o,s,i,n){return c(),l("div",ee,[o.title?(c(),l("h2",te,y(o.title),1)):K("v-if",!0),o.card?(c(),l("div",ne,[x(e.$slots,"default")])):x(e.$slots,"default",{key:2})])}var O=g(I,[["render",oe]]);const se={name:"DemoSection",computed:{demoName(){const{meta:e}=this.$route||{};return e&&e.name?`demo-${S(e.name)}`:""}}};function ae(e,r,o,s,i,n){return c(),l("section",{class:z(["van-doc-demo-section",n.demoName])},[x(e.$slots,"default")],2)}var j=g(se,[["render",ae]]);const B={},E={name:"vant-weapp",build:{srcDir:"packages",site:{publicPath:"/vant-weapp/"}},site:{versions:[{label:"0.x",link:"/vant-weapp/0.x"}],title:"Vant Weapp",description:"\u8F7B\u91CF\u3001\u53EF\u9760\u7684\u5C0F\u7A0B\u5E8F UI \u7EC4\u4EF6\u5E93",logo:"https://img.yzcdn.cn/vant/logo.png",simulator:{url:"https://vant-contrib.gitee.io/vant/mobile.html?weapp=1",syncPathFromSimulator:!1},links:[{logo:"https://img.yzcdn.cn/vant/vant-o.svg",url:"https://vant-contrib.gitee.io/vant/"},{logo:"https://b.yzcdn.cn/vant/logo/github.svg",url:"https://github.com/youzan/vant-weapp"}],baiduAnalytics:{seed:"ad6b5732c36321f2dafed737ac2da92f"},nav:[]}},ce={},re={viewBox:"0 0 1024 1024"},ie=h("path",{fill:"#B6C3D2",d:"M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"},null,-1),ue=h("path",{fill:"#B6C3D2",d:"M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"},null,-1),le=[ie,ue];function me(e,r){return c(),l("svg",re,le)}var de=g(ce,[["render",me]]);const _e={components:{ArrowRight:de},props:{lang:String,group:Object},data(){return{active:[]}},computed:{base(){return this.lang?`/${this.lang}`:""}}},he={class:"demo-home-nav"},pe={class:"demo-home-nav__title"},fe={class:"demo-home-nav__group"};function ve(e,r,o,s,i,n){const d=w("arrow-right"),p=w("router-link");return c(),l("div",he,[h("div",pe,y(o.group.title),1),h("div",fe,[(c(!0),l(D,null,C(o.group.items,m=>(c(),b(p,{class:"demo-home-nav__block",key:m.path,to:`${n.base}/${m.path}`},{default:L(()=>[V(y(m.title)+" ",1),T(d,{class:"demo-home-nav__icon"})]),_:2},1032,["to"]))),128))])])}var ge=g(_e,[["render",ve]]);const ye={components:{DemoHomeNav:ge},computed:{lang(){const{lang:e}=this.$route.meta;return e},config(){const{locales:e}=E.site;return e?e[this.lang]:E.site},smallTitle(){return this.config.title.length>=8}}},we={class:"demo-home"},$e=["src"],ke={key:0,class:"demo-home__desc"};function be(e,r,o,s,i,n){const d=w("demo-home-nav");return c(),l("div",we,[h("h1",{class:z(["demo-home__title",{"demo-home__title--small":n.smallTitle}])},[h("img",{src:n.config.logo},null,8,$e),h("span",null,y(n.config.title),1)],2),n.config.description?(c(),l("h2",ke,y(n.config.description),1)):K("v-if",!0),(c(!0),l(D,null,C(n.config.nav,(p,m)=>(c(),b(d,{key:m,lang:n.lang,group:p},null,8,["lang","group"]))),128))])}var A=g(ye,[["render",be]]);const{locales:N,defaultLang:Te}=E.site;R(Te);function xe(e){const r=e.path.split("/")[1];return Object.keys(N).indexOf(r)!==-1?r:M()}function De(){const e=[],r=Object.keys(B),o=N?Object.keys(N):[];return o.length?(e.push({name:"NotFound",path:"/:path(.*)+",redirect:s=>({name:xe(s)})}),o.forEach(s=>{e.push({name:s,path:`/${s}`,component:A,meta:{lang:s}})})):(e.push({name:"NotFound",path:"/:path(.*)+",redirect:{name:"home"}}),e.push({name:"home",path:"/",component:A})),r.forEach(s=>{const i=S(s);o.length?o.forEach(n=>{e.push({name:`${n}/${i}`,path:`/${n}/${i}`,component:B[s],meta:{name:s,lang:n}})}):e.push({name:i,path:`/${i}`,component:B[s],meta:{name:s}})}),e}const $=X({history:Y(),routes:De(),scrollBehavior:(e,r,o)=>o||{x:0,y:0}});W($.currentRoute,()=>{$.currentRoute.value.redirectedFrom||q(P)});H($);window.vueRouter=$;const Le={data(){return{path:"M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z"}},computed:{title(){const{name:e}=this.$route.meta||{};return e?e.replace(/-/g,""):""}},methods:{onBack(){history.length>1?history.back():this.$router.replace("/")}}},Be={class:"demo-nav"},Ee={class:"demo-nav__title"},Ne=["d"];function Se(e,r,o,s,i,n){return U((c(),l("div",Be,[h("div",Ee,y(n.title),1),(c(),l("svg",{class:"demo-nav__back",viewBox:"0 0 1000 1000",onClick:r[0]||(r[0]=(...d)=>n.onBack&&n.onBack(...d))},[h("path",{fill:"#969799","fill-rule":"evenodd",d:i.path},null,8,Ne)]))],512)),[[G,n.title]])}var Ke=g(Le,[["render",Se]]);const ze={components:{DemoNav:Ke}};function Ce(e,r,o,s,i,n){const d=w("demo-nav"),p=w("demo-section"),m=w("router-view");return c(),l(D,null,[T(d),T(m,null,{default:L(({Component:k})=>[(c(),b(Q,null,[T(p,null,{default:L(()=>[(c(),b(J(k)))]),_:2},1024)],1024))]),_:1})],64)}var Oe=g(ze,[["render",Ce]]);(function(){if(typeof window=="undefined")return;var e,r="ontouchstart"in window;document.createTouch||(document.createTouch=function(a,t,u,_,f,v,F){return new o(t,u,{pageX:_,pageY:f,screenX:v,screenY:F,clientX:_-window.pageXOffset,clientY:f-window.pageYOffset},0,0)}),document.createTouchList||(document.createTouchList=function(){for(var a=s(),t=0;t<arguments.length;t++)a[t]=arguments[t];return a.length=arguments.length,a}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(a){var t=this;do{if(t.matches(a))return t;t=t.parentElement||t.parentNode}while(t!==null&&t.nodeType===1);return null});var o=function(t,u,_,f,v){f=f||0,v=v||0,this.identifier=u,this.target=t,this.clientX=_.clientX+f,this.clientY=_.clientY+v,this.screenX=_.screenX+f,this.screenY=_.screenY+v,this.pageX=_.pageX+f,this.pageY=_.pageY+v};function s(){var a=[];return a.item=function(t){return this[t]||null},a.identifiedTouch=function(t){return this[t+1]||null},a}var i=!1;function n(a){return function(t){t.type==="mousedown"&&(i=!0),t.type==="mouseup"&&(i=!1),!(t.type==="mousemove"&&!i)&&((t.type==="mousedown"||!e||e&&!e.dispatchEvent)&&(e=t.target),e.closest("[data-no-touch-simulate]")==null&&d(a,t),t.type==="mouseup"&&(e=null))}}function d(a,t){var u=document.createEvent("Event");u.initEvent(a,!0,!0),u.altKey=t.altKey,u.ctrlKey=t.ctrlKey,u.metaKey=t.metaKey,u.shiftKey=t.shiftKey,u.touches=m(t),u.targetTouches=m(t),u.changedTouches=p(t),e.dispatchEvent(u)}function p(a){var t=s();return t.push(new o(e,1,a,0,0)),t}function m(a){return a.type==="mouseup"?s():p(a)}function k(){window.addEventListener("mousedown",n("touchstart"),!0),window.addEventListener("mousemove",n("touchmove"),!0),window.addEventListener("mouseup",n("touchend"),!0)}k.multiTouchOffset=75,r||new k})();window.app=Z(Oe).use($).component(O.name,O).component(j.name,j);setTimeout(()=>{window.app.mount("#app")},0);
