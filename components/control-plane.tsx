"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

export function BootSequence() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setVisible(false), reduced ? 100 : 820);
    return () => window.clearTimeout(timer);
  }, []);
  if (!visible) return null;
  return <div className="boot-sequence print-hide" role="status" aria-live="polite" aria-label="Loading portfolio interface"><div className="boot-sequence-inner"><span className="boot-mark">K<span>.</span></span><p className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/45">Koglesh / Engineering Interface</p><p className="mt-5 font-mono text-xs tracking-[0.12em] text-white/85">INITIALIZING CONTROL PLANE</p><div className="boot-track mt-4"><span /></div><div className="mt-3 flex justify-between font-mono text-[8px] tracking-[0.15em] text-white/30"><span>CLIENT SYSTEMS</span><span>READY</span></div></div></div>;
}

export function ControlRoomHud() {
  const [data, setData] = useState({ clock: "--:--:--.---", scroll: 0, section: "BOOT", fps: 0 });
  useEffect(() => {
    let raf = 0, frames = 0, lastFrame = performance.now(), lastHud = 0, fps = 0;
    const tick = (now: number) => {
      frames += 1;
      if (now - lastFrame >= 1000) {
        fps = Math.round(frames * 1000 / Math.max(1, now - lastFrame));
        frames = 0; lastFrame = now;
      }
      if (now - lastHud >= 250) {
        const date = new Date();
        const clock = new Intl.DateTimeFormat("en-MY", { timeZone: "Asia/Kuala_Lumpur", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(date) + "." + String(date.getMilliseconds()).padStart(3, "0");
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const scroll = max > 0 ? Math.round(window.scrollY / max * 100) : 0;
        const marker = window.innerHeight * 0.42;
        const current = Array.from(document.querySelectorAll<HTMLElement>("main section[id]")).find((section) => {
          const rect = section.getBoundingClientRect(); return rect.top <= marker && rect.bottom > marker;
        });
        setData({ clock, scroll: Math.max(0, Math.min(100, scroll)), section: current?.id.toUpperCase() ?? "PAGE", fps });
        lastHud = now;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));
    const cleanups: Array<() => void> = [];
    cards.forEach((card) => {
      const move = (event: PointerEvent) => {
        if (event.pointerType === "touch") return;
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / Math.max(1, rect.width);
        const y = (event.clientY - rect.top) / Math.max(1, rect.height);
        card.style.setProperty("--card-x", (x * 100) + "%");
        card.style.setProperty("--card-y", (y * 100) + "%");
        card.style.transform = "perspective(1100px) rotateX(" + ((0.5 - y) * 4) + "deg) rotateY(" + ((x - 0.5) * 4) + "deg) translateY(-3px)";
      };
      const reset = () => { card.style.transform = ""; card.style.removeProperty("--card-x"); card.style.removeProperty("--card-y"); };
      card.addEventListener("pointermove", move);
      card.addEventListener("pointerleave", reset);
      cleanups.push(() => { card.removeEventListener("pointermove", move); card.removeEventListener("pointerleave", reset); reset(); });
    });
    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return <aside className="control-hud print-hide" aria-label="Live browser telemetry">
    <div className="control-hud-heading"><span className="hud-live-dot" /> SYSTEM TELEMETRY <span>LOCAL</span></div>
    <div className="control-hud-grid">
      <div><span>ASIA / KL</span><strong>{data.clock}</strong></div>
      <div><span>SCROLL DEPTH</span><strong>{data.scroll}%</strong></div>
      <div><span>ACTIVE SECTION</span><strong>{data.section}</strong></div>
      <div><span>RENDER RATE</span><strong>{data.fps} FPS</strong></div>
    </div>
    <div className="control-hud-progress"><span style={{ width: data.scroll + "%" }} /></div>
    <p className="control-hud-foot">FPS IS A BROWSER-SIDE ESTIMATE · NOT A BENCHMARK</p>
  </aside>;
}

export function SpatialBlueprint() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current, ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0, height = 0, phase = 0, raf = 0;
    const resize = () => {
      const rect = canvas.getBoundingClientRect(), ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width; height = rect.height;
      canvas.width = Math.max(1, Math.round(width * ratio)); canvas.height = Math.max(1, Math.round(height * ratio));
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1; ctx.strokeStyle = "rgba(255,255,255,0.045)";
      for (let x = 0; x <= width; x += 48) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke(); }
      for (let y = 0; y <= height; y += 48) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke(); }
      const nodes = [[.1,.27],[.27,.62],[.42,.19],[.59,.77],[.73,.32],[.9,.58],[.86,.16]];
      ctx.strokeStyle = "rgba(251,113,133,.23)"; ctx.lineWidth = 1.2; ctx.beginPath();
      nodes.forEach((point,index) => { const x=point[0]*width,y=point[1]*height; if(index===0)ctx.moveTo(x,y);else ctx.lineTo(x,y); });
      ctx.stroke();
      const cx=width*.72,cy=height*.52,radius=Math.min(width*.25,height*.4,240);
      ctx.strokeStyle="rgba(251,113,133,.21)";ctx.setLineDash([4,8]);
      for(let ring=1;ring<=3;ring+=1){ctx.beginPath();ctx.arc(cx,cy,radius*ring*.32,0,Math.PI*2);ctx.stroke();}
      ctx.setLineDash([]);
      nodes.forEach((point,index)=>{ctx.beginPath();ctx.fillStyle=index===4?"rgba(251,113,133,.95)":"rgba(255,255,255,.55)";ctx.arc(point[0]*width,point[1]*height,index===4?3.5+Math.sin(phase)*1.2:2,0,Math.PI*2);ctx.fill();});
      if(!reduced){phase+=.035;raf=requestAnimationFrame(draw);}
    };
    resize();draw();window.addEventListener("resize",resize);
    const magnetic=Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic]"));
    const cleanups:Array<()=>void>=[];
    if(!reduced)magnetic.forEach((element)=>{
      const move=(event:PointerEvent)=>{if(event.pointerType==="touch")return;const rect=element.getBoundingClientRect();const dx=(event.clientX-rect.left-rect.width/2)/Math.max(1,rect.width);const dy=(event.clientY-rect.top-rect.height/2)/Math.max(1,rect.height);element.style.transform="translate3d("+(dx*6)+"px,"+(dy*6)+"px,0)";};
      const reset=()=>{element.style.transform="";};
      element.addEventListener("pointermove",move);element.addEventListener("pointerleave",reset);
      cleanups.push(()=>{element.removeEventListener("pointermove",move);element.removeEventListener("pointerleave",reset);reset();});
    });
    return ()=>{cancelAnimationFrame(raf);window.removeEventListener("resize",resize);cleanups.forEach((fn)=>fn());};
  },[]);
  return <canvas ref={ref} className="spatial-blueprint" aria-hidden="true" />;
}

