"use strict";(self.webpackChunkharry=self.webpackChunkharry||[]).push([[691],{3204:function(e){const t=/[\p{Lu}]/u,r=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,a=/([\p{Alpha}\p{N}_]|$)/u,o=/[_.\- ]+/,i=new RegExp("^"+o.source),s=new RegExp(o.source+a.source,"gu"),l=new RegExp("\\d+"+a.source,"gu"),c=(e,a)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(a={pascalCase:!1,preserveConsecutiveUppercase:!1,...a},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const o=!1===a.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(a.locale),c=!1===a.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(a.locale);if(1===e.length)return a.pascalCase?c(e):o(e);return e!==o(e)&&(e=((e,n,a)=>{let o=!1,i=!1,s=!1;for(let l=0;l<e.length;l++){const c=e[l];o&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),o=!1,s=i,i=!0,l++):i&&s&&r.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),s=i,i=!1,o=!0):(o=n(c)===c&&a(c)!==c,s=i,i=a(c)===c&&n(c)!==c)}return e})(e,o,c)),e=e.replace(i,""),e=a.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,o):o(e),a.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,l.lastIndex=0,e.replace(s,((e,r)=>t(r))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,r){r.d(t,{G:function(){return A},L:function(){return m},M:function(){return k},P:function(){return v},_:function(){return s},a:function(){return i},b:function(){return u},g:function(){return d},h:function(){return l}});var n=r(7294),a=(r(3204),r(5697)),o=r.n(a);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(a[r]=e[r]);return a}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,r){const n={};let a="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:n}}function u(e,t,r,n,a){return void 0===a&&(a={}),i({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:i({},a,{opacity:t?1:0})})}function d(e,t,r,n,a,o,s,l){const c={};o&&(c.backgroundColor=o,"fixed"===r?(c.width=n,c.height=a,c.backgroundColor=o,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const p=["children"],g=function(e){let{layout:t,width:r,height:a}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+a+"'%20width='"+r+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,r=s(e,p);return n.createElement(n.Fragment,null,n.createElement(g,i({},r)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],h=function(e){let{src:t,srcSet:r,loading:a,alt:o="",shouldLoad:l}=e,c=s(e,f);return n.createElement("img",i({},c,{decoding:"async",loading:a,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,alt:o}))},b=function(e){let{fallback:t,sources:r=[],shouldLoad:a=!0}=e,o=s(e,y);const l=o.sizes||(null==t?void 0:t.sizes),c=n.createElement(h,i({},o,t,{sizes:l,shouldLoad:a}));return r.length?n.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:o}=e;return n.createElement("source",{key:t+"-"+o+"-"+r,type:o,media:t,srcSet:a?r:void 0,"data-srcset":a?void 0:r,sizes:l})})),c):c};var x;h.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},b.displayName="Picture",b.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};const w=["fallback"],v=function(e){let{fallback:t}=e,r=s(e,w);return t?n.createElement(b,i({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",i({},r))};v.displayName="Placeholder",v.propTypes={fallback:a.string,sources:null==(x=b.propTypes)?void 0:x.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};const k=function(e){return n.createElement(n.Fragment,null,n.createElement(b,i({},e)),n.createElement("noscript",null,n.createElement(b,i({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=b.propTypes;const E=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],j=["style","className"],C=e=>e.replace(/\n/g,""),S=function(e,t,r){for(var n=arguments.length,a=new Array(n>3?n-3:0),i=3;i<n;i++)a[i-3]=arguments[i];return e.alt||""===e.alt?o().string.apply(o(),[e,t,r].concat(a)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},I={image:o().object.isRequired,alt:S},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],Z=["style","className"],O=new Set;let N,F;const R=function(e){let{as:t="div",image:a,style:o,backgroundColor:u,className:d,class:p,onStartLoad:g,onLoad:m,onError:f}=e,y=s(e,L);const{width:h,height:b,layout:x}=a,w=c(h,b,x),{style:v,className:k}=w,E=s(w,Z),j=(0,n.useRef)(),C=(0,n.useMemo)((()=>JSON.stringify(a.images)),[a.images]);p&&(d=p);const S=function(e,t,r){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+r+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(x,h,b);return(0,n.useEffect)((()=>{N||(N=r.e(731).then(r.bind(r,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return F=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=j.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void O.add(C);if(F&&O.has(C))return;let t,n;return N.then((e=>{let{renderImageToString:r,swapPlaceholderImage:s}=e;j.current&&(j.current.innerHTML=r(i({isLoading:!0,isLoaded:O.has(C),image:a},y)),O.has(C)||(t=requestAnimationFrame((()=>{j.current&&(n=s(j.current,C,O,o,g,m,f))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[a]),(0,n.useLayoutEffect)((()=>{O.has(C)&&F&&(j.current.innerHTML=F(i({isLoading:O.has(C),isLoaded:O.has(C),image:a},y)),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}))}),[a]),(0,n.createElement)(t,i({},E,{style:i({},v,o,{backgroundColor:u}),className:k+(d?" "+d:""),ref:j,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},A=(0,n.memo)((function(e){return e.image?(0,n.createElement)(R,e):null}));A.propTypes=I,A.displayName="GatsbyImage";const T=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function z(e){return function(t){let{src:r,__imageData:a,__error:o}=t,l=s(t,T);return o&&console.warn(o),a?n.createElement(e,i({image:a},l)):(console.warn("Image not loaded",r),null)}}const q=z((function(e){let{as:t="div",className:r,class:a,style:o,image:l,loading:p="lazy",imgClassName:g,imgStyle:f,backgroundColor:y,objectFit:h,objectPosition:b}=e,x=s(e,E);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;a&&(r=a),f=i({objectFit:h,objectPosition:b,backgroundColor:y},f);const{width:w,height:S,layout:I,images:L,placeholder:Z,backgroundColor:O}=l,N=c(w,S,I),{style:F,className:R}=N,A=s(N,j),T={fallback:void 0,sources:[]};return L.fallback&&(T.fallback=i({},L.fallback,{srcSet:L.fallback.srcSet?C(L.fallback.srcSet):void 0})),L.sources&&(T.sources=L.sources.map((e=>i({},e,{srcSet:C(e.srcSet)})))),n.createElement(t,i({},A,{style:i({},F,o,{backgroundColor:y}),className:R+(r?" "+r:"")}),n.createElement(m,{layout:I,width:w,height:S},n.createElement(v,i({},d(Z,!1,I,w,S,O,h,b))),n.createElement(k,i({"data-gatsby-image-ssr":"",className:g},x,u("eager"===p,!1,T,p,f)))))})),U=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},P=new Set(["fixed","fullWidth","constrained"]),$={src:o().string.isRequired,alt:S,width:U,height:U,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!P.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};q.displayName="StaticImage",q.propTypes=$;const M=z(A);M.displayName="StaticImage",M.propTypes=$},2978:function(e,t,r){r.r(t),r.d(t,{default:function(){return ne}});var n={};r.r(n),r.d(n,{exclude:function(){return ee},extract:function(){return V},parse:function(){return J},parseUrl:function(){return Q},pick:function(){return Y},stringify:function(){return K},stringifyUrl:function(){return X}});var a=r(7294),o=r(4316),i=r(1883),s=r(917);const l=(0,o.Z)("div",{target:"e14h6rsy1"})({name:"7on4i6",styles:"display:flex;flex-wrap:wrap;width:768px;margin:100px auto 0;@media (max-width: 768px){width:100%;margin-top:50px;padding:0 20px;}"}),c=(0,o.Z)((e=>{let{active:t,...r}=e;return(0,s.tZ)(i.rU,r)}),{target:"e14h6rsy0"})("margin-right:20px;padding:5px 0;font-size:18px;font-weight:",(e=>{let{active:t}=e;return t?"800":"400"}),";cursor:pointer;&:last-of-type{margin-right:0;}@media (max-width: 768px){font-size:15px;}");var u=function(e){let{selectedCategory:t,categoryList:r}=e;return(0,s.tZ)(l,null,Object.entries(r).map((e=>{let[r,n]=e;return(0,s.tZ)(c,{to:"/?category="+r,active:r===t,key:r},"#",r,"(",n,")")})))},d=r(8032);const p=(0,o.Z)(d.G,{target:"e136soro0"})({name:"1on2x4e",styles:"width:120px;height:120px;margin-bottom:30px;border-radius:50%;@media (max-width: 768px){width:80px;height:80px;}"});var g=function(e){let{profileImage:t}=e;return(0,s.tZ)(p,{image:t,alt:"Profile Image"})};const m=(0,o.Z)("div",{target:"ew3xl853"})({name:"1u7ncg7",styles:"width:100%;background-image:linear-gradient(60deg, #29323c 0%, #485563 100%);color:#ffffff"}),f=(0,o.Z)("div",{target:"ew3xl852"})({name:"1g3mniw",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;width:768px;height:250px;margin:0 auto;@media (max-width: 768px){width:100%;height:180px;padding:0 20px;}"}),y=(0,o.Z)("div",{target:"ew3xl851"})({name:"1h8u8jj",styles:"font-size:20px;font-weight:400;@media (max-width: 768px){font-size:15px;}"}),h=(0,o.Z)("div",{target:"ew3xl850"})({name:"1mgdphf",styles:"margin-top:5px;font-size:35px;font-weight:700;@media (max-width: 768px){font-size:25px;}"});var b=function(e){let{profileImage:t}=e;return(0,s.tZ)(m,null,(0,s.tZ)(f,null,(0,s.tZ)(g,{profileImage:t}),(0,s.tZ)("div",null,(0,s.tZ)(y,null,"Dev log"),(0,s.tZ)(h,null,"적다보면 이해되는 이야기"))))},x=r(7462);const w=(0,o.Z)(i.rU,{target:"e1tjox2m6"})({name:"m7gxp6",styles:"display:flex;flex-direction:column;border-radius:10px;box-shadow:0 0 8px rgba(0, 0, 0, 0.15);transition:0.3s box-shadow;cursor:pointer;&:hover{box-shadow:0 0 10px rgba(0, 0, 0, 0.3);}"}),v=(0,o.Z)("div",{target:"e1tjox2m5"})({name:"1do7u82",styles:"flex:1;display:flex;flex-direction:column;padding:15px"}),k=(0,o.Z)("div",{target:"e1tjox2m4"})({name:"kw2b4d",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:700"}),E=(0,o.Z)("div",{target:"e1tjox2m3"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),j=(0,o.Z)("div",{target:"e1tjox2m2"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),C=(0,o.Z)("div",{target:"e1tjox2m1"})({name:"1bzcbme",styles:"margin:2.5px 5px;padding:3px 5px;border-radius:3px;background:black;font-size:14px;font-weight:700;color:white"}),S=(0,o.Z)("div",{target:"e1tjox2m0"})({name:"1wehmme",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"});var I=function(e){let{title:t,date:r,categories:n,summary:a,link:o}=e;return(0,s.tZ)(w,{to:o},(0,s.tZ)(v,null,(0,s.tZ)(k,null,t),(0,s.tZ)(E,null,r),(0,s.tZ)(j,null,n.map((e=>(0,s.tZ)(C,{key:e},e)))),(0,s.tZ)(S,null,a)))};var L=function(e,t){const r=(0,a.useRef)(null),n=(0,a.useRef)(null),{0:o,1:i}=(0,a.useState)(1),s=(0,a.useMemo)((()=>t.filter((t=>{let{node:{frontmatter:{categories:r}}}=t;return"All"===e||r.includes(e)}))),[e]);return(0,a.useEffect)((()=>{n.current=new IntersectionObserver(((e,t)=>{e[0].isIntersecting&&(i((e=>e+1)),t.unobserve(e[0].target))}))}),[]),(0,a.useEffect)((()=>i(1)),[e]),(0,a.useEffect)((()=>{10*o>=s.length||null===r.current||0===r.current.children.length||null===n.current||n.current.observe(r.current.children[r.current.children.length-1])}),[o,e]),{containerRef:r,postList:s.slice(0,10*o)}};const Z=(0,o.Z)("div",{target:"e1uyah7c0"})({name:"mn9o9k",styles:"display:grid;grid-template-columns:1fr;grid-gap:20px;width:768px;margin:0 auto;padding:50px 0 100px;@media (max-width: 768px){grid-template-columns:1fr;width:100%;padding:50px 20px;}"});var O=function(e){let{selectedCategory:t,posts:r}=e;const{containerRef:n,postList:a}=L(t,r);return(0,s.tZ)(Z,{ref:n},a.map((e=>{let{node:{id:t,fields:{slug:r},frontmatter:n}}=e;return(0,s.tZ)(I,(0,x.Z)({},n,{link:r,key:t}))})))};const N="%[a-f0-9]{2}",F=new RegExp("("+N+")|([^%]+?)","gi"),R=new RegExp("("+N+")+","gi");function A(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(1===e.length)return e;t=t||1;const r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],A(r),A(n))}function T(e){try{return decodeURIComponent(e)}catch{let t=e.match(F)||[];for(let r=1;r<t.length;r++)t=(e=A(t,r).join("")).match(F)||[];return e}}function z(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function(e){const t={"%FE%FF":"��","%FF%FE":"��"};let r=R.exec(e);for(;r;){try{t[r[0]]=decodeURIComponent(r[0])}catch{const e=T(r[0]);e!==r[0]&&(t[r[0]]=e)}r=R.exec(e)}t["%C2"]="�";const n=Object.keys(t);for(const a of n)e=e.replace(new RegExp(a,"g"),t[a]);return e}(e)}}function q(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===e||""===t)return[];const r=e.indexOf(t);return-1===r?[]:[e.slice(0,r),e.slice(r+t.length)]}function U(e,t){const r={};if(Array.isArray(t))for(const n of t){const t=Object.getOwnPropertyDescriptor(e,n);t?.enumerable&&Object.defineProperty(r,n,t)}else for(const n of Reflect.ownKeys(e)){const a=Object.getOwnPropertyDescriptor(e,n);if(a.enumerable){t(n,e[n],e)&&Object.defineProperty(r,n,a)}}return r}const P=e=>null==e,$=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)),M=Symbol("encodeFragmentIdentifier");function _(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function W(e,t){return t.encode?t.strict?$(e):encodeURIComponent(e):e}function D(e,t){return t.decode?z(e):e}function H(e){return Array.isArray(e)?e.sort():"object"==typeof e?H(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function G(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function B(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function V(e){const t=(e=G(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function J(e,t){_((t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...t}).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"colon-list-separator":return(e,r,n)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const a="string"==typeof r&&r.includes(e.arrayFormatSeparator),o="string"==typeof r&&!a&&D(r,e).includes(e.arrayFormatSeparator);r=o?D(r,e):r;const i=a||o?r.split(e.arrayFormatSeparator).map((t=>D(t,e))):null===r?r:D(r,e);n[t]=i};case"bracket-separator":return(t,r,n)=>{const a=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!a)return void(n[t]=r?D(r,e):r);const o=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>D(t,e)));void 0!==n[t]?n[t]=[...n[t],...o]:n[t]=o};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[...[r[e]].flat(),t]:r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const a of e.split("&")){if(""===a)continue;const e=t.decode?a.replace(/\+/g," "):a;let[o,i]=q(e,"=");void 0===o&&(o=e),i=void 0===i?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?i:D(i,t),r(D(o,t),i,n)}for(const[a,o]of Object.entries(n))if("object"==typeof o&&null!==o)for(const[e,r]of Object.entries(o))o[e]=B(r,t);else n[a]=B(o,t);return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=H(r):e[t]=r,e}),Object.create(null))}function K(e,t){if(!e)return"";_((t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t}).arrayFormatSeparator);const r=r=>t.skipNull&&P(e[r])||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const a=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[W(t,e),"[",a,"]"].join("")]:[...r,[W(t,e),"[",W(a,e),"]=",W(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[W(t,e),"[]"].join("")]:[...r,[W(t,e),"[]=",W(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[W(t,e),":list="].join("")]:[...r,[W(t,e),":list=",W(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,a)=>void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?n:(a=null===a?"":a,0===n.length?[[W(r,e),t,W(a,e)].join("")]:[[n,W(a,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,W(t,e)]:[...r,[W(t,e),"=",W(n,e)].join("")]}}(t),a={};for(const[i,s]of Object.entries(e))r(i)||(a[i]=s);const o=Object.keys(a);return!1!==t.sort&&o.sort(t.sort),o.map((r=>{const a=e[r];return void 0===a?"":null===a?W(r,t):Array.isArray(a)?0===a.length&&"bracket-separator"===t.arrayFormat?W(r,t)+"[]":a.reduce(n(r),[]).join("&"):W(r,t)+"="+W(a,t)})).filter((e=>e.length>0)).join("&")}function Q(e,t){t={decode:!0,...t};let[r,n]=q(e,"#");return void 0===r&&(r=e),{url:r?.split("?")?.[0]??"",query:J(V(e),t),...t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:D(n,t)}:{}}}function X(e,t){t={encode:!0,strict:!0,[M]:!0,...t};const r=G(e.url).split("?")[0]||"";let n=K({...J(V(e.url),{sort:!1}),...e.query},t);n&&(n=`?${n}`);let a=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);if(e.fragmentIdentifier){const n=new URL(r);n.hash=e.fragmentIdentifier,a=t[M]?n.hash:`#${e.fragmentIdentifier}`}return`${r}${n}${a}`}function Y(e,t,r){r={parseFragmentIdentifier:!0,[M]:!1,...r};const{url:n,query:a,fragmentIdentifier:o}=Q(e,r);return X({url:n,query:U(a,t),fragmentIdentifier:o},r)}function ee(e,t,r){return Y(e,Array.isArray(t)?e=>!t.includes(e):(e,r)=>!t(e,r),r)}var te=n,re=r(6450);var ne=function(e){let{location:{search:t},data:{site:{siteMetadata:{title:r,description:n,siteUrl:o}},allMarkdownRemark:{edges:i},file:{childImageSharp:{gatsbyImageData:l}}}}=e;const c=te.parse(t),d="string"==typeof c.category&&c.category?c.category:"All",p=(0,a.useMemo)((()=>i.reduce(((e,t)=>{let{node:{frontmatter:{categories:r}}}=t;return r.forEach((t=>{void 0===e[t]?e[t]=1:e[t]++})),e.All++,e}),{All:0})),[]);return(0,s.tZ)(re.Z,{title:r,description:n,url:o},(0,s.tZ)(b,{profileImage:l}),(0,s.tZ)(u,{selectedCategory:d,categoryList:p}),(0,s.tZ)(O,{selectedCategory:d,posts:i}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-a3bf8aa4937144b60bb6.js.map