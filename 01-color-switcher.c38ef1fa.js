const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),l=document.querySelector("body");let a=null;t.classList.add("button"),e.classList.add("button--disabled"),e.disabled=!0,t.addEventListener("click",(()=>{t.disabled=!0,e.disabled=!1,t.classList.replace("button","button--disabled"),e.classList.replace("button--disabled","button"),a=setInterval((()=>{l.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(()=>{e.classList.replace("button","button--disabled"),t.classList.replace("button--disabled","button"),l.style.backgroundColor=null,clearInterval(a),t.disabled=!1,e.disabled=!0}));
//# sourceMappingURL=01-color-switcher.c38ef1fa.js.map