export function ScrambleText({ text }: { text: string }) {
  const [display,setDisplay]=useState(text);
  useEffect(()=>{
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
    const alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&",started=performance.now();
    let raf=0;
    const tick=(now:number)=>{
      const progress=Math.min(1,(now-started)/720),reveal=Math.floor(progress*text.length);
      let next="";
      for(let index=0;index<text.length;index+=1)next+=index<reveal||text[index]===" "?text[index]:alphabet[Math.floor(Math.random()*alphabet.length)];
      setDisplay(progress>=1?text:next);
      if(progress<1)raf=requestAnimationFrame(tick);
    };
    raf=requestAnimationFrame(tick);
    return ()=>cancelAnimationFrame(raf);
  },[text]);
  return <><span aria-hidden="true" className="scramble-text">{display}</span><span className="sr-only">{text}</span></>;
}

export function ArchitectureInspector({ steps, projectTitle }: { steps: string[]; projectTitle: string }) {
  const [active,setActive]=useState(0),current=steps[active]??steps[0]??"Architecture";
  return <div className="architecture-inspector mt-7 rounded-2xl border border-white/[0.08] bg-black/30 p-4">
    <div className="flex flex-wrap items-center justify-between gap-2"><span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/40">Interactive system map</span><span className="font-mono text-[8px] text-white/25">SELECT A NODE / {projectTitle.toUpperCase()}</span></div>
    <svg viewBox="0 0 500 18" preserveAspectRatio="none" className="architecture-linkage mt-4 w-full" aria-hidden="true">
      <path d="M 8 9 H 492" fill="none" stroke="rgba(255,255,255,.16)" strokeWidth="1.5" strokeDasharray="5 5" />
      <path d={"M 8 9 H "+(steps.length>1?(492*active/(steps.length-1)):8)} fill="none" stroke="var(--accent)" strokeWidth="2" />
      {steps.map((step,index)=><circle key={step} cx={steps.length>1?8+(484*index/(steps.length-1)):250} cy="9" r={index===active?5:3} fill={index===active?"var(--accent)":"#777"} />)}
    </svg>
    <div className="mt-3 grid gap-2 sm:grid-cols-5">
      {steps.map((step,index)=><button key={step} type="button" onClick={()=>setActive(index)} aria-pressed={active===index} className={"architecture-node-button min-h-[62px] rounded-lg border px-2 py-3 text-left transition "+(active===index?"architecture-node-active":"border-white/[0.1] bg-white/[0.02] hover:border-white/25")}>
        <span className="block font-mono text-[8px] text-white/35">NODE / {String(index+1).padStart(2,"0")}</span><span className="mt-1 block text-[10px] uppercase tracking-[0.09em] text-white/80">{step}</span>
      </button>)}
    </div>
    <div className="mt-3 border-l-2 border-[var(--accent)] bg-white/[0.025] px-3 py-3" aria-live="polite"><p className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/35">Selected boundary / {String(active+1).padStart(2,"0")}</p><p className="mt-1 text-xs font-medium text-white/85">{current}</p><p className="mt-1 text-[10px] leading-5 text-white/45">Stage {active+1} of {steps.length} in the documented {projectTitle} flow. This selectable map explains the published architecture; it is not a live runtime trace.</p></div>
  </div>;
}

