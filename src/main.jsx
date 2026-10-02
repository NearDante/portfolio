import React,{useEffect,useRef}from'react';
import{createRoot}from'react-dom/client';
import'./styles.css';

const projects=[
 ['tienda-nodejs','Product Catalog REST API','Node.js · Express · Firestore · JWT','https://github.com/NearDante/tienda-nodejs'],
 ['ProyectoFrontEnd','Responsive E-Commerce Frontend','HTML · CSS · JavaScript · REST','https://github.com/NearDante/ProyectoFrontEnd']
];

const pipeline=[
 ['01','Rust Producer','Publishes search events'],
 ['02','Kinesis','Buffers the event stream'],
 ['03','PySpark','Processes event-time windows'],
 ['04','S3 / Parquet','Persists features'],
 ['05','Redis','Serves hot features'],
 ['06','Rust API','Exposes low-latency reads']
];

function App(){
 const canvasRef=useRef(null);
 useEffect(()=>{
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nodes=document.querySelectorAll('[data-reveal]');
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12});
  nodes.forEach(node=>observer.observe(node));

  const root=document.documentElement;
  const pointer=e=>root.style.setProperty('--mx',`${e.clientX}px`);
  window.addEventListener('pointermove',pointer);

  const cards=document.querySelectorAll('.magnetic-card');
  const magnetic=document.querySelectorAll('.magnetic');
  const onCardMove=e=>{if(reduced)return;const r=e.currentTarget.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;e.currentTarget.style.setProperty('--rx',`${-y*5}deg`);e.currentTarget.style.setProperty('--ry',`${x*6}deg`);e.currentTarget.style.setProperty('--cx',`${(x+.5)*100}%`);e.currentTarget.style.setProperty('--cy',`${(y+.5)*100}%`)};
  const resetCard=e=>{e.currentTarget.style.setProperty('--rx','0deg');e.currentTarget.style.setProperty('--ry','0deg')};
  cards.forEach(c=>{c.addEventListener('pointermove',onCardMove);c.addEventListener('pointerleave',resetCard)});

  const onMagneticMove=e=>{if(reduced)return;const r=e.currentTarget.getBoundingClientRect(),x=(e.clientX-(r.left+r.width/2))/r.width,y=(e.clientY-(r.top+r.height/2))/r.height;e.currentTarget.style.setProperty('--tx',`${x*8}px`);e.currentTarget.style.setProperty('--ty',`${y*7}px`)};
  const resetMagnetic=e=>{e.currentTarget.style.setProperty('--tx','0px');e.currentTarget.style.setProperty('--ty','0px')};
  magnetic.forEach(b=>{b.addEventListener('pointermove',onMagneticMove);b.addEventListener('pointerleave',resetMagnetic)});

  const sections=[...document.querySelectorAll('main section[id]')],links=[...document.querySelectorAll('nav a')];
  const sectionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${entry.target.id}`))}}),{rootMargin:'-35% 0px -55% 0px'});
  sections.forEach(s=>sectionObserver.observe(s));

  let raf=0;
  const parallax=()=>{root.style.setProperty('--scroll',`${window.scrollY*.12}px`);raf=0};
  const onScroll=()=>{if(!reduced&&!raf)raf=requestAnimationFrame(parallax)};
  window.addEventListener('scroll',onScroll,{passive:true});

  const canvas=canvasRef.current,ctx=canvas?.getContext('2d');
  let frame=0,particles=[],width=0,height=0;
  const resize=()=>{if(!canvas||!ctx)return;const dpr=Math.min(window.devicePixelRatio||1,2);width=window.innerWidth;height=window.innerHeight;canvas.width=width*dpr;canvas.height=height*dpr;canvas.style.width=`${width}px`;canvas.style.height=`${height}px`;ctx.setTransform(dpr,0,0,dpr,0,0);const count=Math.min(58,Math.max(28,Math.floor(width/24)));particles=Array.from({length:count},(_,i)=>({x:(i*83)%width,y:(i*137)%height,vx:((i%3)-1)*.12,vy:-.08-(i%4)*.025,r:i%3===0?1.8:1}))};
  const draw=()=>{if(!canvas||!ctx||reduced)return;ctx.clearRect(0,0,width,height);for(const p of particles){p.x+=p.vx;p.y+=p.vy;if(p.y<-10)p.y=height+10;if(p.x<-10)p.x=width+10;if(p.x>width+10)p.x=-10;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='rgba(215,255,87,.42)';ctx.fill();for(const q of particles){const dx=p.x-q.x,dy=p.y-q.y,d=Math.hypot(dx,dy);if(d<125&&d>0){ctx.strokeStyle=`rgba(215,255,87,${(1-d/125)*.055})`;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke()}}}frame=requestAnimationFrame(draw)};
  resize();window.addEventListener('resize',resize);frame=requestAnimationFrame(draw);
  return()=>{observer.disconnect();sectionObserver.disconnect();window.removeEventListener('pointermove',pointer);window.removeEventListener('scroll',onScroll);window.removeEventListener('resize',resize);cancelAnimationFrame(raf);cancelAnimationFrame(frame);cards.forEach(c=>{c.removeEventListener('pointermove',onCardMove);c.removeEventListener('pointerleave',resetCard)});magnetic.forEach(b=>{b.removeEventListener('pointermove',onMagneticMove);b.removeEventListener('pointerleave',resetMagnetic)})};
 },[]);

 return <>
  <canvas ref={canvasRef} className="data-canvas" aria-hidden="true"/>
  <header>
   <a className="logo" href="#top">DA<span>/</span></a>
   <nav><a href="#projects">Projects</a><a href="#architecture">Architecture</a><a href="#stack">Stack</a><a href="#about">About</a></nav>
   <a className="gh magnetic" href="https://github.com/NearDante" target="_blank" rel="noreferrer">GitHub ↗</a>
  </header>

  <main id="top">
   <section className="hero">
    <div className="hero-glow"/><div className="hero-ring ring-a"/><div className="hero-ring ring-b"/>
    <small>DATA ENGINEERING · BACKEND · CLOUD</small>
    <div className="heroGrid">
     <div data-reveal>
      <p className="mono">PORTFOLIO / 2026</p>
      <h1>Ezequiel Dante<br/><i>Aruquipa Vargas</i></h1>
      <p className="lead">I build data pipelines and backend systems focused on real-time processing, cloud infrastructure and reliable data products.</p>
      <div><a className="btn accent magnetic" href="#projects">Explore projects ↓</a><a className="btn magnetic" href="https://github.com/NearDante" target="_blank" rel="noreferrer">GitHub ↗</a></div>
     </div>
     <aside className="focus-card" data-reveal>
      <span className="status-dot"/><small>CURRENT FOCUS</small><h2>Data Engineering</h2>
      <p>Streaming systems · distributed processing · cloud data infrastructure</p>
      <b>Building production-oriented systems</b>
      <div className="signal"><span/><span/><span/><span/><span/><span/></div>
     </aside>
    </div>
   </section>

   <div className="ticker"><span>PYTHON</span><span>PYSPARK</span><span>SQL</span><span>AWS</span><span>RUST</span><span>DOCKER</span><span>REDIS</span><span>STREAMING</span></div>

   <section id="projects">
    <div className="heading" data-reveal><h2><span>01</span> Featured project</h2><small>REAL-TIME DATA SYSTEM</small></div>
    <article className="feature magnetic-card" data-reveal>
     <div className="feature-orbit"/><div className="feature-grid"/>
     <small>SEARCH-DATA-PIPELINE / 01</small><h2>Real-Time E-Commerce<br/><i>Search Feature Pipeline</i></h2>
     <p>Event-driven processing that turns e-commerce search events into queryable features, using event-time semantics and a low-latency serving layer.</p>
     <div className="tags">Rust · AWS Kinesis · PySpark · S3 / Parquet · Redis · Axum</div>
     <a href="https://github.com/NearDante/search-data-pipeline" target="_blank" rel="noreferrer">View repository ↗</a><div className="card-index">01 / FEATURED</div>
    </article>

    <div className="heading" data-reveal><h2><span>02</span> Selected projects</h2><small>OTHER WORK</small></div>
    <div className="cards">{projects.map((p,i)=><article className="card magnetic-card" key={p[0]} data-reveal style={{'--delay':`${i*90}ms`}}><small>PROJECT / 0{i+2}</small><h3>{p[1]}</h3><p>{p[2]}</p><a href={p[3]} target="_blank" rel="noreferrer">Repository ↗</a></article>)}</div>
   </section>

   <section id="architecture">
    <div className="heading" data-reveal><h2><span>03</span> System architecture</h2><small>SEARCH-DATA-PIPELINE</small></div>
    <p className="muted" data-reveal>A streaming path from event ingestion to queryable features.</p>
    <div className="architecture-map" data-reveal>
     <svg className="flow-svg" viewBox="0 0 1100 260" preserveAspectRatio="none" aria-hidden="true">
      <path d="M70 130 C190 20 250 240 360 130 S530 20 650 130 S820 240 930 130 S1030 70 1050 130"/>
      <path className="flow-secondary" d="M70 145 C190 35 250 255 360 145 S530 35 650 145 S820 255 930 145 S1030 85 1050 145"/>
     </svg>
     {pipeline.map((x,i)=><div className="map-node" key={x[1]} style={{'--i':i}}><span>{x[0]}</span><div><strong>{x[1]}</strong><p>{x[2]}</p></div></div>)}
    </div>
   </section>

   <section id="stack">
    <div className="heading" data-reveal><h2><span>04</span> Technical stack</h2><small>TOOLS I USE</small></div>
    <div className="stack">{[['DATA','Python · PySpark · SQL','Structured Streaming, event-time processing and Parquet.'],['CLOUD','AWS · S3 · Kinesis','Cloud-oriented storage and event infrastructure.'],['ENGINEERING','Rust · Docker · GitHub Actions','Typed services, containers and automated validation.'],['BACKEND','Axum · Node.js · Express · Redis','REST APIs and low-latency data access.']].map(x=><article key={x[0]} data-reveal><small>{x[0]}</small><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div>
   </section>

   <section id="about" className="about">
    <div><div className="heading" data-reveal><h2><span>05</span> Engineering principles</h2></div><ul data-reveal><li><b>Reproducible</b>Environments can be recreated consistently.</li><li><b>Testable</b>Important behavior is validated automatically.</li><li><b>Observable</b>Systems expose useful signals for failures and processing.</li><li><b>Documented</b>Architecture and validation are part of the implementation.</li></ul></div>
    <aside data-reveal><small>ABOUT</small><h2>Engineering systems, not just features.</h2><p>Ingeniería en Sistemas de Información · Universidad Tecnológica Nacional, Argentina.</p><p>Focused on cloud data platforms, streaming pipelines, distributed processing and production-oriented software engineering.</p></aside>
   </section>

   <section className="contact" data-reveal><small>06 / CONTACT</small><h2>Let's build something<br/><i>useful with data.</i></h2><a className="btn accent magnetic" href="mailto:ezequieldante96@gmail.com">ezequieldante@gmail.com ↗</a></section>
  </main>
  <footer>© 2026 Ezequiel Dante Aruquipa Vargas <span>DATA ENGINEERING · STREAMING · CLOUD · BACKEND</span></footer>
 </>;
}
createRoot(document.getElementById('root')).render(<App/>);