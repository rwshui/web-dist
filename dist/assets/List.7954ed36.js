import{e as t,$ as l,y as $,aD as h,aG as b,cm as m,k as f,aE as w,bs as j,ag as k,a6 as y,af as p,bc as a,bw as A,bI as C,d,J as S,cn as v,co as I,cp as O,an as u,t as P,o as z,V as M}from"./index.56603356.js";import{u as E}from"./useT.303c7e81.js";import{b as L}from"./Folder.d16e87dc.js";import{a as B,M as D}from"./Layout.e575b80f.js";import{c as T}from"./useUtil.5bcfb431.js";import{U as F}from"./index.f1ab4103.js";import{g as G,O as H}from"./icon.a3e866e2.js";import"./api.60f8b30e.js";import"./useTitle.f1b35a2e.js";import"./Markdown.be61f06a.js";import"./index.cd77be2b.js";import"./FolderTree.3d9cd38e.js";const n=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],U=e=>{const{isHide:o}=T();if(o(e.obj))return null;const{setPathAs:c}=B(),{show:s}=L({id:1});return t(D.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(l,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:$()}},as:F,get href(){return e.obj.name},onMouseEnter:()=>{c(e.obj.name,e.obj.is_dir,!0)},onContextMenu:r=>{h(()=>{b(!1),m(e.index,!0,!0)}),s(r,{props:e.obj})},get children(){return[t(l,{class:"name-box",spacing:"$1",get w(){return n[0].w},get children(){return[t(f,{get when(){return w()},get children(){return t(j,{"on:click":r=>{r.stopPropagation()},get checked(){return e.obj.selected},onChange:r=>{m(e.index,r.target.checked)}})}}),t(k,{class:"icon",boxSize:"$6",get color(){return y()},get as(){return G(e.obj)},mr:"$1","on:click":r=>{e.obj.type===H.IMAGE&&(r.stopPropagation(),r.preventDefault(),p.emit("gallery",e.obj.name))}}),t(a,{class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),t(a,{class:"size",get w(){return n[1].w},get textAlign(){return n[1].textAlign},get children(){return A(e.obj.size)}}),t(a,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return n[2].w},get textAlign(){return n[2].textAlign},get children(){return C(e.obj.modified)}})]}})}})},ee=()=>{const e=E(),[o,c]=d(),[s,r]=d(!1);S(()=>{o()&&v(o(),s())});const g=i=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:i.textAlign,cursor:"pointer",onClick:()=>{i.name===o()?r(!s()):h(()=>{c(i.name),r(!1)})}});return t(M,{class:"list",w:"$full",spacing:"$1",get children(){return[t(l,{class:"title",w:"$full",p:"$2",get children(){return[t(l,{get w(){return n[0].w},spacing:"$1",get children(){return[t(f,{get when(){return w()},get children(){return t(j,{get checked(){return I()},get indeterminate(){return O()},onChange:i=>{b(i.target.checked)}})}}),t(a,u(()=>g(n[0]),{get children(){return e(`home.obj.${n[0].name}`)}}))]}}),t(a,u({get w(){return n[1].w}},()=>g(n[1]),{get children(){return e(`home.obj.${n[1].name}`)}})),t(a,u({get w(){return n[2].w}},()=>g(n[2]),{display:{"@initial":"none","@md":"inline"},get children(){return e(`home.obj.${n[2].name}`)}}))]}}),t(P,{get each(){return z.objs},children:(i,x)=>t(U,{obj:i,get index(){return x()}})})]}})};export{ee as default};