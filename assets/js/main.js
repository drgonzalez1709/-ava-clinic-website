
const header=document.querySelector('[data-header]');
const toggle=document.querySelector('[data-menu-toggle]');
const menu=document.querySelector('[data-menu]');
if(toggle&&menu){toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));}
window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',window.scrollY>8),{passive:true});
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const reveal=()=>{const items=document.querySelectorAll('.reveal');if(!('IntersectionObserver' in window)){items.forEach(i=>i.classList.add('visible'));return;}const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}}),{threshold:.12});items.forEach(i=>obs.observe(i));};
reveal();
