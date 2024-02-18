const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let a;t.addEventListener("click",(()=>{a=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.body.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(()=>{clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.877ab852.js.map
