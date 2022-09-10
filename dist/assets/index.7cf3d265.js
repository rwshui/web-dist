import{f as t,v as b,W as k,t as V,a2 as $,a3 as A,bg as m,U as S,R as B,u as p,d as g,L as x,z,m as _,ah as h,bh as d,e as y,bi as E,a0 as u,Y as s,al as L,G as n,H as r,bj as M,bk as U,bl as W,at as Y,J as C,a6 as T,bm as H,bn as F,n as N,b0 as j,aU as q,aV as X,aW as J,aX as Q,aY as K,ak as f,a_ as D,a$ as R,bo as Z,bp as G,bq as e1}from"./index.bde27d78.js";import{d as t1,e as n1,f as r1,g as o1,h as a1,i as i1,j as s1,k as c1,l as l1,m as m1,b as u1,n as g1,o as d1,c as _1}from"./index.15317b0e.js";import{A as h1,d as p1,e as E1,f as f1,g as I1,h as v1,i as $1}from"./index.e86b6ae7.js";var i=(e=>(e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e))(i||{}),A1=(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e))(A1||{});const S1=e=>{const o=V(()=>{if(!$.is_admin(A())){if(e.role===void 0)return!1;if(e.role===m.GENERAL&&!$.is_general(A()))return!1}return!0});return t(B,{get fallback(){return t(T1,e)},get children(){return[t(S,{get when(){return!o()},children:null}),t(S,{get when(){return e.children},get children(){return t(b1,e)}})]}})},T1=e=>{const{pathname:o}=p(),a=g(),c=()=>o()===e.to;return t(h1,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:x,get href(){return e.to},onClick:()=>{w()},w:"$full",alignItems:"center",get _hover(){return{bgColor:c()?"$info4":z(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return c()?"$info4":""},get color(){return c()?"$info11":""},get external(){return e.external},get children(){return[t(_,{get when(){return e.icon},get children(){return t(h,{mr:"$2",get as(){return e.icon}})}}),t(d,{get children(){return a(e.title)}})]}})},b1=e=>{const{pathname:o}=p(),[a,c]=y(o().includes(e.to)),P=g();return t(s,{w:"$full",get children(){return[t(E,{justifyContent:"space-between",onClick:()=>{c(!a())},w:"$full",alignItems:"center",get _hover(){return{bgColor:z()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[t(u,{get children(){return[t(_,{get when(){return e.icon},get children(){return t(h,{mr:"$2",get as(){return e.icon}})}}),t(d,{get children(){return P(e.title)}})]}}),t(h,{as:p1,get transform(){return a()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),t(_,{get when(){return a()},get children(){return t(s,{pl:"$2",get children(){return t(I,{get items(){return e.children}})}})}})]}})},I=e=>t(k,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return t(b,{get each(){return e.items},children:o=>t(S1,o)})}});function z1(e){return L({a:{viewBox:"0 0 24 24"},c:'<path d="M5.385 6.136c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-1.438 2.63c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465-2.63c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.499-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm-1.088 5.592c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.643 1.461 1.438 1.461zm5.464-5.592c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 7.247 12 7.247s1.088-.498 1.088-1.111zm.35-4.675c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461S11.206 0 12 0s1.438.654 1.438 1.461zm-.35 0C13.088.848 12.6.35 12 .35s-1.088.498-1.088 1.111S11.4 2.572 12 2.572s1.088-.498 1.088-1.111zm.35 8.806c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.499 1.088-1.111zm4.376-4.131c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939 1.461c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.644 1.461 1.438 1.461zm-4.027 1.209c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.643-1.461-1.438-1.461zm4.027 0c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 12.857a1.45 1.45 0 00-1.438 1.461c0 .807.644 1.461 1.438 1.461s1.438-.654 1.438-1.461a1.45 1.45 0 00-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zM12 12.896c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.464 1.461c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 16.948c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm4.376 0c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm.35 4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 23.65 12 23.65s1.088-.498 1.088-1.111zm4.376-4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461z"/>'},e)}function L1(e){return L({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)}const l=n(()=>r(()=>import("./Common.d5c24e76.js"),["assets/Common.d5c24e76.js","assets/index.bde27d78.js","assets/index.15d8d646.css","assets/index.15317b0e.js","assets/SettingItem.80187bd3.js","assets/item_type.be442da4.js","assets/index.e86b6ae7.js","assets/ResponsiveGrid.b72d0ebc.js"])),v=[{title:"manage.sidemenu.profile",icon:t1,to:"/@manage",role:m.GUEST,component:n(()=>r(()=>import("./Profile.867ebfd0.js"),["assets/Profile.867ebfd0.js","assets/index.bde27d78.js","assets/index.15d8d646.css","assets/index.15317b0e.js","assets/index.e86b6ae7.js"]))},{title:"manage.sidemenu.settings",icon:n1,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:r1,to:"/@manage/settings/site",component:()=>t(l,{get group(){return i.SITE}})},{title:"manage.sidemenu.style",icon:o1,to:"/@manage/settings/style",component:()=>t(l,{get group(){return i.STYLE}})},{title:"manage.sidemenu.preview",icon:a1,to:"/@manage/settings/preview",component:()=>t(l,{get group(){return i.PREVIEW}})},{title:"manage.sidemenu.global",icon:i1,to:"/@manage/settings/global",component:()=>t(l,{get group(){return i.GLOBAL}})},{title:"manage.sidemenu.sso",icon:M,to:"/@manage/settings/sso",component:()=>t(l,{get group(){return i.SSO}})},{title:"manage.sidemenu.other",icon:s1,to:"/@manage/settings/other",component:n(()=>r(()=>import("./Other.3c5f15a5.js"),["assets/Other.3c5f15a5.js","assets/index.bde27d78.js","assets/index.15d8d646.css","assets/index.15317b0e.js","assets/useUtil.e5c2b853.js","assets/api.8071a577.js","assets/SettingItem.80187bd3.js","assets/item_type.be442da4.js","assets/index.e86b6ae7.js"]))}]},{title:"manage.sidemenu.tasks",icon:L1,to:"/@manage/tasks",children:[{title:"manage.sidemenu.aria2",icon:c1,to:"/@manage/tasks/aria2",component:n(()=>r(()=>import("./Aria2.9098b660.js"),["assets/Aria2.9098b660.js","assets/index.bde27d78.js","assets/index.15d8d646.css","assets/index.15317b0e.js","assets/Tasks.368df874.js","assets/Paginator.84cc4562.js","assets/index.e86b6ae7.js"]))},{title:"manage.sidemenu.qbit",icon:E1,to:"/@manage/tasks/qbit",component:n(()=>r(()=>import("./Qbit.27078bb6.js"),["assets/Qbit.27078bb6.js","assets/index.bde27d78.js","assets/index.15d8d646.css","assets/index.15317b0e.js","assets/Tasks.368df874.js","assets/Paginator.84cc4562.js","assets/index.e86b6ae7.js"]))},{title:"manage.sidemenu.upload",icon:l1,to:"/@manage/tasks/upload",component:n(()=>r(()=>import("./Upload.a6e4a064.js"),["assets/Upload.a6e4a064.js","assets/index.bde27d78.js","assets/index.15d8d646.css","assets/index.15317b0e.js","assets/Tasks.368df874.js","assets/Paginator.84cc4562.js","assets/index.e86b6ae7.js"]))},{title:"manage.sidemenu.copy",icon:U,to:"/@manage/tasks/copy",component:n(()=>r(()=>import("./Copy.cd563684.js"),["assets/Copy.cd563684.js","assets/index.bde27d78.js","assets/index.15d8d646.css","assets/index.15317b0e.js","assets/Tasks.368df874.js","assets/Paginator.84cc4562.js","assets/index.e86b6ae7.js"]))}]},{title:"manage.sidemenu.users",icon:m1,to:"/@manage/users",component:n(()=>r(()=>import("./Users.ff5dbff3.js"),["assets/Users.ff5dbff3.js","assets/index.bde27d78.js","assets/index.15d8d646.css","assets/index.15317b0e.js","assets/DeletePopover.67d0959b.js","assets/Wether.bacc7acd.js"]))},{title:"manage.sidemenu.storages",icon:f1,to:"/@manage/storages",component:n(()=>r(()=>import("./Storages.0f908e57.js"),["assets/Storages.0f908e57.js","assets/index.bde27d78.js","assets/index.15d8d646.css","assets/index.15317b0e.js","assets/DeletePopover.67d0959b.js"]))},{title:"manage.sidemenu.metas",icon:z1,to:"/@manage/metas",component:n(()=>r(()=>import("./Metas.97afe022.js"),["assets/Metas.97afe022.js","assets/index.bde27d78.js","assets/index.15d8d646.css","assets/index.15317b0e.js","assets/DeletePopover.67d0959b.js","assets/Wether.bacc7acd.js"]))},{title:"manage.sidemenu.indexes",icon:u1,to:"/@manage/indexes",component:n(()=>r(()=>import("./indexes.62ea8675.js"),["assets/indexes.62ea8675.js","assets/index.bde27d78.js","assets/index.15d8d646.css","assets/api.8071a577.js","assets/Common.d5c24e76.js","assets/index.15317b0e.js","assets/SettingItem.80187bd3.js","assets/item_type.be442da4.js","assets/index.e86b6ae7.js","assets/ResponsiveGrid.b72d0ebc.js"]))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:I1,component:n(()=>r(()=>import("./backup-restore.36501b90.js"),["assets/backup-restore.36501b90.js","assets/index.bde27d78.js","assets/index.15d8d646.css","assets/index.15317b0e.js"]))},{title:"manage.sidemenu.about",icon:g1,to:"/@manage/about",role:m.GUEST,component:n(()=>r(()=>import("./About.505b8f05.js"),["assets/About.505b8f05.js","assets/index.bde27d78.js","assets/index.15d8d646.css","assets/index.15317b0e.js","assets/Markdown.1c1053f7.js"]))},{title:"manage.sidemenu.docs",icon:v1,to:"https://alist.nn.ci",role:m.GUEST,external:!0},{title:"manage.sidemenu.home",icon:W,to:"/",role:m.GUEST,external:!0}],{isOpen:C1,onOpen:D1,onClose:w}=Y(),R1=()=>{const e=g(),{to:o}=p();return t(s,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return C("$background","$neutral2")()},get children(){return[t(E,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[t(u,{spacing:"$2",get children(){return[t(T,{"aria-label":"menu",get icon(){return t($1,{})},display:{"@sm":"none"},onClick:D1,size:"sm"}),t(d,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{o("/@manage")},get children(){return e("manage.title")}})]}}),t(u,{spacing:"$1",get children(){return t(T,{"aria-label":"logout",get icon(){return t(H,{})},onClick:()=>{F(),N.success(e("manage.logout_success")),o(`/@login?redirect=${encodeURIComponent(location.pathname)}`)},size:"sm"})}})]}}),t(j,{get opened(){return C1()},placement:"left",onClose:w,get children(){return[t(q,{}),t(X,{get children(){return[t(J,{}),t(Q,{color:"$info9",get children(){return e("manage.title")}}),t(K,{get children(){return[t(I,{items:v}),t(f,{get children(){return t(u,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(D,{}),t(R,{})]}})}})]}})]}})]}})]}})},w1=[{to:"/storages/add",component:n(()=>r(()=>import("./AddOrEdit.285923ff.js"),["assets/AddOrEdit.285923ff.js","assets/index.bde27d78.js","assets/index.15d8d646.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.b72d0ebc.js"]))},{to:"/storages/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.285923ff.js"),["assets/AddOrEdit.285923ff.js","assets/index.bde27d78.js","assets/index.15d8d646.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.b72d0ebc.js"]))},{to:"/users/add",component:n(()=>r(()=>import("./AddOrEdit.21da216e.js"),["assets/AddOrEdit.21da216e.js","assets/index.bde27d78.js","assets/index.15d8d646.css","assets/FolderTree.4ad558c7.js","assets/index.e86b6ae7.js","assets/api.8071a577.js"]))},{to:"/users/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.21da216e.js"),["assets/AddOrEdit.21da216e.js","assets/index.bde27d78.js","assets/index.15d8d646.css","assets/FolderTree.4ad558c7.js","assets/index.e86b6ae7.js","assets/api.8071a577.js"]))},{to:"/metas/add",component:n(()=>r(()=>import("./AddOrEdit.0163a08b.js"),["assets/AddOrEdit.0163a08b.js","assets/index.bde27d78.js","assets/index.15d8d646.css","assets/FolderTree.4ad558c7.js","assets/index.e86b6ae7.js","assets/api.8071a577.js"]))},{to:"/metas/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.0163a08b.js"),["assets/AddOrEdit.0163a08b.js","assets/index.bde27d78.js","assets/index.15d8d646.css","assets/FolderTree.4ad558c7.js","assets/index.e86b6ae7.js","assets/api.8071a577.js"]))},{to:"/2fa",component:n(()=>r(()=>import("./2fa.bce61af7.js"),["assets/2fa.bce61af7.js","assets/index.bde27d78.js","assets/index.15d8d646.css"]))},{to:"/messenger",component:n(()=>r(()=>import("./Messenger.c879bb2c.js"),["assets/Messenger.c879bb2c.js","assets/index.bde27d78.js","assets/index.15d8d646.css"]))}],O1=e=>(d1(e.title),t(f,{h:"$full",get children(){return t(d,{get children(){return e.title}})}})),O=(e,o=[])=>(e.forEach(a=>{a.children?O(a.children,o):o.push({to:Z(a.to,"/@manage"),component:a.component||(()=>t(O1,{get title(){return a.title},get to(){return a.to||"empty"}}))})}),o),P1=O(v).concat(w1),k1=()=>{const e=g();return _1(()=>e("manage.title")),t(s,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[t(R1,{}),t(E,{w:"$full",h:"calc(100vh - 64px)",get children(){return[t(s,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return C("$background","$neutral2")()},overflowY:"auto",get children(){return[t(I,{items:v}),t(f,{get children(){return t(u,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(D,{}),t(R,{})]}})}})]}}),t(s,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return t(G,{get children(){return t(b,{each:P1,children:o=>t(e1,{get path(){return o.to},get component(){return o.component}})})}})}})]}})]}})},y1=Object.freeze(Object.defineProperty({__proto__:null,default:k1},Symbol.toStringTag,{value:"Module"}));export{A1 as F,i as G,y1 as i};
