import React,{useEffect}from'react';
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
 useEffect(()=>{
  const nodes=document.querySelectorAll('[data-reveal]');
  const observer=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}});
  },{threshold:.12});
  nodes.forEach(node=>observer.observe(node));

  const move=e=>document.documentElement.style.setProperty('--mx',`${e.clientX}px`);
  window.addEventListener('pointermove',move);
  return()=>{observer.disconnect();window.removeEventListener('pointermove',move)};
 },[]);

 return <>
  <header>
   <a className="logo" href="#top">DA<span>/</span></a>
   <nav><a href="#projects">Projects</a><a href="#architecture">Architecture</a><a href="#stack">Stack</a><a href="#about">About</a></nav>
   <a className="gh" href="https://github.com/NearDante" target="_blank" rel="noreferrer">GitHub ↗</a>
  </header>

  <main id="top">
   <section className="hero">
    <div className="hero-glow"/>
    <small>DATA ENGINEERING · BACKEND · CLOUD</small>
    <div className="heroGrid">
     <div data-reveal>
      <p className="mono">PORTFOLIO / 2026</p>
      <h1>Ezequiel Dante<br/><i>Aruquipa Vargas</i></h1>
      <p className="lead">I build data pipelines and backend systems focused on real-time processing, cloud infrastructure and reliable data products.</p>
      <div>
       <a className="btn accent" href="#projects">Explore projects ↓</a>
       <a className="btn" href="https://github.com/NearDante" target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>
     </div>
     <aside className="focus-card" data-reveal>
      <span className="status-dot"/>
      <small>CURRENT FOCUS</small>
      <h2>Data Engineering</h2>
      <p>Streaming systems · distributed processing · cloud data infrastructure</p>
      <b>Building production-oriented systems</b>
     </aside>
    </div>
   </section>

   <div className="ticker"><span>PYTHON</span><span>PYSPARK</span><span>SQL</span><span>AWS</span><span>RUST</span><span>DOCKER</span><span>REDIS</span><span>STREAMING</span></div>

   <section id="projects">
    <div className="heading" data-reveal><h2><span>01</span> Featured project</h2><small>REAL-TIME DATA SYSTEM</small></div>
    <article className="feature magnetic-card" data-reveal>
     <div className="feature-orbit"/>
     <small>SEARCH-DATA-PIPELINE / 01</small>
     <h2>Real-Time E-Commerce<br/><i>Search Feature Pipeline</i></h2>
     <p>Event-driven processing that turns e-commerce search events into queryable features, using event-time semantics and a low-latency serving layer.</p>
     <div className="tags">Rust · AWS Kinesis · PySpark · S3 / Parquet · Redis · Axum</div>
     <a href="https://github.com/NearDante/search-data-pipeline" target="_blank" rel="noreferrer">View repository ↗</a>
     <div className="card-index">01 / FEATURED</div>
    </article>

    <div className="heading" data-reveal><h2><span>02</span> Selected projects</h2><small>OTHER WORK</small></div>
    <div className="cards">
     {projects.map((p,i)=><article className="card magnetic-card" key={p[0]} data-reveal style={{'--delay':`${i*90}ms`}}>
      <small>PROJECT / 0{i+2}</small><h3>{p[1]}</h3><p>{p[2]}</p>
      <a href={p[3]} target="_blank" rel="noreferrer">Repository ↗</a>
     </article>)}
    </div>
   </section>

   <section id="architecture">
    <div className="heading" data-reveal><h2><span>03</span> System architecture</h2><small>SEARCH-DATA-PIPELINE</small></div>
    <p className="muted" data-reveal>A streaming path from event ingestion to queryable features.</p>
    <div className="pipeline" data-reveal>
     {pipeline.map((x,i)=><React.Fragment key={x[1]}>
      <div className="node flow-node" style={{'--delay':`${i*120}ms`}}><small>{x[0]}</small><strong>{x[1]}</strong><p>{x[2]}</p></div>
      {i<5&&<span className="flow-arrow">→</span>}
     </React.Fragment>)}
    </div>
   </section>

   <section id="stack">
    <div className="heading" data-reveal><h2><span>04</span> Technical stack</h2><small>TOOLS I USE</small></div>
    <div className="stack">
     {[
      ['DATA','Python · PySpark · SQL','Structured Streaming, event-time processing and Parquet.'],
      ['CLOUD','AWS · S3 · Kinesis','Cloud-oriented storage and event infrastructure.'],
      ['ENGINEERING','Rust · Docker · GitHub Actions','Typed services, containers and automated validation.'],
      ['BACKEND','Axum · Node.js · Express · Redis','REST APIs and low-latency data access.']
     ].map(x=><article key={x[0]} data-reveal><small>{x[0]}</small><h3>{x[1]}</h3><p>{x[2]}</p></article>)}
    </div>
   </section>

   <section id="about" className="about">
    <div>
     <div className="heading" data-reveal><h2><span>05</span> Engineering principles</h2></div>
     <ul data-reveal>
      <li><b>Reproducible</b>Environments can be recreated consistently.</li>
      <li><b>Testable</b>Important behavior is validated automatically.</li>
      <li><b>Observable</b>Systems expose useful signals for failures and processing.</li>
      <li><b>Documented</b>Architecture and validation are part of the implementation.</li>
     </ul>
    </div>
    <aside data-reveal><small>ABOUT</small><h2>Engineering systems, not just features.</h2><p>Ingeniería en Sistemas de Información · Universidad Tecnológica Nacional, Argentina.</p><p>Focused on cloud data platforms, streaming pipelines, distributed processing and production-oriented software engineering.</p></aside>
   </section>

   <section className="contact" data-reveal>
    <small>06 / CONTACT</small>
    <h2>Let's build something<br/><i>useful with data.</i></h2>
    <a className="btn accent" href="mailto:ezequieldante96@gmail.com">ezequieldante@gmail.com ↗</a>
   </section>
  </main>

  <footer>© 2026 Ezequiel Dante Aruquipa Vargas <span>DATA ENGINEERING · STREAMING · CLOUD · BACKEND</span></footer>
 </>;
}

createRoot(document.getElementById('root')).render(<App/>);