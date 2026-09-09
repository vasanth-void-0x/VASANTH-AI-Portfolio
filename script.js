const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}});

const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.opacity='1';entry.target.style.transform='translateY(0)'}}),{threshold:.08});
document.querySelectorAll('.project,.roles article,.role-stack-card,.terminal').forEach((el,i)=>{el.style.opacity='0';el.style.transform='translateY(18px)';el.style.transition=`opacity .55s ${Math.min(i*.04,.2)}s ease,transform .55s ${Math.min(i*.04,.2)}s ease,background .3s,border-color .3s`;reveal.observe(el)});

const hero=document.querySelector('.hero');
if(hero&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 const fx=document.createElement('div');
 fx.className='live-core-fx';
 fx.setAttribute('aria-hidden','true');
 fx.innerHTML=`<svg viewBox="0 0 1648 928" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <filter id="redGlow" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="coreGlow" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="10" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
 </defs>
 <!-- left-side image circuitry: selected existing rails only -->
 <path class="vflow-path" d="M20 185 L160 215 L320 260 L455 312 L535 355 L615 405 L775 434"/>
 <path class="vflow-energy" pathLength="455" d="M20 185 L160 215 L320 260 L455 312 L535 355 L615 405 L775 434"/>
 <path class="vflow-path" d="M0 520 L160 530 L315 575 L430 670 L560 660 L680 650 L805 610"/>
 <path class="vflow-energy delay1" pathLength="455" d="M0 520 L160 530 L315 575 L430 670 L560 660 L680 650 L805 610"/>
 <path class="vflow-path" d="M145 730 L300 720 L470 700 L610 680 L760 655 L900 615"/>
 <path class="vflow-energy delay2" pathLength="455" d="M145 730 L300 720 L470 700 L610 680 L760 655 L900 615"/>
 <path class="vflow-path" d="M455 175 L530 245 L585 315 L650 355 L770 390 L900 420"/>
 <path class="vflow-energy delay3" pathLength="455" d="M455 175 L530 245 L585 315 L650 355 L770 390 L900 420"/>
 <!-- top reactor ring follows the visible ellipse -->
 <ellipse class="vflow-ring" cx="1082" cy="143" rx="280" ry="72" pathLength="600"/>
 <!-- vertical power rails visible above processor -->
 <path class="vflow-rail" pathLength="280" d="M1085 160 L1085 345"/>
 <path class="vflow-rail r2" pathLength="280" d="M1110 168 L1110 350"/>
 <path class="vflow-rail r3" pathLength="280" d="M1057 170 L1057 348"/>
 <!-- V-Core border heartbeat -->
 <rect class="vflow-core" x="990" y="382" width="235" height="232" rx="34"/>
 <!-- junctions at visible connector areas -->
 <circle class="vflow-junction j1" cx="963" cy="451" r="3"/><circle class="vflow-junction j2" cx="1245" cy="452" r="3"/><circle class="vflow-junction j3" cx="965" cy="565" r="3"/><circle class="vflow-junction j4" cx="1242" cy="565" r="3"/>
 <!-- bottom reactor/platform response -->
 <ellipse class="vflow-base" cx="1100" cy="708" rx="285" ry="37"/>
 </svg>`;
 hero.appendChild(fx);
}