export function MirrorWaveform() {
  const ref=useRef<HTMLCanvasElement>(null);
  useEffect(()=>{
    const canvas=ref.current,ctx=canvas?.getContext("2d");if(!canvas||!ctx)return;
    const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width=0,phase=0,raf=0;const height=116;
    const resize=()=>{const rect=canvas.getBoundingClientRect(),ratio=Math.min(window.devicePixelRatio||1,2);width=Math.max(1,rect.width);canvas.width=Math.round(width*ratio);canvas.height=Math.round(height*ratio);ctx.setTransform(ratio,0,0,ratio,0,0);};
    const draw=()=>{
      ctx.clearRect(0,0,width,height);ctx.strokeStyle="rgba(255,255,255,.055)";ctx.lineWidth=1;
      for(let x=0;x<=width;x+=34){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,height);ctx.stroke();}
      for(let y=14;y<height;y+=25){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(width,y);ctx.stroke();}
      ctx.beginPath();
      for(let x=0;x<=width;x+=3){const n=x/Math.max(1,width),y=58+Math.sin(n*23+phase)*12+Math.sin(n*47-phase*.45)*4;if(x===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);}
      ctx.strokeStyle="rgba(103,232,249,.9)";ctx.lineWidth=2;ctx.stroke();
      for(let i=0;i<9;i++){const x=((i/9+phase*.035)%1)*width,y=58+Math.sin((x/Math.max(1,width))*23+phase)*12;ctx.beginPath();ctx.arc(x,y,2.2,0,Math.PI*2);ctx.fillStyle=i%4===0?"#fbbf24":"#a5f3fc";ctx.fill();}
      if(!reduced){phase+=.035;raf=requestAnimationFrame(draw);}
    };
    resize();draw();window.addEventListener("resize",resize);
    return ()=>{cancelAnimationFrame(raf);window.removeEventListener("resize",resize);};
  },[]);
  return <div className="mt-4 overflow-hidden rounded-xl border border-cyan-100/10 bg-black/35 p-3"><div className="mb-2 flex items-center justify-between"><span className="font-mono text-[8px] uppercase tracking-[0.14em] text-cyan-100/70">Queue / throughput waveform</span><span className="font-mono text-[8px] text-white/30">LOCAL VISUALIZATION</span></div><canvas ref={ref} className="block h-[116px] w-full" role="img" aria-label="Illustrative throughput waveform for the local MIRROR portfolio demo" /><p className="mt-2 font-mono text-[8px] leading-4 text-white/35">Illustrative waveform only · not measured MIRROR output.</p></div>;
}

