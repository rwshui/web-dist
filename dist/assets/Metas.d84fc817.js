import{e,bt as T,u as k,a as M,b4 as l,d as C,c6 as S,a0 as o,B as i,Y as v,c7 as B,c8 as F,c9 as d,v as g,ca as u,cb as x,cc as a,bd as h,n as D,W as H}from"./index.786270b3.js";import{u as m}from"./useT.03329805.js";import{b as L}from"./useTitle.d91ca26e.js";import{D as R}from"./DeletePopover.46b8cc00.js";const W=r=>{const n=m();return e(T,{get colorScheme(){return r.yes?"success":"danger"},get children(){return n(`global.${r.yes?"yes":"no"}`)}})},X=()=>{const r=m();L("manage.sidemenu.metas");const{to:n}=k(),[p,b]=M(()=>l.get("/admin/meta/list")),[f,w]=C([]),s=async()=>{const t=await b();h(t,c=>w(c.content))};s();const[$,y]=S(t=>l.post(`/admin/meta/delete?id=${t}`));return e(H,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(o,{spacing:"$2",get children(){return[e(i,{colorScheme:"accent",get loading(){return p()},onClick:s,get children(){return r("global.refresh")}}),e(i,{onClick:()=>{n("/@manage/metas/add")},get children(){return r("global.add")}})]}}),e(v,{w:"$full",overflowX:"auto",get children(){return e(B,{highlightOnHover:!0,dense:!0,get children(){return[e(F,{get children(){return e(d,{get children(){return[e(g,{each:["path","password","write"],children:t=>e(u,{get children(){return r(`metas.${t}`)}})}),e(u,{get children(){return r("global.operations")}})]}})}}),e(x,{get children(){return e(g,{get each(){return f()},children:t=>e(d,{get children(){return[e(a,{get children(){return t.path}}),e(a,{get children(){return t.password}}),e(a,{get children(){return e(W,{get yes(){return t.write}})}}),e(a,{get children(){return e(o,{spacing:"$2",get children(){return[e(i,{onClick:()=>{n(`/@manage/metas/edit/${t.id}`)},get children(){return r("global.edit")}}),e(R,{get name(){return t.path},get loading(){return $()===t.id},onClick:async()=>{const c=await y(t.id);h(c,()=>{D.success(r("global.delete_success")),s()})}})]}})}})]}})})}})]}})}})]}})};export{X as default};