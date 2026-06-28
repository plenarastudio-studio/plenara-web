// Theme
const themeToggle=document.getElementById('theme-toggle'),html=document.documentElement;
html.setAttribute('data-theme',localStorage.getItem('plenara-theme')||'light');
if (themeToggle) {
  themeToggle.addEventListener('click',()=>{const n=html.getAttribute('data-theme')==='dark'?'light':'dark';html.setAttribute('data-theme',n);localStorage.setItem('plenara-theme',n)});
}

// Preloader
window.addEventListener('load',()=>{const p=document.getElementById('preloader'),f=document.getElementById('preloader-fill');let v=0;const i=setInterval(()=>{v+=Math.random()*25+10;if(v>=100){v=100;clearInterval(i);setTimeout(()=>p.classList.add('loaded'),300)}if(f){f.style.width=v+'%'}},200);if(typeof lucide!=='undefined')lucide.createIcons()});

// Navbar scroll
const navbar=document.getElementById('navbar');
if(navbar){
  window.addEventListener('scroll',()=>{navbar.classList.toggle('scrolled',window.scrollY>80)});
}

// Mobile nav
const hamburger=document.getElementById('hamburger'),navLinks=document.getElementById('nav-links');
if(hamburger && navLinks){
  hamburger.addEventListener('click',()=>{hamburger.classList.toggle('active');navLinks.classList.toggle('active')});
  navLinks.querySelectorAll('a').forEach(l=>l.addEventListener('click',()=>{hamburger.classList.remove('active');navLinks.classList.remove('active')}));
}

// Scroll reveal
const ro=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')}),{threshold:.1,rootMargin:'0px 0px -50px 0px'});
document.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(e=>ro.observe(e));

// Counters
function animC(el){const t=parseInt(el.dataset.count);if(!t)return;const d=2000,s=t/(d/16);let c=0;(function u(){c+=s;if(c>=t){el.textContent=t+'+';return}el.textContent=Math.floor(c);requestAnimationFrame(u)})()}
const co=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){animC(x.target);co.unobserve(x.target)}}),{threshold:.5});
document.querySelectorAll('[data-count]').forEach(e=>co.observe(e));

// Filters
const fBtns=document.querySelectorAll('.filter-btn'),pCards=document.querySelectorAll('.proj-card');
if(fBtns.length){
  fBtns.forEach(b=>b.addEventListener('click',()=>{fBtns.forEach(x=>x.classList.remove('active'));b.classList.add('active');const f=b.dataset.filter;pCards.forEach(c=>{const cat=c.dataset.category;if(f==='all'||cat===f){c.style.display='';c.style.opacity='0';c.style.transform='scale(.95)';setTimeout(()=>{c.style.transition='opacity .4s,transform .4s';c.style.opacity='1';c.style.transform='scale(1)'},50)}else{c.style.transition='opacity .3s,transform .3s';c.style.opacity='0';c.style.transform='scale(.95)';setTimeout(()=>c.style.display='none',300)}})}));
}

// Lightbox
const lb=document.getElementById('lightbox'),lbi=document.getElementById('lb-img');
if(lb){
  window.openLightbox=function(el){const i=el.querySelector('img');if(i){lbi.src=i.src;lbi.alt=i.alt;lb.classList.add('active');document.body.style.overflow='hidden'}};
  window.closeLightbox=function(){lb.classList.remove('active');document.body.style.overflow=''};
  lb.addEventListener('click',e=>{if(e.target===lb)closeLightbox()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox()});
}

// FAQ Accordion
window.toggleFaq=function(btn){
  const item=btn.parentElement;
  const wasOpen=item.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
  // Toggle clicked
  if(!wasOpen)item.classList.add('open');
};

// Form (WhatsApp Redirect)
window.handleFormSubmit=function(e){
  e.preventDefault();
  const f=e.target, b=f.querySelector('.form-submit'), o=b.innerHTML;
  
  const inputs = f.querySelectorAll('input, select, textarea');
  const name = inputs[0].value;
  const phone = inputs[1].value;
  const email = inputs[2].value;
  const service = inputs[3].options[inputs[3].selectedIndex].text;
  const budget = inputs[4].options[inputs[4].selectedIndex].text;
  const msg = inputs[5].value;

  const text = `Hi Plenara Studio!\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n*Service:* ${service}\n*Budget:* ${budget}\n*Message:* ${msg}`;
  const whatsappUrl = `https://wa.me/918949484944?text=${encodeURIComponent(text)}`;

  b.innerHTML='Redirecting...';
  b.style.opacity='.7';
  b.style.pointerEvents='none';
  
  setTimeout(()=>{
    window.open(whatsappUrl, '_blank');
    b.innerHTML=o;
    b.style.opacity='';
    b.style.pointerEvents='';
    f.reset();
  }, 800);
};

// Smooth scroll (only for same-page anchors)
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',function(e){const href=this.getAttribute('href');if(href.length>1){e.preventDefault();const t=document.querySelector(href);if(t)window.scrollTo({top:t.offsetTop-80,behavior:'smooth'})}}));

// Founder photo fallback - show placeholder if image fails
document.querySelectorAll('.founder-photo img').forEach(img=>{
  img.addEventListener('error',function(){this.style.opacity='0'});
});

// Initialize icons
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}
