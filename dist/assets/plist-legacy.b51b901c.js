!function(){function n(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var r,a,i=[],c=!0,o=!1;try{for(e=e.call(n);!(c=(r=e.next()).done)&&(i.push(r.value),!t||i.length!==t);c=!0);}catch(u){o=!0,a=u}finally{try{c||null==e.return||e.return()}finally{if(o)throw a}}return i}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}System.register(["./index-legacy.c3e5d44b.js","./File-legacy.2e338476.js","./useUtil-legacy.c705885f.js","./api-legacy.f2e1f4e8.js","./icon-legacy.3ccc8103.js","./index-legacy.2662a234.js","./index-legacy.daa324aa.js","./Layout-legacy.06bd9a08.js","./Markdown-legacy.32d7b213.js","./index-legacy.e85aa71f.js","./FolderTree-legacy.1a2d8b48.js"],(function(t){"use strict";var e,r,a,i,c,o;return{setters:[function(n){e=n.d,r=n.e,a=n.f,i=n.B,c=n.o},function(n){o=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=e(),u=n(r(!1),2),l=u[0],f=u[1];return a(o,{get children(){return a(i,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+c.raw_url},onClick:function(){f(!0)},get children(){return t("home.preview.".concat(l()?"installing":"install"))}})}})}))}}}))}();