export function GridPulseFailureBoundary() {
  const [chaos,setChaos]=useState(false);
  return <div className="mt-4 overflow-hidden rounded-xl border border-white/[0.09] bg-black/35">
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] px-3 py-3"><div><p className="font-mono text-[8px] uppercase tracking-[0.14em] text-emerald-100/70">Failure contract / interactive demo</p><p className="mt-1 text-[10px] text-white/45">Test the optional intelligence boundary.</p></div><button type="button" onClick={()=>setChaos(v=>!v)} aria-pressed={chaos} className={"min-h-10 rounded-full border px-3 py-2 font-mono text-[8px] uppercase tracking-[0.1em] transition "+(chaos?"border-amber-200/35 bg-amber-200/[0.07] text-amber-100":"border-white/15 text-white/60 hover:border-white/30 hover:text-white")}>{chaos?"Restore normal path":"Simulate AI timeout"}</button></div>
    <div className="grid gap-2 p-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
      <div className="border border-emerald-200/15 bg-emerald-200/[0.035] p-3"><p className="font-mono text-[8px] text-white/35">POSTGRESQL</p><p className="mt-1 text-[10px] text-emerald-100">EVIDENCE RETAINED</p></div><span className="hidden text-center font-mono text-white/25 sm:block">→</span>
      <div className={"border p-3 "+(chaos?"border-amber-200/30 bg-amber-200/[0.05]":"border-white/10 bg-white/[0.02]")}><p className="font-mono text-[8px] text-white/35">AZURE ML</p><p className={"mt-1 text-[10px] "+(chaos?"text-amber-100":"text-emerald-100")}>{chaos?"UNAVAILABLE":"GUARDED / OPTIONAL"}</p></div><span className="hidden text-center font-mono text-white/25 sm:block">→</span>
      <div className={"border p-3 "+(chaos?"border-amber-200/30 bg-amber-200/[0.05]":"border-white/10 bg-white/[0.02]")}><p className="font-mono text-[8px] text-white/35">FOUNDRY</p><p className={"mt-1 text-[10px] "+(chaos?"text-amber-100":"text-emerald-100")}>{chaos?"UNAVAILABLE":"GUARDED / OPTIONAL"}</p></div>
    </div>
    <div className={"mx-3 mb-3 border p-3 "+(chaos?"border-amber-200/25 bg-amber-200/[0.04]":"border-emerald-200/15 bg-emerald-200/[0.025]")} aria-live="polite"><p className={"text-[10px] leading-5 "+(chaos?"text-amber-100/90":"text-emerald-100/85")}>{chaos?"FAIL-CLOSED: optional AI routes are simulated as unavailable. Existing validated evidence remains unchanged and no inference is produced.":"NORMAL: optional AI routes remain guarded. This demo does not generate a prediction."}</p></div>
    <p className="border-t border-white/[0.06] px-3 py-2 font-mono text-[8px] leading-4 text-white/35">SIMULATION ONLY · no Azure request, database mutation, outage, or prediction is performed.</p>
  </div>;
}

