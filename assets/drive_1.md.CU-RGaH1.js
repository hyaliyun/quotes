import{_ as h,o as t,c as r,a as e,t as u,m as p,C as g,F as l,p as y,e as w,f as b,q}from"./chunks/framework.Bh4f_7Kc.js";const v={name:"PoemCard",props:{poem:{type:Object,required:!0}}},_={class:"quote-card-container"},k={class:"quote-card"},B={class:"quote-text"},C={class:"quote-author"};function I(i,o,n,d,m,a){return t(),r("div",_,[e("div",k,[e("p",B,'"'+u(n.poem.quote)+'"',1),e("p",C,[p("— "+u(n.poem.author)+" ",1),o[0]||(o[0]=e("span",{class:"poemseal"},"🐶",-1))])])])}const J=h(v,[["render",I],["__scopeId","data-v-a65874c4"]]),T=JSON.parse(`[{"quote":"Kindness is the only service that will stand the storm of life and not wash out.","author":"Abraham Lincoln"},{"quote":"Long Before being nerdy was cool, there was Leonard Nimoy","author":"Barack Obama"},{"quote":"99% of failures come from people who make excuses.","author":"George Washington"},{"quote":"Whenever you do a thing, act as if all the world were watching.","author":"Thomas Jefferson"},{"quote":"If your actions inspire others to dream more, learn more, do more and become more, you are a leader.","author":"John Quincy Adams"},{"quote":"The advancement and diffusion of knowledge is the only guardian of true liberty.","author":"James Madison"},{"quote":"If tyranny and oppression come to this land it will be in the guise of fighting a foreign enemy.","author":"James Madison"},{"quote":"A little flattery will support a man through great fatigue","author":"James Monroe"},{"quote":"Try and fail, but don’t fail to try.","author":"John Quincy Adams"},{"quote":"Any man worth his salt will stick up for what he believes right, but it takes a slightly better man to acknowledge instantly and without reservation that he is in error.","author":"Andrew Jackson "},{"quote":"It is easier to do a job right than to explain why you didn't.","author":"Martin Van Buren"},{"quote":"There is nothing more corrupting, nothing more destructive of the noblest and finest feelings of our nature, than the exercise of unlimited power.","author":"William Henry Harrison"},{"quote":"It is not strange… to mistake change for progress","author":"Millard Fillmore"},{"quote":"You don’t know what you can miss before you try.","author":"Franklin Pierce"},{"quote":"Leave nothing for tomorrow which can be done today.","author":"Abraham Lincoln"},{"quote":"I mean to make myself a man, and if I succeed in that, I shall succeed in everything else.","author":"James Garfield"},{"quote":"Great lives never go out; they go on.","author":"Benjamin Harrison"},{"quote":"It is hard to fail, but it is worse never to have tried to succeed.","author":"Theodore Roosevelt"},{"quote":"Be patient and calm; no one can catch a fish with anger.","author":"Herbert Hoover"},{"quote":"The only thing we have to fear is fear itself.","author":"Franklin D. Roosevelt"},{"quote":"The only limit to our realization of tomorrow will be our doubts of today.","author":"Dwight D. Eisenhower"},{"quote":"It's amazing what you can accomplish if you do not care who gets the credit.","author":"Harry S. Truman"},{"quote":"Forgive your enemies, but never forget their names.","author":"John F. Kennedy"},{"quote":"Testing oneself is best when done alone.","author":"Jimmy Carter"},{"quote":"Efforts and courage are not enough without purpose and direction.","author":"John F. Kennedy"},{"quote":"Live simply, love generously, care deeply, speak kindly, leave the rest to God.","author":"Ronald Reagan"},{"quote":"I have opinions of my own, strong opinions, but I don't always agree with them.","author":"George H.W. Bush"},{"quote":"We all do better when we work together. Our differences do matter, but our common humanity matters more.","author":"Bill Clinton"},{"quote":"A dictatorship would be a heck of a lot easier, there's no question about it.","author":"George W. Bush"},{"quote":"If you’re walking down the right path and you’re willing to keep walking, eventually you’ll make progress","author":"Barack Obama"},{"quote":"When somebody challenges you, fight back. Be brutal, be tough.","author":"Donald J Trump"},{"quote":"If I don't run for president, we'll all be OK.","author":"Joe Biden"},{"quote":"Change will not come if we wait for some other person, or if we wait for some other time.","author":"Barack Obama"}]`),x={name:"App",components:{PoemCard:J},data(){return{visibleCount:12,poemsData:T}},computed:{visiblePoems(){return this.poemsData.slice(0,this.visibleCount)},hasMorePoems(){return this.visibleCount<this.poemsData.length}},methods:{loadMore(){this.visibleCount+=12}}},P={class:"card-container"};function D(i,o,n,d,m,a){const c=g("PoemCard");return t(),r(l,null,[o[1]||(o[1]=e("section",null,[e("div",{class:"top-Banner"},[e("div",{class:"top-Banner-Title"},[e("div",{class:"top-Banner-Title-Text"},"🎉your quote🥳")])])],-1)),e("section",null,[e("div",P,[(t(!0),r(l,null,y(a.visiblePoems,(s,f)=>(t(),w(c,{key:f,poem:s},null,8,["poem"]))),128))]),a.hasMorePoems?(t(),r("button",{key:0,class:"load-more-button",onClick:o[0]||(o[0]=(...s)=>a.loadMore&&a.loadMore(...s))},"See more")):b("",!0)])],64)}const M=h(x,[["render",D]]),F=JSON.parse('{"title":"","description":"","frontmatter":{"page":true},"headers":[],"relativePath":"drive/1.md","filePath":"drive/1.md"}'),A={name:"drive/1.md"},H=Object.assign(A,{setup(i){return(o,n)=>(t(),r("div",null,[q(M)]))}});export{F as __pageData,H as default};