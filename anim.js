/*preload*/
document.addEventListener("DOMContentLoaded",(e=>{!function(e,t,o){const s=e.getTotalLength();e.style.strokeDasharray=s,e.style.strokeDashoffset=s;let n=null;window.requestAnimationFrame((function a(r){n||(n=r);const i=(r-n)/t,l=s*(1-i);e.style.strokeDashoffset=Math.max(0,l),i<1?window.requestAnimationFrame(a):(e.style.strokeDashoffset=0,"function"==typeof o&&o())}))}(document.querySelector(".denPath"),40e4,(()=>{const e=document.querySelector(".wrapper");var t,o;o=6e3,(t=e).offsetWidth,t.style.transition=`opacity ${o}ms ease`,t.style.opacity=0,setTimeout((()=>{t.style.display="none"}),o)}))}));
/*do*/
class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.frameCount=179,this.images=[],this.imagePromises=[],this.preloadImages()}preloadImages(){for(let e=0;e<this.frameCount;e++){const t=new Image;t.src=this.getImageSrc(e),this.imagePromises.push(new Promise((e=>{t.onload=e}))),this.images.push(t)}Promise.all(this.imagePromises).then((()=>{this.dispatchEvent(new CustomEvent("images-preloaded",{bubbles:!0,composed:!0}))}))}getImageSrc(e){return`./pallina/${(e+1).toString()}.avif`}getImages(){return this.images}}function t(e,t,a,s){const i=a[s.frame];t.width=i.width,t.height=i.height,e.clearRect(0,0,t.width,t.height),e.drawImage(i,0,0,t.width,t.height)}customElements.define("preloaded-image",e),document.getElementById("image-preloader").addEventListener("images-preloaded",(function(){const e=document.querySelector(".canvas"),a=e.getContext("2d");e.width=window.innerWidth,e.height=window.innerHeight;const s=document.getElementById("image-preloader").getImages();let i={frame:0};gsap.to(i,{frame:s.length-1,snap:"frame",ease:"none",scrollTrigger:{scrub:.5,pin:".canvas",end:"+="+4*window.innerHeight},onUpdate:()=>t(a,e,s,i)}),gsap.fromTo(".ball-text",{opacity:0,visibility:'visible'},{visibility:'visible',opacity:1,scrollTrigger:{scrub:1,start:"30%",end:"75%",preventOverlaps:1,fastScrollEnd:1,ease:'none'},onComplete:()=>{gsap.to(".ball-text",{opacity:0,visibility:'hidden',duration:2})}}),t(a,e,s,i)}));