const projectFilters=[{id:"all",label:"All work",count:"10"},{id:"core",label:"Core engines",count:"03"},{id:"ai",label:"AI / evidence",count:"03"},{id:"civic",label:"Civic",count:"02"},{id:"utility",label:"Utilities",count:"04"},{id:"creative",label:"Creative",count:"01"}];

export function ProjectFilterRail() {
  const [active,setActive]=useState("all");
  const containerRef=useRef<HTMLDivElement>(null);
  const buttonsRef=useRef<Record<string,HTMLButtonElement|null>>({});
  const [indicator,setIndicator]=useState({left:0,top:0,width:0,height:0});
  useEffect(()=>{
    const update=()=>{const parent=containerRef.current,button=buttonsRef.current[active];if(!parent||!button)return;const a=parent.getBoundingClientRect(),b=button.getBoundingClientRect();setIndicator({left:b.left-a.left,top:b.top-a.top,width:b.width,height:b.height});};
    update();window.addEventListener("resize",update);return ()=>window.removeEventListener("resize",update);
  },[active]);
  useEffect(()=>{
    const cards=Array.from(document.querySelectorAll<HTMLElement>("[data-project-card]"));
    cards.forEach((card)=>{const categories=(card.dataset.projectCategories??"").split(/\s+/);card.hidden=active!=="all"&&!categories.includes(active);});
    document.querySelectorAll<HTMLElement>("[data-project-tier-heading]").forEach((heading)=>{const tier=heading.dataset.projectTierHeading;const related=cards.filter((card)=>card.dataset.projectTier===tier);heading.hidden=active!=="all"&&!related.some((card)=>!card.hidden);});
  },[active]);
  return <div className="project-filter-wrap mb-9">
    <div className="mb-3 flex flex-wrap items-center justify-between gap-2"><span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">Project index / filter</span><span className="font-mono text-[8px] text-white/25">SELECT A CATEGORY</span></div>
    <div ref={containerRef} className="project-filter-rail relative isolate flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
      <span className="project-filter-indicator" aria-hidden="true" style={{left:indicator.left,top:indicator.top,width:indicator.width,height:indicator.height,opacity:indicator.width?1:0}} />
      {projectFilters.map((filter)=><button key={filter.id} ref={(element)=>{buttonsRef.current[filter.id]=element;}} type="button" onClick={()=>setActive(filter.id)} aria-pressed={active===filter.id} className={"project-filter-button relative z-10 inline-flex min-h-10 items-center gap-2 rounded-full border px-4 py-2 font-mono text-[9px] uppercase tracking-[0.1em] transition "+(active===filter.id?"border-transparent text-[#09090b]":"border-white/10 text-white/60 hover:border-white/25 hover:text-white")}><span>{filter.label}</span><span className={active===filter.id?"opacity-60":"text-white/35"}>[{filter.count}]</span></button>)}
    </div>
  </div>;
}

export function TimelineBeam({ children }: { children: ReactNode }) {
  const ref=useRef<HTMLDivElement>(null);const [progress,setProgress]=useState(0);
  useEffect(()=>{
    const element=ref.current;if(!element)return;let frame=0;
    const update=()=>{const rect=element.getBoundingClientRect(),start=window.innerHeight*.82,end=window.innerHeight*.28,span=rect.height+start-end;setProgress(Math.max(0,Math.min(100,span>0?(start-rect.top)/span*100:0)));};
    const schedule=()=>{if(frame)cancelAnimationFrame(frame);frame=requestAnimationFrame(update);};
    update();window.addEventListener("scroll",schedule,{passive:true});window.addEventListener("resize",schedule);
    return ()=>{cancelAnimationFrame(frame);window.removeEventListener("scroll",schedule);window.removeEventListener("resize",schedule);};
  },[]);
  return <div ref={ref} className="timeline-beam-wrap relative pl-7"><span className="timeline-beam-track" aria-hidden="true"><span style={{height:progress+"%"}} /></span>{children}</div>;
}

