(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))f(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const e of t.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&f(e)}).observe(document,{childList:!0,subtree:!0});function s(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function f(n){if(n.ep)return;n.ep=!0;const t=s(n);fetch(n.href,t)}})();var $={exports:{}};(function(c,h){(function(s,f,n,t,e){if("customElements"in n)e();else{if(n.AWAITING_WEB_COMPONENTS_POLYFILL)return void n.AWAITING_WEB_COMPONENTS_POLYFILL.then(e);var r=n.AWAITING_WEB_COMPONENTS_POLYFILL=y();r.then(e);var u=n.WEB_COMPONENTS_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js",x=n.ES6_CORE_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.min.js";"Promise"in n?k(u).then(function(){r.isDone=!0,r.exec()}):k(x).then(function(){k(u).then(function(){r.isDone=!0,r.exec()})})}function y(){var d=[];return d.isDone=!1,d.exec=function(){d.splice(0).forEach(function(b){b()})},d.then=function(b){return d.isDone?b():d.push(b),d},d}function k(d){var b=y(),g=t.createElement("script");return g.type="text/javascript",g.readyState?g.onreadystatechange=function(){g.readyState!="loaded"&&g.readyState!="complete"||(g.onreadystatechange=null,b.isDone=!0,b.exec())}:g.onload=function(){b.isDone=!0,b.exec()},g.src=d,t.getElementsByTagName("head")[0].appendChild(g),g.then=b.then,g}})(0,0,window,document,function(){var s;s=function(){return function(f){var n={};function t(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return f[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=f,t.c=n,t.d=function(e,r,u){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:u})},t.r=function(e){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r||4&r&&typeof e=="object"&&e&&e.__esModule)return e;var u=Object.create(null);if(t.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:e}),2&r&&typeof e!="string")for(var x in e)t.d(u,x,(function(y){return e[y]}).bind(null,x));return u},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=5)}([function(f,n){f.exports=function(t){var e=[];return e.toString=function(){return this.map(function(r){var u=function(x,y){var k,d=x[1]||"",b=x[3];if(!b)return d;if(y&&typeof btoa=="function"){var g=(k=b,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(k))))+" */"),E=b.sources.map(function(I){return"/*# sourceURL="+b.sourceRoot+I+" */"});return[d].concat(E).concat([g]).join(`
`)}return[d].join(`
`)}(r,t);return r[2]?"@media "+r[2]+"{"+u+"}":u}).join("")},e.i=function(r,u){typeof r=="string"&&(r=[[null,r,""]]);for(var x={},y=0;y<this.length;y++){var k=this[y][0];typeof k=="number"&&(x[k]=!0)}for(y=0;y<r.length;y++){var d=r[y];typeof d[0]=="number"&&x[d[0]]||(u&&!d[2]?d[2]=u:u&&(d[2]="("+d[2]+") and ("+u+")"),e.push(d))}},e}},function(f,n,t){var e=t(3);f.exports=typeof e=="string"?e:e.toString()},function(f,n,t){var e=t(4);f.exports=typeof e=="string"?e:e.toString()},function(f,n,t){(f.exports=t(0)(!1)).push([f.i,"@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:scaleX(1) rotate(-10deg);transform:scaleX(1) rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.bx-spin,.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada,.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing,.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-burst,.bx-burst-hover:hover{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-fade-up,.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-down,.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-left,.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-right,.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}",""])},function(f,n,t){(f.exports=t(0)(!1)).push([f.i,'.bx-rotate-90{transform:rotate(90deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)"}.bx-rotate-180{transform:rotate(180deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"}.bx-rotate-270{transform:rotate(270deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"}.bx-flip-horizontal{transform:scaleX(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)"}.bx-flip-vertical{transform:scaleY(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}',""])},function(f,n,t){t.r(n),t.d(n,"BoxIconElement",function(){return P});var e,r,u,x,y=t(1),k=t.n(y),d=t(2),b=t.n(d),g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},E=function(){function m(p,o){for(var i=0;i<o.length;i++){var a=o[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(p,a.key,a)}}return function(p,o,i){return o&&m(p.prototype,o),i&&m(p,i),p}}(),I=(r=(e=Object).getPrototypeOf||function(m){return m.__proto__},u=e.setPrototypeOf||function(m,p){return m.__proto__=p,m},x=(typeof Reflect>"u"?"undefined":g(Reflect))==="object"?Reflect.construct:function(m,p,o){var i,a=[null];return a.push.apply(a,p),i=m.bind.apply(m,a),u(new i,o.prototype)},function(m){var p=r(m);return u(m,u(function(){return x(p,arguments,r(this).constructor)},p))}),_=window,T={},X=document.createElement("template"),N=function(){return!!_.ShadyCSS};X.innerHTML=`
<style>
:host {
  display: inline-block;
  font-size: initial;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
}
:host([size=xs]) {
    width: 0.8rem;
    height: 0.8rem;
}
:host([size=sm]) {
    width: 1.55rem;
    height: 1.55rem;
}
:host([size=md]) {
    width: 2.25rem;
    height: 2.25rem;
}
:host([size=lg]) {
    width: 3.0rem;
    height: 3.0rem;
}

:host([size]:not([size=""]):not([size=xs]):not([size=sm]):not([size=md]):not([size=lg])) {
    width: auto;
    height: auto;
}
:host([pull=left]) #icon {
    float: left;
    margin-right: .3em!important;
}
:host([pull=right]) #icon {
    float: right;
    margin-left: .3em!important;
}
:host([border=square]) #icon {
    padding: .25em;
    border: .07em solid rgba(0,0,0,.1);
    border-radius: .25em;
}
:host([border=circle]) #icon {
    padding: .25em;
    border: .07em solid rgba(0,0,0,.1);
    border-radius: 50%;
}
#icon,
svg {
  width: 100%;
  height: 100%;
}
#icon {
    box-sizing: border-box;
} 
`+k.a+`
`+b.a+`
</style>
<div id="icon"></div>`;var P=I(function(m){function p(){(function(i,a){if(!(i instanceof a))throw new TypeError("Cannot call a class as a function")})(this,p);var o=function(i,a){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||typeof a!="object"&&typeof a!="function"?i:a}(this,(p.__proto__||Object.getPrototypeOf(p)).call(this));return o.$ui=o.attachShadow({mode:"open"}),o.$ui.appendChild(o.ownerDocument.importNode(X.content,!0)),N()&&_.ShadyCSS.styleElement(o),o._state={$iconHolder:o.$ui.getElementById("icon"),type:o.getAttribute("type")},o}return function(o,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof i);o.prototype=Object.create(i&&i.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),i&&(Object.setPrototypeOf?Object.setPrototypeOf(o,i):o.__proto__=i)}(p,HTMLElement),E(p,null,[{key:"getIconSvg",value:function(o,i){var a=this.cdnUrl+"/regular/bx-"+o+".svg";return i==="solid"?a=this.cdnUrl+"/solid/bxs-"+o+".svg":i==="logo"&&(a=this.cdnUrl+"/logos/bxl-"+o+".svg"),a&&T[a]||(T[a]=new Promise(function(L,w){var O=new XMLHttpRequest;O.addEventListener("load",function(){this.status<200||this.status>=300?w(new Error(this.status+" "+this.responseText)):L(this.responseText)}),O.onerror=w,O.onabort=w,O.open("GET",a),O.send()})),T[a]}},{key:"define",value:function(o){o=o||this.tagName,N()&&_.ShadyCSS.prepareTemplate(X,o),customElements.define(o,this)}},{key:"cdnUrl",get:function(){return"//unpkg.com/boxicons@2.1.4/svg"}},{key:"tagName",get:function(){return"box-icon"}},{key:"observedAttributes",get:function(){return["type","name","color","size","rotate","flip","animation","border","pull"]}}]),E(p,[{key:"attributeChangedCallback",value:function(o,i,a){var L=this._state.$iconHolder;switch(o){case"type":(function(w,O,v){var l=w._state;l.$iconHolder.textContent="",l.type&&(l.type=null),l.type=!v||v!=="solid"&&v!=="logo"?"regular":v,l.currentName!==void 0&&w.constructor.getIconSvg(l.currentName,l.type).then(function(M){l.type===v&&(l.$iconHolder.innerHTML=M)}).catch(function(M){console.error("Failed to load icon: "+l.currentName+`
`+M)})})(this,0,a);break;case"name":(function(w,O,v){var l=w._state;l.currentName=v,l.$iconHolder.textContent="",v&&l.type!==void 0&&w.constructor.getIconSvg(v,l.type).then(function(M){l.currentName===v&&(l.$iconHolder.innerHTML=M)}).catch(function(M){console.error("Failed to load icon: "+v+`
`+M)})})(this,0,a);break;case"color":L.style.fill=a||"";break;case"size":(function(w,O,v){var l=w._state;l.size&&(l.$iconHolder.style.width=l.$iconHolder.style.height="",l.size=l.sizeType=null),v&&!/^(xs|sm|md|lg)$/.test(l.size)&&(l.size=v.trim(),l.$iconHolder.style.width=l.$iconHolder.style.height=l.size)})(this,0,a);break;case"rotate":i&&L.classList.remove("bx-rotate-"+i),a&&L.classList.add("bx-rotate-"+a);break;case"flip":i&&L.classList.remove("bx-flip-"+i),a&&L.classList.add("bx-flip-"+a);break;case"animation":i&&L.classList.remove("bx-"+i),a&&L.classList.add("bx-"+a)}}},{key:"connectedCallback",value:function(){N()&&_.ShadyCSS.styleElement(this)}}]),p}());n.default=P,P.define()}])},c.exports=s()})})($);const H=c=>`
    <div class="card group">
        <div class="w-[100%] flex flex-col gap-1 rounded-lg overflow-hidden ">
        <img class="object-contain w-full group-hover:scale-110  duration-300" src=${c.strMealThumb} alt="">
              <div class="text-[20px] font-bold mt-4">${c.strMeal}</div>
        </div>
        <div class="flex justify-end items-center">
            <button data-mealid=${c.idMeal} class="btn-solid">

            <box-icon type='solid' name='cart'></box-icon>

            <span >Add to basket</span>

            </button>
        </div>
    </div>
    `,q=()=>`
    <div class="header">
        <div class="title">
            <h1 class="cursor-pointer">Meals</h1>
        </div>

        <form id="search-form" class="md:flex-[2] w-[100%] relative">
            <input id="input" required type="text" placeholder="Enter the meal...">

            <button type="submit" class="search">
              <box-icon name='search-alt'></box-icon>
            </button>

        </form>

          <nav class="flex-1">
            <ul>
              <li id="product-btn" class="active ">Product</li>
              <li id="basket-btn" class="relative">
              Basket
              <span class="count ">0</span>
              </li>
            </ul>
          </nav>
    </div>
    `,D=c=>`
    <div class="card group h-auto">
        <div class="w-[100%] flex flex-col gap-1 rounded-lg overflow-hidden">
        <img class="object-contain w-full group-hover:scale-110  duration-300" src=${c.strMealThumb} alt="">
            <div class="text-[20px] font-bold mt-4">
            ${c.strMeal}
            </div>
        </div>
        <div class="flex justify-end items-center mt-3">
            <button data-mealid=${c.idMeal} class="btn-solid delete-basket-btn">

            <box-icon type='solid' name='cart'></box-icon>

            <span>Delete Meal</span>

            </button>
        </div>
    </div>
     `,A=()=>`
    <div class="flex justify-center items-center">
        <div class="three col ">
            <div class="loader" id="loader-2">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
    </div>
    `,J="https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood",R=document.querySelector("header"),S=document.querySelector(".products");let z=[];function F(){S.classList="gap-3 text-white container backdrop-blur-[10px] bg-[#ffffff21] p-5 rounded-xl h-[calc(100vh-120px)] overflow-y-scroll flex justify-center items-center",S.innerHTML=A()}async function Y(c){try{F();const h=await fetch(c);if(!h.ok)throw new Error("Error : "+h.status);const s=await h.json();H(s.meals),z=[...s.meals],C(s.meals)}catch(h){console.log(h)}}Y(J);U();function G(){const c=document.querySelector(".alert");c.classList.remove("hidden"),c.classList.add("flex"),setTimeout(()=>{c.classList.remove("flex"),c.classList.add("hidden")},1500)}function C(c){S.innerHTML="",S.classList="products",c.forEach(s=>{S.innerHTML+=H(s)}),document.querySelectorAll(".btn-solid").forEach(s=>{var f;s.innerHTML==="Go to basket"&&console.log(s),s.addEventListener("click",()=>{j();const n=JSON.parse(localStorage.getItem("basket"))||[],t=c.find(e=>e.idMeal===s.dataset.mealid);if(n.find(e=>e.idMeal===s.dataset.mealid))B(JSON.parse(localStorage.getItem("basket"))),K.classList.add("active"),W.classList.remove("active");else{const e=[...n,t];localStorage.setItem("basket",JSON.stringify(e)),j(),G(),e==null||e.forEach(r=>{r.idMeal==s.dataset.mealid&&(s.classList.add("basket-act"),s.innerHTML=`
                        <box-icon type='solid' name='cart'></box-icon>
            
                        <span>Go to basket</span>
                        `)})}}),(f=JSON.parse(localStorage.getItem("basket")))==null||f.forEach(n=>{n.idMeal==s.dataset.mealid&&(s.classList.add("basket-act"),s.innerHTML=`
                <box-icon type='solid' name='cart'></box-icon>
    
                <span>Go to basket</span>
                `)})})}function B(c){S.innerHTML="",c.length>0?(S.classList="products",c.forEach(s=>{S.innerHTML+=D(s)})):(S.classList="gap-3 text-white container backdrop-blur-[10px] bg-[#ffffff21] p-5 rounded-xl h-[calc(100vh-120px)] overflow-y-scroll flex justify-center items-center",S.innerHTML=`
        <div class=" flex justify-center items-center font-bold text-[24px]">
        <span>🥲Basket is empty</span>
        </div>
        `),document.querySelectorAll(".delete-basket-btn").forEach(s=>{s.addEventListener("click",()=>{const f=s.dataset.mealid,n=JSON.parse(localStorage.getItem("basket")||[]);n.length>0&&localStorage.setItem("basket",JSON.stringify(n.filter(t=>t.idMeal!==f))),B(JSON.parse(localStorage.getItem("basket"))),j()})})}function j(){const c=document.querySelector(".count");c.textContent=JSON.parse(localStorage.getItem("basket")).length}j();function U(){R.innerHTML=q();const c=document.querySelector("#product-btn"),h=document.querySelector("#basket-btn"),s=document.querySelector("#search-form");c.addEventListener("click",()=>{C(z),c.classList.add("active"),h.classList.remove("active")}),h.addEventListener("click",()=>{B(JSON.parse(localStorage.getItem("basket"))||[]),h.classList.add("active"),c.classList.remove("active")}),s.addEventListener("submit",f=>{f.preventDefault();const n=s.input.value.trim();s.reset(),Y(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${n}`)})}const W=document.querySelector("#product-btn"),K=document.querySelector("#basket-btn");//!important
