(("undefined"!=typeof self?self:global).webpackJsonp=("undefined"!=typeof self?self:global).webpackJsonp||[]).push([[6],{"0Z81":function(e,a,t){"use strict";t.d(a,"a",(function(){return E}));var r=t("mXGw"),c=t.n(r),n=t("Eel9"),s=t("/VJF"),l=t("DRFk"),o=t("ouDx"),i=t("hGjs"),m=t("+VAy"),u=t("JuqM"),d=t("33HO"),b=t("8I+N"),f=t("o+nh");const E=({entity:{artists:e=[],images:a,name:t,uri:E,sharingInfo:g},isHero:h=!1,onClick:p})=>{var y;let C;const{onCollectionItemRemove:k}=Object(r.useContext)(u.a);return C=h?c.a.createElement(o.a,{onClick:p,headerText:t,uri:E,renderCardImage:()=>c.a.createElement(n.a,{isHero:!0,images:a}),renderSubHeaderContent:()=>c.a.createElement(c.a.Fragment,null,e.map(((e,a)=>[a>0&&i.b.getSeparator(),c.a.createElement(m.a,{key:e.uri,menu:c.a.createElement(f.a,{uri:e.uri})},c.a.createElement(b.b,{to:e.uri,dir:"auto"},e.name))])),c.a.createElement(s.a,null,i.b.get("card.tag.album")))}):c.a.createElement(l.b,{onClick:p,headerText:t,uri:E,renderCardImage:()=>c.a.createElement(n.a,{isHero:h,images:a}),renderSubHeaderContent:()=>c.a.createElement(c.a.Fragment,null,e.map(((e,a)=>[a>0&&i.b.getSeparator(),c.a.createElement(m.a,{key:e.uri,menu:c.a.createElement(f.a,{uri:e.uri})},c.a.createElement(b.b,{to:e.uri,dir:"auto"},e.name))])))}),c.a.createElement(m.a,{menu:c.a.createElement(d.a,{uri:E,artistUri:null==e||null===(y=e[0])||void 0===y?void 0:y.uri,sharingInfo:g,onRemoveCallback:k})},C)}},"2rxp":function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var r=t("mXGw"),c=t.n(r),n=t("0eyN");const s=c.a.memo((e=>{const{triggerOnInitialLoad:a=!1,onReachBottom:t}=e,{ref:s,inView:l}=Object(n.a)({initialInView:a});return Object(r.useEffect)((()=>{l&&t()}),[l,t]),c.a.createElement(c.a.Fragment,null,e.children,c.a.createElement("div",{ref:s}))}))},"8cBm":function(e,a,t){"use strict";t.d(a,"a",(function(){return f}));var r=t("mXGw"),c=t.n(r),n=t("Eel9"),s=t("/VJF"),l=t("DRFk"),o=t("hGjs"),i=t("ZXiS"),m=t("ouDx"),u=t("JuqM"),d=t("+VAy"),b=t("o+nh");const f=e=>{const{entity:{images:a,name:t,uri:f},isHero:E,onClick:g}=e;let h;const{onCollectionItemRemove:p}=Object(r.useContext)(u.a);return h=E?c.a.createElement(m.a,{onClick:g,headerText:t,uri:f,renderCardImage:()=>c.a.createElement(n.a,{isHero:E,isCircular:!0,images:a,fallback:{Component:i.a,viewBox:"-25 -22 100 100"}}),renderSubHeaderContent:()=>c.a.createElement(s.a,null,o.b.get("card.tag.artist"))}):c.a.createElement(l.b,{onClick:g,headerText:t,uri:f,renderCardImage:()=>c.a.createElement(n.a,{isHero:E,isCircular:!0,images:a,fallback:{Component:i.a,viewBox:"-25 -22 100 100"}}),renderSubHeaderContent:()=>c.a.createElement("span",null,o.b.get("card.tag.artist"))}),c.a.createElement(d.a,{menu:c.a.createElement(b.a,{uri:f,onRemoveCallback:p})},h)}},B9Xw:function(e,a,t){"use strict";t.d(a,"a",(function(){return v}));t("/YXa"),t("U00V");var r=t("mXGw"),c=t.n(r),n=t("8Jek"),s=t.n(n),l="a8b052ab945f8d056679d7f3ff013e05-scss",o="_4e5e81e75ea1c55d3c6b7130e90b4e45-scss",i="_25ab18ebaa7323427b6a3ae748b2fdaa-scss",m="bd50070f7e4ffa804d8ad9fb0966c344-scss",u="c65f5ba184497ced74470e887c6a95c3-scss",d="_2b16a62ab5b3e84f23b77433b9a5f0f5-scss",b="_6424f268be3505ebab663700d60ebaa6-scss",f="_7321ea8cd8e8baded34054347ab0be48-scss",E=t("pAAZ"),g=t("8I+N"),h=t("ChMR"),p=t("fF1i"),y=t("CNRc"),C=t("GHIz");const k=c.a.memo((({title:e,tagline:a,children:t,seeAllUri:n,showAll:h,className:p="",total:k,pageId:v,seeAllLabel:I})=>{const[R,N]=Object(r.useState)(0),O=Object(r.useCallback)((e=>(R!==e&&N(e),c.a.createElement(c.a.Fragment,null,h?t:Array.isArray(t)&&t.filter(((a,t)=>t<e))))),[h,t,R]);if(Array.isArray(t)&&0===t.length)return null;const j=k>R&&n&&!h;return c.a.createElement("section",{className:s()(p,l),"aria-label":e},c.a.createElement("div",{className:o},c.a.createElement("div",{className:i},c.a.createElement("div",{className:m},j?c.a.createElement(y.a,{as:"h2",variant:y.a.canon},c.a.createElement(g.a,{to:n||"",pageId:v,className:u},e)):c.a.createElement(y.a,{as:"h2",variant:y.a.canon,className:u},e),a&&c.a.createElement("p",null,a)),j&&c.a.createElement(C.a,{link:n||"",className:d,pageId:v,label:I}))),c.a.createElement(E.b,{className:s()(b,{[f]:h}),columnAware:!0,render:O}))})),v=Object(h.b)(k,(()=>null),(e=>Object(p.a)({from:"Shelf",error:e})))},GHIz:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var r=t("mXGw"),c=t.n(r),n=t("8Jek"),s=t.n(n),l=t("8I+N"),o=t("CNRc"),i=t("hGjs"),m="_03c8a5d5aecfd3620383a75c995c96a2-scss";const u=c.a.memo((e=>{const{link:a,pageId:t,className:r,label:n}=e;return c.a.createElement(l.b,{to:a,className:s()(m,r),pageId:t},c.a.createElement(o.a,{as:"span",variant:o.a.minuetBold},n||i.b.get("search.see-all")))}))},JuqM:function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return s}));var r=t("mXGw"),c=t.n(r);const n=Object(r.createContext)({onCollectionItemRemove:()=>{}}),s=({onCollectionItemRemove:e,children:a})=>c.a.createElement(n.Provider,{value:{onCollectionItemRemove:e}},a)},ZXiS:function(e,a,t){"use strict";var r=t("8VmE"),c=t.n(r),n=t("mXGw"),s=t.n(n),l=t("puxB");a.a=e=>s.a.createElement(l.a,c()({},e,{testid:"artist-icon"}),s.a.createElement("path",{d:"M35.711 34.619l-4.283-2.461a1.654 1.654 0 0 1-.808-1.156 1.65 1.65 0 0 1 .373-1.36l3.486-4.088a14.3 14.3 0 0 0 3.432-9.293V14.93c0-3.938-1.648-7.74-4.522-10.435C30.475 1.764 26.658.398 22.661.661c-7.486.484-13.35 6.952-13.35 14.725v.875c0 3.408 1.219 6.708 3.431 9.292l3.487 4.089a1.656 1.656 0 0 1-.436 2.516l-8.548 4.914A14.337 14.337 0 0 0 0 49.513V53.5h2v-3.987c0-4.417 2.388-8.518 6.237-10.705l8.552-4.916a3.648 3.648 0 0 0 1.783-2.549 3.643 3.643 0 0 0-.822-2.999l-3.488-4.091a12.297 12.297 0 0 1-2.951-7.993v-.875c0-6.721 5.042-12.312 11.479-12.729 3.449-.22 6.725.949 9.231 3.298a12.182 12.182 0 0 1 3.89 8.976v1.331c0 2.931-1.048 5.77-2.952 7.994l-3.487 4.089a3.653 3.653 0 0 0-.822 3 3.653 3.653 0 0 0 1.782 2.548l3.036 1.745a11.959 11.959 0 0 1 2.243-1.018zM45 25.629v15.289a7.476 7.476 0 0 0-5.501-2.418c-4.135 0-7.5 3.365-7.5 7.5s3.364 7.5 7.5 7.5 7.5-3.365 7.5-7.5V29.093l5.861 3.384 1-1.732L45 25.629zM39.499 51.5a5.506 5.506 0 0 1-5.5-5.5c0-3.033 2.467-5.5 5.5-5.5s5.5 2.467 5.5 5.5-2.467 5.5-5.5 5.5z",fill:"currentColor",fillRule:"evenodd"}))},jfiB:function(e,a,t){"use strict";t.d(a,"a",(function(){return S}));t("kypl");var r=t("mXGw"),c=t.n(r),n=t("Eel9"),s=t("DRFk"),l=t("ouDx"),o=t("+CXe"),i=t("GUgp"),m=(t("/YXa"),t("FdtR"),t("U00V"),"_5cee7d5f7f98fcee0c9605aba9aa5a69-scss"),u="_96db4691b082e8aa6883286fb755ff3f-scss",d=t("GbUR"),b=t("8Jek"),f=t.n(b),E=(t("W0B4"),t("puxB"));var g=e=>c.a.createElement(E.a,e,c.a.createElement("path",{d:"M16.961 35.209c-5.905-6.914-5.084-17.343 1.83-23.249a16.692 16.692 0 0 1 2.721-1.889l-.979-1.766a18.616 18.616 0 0 0-3.053 2.119c-7.761 6.628-8.682 18.335-2.054 26.096a18.436 18.436 0 0 0 5.119 4.16l.978-1.767a16.395 16.395 0 0 1-4.562-3.704zM8.97 42.035C-.699 30.714.645 13.638 11.966 3.97c.771-.66 1.626-1.294 2.689-1.996L13.552.305c-1.133.749-2.05 1.43-2.885 2.144C-1.492 12.833-2.936 31.175 7.449 43.334a28.992 28.992 0 0 0 6.1 5.365l1.102-1.669a27.002 27.002 0 0 1-5.681-4.995zM29.5 16.45c-4.438 0-8.05 3.611-8.05 8.05 0 4.1 3.082 7.486 7.05 7.981V52.5h2V32.481c3.968-.495 7.05-3.881 7.05-7.981 0-4.438-3.612-8.05-8.05-8.05zm0 14a5.957 5.957 0 0 1-5.95-5.95 5.957 5.957 0 0 1 5.95-5.95 5.957 5.957 0 0 1 5.95 5.95 5.957 5.957 0 0 1-5.95 5.95zm14.074-17.971a18.447 18.447 0 0 0-5.119-4.16l-.978 1.767a16.42 16.42 0 0 1 4.562 3.704c5.905 6.915 5.084 17.343-1.83 23.249a16.573 16.573 0 0 1-2.722 1.89l.98 1.766a18.673 18.673 0 0 0 3.053-2.12c7.761-6.629 8.683-18.335 2.054-26.096zm7.978-6.812A29.02 29.02 0 0 0 45.451.301L44.35 1.97a27.07 27.07 0 0 1 5.681 4.996c4.684 5.484 6.952 12.463 6.386 19.653-.565 7.19-3.897 13.729-9.381 18.413a27.115 27.115 0 0 1-2.689 1.996l1.102 1.669a28.854 28.854 0 0 0 2.886-2.144c5.89-5.031 9.469-12.054 10.077-19.776.606-7.724-1.83-15.22-6.86-21.11z",fill:"currentColor",fillRule:"evenodd"})),h=t("uqgt");var p=function({src:e,description:a,className:t,isCircular:n}){const[s,l]=Object(r.useState)({backgroundColor:"inherit",maskImage:"inherit"});return Object(r.useEffect)((()=>{e&&async function(){const{colorRaw:{r:a,g:t,b:r,h:c,s:n,l:s}}=await Object(h.a)(e),o="hsl(".concat(360*c,", ").concat(100*n,"%, ").concat(Math.min(100*s,30),"%)"),i="linear-gradient(\n      rgb(255, 255, 255) 0%,\n      rgb(".concat(a,",").concat(t,", ").concat(r,") 50%,\n      rgba(").concat(a,",").concat(t,", ").concat(r,", 0) 100%\n    )");l({backgroundColor:o,maskImage:i})}()}),[e]),e?c.a.createElement("div",{className:f()(t,u),style:{backgroundColor:s.backgroundColor,WebkitMaskImage:s.maskImage,MozMaskImage:s.maskImage,msMaskImage:s.maskImage,MaskImage:s.maskImage}},c.a.createElement("p",{className:m},a)):c.a.createElement(g,{viewBox:"-20 -25 100 100",className:f()(t,d.a.imagePlaceholder,{[d.a.circular]:n}),stroke:"transparent"})},y=t("/VJF"),C=t("uH3P"),k="_6da7741d6a3a923762ec6863109b05c4-scss",v="_653a73bc18a1c4c40777007ff04ae12f-scss",I="e77f303a83d8b6a6edd78e66a253b69d-scss",R=t("hGjs"),N=t("3sMm"),O=t("+VAy"),j=t("CGwh");const S=({entity:{description:e,explicit:a,images:t,name:r,uri:m,duration_ms:u,release_date:d,show:b={},sharingInfo:f},isHero:E,onClick:g})=>{let h;const S=d&&!isNaN(u),w=Object(N.a)(b&&b.images,{desiredSize:48});return h=E?c.a.createElement(l.a,{onClick:g,headerText:r,uri:m,isPlayable:!1,isDownloadable:!0,renderCardImage:()=>c.a.createElement(n.a,{isHero:!0,images:t,fallback:{Component:()=>c.a.createElement(p,{description:e,src:w&&w.url})}},w&&c.a.createElement(o.a,{loading:"lazy",src:w.url,className:k,radius:4})),renderSubHeaderContent:()=>c.a.createElement(c.a.Fragment,null,a&&c.a.createElement(i.a,{className:v}),S&&c.a.createElement("span",{className:I},Object(C.c)(Object(C.a)(d))," ·"," ",R.b.get("episode.length",Math.floor(u/6e4))),c.a.createElement(y.a,null,R.b.get("card.tag.episode")))}):c.a.createElement(s.b,{onClick:g,headerText:r,uri:m,isPlayable:!1,isDownloadable:!0,renderCardImage:()=>c.a.createElement(n.a,{images:t,fallback:{Component:()=>c.a.createElement(p,{description:e,src:w&&w.url})}},w&&c.a.createElement(o.a,{loading:"lazy",src:w.url,className:k,radius:4})),renderSubHeaderContent:()=>c.a.createElement(c.a.Fragment,null,a&&c.a.createElement(i.a,{className:v}),S&&c.a.createElement("span",{className:I},Object(C.c)(Object(C.a)(d))," ·"," ",R.b.get("episode.length",Math.floor(u/6e4))))}),c.a.createElement(O.a,{menu:c.a.createElement(j.a,{uri:m,sharingInfo:f})},h)}},oPiR:function(e,a,t){"use strict";t.d(a,"a",(function(){return j}));t("/YXa"),t("4NM0"),t("y89P"),t("X5mX"),t("U00V"),t("9DLp");var r=t("mXGw"),c=t.n(r),n=t("8Jek"),s=t.n(n),l=t("oNR1"),o=t("wJTk"),i=t.n(o),m=t("hGjs"),u=t("y3F8"),d=t("puxB");var b=e=>c.a.createElement(d.a,e,c.a.createElement("path",{d:"M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z",fill:"currentColor"})),f="_293772bde87b2e2c11b41d9a0bf25395-scss",E="_748c0c69da51ad6d4fc04c047806cd4d-scss",g="f1ad64e92044987ce3120254490b2b74-scss",h="_63fcb5e7d6356a1883a28b9eac119caa-scss",p="ffbed99e56684cab219dddee59f5df38-scss",y="_982a1a5bec5b5ed635faecee50abbf7f-scss",C="_08f8133e4f703ce562826348eb158f87-scss",k=t("/m4v"),v=t("sZkA"),I=t("8YTP"),R=t("VDjn"),N=t("IaME"),O=t("WBBb");const j=c.a.memo((({onSearch:e=!0})=>{const a=Object(r.useRef)(null),t=Object(r.useRef)(null),n=Object(l.g)(),o=Object(k.c)(),d=Object(l.j)("/search/:query?/:category?"),{query:j="",category:S=""}=(null==d?void 0:d.params)||{};let w;try{w=decodeURIComponent(j||"")}catch(e){w=j}const[x,H]=Object(r.useState)(w),T=v.categories.includes(S),U=c.a.useContext(N.d),L=Object(O.a)(((e,a)=>{a?n.push("/search/".concat(encodeURIComponent(e))):n.replace("/search/".concat(encodeURIComponent(e))),U.current&&(U.current.scrollTop=0),o(I.a.searchRequest(e))}),200),M=new URLSearchParams(location.search),q=Boolean(M.get("showRecent")),A=T||q;Object(r.useEffect)((()=>{!A&&e&&a.current!==document.activeElement&&(t.current=document.activeElement,a.current&&a.current.focus())}),[n.location.key,e,A]);return c.a.createElement("div",{className:s()(f,{[g]:!e}),role:"search"},c.a.createElement("input",{ref:a,className:E,value:x,maxLength:80,autoCorrect:"off",autoCapitalize:"off",spellCheck:!1,onChange:e=>{const a=e.currentTarget.value;H(a),L(a,A)},onKeyDown:e=>{if("Escape"===e.key)x?(H(""),L("",A)):(a.current&&a.current.blur(),t.current instanceof HTMLElement&&t.current.focus());else if("Enter"===e.key){const e=decodeURIComponent(x),a=i.a.from(e);if(!a)return;switch(a.type){case i.a.Type.AD:{const e=i.a.idToHex(a._base62Id);if(a._base62Id===e)return;return void o(Object(R.h)(e))}default:n.push(a.toURLPath(!0))}}},placeholder:e?m.b.get("search.search-for-label"):m.b.get("navbar.search"),onFocus:()=>{!A&&e||L(x,A)},"data-testid":"search-input"}),c.a.createElement("div",{className:y},c.a.createElement("span",{className:h},c.a.createElement(b,{size:24,viewBox:"0 0 512 512",className:C,"aria-hidden":!0})),x&&c.a.createElement("button",{className:p,onClick:()=>{a.current&&a.current.focus(),H(""),L("",A)},"aria-label":m.b.get("search.a11y.clear-input")},c.a.createElement(u.a,{size:24,className:C}))))}))},qOe9:function(e,a,t){"use strict";t.d(a,"a",(function(){return x}));var r=t("wJTk"),c=t.n(r),n=t("8cBm"),s=t("+57r"),l=t("0Z81"),o=t("mXGw"),i=t.n(o),m=t("Eel9"),u=t("DRFk"),d=t("/VJF"),b=t("GUgp"),f="ae136b68bcff858db7684e3b976c5cec-scss",E=t("hGjs"),g=t("ouDx"),h=t("+VAy"),p=t("1l6r"),y=t("o+nh"),C=t("8I+N");const k=({entity:{explicit:e,artists:a=[],images:t,name:r,uri:c},isHero:n=!1,onClick:s})=>{let l;return l=n?i.a.createElement(g.a,{onClick:s,headerText:r,uri:c,renderCardImage:()=>i.a.createElement(m.a,{isHero:!0,images:t}),renderSubHeaderContent:()=>i.a.createElement(i.a.Fragment,null,e&&i.a.createElement(b.a,{className:f}),a.map(((e,a)=>[a>0&&E.b.getSeparator(),i.a.createElement(h.a,{key:e.uri,menu:i.a.createElement(y.a,{uri:e.uri})},i.a.createElement(C.b,{to:e.uri,dir:"auto"},e.name))])),i.a.createElement(d.a,null,E.b.get("card.tag.track")))}):i.a.createElement(u.b,{onClick:s,headerText:r,uri:c,renderCardImage:()=>i.a.createElement(m.a,{images:t}),renderSubHeaderContent:()=>i.a.createElement(i.a.Fragment,null,e&&i.a.createElement(b.a,{className:f}),a.map(((e,a)=>[a>0&&E.b.getSeparator(),i.a.createElement(h.a,{key:e.uri,menu:i.a.createElement(y.a,{uri:e.uri})},i.a.createElement(C.b,{to:e.uri,dir:"auto"},e.name))])))}),i.a.createElement(h.a,{menu:i.a.createElement(p.a,{uri:c,artists:a})},l)};var v=t("JuqM"),I=t("/xRw");const R=({entity:{images:e,name:a,uri:t,publisher:r,musicAndTalk:c,sharingInfo:n},isHero:s=!1,onClick:l})=>{let b;const f=c?E.b.get("type.show"):E.b.get("card.tag.show"),{onCollectionItemRemove:p}=Object(o.useContext)(v.a);return b=s?i.a.createElement(g.a,{onClick:l,headerText:a,uri:t,renderCardImage:()=>i.a.createElement(m.a,{isHero:!0,hasRoundedCorners:!0,images:e}),renderSubHeaderContent:()=>i.a.createElement(i.a.Fragment,null,r&&i.a.createElement("span",null,r),i.a.createElement(d.a,null,f))}):i.a.createElement(u.b,{onClick:l,headerText:a,uri:t,renderCardImage:()=>i.a.createElement(m.a,{isHero:s,hasRoundedCorners:!0,images:e}),renderSubHeaderContent:()=>i.a.createElement(i.a.Fragment,null,r&&i.a.createElement("span",null,r))}),i.a.createElement(h.a,{menu:i.a.createElement(I.a,{uri:t,sharingInfo:n,onRemoveCallback:p})},b)};var N=t("jfiB");t("W0B4");function O(e){const{entity:{images:a,name:t,uri:r}={},isHero:c,onClick:n}=e;return c?i.a.createElement(g.a,{onClick:n,headerText:t,uri:r,isPlayable:!1,renderCardImage:()=>i.a.createElement(m.a,{isHero:c,images:a}),renderSubHeaderContent:()=>i.a.createElement(d.a,null,E.b.get("card.tag.genre"))}):i.a.createElement(u.b,{isHero:c,onClick:n,headerText:t,uri:r,isPlayable:!1,renderCardImage:()=>i.a.createElement(m.a,{isHero:c,images:a}),renderSubHeaderContent:()=>i.a.createElement("span",null,E.b.get("card.tag.genre"))})}var j=t("ZXiS"),S=t("btyE");const w=i.a.memo((e=>{const{entity:{images:a,name:t,uri:r},onClick:c,isHero:n}=e;let s;const l=Object(o.useCallback)((()=>i.a.createElement(m.a,{isCircular:!0,isHero:n,images:a,fallback:{Component:j.a,viewBox:"-25 -22 100 100"}})),[a,n]),b=Object(o.useCallback)((()=>n?i.a.createElement(d.a,null,E.b.get("card.tag.profile")):E.b.get("card.tag.profile")),[n]);return s=n?i.a.createElement(g.a,{onClick:c,headerText:t,uri:r,isPlayable:!1,renderCardImage:l,renderSubHeaderContent:b}):i.a.createElement(u.b,{onClick:c,headerText:t,uri:r,isPlayable:!1,renderCardImage:l,renderSubHeaderContent:b}),i.a.createElement(h.a,{menu:i.a.createElement(S.a,{uri:r})},s)}));function x(e){switch((c.a.from(e)||{}).type){case c.a.Type.ARTIST:return n.a;case c.a.Type.ALBUM:case c.a.Type.COLLECTION_ALBUM:return l.a;case c.a.Type.TRACK:return k;case c.a.Type.PLAYLIST:case c.a.Type.PLAYLIST_V2:return s.a;case c.a.Type.SHOW:return R;case c.a.Type.EPISODE:return N.a;case c.a.Type.APPLICATION:return O;case c.a.Type.PROFILE:return w;case c.a.Type.COLLECTION:return s.a;default:return R}}},sZkA:function(e,a,t){"use strict";t.r(a),t.d(a,"categories",(function(){return Be})),t.d(a,"routes",(function(){return Xe})),t.d(a,"SearchPage",(function(){return De}));t("/YXa"),t("y89P"),t("X5mX"),t("U00V"),t("9DLp");var r=t("mXGw"),c=t.n(r),n=t("/m4v"),s=t("8YTP"),l=t("odWe"),o=t("IaME"),i=t("hGjs"),m=t("oNR1"),u="fc5e24bcba4626c3475e2d7dbeaf76cd-scss",d="e30f602f573914949eb3b2bdf2c3e1c4-scss",b="a028b37a9f7e8f8d7b8c4c1e7d598463-scss",f="_116505131767d644d4b941528742b409-scss",E=t("B9Xw"),g=t("qOe9"),h=t("/0yG"),p=(t("W0B4"),t("y3F8")),y="_6fb2398589457a2b758d4ef3d3f888f1-scss";class C extends c.a.Component{render(){const{onClick:e,size:a}=this.props;return c.a.createElement("button",{style:{"--size":"".concat(a,"px")},className:y,onClick:e,"aria-label":"Remove"},c.a.createElement(p.a,{size:a-4}))}}C.defaultProps={size:32};var k=t("epQy"),v=t("CNRc");const I=()=>{const{searchHistory:e,clearSearchHistory:a}=Object(k.b)(),{showRecent:t,onSearchRequest:r}=c.a.useContext(o.e);return e.length>0?c.a.createElement("div",{className:u},c.a.createElement(E.a,{total:e.length,seeAllUri:"spotify:app:recent-searches",title:i.b.get("search.title.recent-searches"),showAll:t},e.map(((e,t)=>{const r=Object(g.a)(e.uri);return c.a.createElement("div",{className:b,key:e.uri},c.a.createElement(h.b,{index:t,value:"search-history"},c.a.createElement(r,{entity:e}),c.a.createElement("div",{className:f},c.a.createElement(C,{size:28,onClick:()=>a(e.uri)}))))}))),t?c.a.createElement("button",{onClick:()=>{a(),r("")},className:d},c.a.createElement(v.a,{as:"span",variant:v.a.minuetBold},i.b.get("search.clear-recent-searches"))):null):null};var R=t("pAAZ"),N="e5f169e4e89cc264cd5e155ead28f3e3-scss",O="bf77ae2f1abefc217f843b2fcbdc4c79-scss",j="_882abd309219af7e1e8e1e02344b1485-scss";const S=({results:e,prependItemToSearchHistory:a})=>{const t=e.topHit&&Object(g.a)(e.topHit.hits[0].uri),r=e.topHit&&e.topHit.total;return c.a.createElement(E.a,{total:r,className:N,title:i.b.get("search.title.top-result")},e.topHit?[c.a.createElement("div",{key:"top-result-item",className:O},c.a.createElement(h.b,{value:"top-result-card"},c.a.createElement(t,{isHero:!0,onClick:()=>a(e.topHit.hits[0]),onPlay:()=>a(e.topHit.hits[0]),key:e.topHit.hits[0].uri,entity:e.topHit.hits[0]})))]:[])};var w=t("8I+N"),x="ac7a1061d9277b5e9a1ff854a046122a-scss",H="aa0650948ffb4042ce383876787f70ce-scss",T="_7331214f9f1e0342c39ab7e2d83991c3-scss",U="_89d58eb2b9379fb820a5f6442ee6060d-scss",L="_7bf1862b8e096cebdaf4acbcfbec2d4e-scss",M="cf1ffff8bd4bfa0b9c7508b671faabf2-scss",q=t("GHIz"),A=t("WOxI"),_=t("NQ5u");const P=c.a.memo((({tracks:e})=>{const a=Object(r.useCallback)(((e,a)=>{var t;return c.a.createElement(A.q,{key:e.uri,index:a,imgUrl:null===(t=e.images)||void 0===t?void 0:t[0].url,uri:Object(_.a)(e),duration_ms:e.duration||e.duration_ms,name:e.name,artists:e.artists,isPlayable:!0,isMOGEFRestricted:!!e.mogef19,isExplicit:!!e.explicit})}),[]);return e&&c.a.createElement(h.b,{value:"search-results-tracklist"},c.a.createElement(A.r,{ariaLabel:i.b.get("search.a11y.songs-search-results"),renderRow:a,rowPlaceholder:A.o,nrTracks:Math.min(e.length,4),tracks:e,resolveUri:e=>e.uri,columns:[A.d.TITLE,A.d.DURATION]}))}),((e,a)=>e.tracks===a.tracks)),z=e=>{var a;const{tracks:t,query:n,prependItemToSearchHistory:s}=e,l=Object(r.useCallback)((()=>c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:M},c.a.createElement(r.Suspense,{fallback:null},c.a.createElement(P,{tracks:t.hits,prependItemToSearchHistory:s}))))),[t,s]);if(null==t||null===(a=t.hits)||void 0===a||!a.length)return null;const o="spotify:app:search:".concat(encodeURIComponent(n),":tracks");return c.a.createElement("section",{className:L,"aria-label":i.b.get("search.title.tracks"),"data-testid":"search-tracks-result"},c.a.createElement("div",{className:x},t.hits.length>3?c.a.createElement("div",{className:H},c.a.createElement("div",{className:T},c.a.createElement(v.a,{as:"h2",variant:v.a.canon},c.a.createElement(w.a,{to:o,className:U},i.b.get("search.title.tracks")))),c.a.createElement(q.a,{link:o})):c.a.createElement(v.a,{as:"h2",variant:v.a.canon,className:U},i.b.get("search.title.tracks"))),c.a.createElement(R.b,{render:l}))},F=({results:e,prependItemToSearchHistory:a,query:t})=>e.topRecommendations?c.a.createElement(E.a,{total:e.topRecommendations.total,title:e.topRecommendations.title,seeAllUri:"spotify:app:search:".concat(encodeURIComponent(t),":topRecommendations")},e.topRecommendations.hits.map(((e,t)=>{const r=Object(g.a)(e.uri);return c.a.createElement(h.b,{index:t,key:e.uri,value:"top-recommendations"},c.a.createElement(r,{onClick:()=>a(e),onPlay:()=>a(e),entity:e}))}))):null,G=({entity:e,query:a,results:{hits:t,total:r}={},prependItemToSearchHistory:n})=>{const{title:s,category:l}=e;if(!t||0===t.length)return null;const o=Object(g.a)(t[0].uri);return c.a.createElement(E.a,{total:r,title:s,seeAllUri:"spotify:app:search:".concat(encodeURIComponent(a),":").concat(l)},t.map(((a,t)=>c.a.createElement(h.b,{value:l,index:t,key:a.uri},c.a.createElement(o,{onClick:()=>n(a),onPlay:()=>n(e),entity:a})))))};var B=t("eI+U");const X=()=>{const{searchHistory:e,setSearchHistory:a}=Object(k.b)(),{results:t,query:r,getResultEntities:n}=c.a.useContext(o.e),s=t=>a([t,...Array.isArray(e)?e:[]]),l=n();return c.a.createElement(R.b,{className:j,rowGap:B.spacer32,render:()=>c.a.createElement(h.b,{value:"search-results"},c.a.createElement(S,{results:t,prependItemToSearchHistory:s}),c.a.createElement(z,{query:r,tracks:t.tracks,prependItemToSearchHistory:s}),c.a.createElement(F,{query:r,results:t,prependItemToSearchHistory:s}),l.map((e=>c.a.createElement(G,{key:"search-shelf-".concat(e.category),entity:e,query:r,results:t[e.category],prependItemToSearchHistory:s}))))})};var V="_975bbf5c8995c92e26f73a25fe87a961-scss",D="ae4e1a644e19f4d5af7b39f7e5960580-scss",J="ee5d4d2373610c65af208b2904e91fed-scss";const W=()=>{const{query:e}=c.a.useContext(o.e);return c.a.createElement("div",{className:V},c.a.createElement(v.a,{as:"h1",variant:v.a.canon,className:D},i.b.get("search.empty-results-title",e)),c.a.createElement("p",{className:J},i.b.get("search.empty-results-text")))};t("x3Br");var Y="_30d255b89ae6c5d282d09aa2181504f8-scss",Z=t("2rxp"),K=t("ILyY"),Q=t("3sMm");const $=c.a.memo((({nrTracks:e,query:a,ariaLabel:t})=>{const n=Object(r.useCallback)(((e,t)=>Object(K.getSearchCategoryResults)(a,"tracks",e,t).then((e=>{var a,t,r;return(null===(a=e.body)||void 0===a||null===(t=a.results)||void 0===t||null===(r=t.tracks)||void 0===r?void 0:r.hits)||[]}))),[a]),s=Object(r.useCallback)(((e,a)=>{var t;const r=Object(Q.a)(null==e||null===(t=e.album)||void 0===t?void 0:t.images,{desiredSize:40});return c.a.createElement(A.p,{key:a+e.uri,index:a,uri:Object(_.a)(e),duration_ms:e.duration_ms,name:e.name,artists:e.artists,album:e.album,isPlayable:!0,isExplicit:!!e.explicit,isMOGEFRestricted:!!e.mogef19,imgUrl:(null==r?void 0:r.url)||""})}),[]);return c.a.createElement(h.b,{value:"search-results-tracklist"},c.a.createElement(A.r,{ariaLabel:t,key:a,hasHeaderRow:!0,columns:[A.d.INDEX,A.d.TITLE,A.d.ALBUM,A.d.DURATION],renderRow:s,resolveUri:e=>e.uri,nrTracks:e,fetchTracks:n,limit:50}))})),ee="topRecommendations";var ae=Object(n.b)(null,(e=>({dispatch:e})))((e=>{const[a,t]=Object(r.useState)(!1),n=Object(r.useRef)(),{query:l,results:m,category:u,getResultEntities:d}=c.a.useContext(o.e),{title:b,onSearchRequest:f,onSearchCategoryRequest:E,onSearchCategoryLoadMore:h,results:p}=Object(r.useMemo)((({results:e,category:a,query:t,dispatch:r,getResultEntities:c})=>()=>{var n;const l=c().reduce(((e,a)=>(e[a.category]=a.title,e)),{tracks:i.b.get("search.title.tracks")});return{results:e[a],title:a===ee?null===(n=e.topRecommendations)||void 0===n?void 0:n.title:i.b.get("search.showing-category-query",i.b.toLocaleLowerCase(l[a]),t),onSearchRequest:e=>{r(s.a.searchRequest(e))},onSearchCategoryRequest:(e,a)=>{r(s.a.searchCategoryRequest(e,a))},onSearchCategoryLoadMore:(e,a)=>{r(s.a.searchCategoryLoadMore(e,a))}}})({results:m,category:u,query:l,dispatch:e.dispatch,getResultEntities:d}),[m,u,l]),y=(p||{}).loadMoreURI,C=Object(r.useCallback)((({loadMoreURI:e,lastLoadedURI:a,category:t,setShouldLoadMoreOnUpdate:r,onSearchCategoryLoadMore:c})=>()=>{e&&e!==a.current?(a.current=e,r(!1),c(e,t)):r(!0)})({loadMoreURI:y,lastLoadedURI:n,category:u,setShouldLoadMoreOnUpdate:t,onSearchCategoryLoadMore:h}),[y,u,t,h]);Object(r.useEffect)((({results:e,category:a,query:t,onSearchRequest:r,onSearchCategoryRequest:c,shouldLoadMoreOnUpdate:n,handleLoadMore:s})=>()=>{e&&e.loadMoreURI||!a||!t||(a===ee?r(t):c(t,a)),n&&s()})({results:p,category:u,query:l,onSearchRequest:f,onSearchCategoryRequest:E,shouldLoadMoreOnUpdate:a,handleLoadMore:C}),[JSON.stringify(p),a,u]);const{searchHistory:I,setSearchHistory:N}=Object(k.c)(),O=e=>N([e,...I]);return c.a.createElement("div",null,c.a.createElement(v.a,{as:"h1",variant:v.a.canon,className:Y},b),p&&"tracks"===u&&c.a.createElement(r.Suspense,{fallback:null},c.a.createElement($,{ariaLabel:b,nrTracks:Math.min(p.total,1e3),query:l})),p&&"tracks"!==u&&c.a.createElement(Z.a,{onReachBottom:C},c.a.createElement(R.b,{render:()=>p.hits.map((e=>{const a=Object(g.a)(e.uri);return c.a.createElement(a,{key:e.uri,entity:e,onClick:()=>O(e),onPlay:()=>O(e)})}))})))})),te="_2326696e1244e762bd7e426619b02370-scss",re="c5d42a6a1f132e80cad79e45193e9e80-scss",ce="_7632e4ea3665ed21c585780677b2aac0-scss",ne="be5c1eb819cc0cab1b07192e369fe88e-scss",se=t("+CXe");const le=B.gray30,oe=B.gray50;class ie extends r.PureComponent{render(){const{title:e,imageUrl:a,viewId:t,pageId:r,color:n,href:s}=this.props;return c.a.createElement(w.a,{to:t&&"/genre/".concat(t)||s,pageId:r,className:te,style:{backgroundColor:n}},c.a.createElement("div",{className:ce},a?c.a.createElement(se.a,{loading:"lazy",src:a,className:ne}):c.a.createElement("div",{style:{backgroundColor:oe},className:ne,"data-testid":"fallback"}),c.a.createElement("h3",{className:re},e)))}}ie.defaultProps={color:le};var me="c5a28c705b992b76c45dbb776cf76047-scss",ue="c0f71ec678fcda5860625abd19d699d4-scss",de="fbe9fd01f8ae7354e9082a5816a3300c-scss",be="_3be991b122f095750704a4ac004bf250-scss";class fe extends r.PureComponent{render(){const{title:e,imageUrl:a,viewId:t,color:r,pageId:n}=this.props;return c.a.createElement(w.a,{to:"/genre/".concat(t),pageId:n,className:me,style:{backgroundColor:r}},c.a.createElement("div",{className:ue},c.a.createElement("h3",{className:de},e),a?c.a.createElement(se.a,{loading:"lazy",className:be,src:a}):c.a.createElement("div",{className:be,style:{backgroundColor:oe},"data-testid":"fallback"})))}}fe.defaultProps={color:le};var Ee="_6695fd91ea13e90d9b9d54584c048547-scss",ge="_96bf363e405076536d62b3337ea95def-scss",he="_66c53c89c3d5984e07349560b70185a6-scss",pe="ccb8b8d721108af8d4fe447a9544f293-scss",ye="_4c871185995e85db3e4c0cd89c22491b-scss",Ce="ffc5d21bf18ac2a8888d329dd200eb7a-scss",ke="_51f1bdf471f7037de22856dfa4433c50-scss",ve="becf580cadf3030239e0d82bf71d6476-scss",Ie="_48f9ea65ee20321d1663246b9b9384f1-scss",Re="d7ddc2d27d3b7a23f690b0213e7de47d-scss",Ne=t("SCYk"),Oe=t("J+2A"),je=t("siKT"),Se=t("ChMR"),we=t("fF1i"),xe=t("F1/t"),He=t("WBBb");var Te=Object(Se.b)((e=>{const{title:a,children:t,seeAllUri:n,pageId:s,className:l="",childColumnSpan:o=1}=e,[i,m]=Object(r.useState)(!1),[u,d]=Object(r.useState)(!1),b=Object(r.useRef)(null),{onLogInteraction:f}=Object(xe.a)(),E=Object(He.a)((()=>{!function(e,a,t,r,c){if(null===c.current)return;const{scrollLeft:n,offsetWidth:s,scrollWidth:l}=c.current,o=n>0,i=n+s<l;e!==o&&t(o),a!==i&&r(i)}(i,u,m,d,b)}),200);if(Array.isArray(t)&&0===t.length)return null;const g=Array.isArray(t)?t.length:0;return c.a.createElement("section",{className:"".concat(l," ").concat(Ee),"aria-label":a},c.a.createElement("div",{className:ye},n?c.a.createElement(w.a,{to:n,pageId:s},c.a.createElement(v.a,{as:"h2",variant:v.a.canon,className:pe},a)):c.a.createElement(v.a,{as:"h2",variant:v.a.canon,className:pe},a)),c.a.createElement("div",{className:he},c.a.createElement("div",{"data-testid":"scroll-wrapper",className:ge,ref:b,onScroll:E},c.a.createElement(R.b,{className:Re,columnAware:!0,fixedColumnCount:g*o,onUpdate:E,render:(e,a)=>c.a.createElement(c.a.Fragment,null,i&&c.a.createElement("div",{className:"".concat(Ce," ").concat(ve)},c.a.createElement(je.a,{className:Ie,onClick:()=>{!function(e,a,t){null!==t.current&&(t.current.scrollLeft-=e*(a+R.a))}(e,a,b),f({intent:"carousel-left",type:"click",itemIdSuffix:"carousel"})},standalone:!0,tabIndex:-1,size:40},c.a.createElement(Oe.a,{size:24}))),u&&c.a.createElement("div",{className:"".concat(Ce," ").concat(ke)},c.a.createElement(je.a,{className:Ie,onClick:()=>{!function(e,a,t){null!==t.current&&(t.current.scrollLeft+=e*(a+R.a))}(e,a,b),f({intent:"carousel-right",type:"click",itemIdSuffix:"carousel"})},standalone:!0,tabIndex:-1,size:40},c.a.createElement(Ne.a,{size:24}))),t)}))))}),(()=>null),(e=>Object(we.a)({from:"Carousel",error:e}))),Ue="_4afbb78796e464fb308a7b0bdc4d64d2-scss",Le="dd5fc61883caf09db18d40becf862e8d-scss";class Me extends c.a.PureComponent{render(){const{topGenres:e,browseAll:a}=this.props;return e||a?c.a.createElement("div",{className:Ue},e&&c.a.createElement(h.b,{value:"top-genre"},c.a.createElement(Te,{title:e.title,childColumnSpan:2},e.items.map((({viewId:e,color:a,title:t,imageUrl:r},n)=>c.a.createElement(h.b,{key:e,index:n,value:"hero-category-card"},c.a.createElement(fe,{title:t,viewId:e,pageId:"search",color:a,imageUrl:r})))))),a&&c.a.createElement("div",{className:Le},c.a.createElement(E.a,{title:a.title,showAll:!0},a.items.map((({viewId:e,color:a,title:t,imageUrl:r,href:n})=>c.a.createElement(ie,{key:e||n,title:t,viewId:e,pageId:"search",href:n,color:a,imageUrl:r})))))):null}}var qe=Object(n.b)((e=>({topGenres:e.browse.topGenres,browseAll:e.browse.browseAll})))(Me),Ae=t("oPiR"),_e=t("XhW5"),Pe="ca48007a4c6853ba83b995b52e745570-scss",ze=t("U2jI"),Fe=t("oS2X");const Ge=()=>{const e=Object(ze.c)(Fe.c),a=Object(n.c)();return Object(r.useEffect)((()=>{a(s.a.browseRequest(e))}),[e,a]),null},Be=["playlists","albums","artists","tracks","shows","episodes","topRecommendations","shows","profiles","genres"],Xe=(e,a)=>{const t="{}"!==JSON.stringify(e),r=Object.keys(e).some((a=>Number(e[a].total)>0));return c.a.createElement(c.a.Fragment,null,c.a.createElement(_e.a,null,c.a.createElement(Ae.a,null)),c.a.createElement(m.b,{exact:!0,path:"/search"},c.a.createElement(I,null),!a&&c.a.createElement(qe,null)),c.a.createElement(m.b,{exact:!0,path:"/search/:query"},t&&r&&c.a.createElement(X,null),t&&!r&&c.a.createElement(W,null)),c.a.createElement(m.b,{path:"/search/:query/:category",component:ae}))},Ve=()=>[{title:i.b.get("search.title.artists"),category:"artists"},{title:i.b.get("search.title.albums"),category:"albums"},{title:i.b.get("search.title.playlists"),category:"playlists"},{title:i.b.get("search.title.shows"),category:"shows"},{title:i.b.get("search.title.episodes"),category:"episodes"},{title:i.b.get("search.title.profiles"),category:"profiles"},{title:i.b.get("search.title.genres"),category:"genres"}];const De=c.a.memo((()=>{const e=Object(n.c)(),a=Object(m.g)(),{queryFromUrl:t,category:u}=function(){const{query:e="",category:a}=Object(m.i)();let t;try{t=decodeURIComponent(e)}catch(a){t=e}return{queryFromUrl:t,category:a}}(),d=Object(m.h)(),b=new URLSearchParams(d.search),f=Boolean(b.get("showRecent")),E=Object(n.d)((e=>e.fusionSearch.results)),g=Object(r.useCallback)(((t,r)=>{r?a.push("/search/".concat(encodeURIComponent(t))):a.replace("/search/".concat(encodeURIComponent(t))),e(s.a.searchRequest(t))}),[a,e]);Object(r.useEffect)((()=>{e(Object(l.x)(i.b.get("search.page-title")))}),[e]),Object(r.useEffect)((()=>{!t||u||f||g(t)}),[u,t,f,g]),Object(r.useEffect)((()=>{""===t&&e(s.a.clearSearchResults())}),[e,t]);const p={results:E,query:t,showRecent:f,category:u,onSearchRequest:g,getResultEntities:Ve};return c.a.createElement(o.e.Provider,{value:p},c.a.createElement(h.b,{value:"search-page"},c.a.createElement("div",{className:"contentSpacing",id:"searchPage"},c.a.createElement(R.b,{className:Pe,render:()=>Xe(E,f)}))),c.a.createElement(r.Suspense,{fallback:null},c.a.createElement(Ge,null)))}));a.default=De}}]);
//# sourceMappingURL=xpui-routes-search.83283a04.js.map