export function InteractiveSchemaInspector({ projectName }: { projectName: string }) {
  const [view,setView]=useState<"type"|"shape">("type");const [copied,setCopied]=useState(false);
  const typeSource=["type Project = {","  number: string;","  title: string;","  label: string;","  description: string;","  architecture: string[];","  tradeoff: string;","  tags: string[];","  href: string;","  source: string;","  featured?: boolean;","};"].join("\n");
  const jsonShape=JSON.stringify({number:"01",title:"MIRROR",label:"LIVE · DETERMINISTIC SIMULATION",description:"Project description",architecture:["Scenario","Structured model","Simulation","Metrics","What-if diff"],tradeoff:"Documented engineering trade-off",tags:["Next.js","React","TypeScript"],href:"https://example.invalid",source:"https://github.com/example/repository",featured:true},null,2);
  const source=view==="type"?typeSource:jsonShape;
  const copy=async()=>{try{await navigator.clipboard.writeText(source);setCopied(true);window.setTimeout(()=>setCopied(false),1600);}catch{setCopied(false);}};
  return <div className="mt-5 border border-white/[0.08] bg-black/25 p-4">
    <div className="flex flex-wrap items-center justify-between gap-3"><div><p className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/45">Schema / project index</p><p className="mt-1 text-[10px] text-white/35">Portfolio contract · {projectName}</p></div><div className="flex items-center gap-2">
      <button type="button" aria-pressed={view==="type"} onClick={()=>setView("type")} className={"rounded-full border px-3 py-2 font-mono text-[8px] uppercase "+(view==="type"?"border-emerald-100/35 bg-emerald-100/[0.08] text-emerald-100":"border-white/10 text-white/45")}>TypeScript</button>
      <button type="button" aria-pressed={view==="shape"} onClick={()=>setView("shape")} className={"rounded-full border px-3 py-2 font-mono text-[8px] uppercase "+(view==="shape"?"border-emerald-100/35 bg-emerald-100/[0.08] text-emerald-100":"border-white/10 text-white/45")}>JSON shape</button>
      <button type="button" onClick={copy} className="rounded-full border border-white/15 px-3 py-2 font-mono text-[8px] uppercase text-white/55 hover:text-white">{copied?"Copied":"Copy"}</button>
    </div></div>
    <pre className="mt-3 max-h-64 overflow-auto rounded-lg border border-white/[0.06] bg-black/45 p-3 text-[10px] leading-6 text-emerald-100/75"><code>{source}</code></pre>
    <p className="mt-3 text-[9px] leading-5 text-white/35">The TypeScript view is the portfolio’s project contract. The JSON view is illustrative only, not a linked product database record or live API response.</p>
  </div>;
}

const projectDescriptions:Record<string,string>={
  mirror:"Deterministic, local decision-simulation engine with explicit scenario inputs, queues, capacity, utilization, and what-if comparisons.",
  gridpulse:"Evidence-first infrastructure control plane. Observed telemetry, validation, optional intelligence, and explanations remain separate.",
  pace:"Multi-user academic workload planner that rebalances deadlines, effort, priority, and available capacity.",
  synapse:"Local-first workload planner that allocates tasks into a deterministic seven-day plan.",
  queuewise:"Community-powered queue tracker built around fresh reports and transparent estimates.",
  foodloop:"Food-rescue workflow for structured listings, availability, and requests.",
  beforeyougo:"Browser-based preparation checklists for visits, travel, and important tasks.",
  "one next step":"Decision experience focused on one useful next action.",
  "truth checker":"Evidence-first claim investigation experience with source context.",
  aero:"Challenge-driven creator project focused on learning, experimentation, and storytelling.",
};
const openRoutes:Record<string,string>={
  mirror:"https://mirror-simulation-engine.vercel.app",
  gridpulse:"https://gridpulse-three.vercel.app",
  pace:"https://pace-nu-seven.vercel.app",
  github:"https://github.com/kogleshofficial-hub",
  linkedin:"https://www.linkedin.com/in/koglesh-r-murugan-020450430/",
  youtube:"https://www.youtube.com/@ItsAero_Official",
};

