import{e,bf as i,ad as w,n as y,d as R,a as r,b6 as o,bt as b,aq as k,V as c,t as C,aa as x,an as T,I as B,$ as F,B as g,h as H,aM as L,cl as M}from"./index.56603356.js";import{u as N}from"./useT.303c7e81.js";const V=t=>e(i,{get children(){return t.content}}),W=t=>e(w,{get src(){return t.content}}),q={string:V,image:W},P=()=>{const t=N();y.info(t("manage.messenger-tips"));const[a,l]=R(""),[d,u]=r(()=>o.post("/admin/message/get")),[p,m]=r(()=>o.post("/admin/message/send",{message:a()})),[h,S]=b([]),s=async()=>{const n=await u();H(n,I=>{S(M($=>$.push(I)))})},f=async()=>{const n=await m();L(n)},v=setInterval(s,1e3);return k(()=>clearInterval(v)),e(c,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[e(c,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[e(i,{size:"xl",get children(){return t("manage.received_msgs")}}),e(C,{each:h,children:n=>e(x,T({get component(){return q[n.type]}},n))})]}}),e(B,{w:"$full",get value(){return a()},onInput:n=>l(n.currentTarget.value)}),e(F,{spacing:"$2",get children(){return[e(g,{colorScheme:"accent",get loading(){return d()},onClick:s,get children(){return t("manage.receive")}}),e(g,{get loading(){return p()},onClick:f,get children(){return t("manage.send")}})]}})]}})};export{P as Messenger,q as Shower,P as default};