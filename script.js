const glow=document.querySelector('.cursor-glow');window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.opacity='1';entry.target.style.transform='translateY(0)'}}),{threshold:.08});document.querySelectorAll('.project,.roles article,.role-stack-card,.terminal').forEach((el,i)=>{el.style.opacity='0';el.style.transform='translateY(18px)';el.style.transition=`opacity .55s ${Math.min(i*.04,.2)}s ease,transform .55s ${Math.min(i*.04,.2)}s ease,background .3s,border-color .3s`;reveal.observe(el)});

// Hero social rail: keep links interactive, use raster PNG brand marks rather than inline SVG.
const socialRail=document.querySelector('.hero-socials');
if(socialRail){
 const links=[...socialRail.querySelectorAll('a')];
 const github=links.find(a=>a.href.includes('github.com'));
 const linkedin=links.find(a=>a.href.includes('linkedin.com'));
 const resume=links.find(a=>a.classList.contains('resume-link'));
 const email=links.find(a=>a.href.startsWith('mailto:'));
 const png=(src,alt)=>`<img class="social-png" src="${src}" alt="${alt}" loading="eager">`;
 if(github) github.innerHTML=png('https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png','GitHub')+'<span>GitHub</span>';
 if(linkedin) linkedin.innerHTML=png('https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/120px-LinkedIn_icon.svg.png','LinkedIn')+'<span>LinkedIn</span>';
 if(resume) resume.innerHTML='<span class="social-doc">▤</span><span>Resume</span>';
 if(email) email.innerHTML='<span class="social-mail">✉</span><span>Email</span>';
 const youtube=document.createElement('a');youtube.href='https://www.youtube.com/';youtube.target='_blank';youtube.rel='noopener noreferrer';youtube.innerHTML=png('https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/120px-YouTube_full-color_icon_%282017%29.svg.png','YouTube')+'<span>YouTube</span>';socialRail.appendChild(youtube);
 const portfolio=document.createElement('a');portfolio.href='https://vasanth-portfolio-fe.vercel.app/';portfolio.target='_blank';portfolio.rel='noopener noreferrer';portfolio.className='portfolio-social';portfolio.innerHTML='<span>Portfolio</span><b>↗</b>';socialRail.appendChild(portfolio);
}
