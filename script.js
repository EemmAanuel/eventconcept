const loader=document.querySelector(".loader");
window.addEventListener("load",()=>setTimeout(()=>loader.classList.add("hide"),500));

const heroMedia=document.querySelector(".hero-media");
const ctaBg=document.querySelector(".cta-bg");
let ticking=false;
function parallax(){
  const y=window.scrollY;
  if(heroMedia) heroMedia.style.transform=`translateY(${y*.12}px) scale(1.06)`;
  if(ctaBg){
    const r=ctaBg.parentElement.getBoundingClientRect();
    const offset=(window.innerHeight-r.top)/(window.innerHeight+r.height);
    ctaBg.style.transform=`translateY(${offset*45-22}px) scale(1.06)`;
  }
  ticking=false;
}
window.addEventListener("scroll",()=>{if(!ticking){requestAnimationFrame(parallax);ticking=true}});

const reveals=document.querySelectorAll(".statement-copy,.service,.project,.process-card,.quote blockquote,.cta-content");
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.animate(
        [{opacity:0,transform:"translateY(35px)"},{opacity:1,transform:"translateY(0)"}],
        {duration:800,easing:"cubic-bezier(.2,.8,.2,1)",fill:"forwards"}
      );
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
reveals.forEach(el=>observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click",e=>{
    const target=document.querySelector(a.getAttribute("href"));
    if(target){e.preventDefault();target.scrollIntoView({behavior:"smooth"})}
  });
});
