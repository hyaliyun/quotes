import{_ as h,o,c as s,a as e,t as u,m as f,C as _,F as l,p as v,e as y,f as g,q}from"./chunks/framework.Bh4f_7Kc.js";const b={name:"PoemCard",props:{poem:{type:Object,required:!0}}},w={class:"quote-card-container"},C={class:"quote-card"},k={class:"quote-text"},P={class:"quote-author"};function x(i,t,n,c,d,a){return o(),s("div",w,[e("div",C,[e("p",k,'"'+u(n.poem.quote)+'"',1),e("p",P,[f("— "+u(n.poem.author)+" ",1),t[0]||(t[0]=e("span",{class:"poemseal"},"🌻",-1))])])])}const B=h(b,[["render",x],["__scopeId","data-v-be812cf6"]]),D=JSON.parse('[{"quote":"The way to get started is to quit talking and begin doing.","author":"Walt Disney"},{"quote":"\\"Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma – which is living with the results of other peoples thinking.\\"","author":"Steve Jobs"},{"quote":"If life were predictable it would cease to be life, and be without flavor.","author":"Eleanor Roosevelt"},{"quote":"\\"If you look at what you have in life, youll always have more. If you look at what you dont have in life, youll never have enough.\\"","author":"Oprah Winfrey"},{"quote":"\\"If you set your goals ridiculously high and its a failure, you will fail above everyone elses success.\\"","author":"James Cameron"},{"quote":"Life is what happens when you\\re busy making other plans.","author":"John Lennon"},{"quote":"I have no special talent. I am only passionately curious.","author":"Albert Einstein"},{"quote":"If you judge people, you have no time to love them.","author":"Mother Teresa"},{"quote":"All that we are is the result of what we have thought.","author":"Buddha"},{"quote":"Whenever you find yourself on the side of the majority, it is time to pause and reflect.","author":"Mark Twain"},{"quote":"The most courageous act is still to think for yourself. Aloud.","author":"Coco Chanel"},{"quote":"Stay hungry, stay foolish","author":"Steve Jobs"}]'),I={name:"App",components:{PoemCard:B},data(){return{visibleCount:8,poemsData:D}},computed:{visiblePoems(){return this.poemsData.slice(0,this.visibleCount)},hasMorePoems(){return this.visibleCount<this.poemsData.length}},methods:{loadMore(){this.visibleCount+=8}}},T={class:"card-container"};function M(i,t,n,c,d,a){const m=_("PoemCard");return o(),s(l,null,[t[1]||(t[1]=e("section",null,[e("div",{class:"top-Banner"},[e("div",{class:"top-Banner-Title"},[e("div",{class:"top-Banner-Title-Text"},"🎉Life Quotes🥳")])])],-1)),e("section",null,[e("div",T,[(o(!0),s(l,null,v(a.visiblePoems,(r,p)=>(o(),y(m,{key:p,poem:r},null,8,["poem"]))),128))]),a.hasMorePoems?(o(),s("button",{key:0,class:"load-more-button",onClick:t[0]||(t[0]=(...r)=>a.loadMore&&a.loadMore(...r))},"See more")):g("",!0)])],64)}const S=h(I,[["render",M]]),$=JSON.parse('{"title":"","description":"","frontmatter":{"page":true},"headers":[],"relativePath":"quotes/45.md","filePath":"quotes/45.md"}'),J={name:"quotes/45.md"},O=Object.assign(J,{setup(i){return(t,n)=>(o(),s("div",null,[q(S)]))}});export{$ as __pageData,O as default};
