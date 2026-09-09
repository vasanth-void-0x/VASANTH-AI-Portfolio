const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}});

const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.opacity='1';entry.target.style.transform='translateY(0)'}}),{threshold:.08});
document.querySelectorAll('.project,.roles article,.role-stack-card,.terminal').forEach((el,i)=>{el.style.opacity='0';el.style.transform='translateY(18px)';el.style.transition=`opacity .55s ${Math.min(i*.04,.2)}s ease,transform .55s ${Math.min(i*.04,.2)}s ease,background .3s,border-color .3s`;reveal.observe(el)});

// Live V-Core overlay. The processor artwork remains the background image;
// these lightweight DOM layers make its energy system feel alive.
const hero=document.querySelector('.hero');
if(hero && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  const fx=document.createElement('div');
  fx.className='live-core-fx';
  fx.setAttribute('aria-hidden','true');
  fx.innerHTML=`
    <span class="core-aura"></span>
    <span class="core-scan"></span>
    <span class="energy-line energy-line-a"></span>
    <span class="energy-line energy-line-b"></span>
    <span class="energy-line energy-line-c"></span>
    <span class="spark spark-a"></span>
    <span class="spark spark-b"></span>
    <span class="spark spark-c"></span>
    <span class="spark spark-d"></span>`;
  hero.appendChild(fx);

  const sparks=[...fx.querySelectorAll('.spark')];
  const randomizeSpark=s=>{
    s.style.left=(45+Math.random()*48)+'%';
    s.style.top=(8+Math.random()*82)+'%';
    s.style.setProperty('--spark-delay',(Math.random()*1.4)+'s');
    s.style.setProperty('--spark-scale',(0.65+Math.random()*0.9).toFixed(2));
  };
  sparks.forEach(randomizeSpark);
  setInterval(()=>sparks.forEach(randomizeSpark),3200);
}