export function CommandTerminal({open,onClose}:{open:boolean;onClose:()=>void}) {
  const [command,setCommand]=useState("");
  const [lines,setLines]=useState(["KOG / PORTFOLIO COMMAND ROUTER","LOCAL COMMANDS ONLY · NO OPERATING-SYSTEM COMMANDS ARE EXECUTED","Type help to inspect the command surface."]);
  const inputRef=useRef<HTMLInputElement>(null),history=useRef<string[]>([]),historyCursor=useRef(-1);
  useEffect(()=>{
    if(!open)return;inputRef.current?.focus();const previous=document.body.style.overflow;document.body.style.overflow="hidden";
    const close=(event:KeyboardEvent)=>{if(event.key==="Escape")onClose();};window.addEventListener("keydown",close);
    return ()=>{document.body.style.overflow=previous;window.removeEventListener("keydown",close);};
  },[open,onClose]);
  if(!open)return null;
  const execute=(raw:string)=>{
    const trimmed=raw.trim();if(!trimmed)return;const parts=trimmed.split(/\s+/),cmd=(parts[0]||"").toLowerCase(),arg=parts.slice(1).join(" ").toLowerCase();
    history.current.push(trimmed);historyCursor.current=-1;
    if(cmd==="clear"){setLines(["KOG / PORTFOLIO COMMAND ROUTER","Terminal output cleared."]);setCommand("");return;}
    let response="";
    if(cmd==="help")response="help · ls · projects · inspect <project> · stack · milestones · schema · whoami · status · theme <crimson|cyan|mint|reset> · open <mirror|gridpulse|pace|github|linkedin|youtube> · clear · exit";
    else if(cmd==="ls")response="about.md  projects/  milestones/  stack.json  schema.ts  build-log/  contact/  themes/";
    else if(cmd==="projects")response="MIRROR · GRIDPULSE · PACE · SYNAPSE · QueueWise · FoodLoop · BeforeYouGo · One Next Step · Truth Checker · AERO";
    else if(cmd==="inspect"){const key=arg.replace(/_/g," "),normalized=key.replace(/[^a-z0-9]/g,""),found=Object.entries(projectDescriptions).find(([name])=>name.replace(/[^a-z0-9]/g,"")===normalized);response=found?found[0].toUpperCase()+" / "+found[1]:"Project not found. Use projects, then inspect <project>.";}
    else if(cmd==="stack")response="Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Supabase · PostgreSQL · Appwrite · Azure services · Git/GitHub · Vercel. Per-project stacks vary; inspect each source repository for exact dependencies.";
    else if(cmd==="milestones")response="VIFA Gewinn India Open: Gold (28–29 Sep 2024) · 10th MBC Cup Korea: Bronze (2025) · GRIDPULSE: NextStep Hacks 2026 submission · FoodLoop: phone-built MVP. Historical records, not live rankings.";
    else if(cmd==="schema")response="Project = { number, title, label, description, architecture[], tradeoff, tags[], href, source, featured? }. This is the portfolio index contract, not a linked product database schema.";
    else if(cmd==="whoami")response="Koglesh R. Murugan · independent builder · Malaysia · focus: typed web products, deterministic systems, evidence boundaries, and practical software.";
    else if(cmd==="status")response="COMMAND ROUTER: LOCAL · HUD: BROWSER MEASUREMENTS · PROJECT DEMOS: SIMULATED WHERE LABELLED · EXTERNAL PRODUCT APIs: NOT CONNECTED HERE";
    else if(cmd==="theme"){
      const themes:Record<string,string>={crimson:"#fb7185",cyan:"#67e8f9",mint:"#6ee7b7"};
      if(arg==="reset"||!arg){document.documentElement.style.removeProperty("--accent");response="Theme reset to the default crimson accent.";}
      else if(themes[arg]){document.documentElement.style.setProperty("--accent",themes[arg]);response="Accent updated: "+arg+". This is a local visual preference.";}
      else response="Unknown theme. Use theme crimson, theme cyan, theme mint, or theme reset.";
    }else if(cmd==="open"){const route=openRoutes[arg.replace(/\s+/g,"")];if(route){window.open(route,"_blank","noopener,noreferrer");response="Opened "+arg+" in a new tab.";}else response="Unknown destination. Try open mirror, gridpulse, pace, github, linkedin, or youtube.";}
    else if(cmd==="exit"){setLines(previous=>[...previous,"$ "+trimmed,"Closing local command router."]);setCommand("");onClose();return;}
    else response="Command not found: "+cmd+". Type help to list available commands.";
    setLines(previous=>[...previous,"$ "+trimmed,response]);setCommand("");
  };
  const handleHistory=(event:KeyboardEvent<HTMLInputElement>)=>{
    if(event.key==="ArrowUp"){event.preventDefault();const next=historyCursor.current===-1?history.current.length-1:Math.max(0,historyCursor.current-1);historyCursor.current=next;setCommand(history.current[next]??"");}
    else if(event.key==="ArrowDown"){event.preventDefault();if(historyCursor.current<0)return;const next=historyCursor.current+1;if(next>=history.current.length){historyCursor.current=-1;setCommand("");}else{historyCursor.current=next;setCommand(history.current[next]??"");}}
  };
  return <div className="fixed inset-0 z-[90] flex items-end justify-center bg-black/75 p-3 backdrop-blur-md sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-label="Interactive portfolio command terminal" onMouseDown={event=>{if(event.target===event.currentTarget)onClose();}}>
    <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-emerald-100/20 bg-[#050807] shadow-2xl shadow-black/60">
      <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3"><div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-red-300/70"/><span className="h-2 w-2 rounded-full bg-amber-200/70"/><span className="h-2 w-2 rounded-full bg-emerald-200/70"/><span className="ml-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/45">KOG / LOCAL PORTFOLIO SHELL</span></div><button type="button" onClick={onClose} className="min-h-10 font-mono text-[10px] text-white/55 hover:text-white" aria-label="Close terminal">ESC / CLOSE</button></div>
      <div className="max-h-[55vh] min-h-48 space-y-2 overflow-y-auto px-4 py-4 font-mono text-[10px] leading-5 sm:text-xs" aria-live="polite">{lines.map((line,index)=><p key={index} className={line.startsWith("$")?"text-emerald-100/85":"break-words text-white/55"}>{line}</p>)}</div>
      <form onSubmit={event=>{event.preventDefault();execute(command);}} className="flex items-center gap-3 border-t border-white/[0.08] px-4 py-3">
        <label htmlFor="terminal-command" className="font-mono text-xs text-emerald-200">&gt;</label>
        <input ref={inputRef} id="terminal-command" list="portfolio-command-suggestions" value={command} onChange={event=>setCommand(event.target.value)} onKeyDown={handleHistory} autoComplete="off" spellCheck={false} className="min-h-10 min-w-0 flex-1 bg-transparent font-mono text-xs text-white outline-none placeholder:text-white/25" placeholder="type a command…"/>
        <datalist id="portfolio-command-suggestions"><option value="help"/><option value="ls"/><option value="projects"/><option value="inspect mirror"/><option value="inspect gridpulse"/><option value="stack"/><option value="milestones"/><option value="schema"/><option value="whoami"/><option value="status"/><option value="theme crimson"/><option value="clear"/><option value="exit"/></datalist>
        <button type="submit" className="min-h-10 font-mono text-[9px] text-emerald-100/75 hover:text-emerald-100">RUN ↵</button>
      </form>
      <div className="flex flex-wrap justify-between gap-2 border-t border-white/[0.06] px-4 py-2 font-mono text-[8px] text-white/30"><span>CTRL + BACKTICK / CMD + K TOGGLE · UP / DOWN HISTORY</span><span>LOCAL COMMANDS ONLY</span></div>
    </div>
  </div>;
}
