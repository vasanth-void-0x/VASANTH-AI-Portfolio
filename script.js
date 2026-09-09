const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}});
const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.opacity='1';entry.target.style.transform='translateY(0)'}}),{threshold:.08});
document.querySelectorAll('.project,.roles article,.role-stack-card,.terminal').forEach((el,i)=>{el.style.opacity='0';el.style.transform='translateY(18px)';el.style.transition=`opacity .55s ${Math.min(i*.04,.2)}s ease,transform .55s ${Math.min(i*.04,.2)}s ease,background .3s,border-color .3s`;reveal.observe(el)});
const hero=document.querySelector('.hero');
if(hero&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 const fx=document.createElement('div');fx.className='live-core-fx';fx.setAttribute('aria-hidden','true');
 fx.innerHTML=`<span class="core-aura"></span><span class="core-scan"></span>
 <span class="vertical-core-beam beam-one"></span><span class="vertical-core-beam beam-two"></span><span class="vertical-core-beam beam-three"></span><span class="vertical-core-beam beam-four"></span>
 <span class="energy-line energy-line-a"></span><span class="energy-line energy-line-b"></span><span class="energy-line energy-line-c"></span>
 <span class="glow-node node-a"></span><span class="glow-node node-b"></span><span class="glow-node node-c"></span><span class="glow-node node-d"></span><span class="glow-node node-e"></span><span class="glow-node node-f"></span><span class="glow-node node-g"></span>
 <span class="pipeline-track track-a"><i></i></span><span class="pipeline-track track-b"><i></i></span><span class="pipeline-track track-c"><i></i></span><span class="pipeline-track track-d"><i></i></span>`;
 hero.appendChild(fx);
}