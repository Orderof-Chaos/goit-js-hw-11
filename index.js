import{i as f,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();function p(o){return o.map(({webformatURL:l,largeImageURL:i,tags:e,likes:r,views:s,comments:n,downloads:c})=>`
    
     <a href="${i}"><li class="gallery-card">
      
      <img class="gallery-img"
     src="${l}"
     alt="${e}">
     
     <ul class="gallery-info-list" >

     <li class="gallery-card-info">
     <p class = "info-title">Likes</p>
     <p class = "info-data">${r}</p>
     </li>

     <li class="gallery-card-info">
     <p class = "info-title">Views</p>
     <p class = "info-data">${s}</p>
     </li>

     <li class="gallery-card-info">
     <p class = "info-title">Comments</p>
     <p class = "info-data">${n}</p>
     </li>

     <li class="gallery-card-info">
     <p class = "info-title">Downloads</p>
     <p class = "info-data">${c}</p>
     </li>

     </ul>
     </li>
     </a>`).join(" ")}document.querySelector(".search-bar");function d(o){return fetch(`https://pixabay.com/api/?key=47546528-1d373426d359327bdc7f920b1&q=${o}&image_type=photo`)}const m=document.querySelector(".search");document.querySelector(".search-btn");const y=document.querySelector(".search-bar"),a=document.querySelector(".gallery");m.addEventListener("submit",o=>{o.preventDefault(),a.innerHTML='<span class="loader"></span>',d(y.value.split(" ").join("+")).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(t.totalHits===0){f.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",color:"#ef4040",messageColor:"#fafafb"}),a.innerHTML="";return}a.innerHTML=p(t.hits)}).then(()=>{let t=new u(".gallery a",{captionsData:"alt",captionDelay:250});t.on("show.simplelightbox",function(){}),t.refresh()})});
//# sourceMappingURL=index.js.map
