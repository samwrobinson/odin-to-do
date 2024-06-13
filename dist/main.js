(()=>{"use strict";var n={365:(n,t,e)=>{e.d(t,{A:()=>h});var r=e(601),i=e.n(r),o=e(314),a=e.n(o),d=e(417),s=e.n(d),c=new URL(e(265),e.b),l=new URL(e(362),e.b),p=a()(i()),u=s()(c),m=s()(l);p.push([n.id,`* {\n    box-sizing: border-box;\n}\n:root {\n    --main-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n    --off-white: #f2f2f2;\n    --curved-border: 5px;\n    --light-blue: #E3FCFF;\n    --dark-grey: #7b7b7b;\n}\n@font-face {\n    font-family: 'Inconsolata';\n    src: url(${u}) format('truetype');\n    font-weight: 300;\n}\n@font-face {\n    font-family: 'Inconsolata';\n    src: url(${m}) format('truetype');\n    font-weight: 500;\n}\nhtml, body {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n}\nbody {\n    font-family: 'Inconsolata', sans-serif;\n}\nheader {\n    display: flex;\n    position: sticky;\n    top: 0;                \n    width: 100%;\n    height: 15%;        \n    background-color: var(--off-white);\n    box-shadow: var(--main-shadow);\n    z-index: 1000;          \n    padding: 10px 20px;\n  }\n  h1 {\n    font-weight: 300;\n    margin: 0;\n    width: fit-content;\n  }\n  h4 {\n    font-weight: 500;\n  }\np {\n    font-weight: 300;\n  }\n\n  /* ID style formatting */\n#header-assets {\n    display: flex;\n    width: 80%;\n    margin: 0 10%;\n    align-items: center;\n    justify-content: space-around;\n}\n#user-interface {\n    height: 100%;\n    width: 100%;\n}\n#header-timer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 90%;\n    height: auto;\n    margin: 3% 5%;\n}\n#timer-container {\n    width: fit-content;\n}\n#user-input {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 90%;\n    height: 20%;\n    margin: 5%;\n}\n#header-timer h1 {\n    margin-top: 2%;\n    padding: 5%;\n    border-bottom: solid black 2px;\n}\n#input-form {\n    display: flex;\n    justify-content: center;\n    width: 90%;\n    margin: 5%;\n}\n.input-container {\n    display: flex;\n    align-items: center;\n    width: 90%;\n    position: relative;\n    box-shadow: var(--main-shadow);\n}\n#form-input {\n    font-family: 'Inconsolata';\n    height: 35px;\n    border: var(--off-white) 1px solid;\n    border-radius: var(--curved-border);\n    background-color: var(--off-white);\n    width: 100%;\n    padding-right: 50px;\n}\n#input-form button {\n    font-size: 2rem;\n    height: 35px;\n    width: 50px;\n    position: absolute;\n    right: 0;\n    background-color: #E3FCFF;\n    color: var(--off-white);\n    border: var(--off-white) solid 1px;\n    cursor: pointer;\n    border-radius: 0 5px 5px 0;\n}\n#pop-up {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    position: fixed;\n    top: 40%;\n    width: 60%;\n    height: auto;\n    z-index: 2000;\n    margin: 0 20%;\n    padding: 3%;\n    background-color: #ffffff;\n    box-shadow: var(--main-shadow);\n    border-radius: var(--curved-border);\n}\n#submit-details {\n    text-align: center;\n    width: 30%;\n    height: 50px;\n    margin: 0 35%;\n    margin-top: 10px;\n    background-color: transparent;\n    transition: 150ms ease-in-out;\n    border: var(--off-white) solid 1px;\n    border-radius: var(--curved-border);\n    font-family: 'Inconsolata', sans-serif;\n}\n#submit-details:hover {\n    background-color: var(--light-blue);\n    transition: 200ms ease-in-out;\n}\n#project-list {\n    width: 80%;\n    margin: 5% 10%;\n    height: fit-content;\n    padding: 2%;\n    background-color: var(--off-white);\n    box-shadow: var(--main-shadow);;\n    border-radius: var(--curved-border);\n}\n.project-header {\n    display: flex;\n    width: 100%;\n    justify-content: space-around;\n    align-items: center;\n}\n.project-header h4 {\n    width: 70%;\n}\n#trash {\n    height: 25px;\n    width: 25px;\n}\n#subtask {\n    height: 20px;\n    width: 20px;\n}\n#subTask-trash {\n    height: 20px;\n    width: 20px;\n}\n#subTask-trash path {\n    stroke: var(--dark-grey); /* Remove any stroke to ensure no black lines */\n    transition: stroke 200ms ease-in-out\n}\n#subTask-trash:hover {\n    stroke: var(--light-blue);\n    transition: stroke 300ms ease-in-out;\n}\n#timer-container {\n    display: flex;\n    align-items: center;\n    font-size: 2rem;\n}\n#timer {\n    width: auto;\n}\n#clock {\n    scale: 1;\n    transition: 150ms ease-in-out;\n}\n#clock:hover {\n    scale: 1.08;\n    transition: 200ms ease-in-out;\n}\n\n\n/* Class style formatting */\n\n.details {\n    font-family: 'Inconsolata';\n    height: 35px;\n    border: var(--off-white) 1px solid;\n    border-radius: var(--curved-border);\n    background-color: var(--off-white);\n    width: 80%;\n    margin: 2% 10%;\n    padding: 5px;\n}\n.task {\n    display: flex;\n    flex-direction: column;\n    background-color: #ffffff;\n    border: var(--light-blue) 2px solid;\n    box-shadow: var(--main-shadow);\n    border-radius: var(--curved-border);\n    width: 100%;\n    margin-top: 3%;\n    padding: 15px;\n    justify-content: space-around;\n}\n.differentiator {\n    border: none;\n    border-bottom: solid 3px var(--dark-grey);\n    display: flex;\n    width: 100%;;\n    justify-content: space-around;\n}\n.task > * {\n    margin: 0;\n}\n.task-details {\n    font-family: 'Inconsolata';\n    width: 90%;\n    height: auto;\n    margin: 2% 5%;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    justify-content: space-around;\n    border: var(--off-white) solid 2px;\n    box-shadow: var(--main-shadow);\n    scale: 1;\n    transition: 150ms ease-in-out;\n}\n.task-details:hover {\n    scale: 1.05;\n    transition: 200ms ease-in-out;\n}\n.task-details > *:first-child {\n    grid-column: span 2;\n}\n.task-details > * {\n    margin: 5px;\n}\n.header-svg {\n    height: 25px;\n    width: 25px;\n    margin: 10px;\n}\n.priority {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    justify-content: space-around;\n    align-items: center;\n}\n.priority-button {\n    width: 30%;\n    height: 25px;\n    margin: 0 15px;\n    background-color: transparent;\n    transition: 150ms ease-in-out;\n    border: var(--off-white) solid 1px;\n    border-radius: var(--curved-border);\n    font-family: 'Inconsolata', sans-serif;\n}\n.priority-button:hover {\n    background-color: var(--light-blue);\n    transition: 200ms ease-in-out;\n    }\n.button-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n}\n.selected {\n    background-color: var(--light-blue);\n}\n\n@media (min-width: 575px) {\n    #project-list {\n        margin: 10% 10%;\n    }\n    #pop-up {\n        top: 40%;\n    }\n    #header-timer {\n        width: 50%;\n        margin: 10% 25%;\n    }\n    .task-details {\n        grid-template-columns: repeat(4, 1fr);\n        grid-auto-rows: minmax(40px, auto);\n        grid-auto-flow: row;\n    }\n}\n@media (min-width: 750px) {\n    .input-container {\n        width: 50%;\n    }\n    #user-input h1 {\n        margin-top: 0;\n    }\n    #user-input {\n        margin: 0 5%;\n    }\n    #pop-up {\n        top: 30%;\n        width: 30%;\n        margin: 0 35%;\n    }\n    #header-timer {\n        width: 40%;\n        margin: 10% 30%;\n    }\n}\n@media (min-width: 850px) {\n    #project-list {\n        width: 65%;\n        margin: 10% 17.5%;\n    }\n    #header-timer {\n        width: 30%;\n        margin: 2.5% 35%;\n    }\n}\n@media (min-width: 1000px) {\n    #project-list {\n        width: 90%;\n        margin: 0 5%;\n        display: flex;\n        justify-content: space-around;\n        overflow-x: auto;\n    }\n    .task {\n        margin:  auto 1.5rem;\n        min-width: 40%;\n        max-width: 90%;\n        margin-top: 0;\n    }\n}`,""]);const h=p},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},417:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var o={},a=[],d=0;d<n.length;d++){var s=n[d],c=r.base?s[0]+r.base:s[0],l=o[c]||0,p="".concat(c," ").concat(l);o[c]=l+1;var u=e(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=i(m,r);r.byIndex=d,t.splice(d,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function i(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var d=e(o[a]);t[d].references--}for(var s=r(n,i),c=0;c<o.length;c++){var l=e(o[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=s}}},659:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var i=void 0!==e.layer;i&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,i&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},265:(n,t,e)=>{n.exports=e.p+"c24b7c7b8496c1fb056d.ttf"},362:(n,t,e)=>{n.exports=e.p+"cd5666f63c959522feef.ttf"}},t={};function e(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return n[r](o,o.exports,e),o.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&(!n||!/^http(s?):/.test(n));)n=r[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var n=e(72),t=e.n(n),r=e(825),i=e.n(r),o=e(659),a=e.n(o),d=e(56),s=e.n(d),c=e(540),l=e.n(c),p=e(113),u=e.n(p),m=e(365),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=l(),t()(m.A,h),m.A&&m.A.locals&&m.A.locals;const f=e.p+"8b4a2d15d48c200d1685.svg",g=e.p+"10d4ea244521533d18b2.svg",v=function(){const n=document.querySelector("header"),t=document.createElement("div"),e=document.querySelector("#header-timer"),r=new Image;r.classList.add("header-svg"),r.src=f,t.appendChild(r);const i=document.createElement("p");i.textContent="focus.io",t.appendChild(i);const o=new Image;o.classList.add("header-svg"),o.src=g,o.id="clock",t.appendChild(o),t.id="header-assets",n.appendChild(t);let a=!1,d=0;document.querySelector("#clock").addEventListener("click",(()=>{if(null==document.getElementById("timer-container")){const n=document.createElement("div");n.id="timer-container",n.innerHTML='<div id="timer"></div>',e.appendChild(n)}a||(function(n,t){const r=document.querySelector("#timer-container");let i,o,s=n;const c=setInterval((()=>{i=Math.floor(s/60),o=s%60,i=i<10?`0${i}`:i,o=o<10?`0${o}`:o,t.textContent=`${i}:${o}`,--s<0&&(d+=1,function(){let n=document.querySelector("#pomodoro-container");n||(n=document.createElement("div"),n.id="pomodoro-container",e.appendChild(n)),n.innerHTML=`<p>Pomodoros today: ${d}</p>\n    `}(),clearInterval(c),alert("Time is up!"),a=!1,e.removeChild(r))}),1e3)}(1500,document.querySelector("#timer")),a=!0)}))},b=e.p+"8d8e487a3c4791611c9a.svg",y=e.p+"7d1addd73e996d6002cd.svg",x=[];class w{constructor(n,t,e,r){this.title=n,this.description=t,this.dueDate=e,this.priority=r,this.subTasks=[]}}class C{constructor(n,t,e,r){this.title=n,this.description=t,this.dueDate=e,this.priority=r,this.completed=!1}}function k(){localStorage.setItem("taskArray",JSON.stringify(x))}function E(){const n=document.querySelector("#user-interface");if(x.length>0&&!document.querySelector("#project-list")){const t=document.createElement("div");t.id="project-list",n.appendChild(t)}}function L(){const n=document.querySelector("#project-list");n.innerHTML="",x.forEach(((t,e)=>{const r=document.createElement("div");r.classList.add("task");const i=document.createElement("div");i.classList.add("project-header");const o=document.createElement("h4");o.textContent=t.title,i.appendChild(o);const a=new Image;a.src=y,a.id="subtask",a.addEventListener("click",(()=>function(n){const t=document.querySelector("#user-interface"),e=document.createElement("div");e.id="pop-up";let r=document.createElement("input");r.classList.add("details"),r.placeholder="Subtask title...",e.appendChild(r);let i=document.createElement("input");i.classList.add("details"),i.placeholder="Add task description...",e.appendChild(i);let o=document.createElement("input");o.classList.add("details"),o.setAttribute("type","date"),o.placeholder="Add a deadline...",e.appendChild(o);const a=document.createElement("div"),d=document.createElement("p");d.textContent="Priority",a.appendChild(d),a.classList.add("priority");const s=document.createElement("div");s.classList.add("button-container");const c=document.createElement("button");c.textContent="low";const l=document.createElement("button");l.textContent="medium";const p=document.createElement("button");p.textContent="high",c.classList.add("priority-button"),l.classList.add("priority-button"),p.classList.add("priority-button"),s.append(c,l,p),a.appendChild(s),e.appendChild(a);let u="";s.addEventListener("click",(n=>{"BUTTON"===n.target.tagName&&(u=n.target.textContent,document.querySelectorAll(".priority-button").forEach((n=>{n.classList.remove("selected")})),n.target.classList.add("selected"))}));const m=document.createElement("button");m.id="submit-details",m.textContent="Add sub-task",e.appendChild(m),t.appendChild(e),m.addEventListener("click",(()=>{const t=r.value.trim(),a=i.value.trim(),d=o.value,s=u;if(t&&s)if(x[n]){const r=new C(t,a,d,s);x[n].subTasks.push(r),e.remove(),k(),L()}else console.error("Project index out of bounds"),e.remove();else alert("All fields are required!")}))}(e))),i.appendChild(a);const d=new Image;d.src=b,d.id="trash",d.addEventListener("click",(()=>function(n){x[n]&&(x.splice(n,1),k(),L())}(e))),i.appendChild(d),r.appendChild(i);const s=document.createElement("div");s.classList.add("differentiator"),s.innerHTML=`\n            <p><strong>Description:</strong><br>${t.description}</p>\n            <p><strong>Deadline:</strong><br>${t.dueDate}</p>\n            <p><strong>Priority:</strong><br>${t.priority}</p>\n        `,r.appendChild(s);const c=document.createElement("div");c.classList.add("subtask-list"),t.subTasks.forEach(((n,t)=>{const r=document.createElement("div");r.classList.add("task-details"),r.innerHTML=`\n                <p><strong>${n.title}</strong><br>${n.description}</p>\n                <p><strong>Deadline:</strong><br>${n.dueDate}</p>\n                <p><strong>Priority:</strong><br>${n.priority}</p>\n                <svg class="delete-subtask-btn" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M20.5001 6H3.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>\n                <path d="M9.5 11L10 16" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>\n                <path d="M14.5 11L14 16" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>\n                <path d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6" stroke="#1C274C" stroke-width="1.5"/>\n                <path d="M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>\n                </svg>\n            `,r.querySelector(".delete-subtask-btn").addEventListener("click",(()=>{return r=t,void(x[n=e]&&(x[n].subTasks.splice(r,1),k(),L()));var n,r})),c.appendChild(r)})),r.appendChild(c),n.appendChild(r)}))}document.addEventListener("DOMContentLoaded",(()=>{!function(){const n=localStorage.getItem("taskArray");n&&JSON.parse(n).forEach((n=>{const t=new w(n.title,n.description,n.dueDate,n.priority);n.subTasks.forEach((n=>{const e=new C(n.title,n.description,n.dueDate,n.priority);t.subTasks.push(e)})),x.push(t)}))}(),E(),L()}));const S=function(n){n.preventDefault();const t=document.querySelector("#form-input"),e=document.querySelector("#user-interface"),r=t.value.trim();if(""===r)alert("Input cannot be empty.");else{const n=document.createElement("div");n.id="pop-up";const i=r;let o=document.createElement("input");o.classList.add("details"),o.placeholder="Add task description...",n.appendChild(o);let a=document.createElement("input");a.classList.add("details"),a.setAttribute("type","date"),a.placeholder="Add a deadline...",n.appendChild(a);const d=document.createElement("div"),s=document.createElement("p");s.textContent="Priority",d.appendChild(s),d.classList.add("priority");const c=document.createElement("div");c.classList.add("button-container");const l=document.createElement("button");l.textContent="low";const p=document.createElement("button");p.textContent="medium";const u=document.createElement("button");u.textContent="high",l.classList.add("priority-button"),p.classList.add("priority-button"),u.classList.add("priority-button"),c.append(l,p,u),d.appendChild(c),n.appendChild(d);let m="";c.addEventListener("click",(n=>{"BUTTON"===n.target.tagName&&(m=n.target.textContent,document.querySelectorAll(".priority-button").forEach((n=>{n.classList.remove("selected")})),n.target.classList.add("selected"))}));const h=document.createElement("button");h.id="submit-details",h.textContent="Add details.",n.appendChild(h),e.appendChild(n),h.addEventListener("click",(()=>{const e=o.value.trim(),r=a.value;e&&r&&m?(x.push(new w(i,e,r,m)),n.remove(),E(),t.value="",k(),L()):alert("All fields are required!")}))}};!function(){const n=document.querySelector("#user-interface"),t=document.createElement("div");t.id="header-timer",n.appendChild(t),v();const e=document.createElement("div");e.id="user-input",n.appendChild(e);const r=document.createElement("h1");r.textContent="time to focus.",t.appendChild(r);const i=document.createElement("form");i.id="input-form";const o=document.createElement("div");o.classList.add("input-container");const a=document.createElement("input");a.id="form-input",a.placeholder="Add new project...";const d=document.createElement("button");d.id="submit-form",d.setAttribute("for","form-input"),d.setAttribute("type","submit"),d.textContent="+",o.appendChild(a),o.appendChild(d),i.appendChild(o),e.appendChild(i),i.addEventListener("submit",S)}()})()})();