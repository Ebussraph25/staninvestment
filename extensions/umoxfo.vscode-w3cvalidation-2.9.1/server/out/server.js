(()=>{"use strict";var e,t,r,o={9596:(e,t,r)=>{r.r(t);var o=r(8212),n=r(6813),i=r(1669);const s=require("http"),a={host:"localhost",port:8888,method:"POST",path:"/?out=json",headers:{"Content-Type":"text/html; charset=utf-8","User-Agent":"Validator.nu/LV"}},u=(0,i.promisify)(setTimeout),l=(0,o.createConnection)(o.ProposedFeatures.all),c=new o.TextDocuments(n.n);async function d(e){try{const t=(await async function(e){return new Promise(((t,r)=>{const o=(0,s.request)(a,(e=>{var o;e.statusCode=null!==(o=e.statusCode)&&void 0!==o?o:0,(e.statusCode<200||e.statusCode>299)&&r(),e.setEncoding("utf8");let n="";e.on("data",(e=>n+=e)),e.on("end",(()=>t(JSON.parse(n).messages)))}));o.on("error",(e=>r(e))),o.end(e)}))}(e.getText())).map((e=>{var t,r,n;let i;switch(e.type){case"info":i="warning"===e.subType?o.DiagnosticSeverity.Warning:o.DiagnosticSeverity.Information;break;case"error":i=o.DiagnosticSeverity.Error}return{range:{start:{line:(e.firstLine||e.lastLine||1)-1,character:(e.firstColumn||e.lastColumn||1)-1},end:{line:(null!==(t=e.lastLine)&&void 0!==t?t:1)-1,character:null!==(r=e.lastColumn)&&void 0!==r?r:0}},severity:i,source:"W3C Validator",message:null!==(n=e.message)&&void 0!==n?n:""}}));l.sendDiagnostics({uri:e.uri,diagnostics:t})}catch(t){await u(1e3*(Math.random()+1)),await d(e)}}c.listen(l),l.onInitialize((()=>({capabilities:{textDocumentSync:o.TextDocumentSyncKind.Full}}))),c.onDidChangeContent((async e=>await d(e.document))),c.onDidClose((e=>l.sendDiagnostics({uri:e.document.uri,diagnostics:[]}))),l.listen()},3129:e=>{e.exports=require("child_process")},6417:e=>{e.exports=require("crypto")},5747:e=>{e.exports=require("fs")},1631:e=>{e.exports=require("net")},2087:e=>{e.exports=require("os")},5622:e=>{e.exports=require("path")},8835:e=>{e.exports=require("url")},1669:e=>{e.exports=require("util")}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return o[e].call(r.exports,r,r.exports,i),r.exports}i.m=o,i.x=()=>{var e=i.O(void 0,[1],(()=>i(9596)));return i.O(e)},e=[],i.O=(t,r,o,n)=>{if(!r){var s=1/0;for(l=0;l<e.length;l++){for(var[r,o,n]=e[l],a=!0,u=0;u<r.length;u++)(!1&n||s>=n)&&Object.keys(i.O).every((e=>i.O[e](r[u])))?r.splice(u--,1):(a=!1,n<s&&(s=n));a&&(e.splice(l--,1),t=o())}return t}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[r,o,n]},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>e+".js",i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r={377:1},i.O.require=e=>r[e],i.f.require=(e,t)=>{r[e]||(e=>{var t=e.modules,o=e.ids,n=e.runtime;for(var s in t)i.o(t,s)&&(i.m[s]=t[s]);n&&n(i);for(var a=0;a<o.length;a++)r[o[a]]=1;i.O()})(require("./"+i.u(e)))},t=i.x,i.x=()=>(i.e(1),t());var s=i.x();module.exports=s})();
//# sourceMappingURL=server.js.map