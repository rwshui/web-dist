import{f as t,a8 as g,ai as h,e as b,w as d,aF as f,V as j,C as x,aE as w,aH as $,co as i,al as k,ah as C,m as l,bv as v,ag as p,aP as y,x as I,o as M,c2 as S}from"./index.5bf8971c.js";import{b as P}from"./Folder.2b755c92.js";import{a as E,M as O}from"./Layout.a5ff5942.js";import{c as z}from"./useUtil.ab569e3b.js";import{o as A}from"./index.80062682.js";import{I as G}from"./ImageWithError.4cc981c0.js";import{g as H,O as L}from"./icon.2e2565f4.js";import"./Paginator.ef640c98.js";import"./index.43876868.js";import"./api.71437c03.js";import"./Markdown.f6854125.js";import"./index.3137d2fb.js";import"./FolderTree.56fd908c.js";const W=e=>{const{isHide:a}=z();if(a(e.obj))return null;const{setPathAs:s}=E(),o=t(h,{get color(){return g()},boxSize:"$12",get as(){return H(e.obj)}}),[c,n]=b(!1),u=d(()=>f()&&(c()||e.obj.selected)),{show:m}=P({id:1});return t(O.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(j,{class:"grid-item",w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:x()}},as:A,get href(){return e.obj.name},onMouseEnter:()=>{n(!0),s(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{n(!1)},onContextMenu:r=>{w(()=>{$(!1),i(e.index,!0,!0)}),m(r,{props:e.obj})},get children(){return[t(k,{class:"item-thumbnail",h:"70px",w:"$full","on:click":r=>{e.obj.type===L.IMAGE&&(r.stopPropagation(),r.preventDefault(),C.emit("gallery",e.obj.name))},pos:"relative",get children(){return[t(l,{get when(){return u()},get children(){return t(v,{pos:"absolute",left:"$1",top:"$1","on:click":r=>{r.stopPropagation()},get checked(){return e.obj.selected},onChange:r=>{i(e.index,r.target.checked)}})}}),t(l,{get when(){return e.obj.thumb},fallback:o,get children(){return t(G,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return t(p,{size:"lg"})},fallbackErr:o,get src(){return e.obj.thumb},loading:"lazy"})}})]}}),t(y,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return e.obj.name},get children(){return e.obj.name}})]}})}})},X=()=>t(S,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",get children(){return t(I,{get each(){return M.objs},children:(e,a)=>t(W,{obj:e,get index(){return a()}})})}});export{X as default};