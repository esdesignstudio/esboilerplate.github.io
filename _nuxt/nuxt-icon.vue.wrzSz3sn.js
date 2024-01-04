import{s as f}from"./entry.YVD8HoeZ.js";import{d as m,a as _,ac as p,y as d,N as h,O as x,a0 as y,u as r}from"./swiper-vue.gmmL4RLV.js";const I=["innerHTML"],v=m({__name:"nuxt-icon",props:{name:{},filled:{type:Boolean,default:!1}},async setup(l){let n,t;const o=l,a=_("");let c=!1;async function i(){try{const s=await Object.assign({"/assets/icons/logo.svg":()=>f(()=>import("./logo.4_Wdg4PW.js"),__vite__mapDeps([]),import.meta.url).then(u=>u.default)})[`/assets/icons/${o.name}.svg`]();s.includes("stroke")&&(c=!0),a.value=s}catch{console.error(`[nuxt-icons] Icon '${o.name}' doesn't exist in 'assets/icons'`)}}return[n,t]=p(()=>i()),await n,t(),d(i),(e,s)=>(h(),x("span",{class:y(["nuxt-icon",{"nuxt-icon--fill":!e.filled,"nuxt-icon--stroke":r(c)&&!e.filled}]),innerHTML:r(a)},null,10,I))}});export{v as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}