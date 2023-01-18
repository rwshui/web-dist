import{f as e,ah as g,a7 as y,o,W as l,be as I,bb as P,aB as _,bv as O,bH as T,d as h,t as b,bI as L,ad as x,a5 as k,B as m,a9 as S,v as j,aa as D,bJ as f,m as d,a0 as v,bK as A,bL as $,G as a,H as s,bF as R,bM as V,e as M,bt as F,P as C,Q as z,ab as B}from"./index.f0aba90f.js";import{a as w,b as W}from"./useUtil.47e0253a.js";import{g as H,O as u}from"./icon.3c1e2bc0.js";import{R as G}from"./index.5d44e7cf.js";const U=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(g,{get color(){return y()},boxSize:"$20",get as(){return H(o.obj)}}),e(l,{spacing:"$2",get children(){return[e(I,{size:"lg",css:{wordBreak:"break-all"},get children(){return o.obj.name}}),e(P,{color:"$neutral10",size:"sm",get children(){return[_(()=>O(o.obj.size))," \xB7 ",_(()=>T(o.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),E=()=>{const r=h(),n=b(()=>L(o.obj.name)),{currentObjLink:i}=w();return e(d,{get when(){return n().length},get children(){return e(x,{get children(){return[e(k,{as:m,colorScheme:"success",get rightIcon(){return e(g,{as:G})},get children(){return r("home.preview.open_with")}}),e(S,{get children(){return e(j,{get each(){return n()},children:t=>e(D,{as:"a",target:"_blank",get href(){return f(t.value,{raw_url:o.raw_url,name:o.obj.name,d_url:i(!0)})},get children(){return t.key}})})}})]}})}})},p=r=>{const n=h(),{copyCurrentRawLink:i}=W();return e(U,{get children(){return[e(v,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>i(!0),get children(){return n("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return o.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),e(d,{get when(){return r.openWith},get children(){return e(E,{})}})]}})},X=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),J=r=>{const{currentObjLink:n}=w();return e($,{w:"$full",h:"70vh",get children(){return e(A.iframe,{w:"$full",h:"$full",get src(){return f(r.scheme,{raw_url:o.raw_url,name:o.obj.name,d_url:n(!0)})}})}})},K=r=>()=>e(J,{scheme:r}),Q=[{name:"Markdown",type:u.TEXT,component:a(()=>s(()=>import("./markdown.e44c4ef3.js"),["assets/markdown.e44c4ef3.js","assets/index.f0aba90f.js","assets/index.659f4289.css","assets/useUtil.47e0253a.js","assets/api.5f832dd3.js","assets/Markdown.a0dc314d.js"]))},{name:"Text Editor",type:u.TEXT,component:a(()=>s(()=>import("./text-editor.618a3404.js"),["assets/text-editor.618a3404.js","assets/index.f0aba90f.js","assets/index.659f4289.css","assets/useUtil.47e0253a.js","assets/api.5f832dd3.js"]))},{name:"HTML render",exts:["html"],component:a(()=>s(()=>import("./html.923e4f68.js"),["assets/html.923e4f68.js","assets/index.f0aba90f.js","assets/index.659f4289.css","assets/useUtil.47e0253a.js","assets/api.5f832dd3.js"]))},{name:"Image",type:u.IMAGE,component:a(()=>s(()=>import("./image.67af8f07.js"),["assets/image.67af8f07.js","assets/index.f0aba90f.js","assets/index.659f4289.css","assets/ImageWithError.6067f3c8.js"]))},{name:"Video",type:u.VIDEO,component:a(()=>s(()=>import("./video.8bdc5d67.js"),["assets/video.8bdc5d67.js","assets/index.f0aba90f.js","assets/index.659f4289.css","assets/useUtil.47e0253a.js","assets/api.5f832dd3.js","assets/icon.3c1e2bc0.js","assets/index.5d44e7cf.js"]))},{name:"Audio",type:u.AUDIO,component:a(()=>s(()=>import("./audio.4dd8f871.js"),["assets/audio.4dd8f871.js","assets/audio.e5b5af14.css","assets/index.f0aba90f.js","assets/index.659f4289.css","assets/useUtil.47e0253a.js","assets/api.5f832dd3.js","assets/icon.3c1e2bc0.js","assets/index.5d44e7cf.js"]))},{name:"Ipa",exts:["ipa"],component:a(()=>s(()=>import("./ipa.3d0568f3.js"),["assets/ipa.3d0568f3.js","assets/index.f0aba90f.js","assets/index.659f4289.css","assets/useUtil.47e0253a.js","assets/api.5f832dd3.js","assets/icon.3c1e2bc0.js","assets/index.5d44e7cf.js"]))},{name:"Plist",exts:["plist"],component:a(()=>s(()=>import("./plist.e5c4af70.js"),["assets/plist.e5c4af70.js","assets/index.f0aba90f.js","assets/index.659f4289.css","assets/useUtil.47e0253a.js","assets/api.5f832dd3.js","assets/icon.3c1e2bc0.js","assets/index.5d44e7cf.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/Aliyundrive/,component:a(()=>s(()=>import("./aliyun_office.4464c8a8.js"),["assets/aliyun_office.4464c8a8.js","assets/index.f0aba90f.js","assets/index.659f4289.css"]))}],q=r=>{const n=[];return Q.forEach(t=>{var c;t.provider&&!t.provider.test(r.provider)||(t.type===r.type||t.exts==="*"||((c=t.exts)==null?void 0:c.includes(R(r.name).toLowerCase())))&&n.push({name:t.name,component:t.component})}),V(r.name).forEach(t=>{n.push({name:t.key,component:K(t.value)})}),n.push({name:"Download",component:a(()=>s(()=>Promise.resolve().then(()=>X),void 0))}),n},N=()=>{const r=b(()=>q({...o.obj,provider:o.provider})),[n,i]=M(r()[0]);return e(d,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(v,{w:"$full",spacing:"$2",get children(){return[e(F,{alwaysShowBorder:!0,get value(){return n().name},onChange:t=>{i(r().find(c=>c.name===t))},get options(){return r().map(t=>({value:t.name}))}}),e(E,{})]}}),e(C,{get fallback(){return e(z,{})},get children(){return e(B,{get component(){return n().component}})}})]}})}})},te=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"}));export{U as F,te as a};