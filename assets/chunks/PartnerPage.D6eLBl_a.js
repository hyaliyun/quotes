import{d as b,n as C,P as v,t as n}from"./PartnerCard.4G-Gbasg.js";import{j as P}from"./theme.DYZ4xkav.js";import{d as L,o,c as i,a as s,q as p,z as t,m as V,t as _,F as N,p as T,f as x,_ as B}from"./framework.Bh4f_7Kc.js";const y={class:"partner-page"},M={class:"back"},j={href:"/partners/all.html"},z={class:"description"},F=["innerHTML"],H={class:"actions"},I=["href"],S=["href"],q={key:0,class:"hiring"},w=["href"],A=L({__name:"PartnerPage",props:{partner:{}},setup(m){const f=m,c=b.find(r=>C(r.name)===f.partner),{name:l,description:h,hiring:d,contact:u,website:g}=c;function k(r){return`mailto:${r}?subject=Looking for a TypeScript Partner`}return(r,e)=>(o(),i("div",y,[s("div",M,[s("a",j,[p(t(P),{class:"icon"}),e[3]||(e[3]=V("Back to all partners"))])]),p(v,{hero:"",page:"",data:t(c)},null,8,["data"]),s("div",z,[s("h2",null,"About "+_(t(l)),1),(o(!0),i(N,null,T(t(h),a=>(o(),i("p",{innerHTML:a},null,8,F))),256))]),s("div",H,[s("a",{href:t(g).url,target:"_blank",onClick:e[0]||(e[0]=(...a)=>t(n)&&t(n)(...a))},"Visit Website",8,I),s("a",{class:"contact",href:k(t(u)),target:"_blank",onClick:e[1]||(e[1]=(...a)=>t(n)&&t(n)(...a))},"Contact",8,S)]),t(d)?(o(),i("div",q,[s("a",{href:t(d),onClick:e[2]||(e[2]=(...a)=>t(n)&&t(n)(...a))},_(t(l))+" is hiring!",9,w)])):x("",!0)]))}}),$=B(A,[["__scopeId","data-v-01958b8e"]]);export{$ as P};
