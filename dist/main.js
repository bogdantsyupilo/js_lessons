!function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=()=>{const e=document.querySelectorAll(".panel-group"),t=document.querySelectorAll(".panel-heading"),n=document.querySelectorAll(".panel-collapse"),r=(document.querySelectorAll(".onoffswitch-checkbox"),e=>{for(let t=0;t<n.length;t++)e===t?n[t].classList.add("in"):n[t].classList.remove("in")});e.forEach(e=>{e.addEventListener("click",e=>{let n=e.target;n.matches(".construct-btn span")||n.matches(".construct-btn")?t.forEach((c,o)=>{(c=n.closest(".panel-collapse").previousElementSibling)&&(e.preventDefault(),t.forEach((e,t)=>{if(e===c){if(!(t<3))return;r(++t)}}))}):(n=n.closest(".panel-heading"))&&t.forEach((e,t)=>{e===n&&r(t)})})})};var c=()=>{const e=document.getElementById("accordion"),t=e.querySelectorAll("select"),n=e.querySelectorAll(".onoffswitch-checkbox"),r=e.querySelectorAll(".select-box"),c=e.querySelectorAll(".title-text"),o=(e.querySelectorAll("a"),e.querySelectorAll("input")[2]),l=document.getElementById("calc-result");let a=1,i=0,s=0,d={type:1,diameter_1:1.4,ringNumber_1:1,diameter_2:0,ringNumber_2:0,bottom:!0,distance:0,price:0};const u=()=>{n[0].checked?(r[2].style.display="none",r[3].style.display="none",c[1].style.display="none",t[2].selectedIndex=0,t[3].selectedIndex=0):(r[2].style.display="inline-block",r[3].style.display="inline-block",c[1].style.display="block")};u();const p=()=>{const e=[],r=[[1,1.2],[1,1.3,1.5],[1,1.2],[1,1.3,1.5]];let c=1;const u=[],p=[[1.4,2],[1,2,3],[1.4,2],[1,2,3]];t.forEach((t,n)=>{e[n]!=t.selectedIndex&&(c*=r[n][t.selectedIndex]),e[n]=t.selectedIndex,u[n]=p[n][t.selectedIndex]}),n[0].checked&&(i=1e4,d.type=1,d.diameter1=u[0],d.ringNumber1=u[1],d.diameter2=0,d.ringNumber2=0),n[0].checked||(i=15e3,d.type=2,d.diameter1=u[0],d.ringNumber1=u[1],d.diameter2=u[2],d.ringNumber2=u[3]),n[0].checked&&n[1].checked&&(s=1e3,d.bottom=!0),!n[0].checked&&n[1].checked&&(s=2e3,d.bottom=!0),n[1].checked||(s=0,d.bottom=!1),a=c,l.value=`${Math.ceil((i+s)*a)} ₽`,d.distance=+o.value,d.price=l.value};return p(),t.forEach(e=>{e.addEventListener("change",()=>{p()})}),n.forEach(e=>{e.addEventListener("change",()=>{p(),u()})}),o.addEventListener("change",()=>{p()}),d};var o=()=>{document.querySelectorAll("a").forEach(e=>{e.addEventListener("click",e=>{e.preventDefault()})})};var l=(e,t)=>{const n=document.querySelectorAll(e),r=document.createElement("div");let c=0,o=0;document.querySelectorAll(".call-btn")[1].addEventListener("click",()=>{c=1}),document.querySelector(".director-btn").addEventListener("click",e=>{e.preventDefault(),o=1});const l=document.getElementsByName("user_quest");r.style.cssText="font-size: 1rem;\n    margin-top: 5px;\n    color: #fff;\n    display: inline-block;\n    background: #90c406;\n    padding: 10px;\n    border-radius: 15px;",n.forEach(e=>{e.addEventListener("submit",n=>{n.preventDefault(),e.appendChild(r),r.textContent="Отправка...";const i=new FormData(e);let s={},d={};if(i.forEach((e,t)=>{s[t]=e}),1===c){let e=t;e.body={},e.body=s,d=e,c=0}else 1===o?((d=s).userQuestion=l[0].value,o=0):d=s;a(d).then(e=>{if(200!==e.status)throw new Error("Status network: NOT 200");r.textContent="Спасибо! Мы свяжемся с Вами!"}).catch(e=>{r.textContent="Что-то пошло не так...",console.error(e)}).then(()=>{e.reset()})})});const a=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};var a=()=>{const e=document.querySelector(".add-sentence-btn");e.addEventListener("click",()=>{const t=document.querySelectorAll(".hidden"),n=document.querySelector(".visible-sm-block");t.forEach(e=>{e.classList.remove("hidden")}),n.classList.remove("visible-sm-block"),e.classList.add("hidden")})};var i=(e,t)=>{const n=document.querySelectorAll(e),r=document.querySelector(t);r.querySelector(".popup-close");let c=0;const o=()=>{c+=.1,r.style.opacity=c,c<1&&requestAnimationFrame(o)},l=()=>{c-=.1,r.style.opacity=c,c>0?requestAnimationFrame(l):r.style.display="none"};n.forEach(e=>{e.addEventListener("click",()=>{screen.width<768?(cancelAnimationFrame(o),r.style.display="block"):(r.style.display="block",requestAnimationFrame(o),c=0)})}),r.addEventListener("click",e=>{let t=e.target;t.classList.contains("popup-close")?screen.width<768?(cancelAnimationFrame(l),r.style.display="none"):(c=1,requestAnimationFrame(l)):(t=t.closest(".popup-content"))||(screen.width<768?(cancelAnimationFrame(l),r.style.display="none"):(c=1,requestAnimationFrame(l)))})};(()=>{const e=document.querySelectorAll("input[name = user_phone]"),t=document.querySelectorAll("input[name = user_name]");e.forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.replace(/[^0-9\+]/,"")})}),t.forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.replace(/[^а-яё\s]/gi,"")})})})(),o(),i(".discount-btn",".popup-discount"),i(".call-btn",".popup-call"),i(".check-btn",".popup-check"),i(".director-btn",".popup-consultation"),a(),r(),c(),l(".main-form",c()),l(".capture-form",c())}]);