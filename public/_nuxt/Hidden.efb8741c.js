import{_ as i,o as l,c as d,a as c,t as f,K as x,r as m,d as h,E as p,h as v,p as g,e as k,j as b,k as $,q as y,Z as w,f as C,g as S}from"./entry.f2c9d954.js";const q={props:{head:{type:String,required:!0},desc:{type:String,default:""},dark:{type:Boolean,default:!1}}},T={class:"use-text-title2"},M={class:"desc use-text-subtitle2"};function B(e,t,s,o,a,n){return l(),d("div",{class:x(["title-main",{dark:s.dark}])},[c("h4",T,f(s.head),1),c("p",M,f(s.desc),1)],2)}const O=i(q,[["render",B],["__scopeId","data-v-c6f425ff"]]);const D={data(){return{loaded:!1}},mounted(){this.loaded=!0}},I=e=>(g("data-v-4b6dbe29"),e=e(),k(),e),R={class:"parallax-wrap cross-wrap"},N={class:"inner-parallax"},U={class:"figure"},V={key:0},E=I(()=>c("div",{class:"parallax-cross"},"   ",-1));function H(e,t,s,o,a,n){const r=m("scroll-parallax");return l(),d("div",R,[c("div",N,[c("div",U,[a.loaded?(l(),d("div",V,[h(r,{speed:.5},{default:p(()=>[E]),_:1})])):v("",!0)])])])}const P=i(D,[["render",H],["__scopeId","data-v-4b6dbe29"]]),j=b({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:t,attrs:s}){const o=$(!1);return y(()=>{o.value=!0}),a=>{var u;if(o.value)return(u=t.default)==null?void 0:u.call(t);const n=t.fallback||t.placeholder;if(n)return n();const r=a.fallback||a.placeholder||"",_=a.fallbackTag||a.placeholderTag||"span";return d(_,s,r)}}}),z={components:{MqResponsive:w.MqResponsive},props:{point:{type:String,required:!0}},computed:{breakpoints(){switch(this.point){case"smUp":return["xs"];case"mdUp":return["xs","sm"];case"lgUp":return["xs","sm","md"];case"xsDown":return["sm","md","lg","xl"];case"smDown":return["md","lg","xl"];case"mdDown":return["lg","xl"];case"lgDown":return"xl";default:return"xl"}}}};function A(e,t,s,o,a,n){const r=m("MqResponsive"),_=j;return l(),C(_,null,{default:p(()=>[h(r,{target:n.breakpoints},{default:p(()=>[S(e.$slots,"default")]),_:3},8,["target"])]),_:3})}const Z=i(z,[["render",A]]);export{P as C,Z as H,O as T};
