const header=document.querySelector('.header');
const menu=document.querySelector('.navlinks');
const btn=document.querySelector('.menu-btn');
window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',window.scrollY>10));
btn?.addEventListener('click',()=>{const open=menu.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));});
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
document.getElementById('year')?.append(new Date().getFullYear());
