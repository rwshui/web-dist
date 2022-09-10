import{u as v,o as m,S as k,ba as C,p as h,a3 as D,bb as L,w as R,bc as b,s as g,d as S,n as T,bd as E,X as P}from"./index.bde27d78.js";import{b as $}from"./api.8071a577.js";const O=(n,t,a="direct",r)=>{a!=="preview"&&(n=h(D().base_path,n)),n=L(n,!0);let o=`${n}/${t.name}`;o=R(o,r);let e=b,c=a==="direct"?"/d":"/p";a==="preview"&&(c="",b.startsWith(location.origin)||(e=location.origin));let s=`${e}${c}${o}`;return a!=="preview"&&t.sign&&(s+=`?sign=${t.sign}`),s},y=()=>{const{pathname:n}=v(),t=(r,o,e)=>{const c=m.state!==k.File?n():C(n());return O(c,r,o,e)},a=(r,o)=>t(r,"direct",o);return{getLinkByObj:t,rawLink:a,proxyLink:(r,o)=>t(r,"proxy",o),previewPage:(r,o)=>t(r,"preview",o),currentObjLink:r=>a(m.obj,r)}},U=()=>{const n=(e,c)=>(c.forEach(l=>{const u=e.indexOf(`${l}=`);if(u!==-1){const i=e.indexOf("=",u),d=e.indexOf("&",u),w=e.indexOf("#",u);let p;if(d!==-1){const f=d-i;p=new RegExp(`${l}=.{${f}}`),e=e.replace(p,"")}else if(w!==-1){const f=w-i-1;p=new RegExp(`&?${l}=.{${f}}`),e=e.replace(p,"")}else p=new RegExp(`&?${l}=.+`),e=e.replace(p,"")}}),e.indexOf("=")===-1&&(e=e.replace(/\?/,"")),e),t=e=>e.link2.indexOf("exp=")?n(e.link2,["time","exp"]):e.link2,{previewPage:a,rawLink:r}=y(),o=e=>g().filter(c=>!c.is_dir).map(c=>r(c,e));return{rawLinks:o,previewPagesText:()=>g().map(e=>a(e,!0)).join(`
`),rawLinksText:e=>o(e).join(`
`),link2Text:()=>g().map(e=>t(e)).join(`
`)}},X=()=>{const{copy:n}=z(),{previewPagesText:t,rawLinksText:a,link2Text:r}=U(),{currentObjLink:o}=y();return{copySelectedPreviewPage:()=>{n(t())},copySelectedRawLink:e=>{n(a(e))},copySelectedLink2:()=>{n(r())},copyCurrentRawLink:e=>{n(o(e))}}};var A=function(){var n=document.getSelection();if(!n.rangeCount)return function(){};for(var t=document.activeElement,a=[],r=0;r<n.rangeCount;r++)a.push(n.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return n.removeAllRanges(),function(){n.type==="Caret"&&n.removeAllRanges(),n.rangeCount||a.forEach(function(o){n.addRange(o)}),t&&t.focus()}},j=A,x={"text/plain":"Text","text/html":"Url",default:"Text"},I="Copy to clipboard: #{key}, Enter";function F(n){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return n.replace(/#{\s*key\s*}/g,t)}function H(n,t){var a,r,o,e,c,s,l=!1;t||(t={}),a=t.debug||!1;try{o=j(),e=document.createRange(),c=document.getSelection(),s=document.createElement("span"),s.textContent=n,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",function(i){if(i.stopPropagation(),t.format)if(i.preventDefault(),typeof i.clipboardData>"u"){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var d=x[t.format]||x.default;window.clipboardData.setData(d,n)}else i.clipboardData.clearData(),i.clipboardData.setData(t.format,n);t.onCopy&&(i.preventDefault(),t.onCopy(i.clipboardData))}),document.body.appendChild(s),e.selectNodeContents(s),c.addRange(e);var u=document.execCommand("copy");if(!u)throw new Error("copy command was unsuccessful");l=!0}catch(i){a&&console.error("unable to copy using execCommand: ",i),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",n),t.onCopy&&t.onCopy(window.clipboardData),l=!0}catch(d){a&&console.error("unable to copy using clipboardData: ",d),a&&console.error("falling back to prompt"),r=F("message"in t?t.message:I),window.prompt(r,n)}}finally{c&&(typeof c.removeRange=="function"?c.removeRange(e):c.removeAllRanges()),s&&document.body.removeChild(s),o()}return l}var N=H;const z=()=>{const n=S(),{pathname:t}=v();return{copy:a=>{N(a),T.success(n("global.copied"))},isHide:a=>{const r=E();for(const o of r)if(o.test(h(t(),a.name)))return!0;return!1}}},_=()=>{const{proxyLink:n}=y();return P("",async()=>$(n(m.obj,!0)))};export{y as a,X as b,z as c,_ as d,O as g,U as u};
