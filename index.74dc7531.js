var e;e={isAnagram:function(e,t){if(e===t)return"ANAGRAM";if(e.length!==t.length)return console.log("Strings not same length"),"NOT ANAGRAM!";function n(e){let t={};for(let n of e)n=n.toLowerCase(),t.hasOwnProperty(n)?t[n]++:t[n]=1;return t}const o=n(e),r=n(t);for(let e in o)if(o[e]!==r[e])return"NOT ANAGRAM!";return"ANAGRAM!"}};const t=document.querySelector("#answer1"),n=document.querySelector("#wordsa"),o=document.querySelector("#wordsb");n.addEventListener("keyup",(function(){const r=n.value,u=o.value;t.textContent=(0,e.isAnagram)(r,u)})),o.addEventListener("keyup",(function(){const r=n.value,u=o.value;t.textContent=(0,e.isAnagram)(r,u)})),n.addEventListener("paste",(function(){setTimeout((function(){const r=n.value,u=o.value;t.textContent=(0,e.isAnagram)(r,u)}))})),o.addEventListener("paste",(function(){setTimeout((function(){const r=n.value,u=o.value;t.textContent=(0,e.isAnagram)(r,u)}))}));
//# sourceMappingURL=index.74dc7531.js.map
