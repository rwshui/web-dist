import{f as o,Z as s,o as n,bH as d}from"./index.bde27d78.js";import{d as i}from"./useUtil.e5c2b853.js";import{M as m}from"./Markdown.1c1053f7.js";import"./api.8071a577.js";const g=()=>{const[r]=i(),a=e=>n.obj.name.endsWith(".md")?e:"```"+d(n.obj.name)+`
`+e+"\n```";return o(s,{get loading(){return r.loading},get children(){return o(m,{class:"word-wrap",get children(){var e,t;return a((t=(e=r())==null?void 0:e.content)!=null?t:"")}})}})};export{g as default};
