import{d as u,r as _,o as l,c,q as t,a as o,z as m,M as d,X as f,F as v,_ as P}from"./chunks/framework.Bh4f_7Kc.js";import{P as h,a as g,b as x}from"./chunks/PartnerJoin.BXG6e5n3.js";import{i as w}from"./chunks/theme.DYZ4xkav.js";import"./chunks/4195.CrAwiJVE.js";import"./chunks/PartnerCard.4G-Gbasg.js";const B={class:"container"},V=u({__name:"PartnerAll",setup(i){const r=_("");function n(a){return s(a.name,r.value)||a.region.some(e=>s(e,r.value))}function s(a,e){return a.toLowerCase().includes(e.toLowerCase())}return(a,e)=>(l(),c(v,null,[t(h,{title:"Browser All Partners"}),o("div",B,[t(m(w),{class:"icon"}),d(o("input",{placeholder:"Search partners by name or region","onUpdate:modelValue":e[0]||(e[0]=p=>r.value=p)},null,512),[[f,r.value]]),t(g,{filter:n})]),t(x)],64))}}),b=P(V,[["__scopeId","data-v-f7e58630"]]),q=JSON.parse('{"title":"","description":"","frontmatter":{"page":true,"footer":false},"headers":[],"relativePath":"partners/all.md","filePath":"partners/all.md"}'),A={name:"partners/all.md"},y=Object.assign(A,{setup(i){return(r,n)=>(l(),c("div",null,[t(b)]))}});export{q as __pageData,y as default};
