import{d as v,u as $,a as l,b5 as r,bs as C,bO as w,e as I,f as s,bP as R,ap as L,bc as o,n as p,a0 as T,B as u,W as _}from"./index.f2ce3f69.js";import{b as x}from"./useTitle.75b139bb.js";import{I as B}from"./SettingItem.1b78addc.js";import{R as P}from"./ResponsiveGrid.7111eb07.js";import"./index.9005c3ae.js";import"./index.3c1dd116.js";import"./item_type.be442da4.js";const j=d=>{const t=v(),{pathname:m}=$();x(`manage.sidemenu.${m().split("/").pop()}`);const[h,f]=l(()=>r.get(`/admin/setting/list?group=${d.group}`)),[i,c]=C([]),a=async()=>{const e=await f();o(e,c)};a();const[b,S]=l(()=>r.post("/admin/setting/save",w(i))),[k,g]=I(!1);return s(_,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[s(P,{get children(){return s(R,{each:i,children:(e,D)=>s(B,L(e,{onChange:n=>{c(y=>e().key===y.key,"value",n)},onDelete:async()=>{g(!0);const n=await r.post(`/admin/setting/delete?key=${e().key}`);g(!1),o(n,()=>{p.success(t("global.delete_success")),a()})}}))})}}),s(T,{spacing:"$2",get children(){return[s(u,{colorScheme:"accent",onClick:a,get loading(){return h()||k()},get children(){return t("global.refresh")}}),s(u,{get loading(){return b()},onClick:async()=>{const e=await S();o(e,()=>p.success(t("global.save_success")))},get children(){return t("global.save")}})]}})]}})};export{j as default};