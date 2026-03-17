"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ── MESH BACKGROUND ── */
export function MeshBg() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-25%", left: "-10%", width: "65vw", height: "65vw", background: "radial-gradient(ellipse,rgba(0,245,212,.055)0%,transparent 65%)", animation: "float 9s ease-in-out infinite" }} />
      <div style={{ position: "absolute", bottom: "5%", right: "-15%", width: "55vw", height: "55vw", background: "radial-gradient(ellipse,rgba(168,85,247,.065)0%,transparent 65%)", animation: "float 12s ease-in-out infinite 2s reverse" }} />
      <div style={{ position: "absolute", top: "45%", left: "30%", width: "35vw", height: "35vw", background: "radial-gradient(ellipse,rgba(245,158,11,.04)0%,transparent 65%)", animation: "float 16s ease-in-out infinite 5s" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.012)1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.012)1px,transparent 1px)", backgroundSize: "72px 72px" }} />
      <div style={{ position: "absolute", inset: 0, opacity: .024, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "256px" }} />
    </div>
  );
}

/* ── PARTICLES ── */
export function Particles() {
  const data = useRef(Array.from({ length: 26 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    sz: Math.random() * 2.4 + 1,
    dur: 5 + Math.random() * 9,
    del: Math.random() * 7,
    ci: i % 3,
  }))).current;
  const cols = ["rgba(0,245,212,0.5)", "rgba(168,85,247,0.5)", "rgba(245,158,11,0.5)"];
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 1, pointerEvents: "none" }}>
      {data.map((p, i) => (
        <div key={i} style={{ position: "absolute", left: `${p.x}%`, top: `${p.y}%`, width: p.sz, height: p.sz, borderRadius: "50%", background: cols[p.ci], boxShadow: `0 0 ${p.sz * 5}px ${cols[p.ci]}`, animation: `float ${p.dur}s ease-in-out infinite ${p.del}s` }} />
      ))}
    </div>
  );
}

/* ── CURSOR ── */
export function Cursor() {
  const ch = useRef(null), dot = useRef(null), ring = useRef(null);
  useEffect(() => {
    let raf, mx = 0, my = 0, rx = 0, ry = 0;
    const mv = e => {
      mx = e.clientX; my = e.clientY;
      if (dot.current) { dot.current.style.left = mx + "px"; dot.current.style.top = my + "px"; }
      if (ch.current)  { ch.current.style.left  = mx + "px"; ch.current.style.top  = my + "px"; }
    };
    document.addEventListener("mousemove", mv);
    const tick = () => {
      rx += (mx - rx) * .1; ry += (my - ry) * .1;
      if (ring.current) { ring.current.style.left = rx + "px"; ring.current.style.top = ry + "px"; }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { document.removeEventListener("mousemove", mv); cancelAnimationFrame(raf); };
  }, []);
  return (
    <>
      <div id="cur-ch"   ref={ch}   />
      <div id="cur-dot"  ref={dot}  />
      <div id="cur-ring" ref={ring} />
    </>
  );
}

/* ── TOP NAVBAR ── */
const NAV_ITEMS = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/about" },
  { label: "Projects",   href: "/projects" },
  { label: "Skills",     href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Contact",    href: "/contact" },
];

export function TopNav() {
  const pathname = usePathname();
  return (
    <nav className="top-nav">
      <Link href="/" className="nav-logo">RA.</Link>
      <div className="nav-links">
        {NAV_ITEMS.map(n => (
          <Link key={n.href} href={n.href} className={`nav-link${pathname === n.href ? " active" : ""}`}>
            {n.label}
          </Link>
        ))}
      </div>
      <a href="/contact" className="btn btn-primary btn-sm" style={{ textDecoration: "none" }}>Hire Me →</a>
    </nav>
  );
}

/* ── SECTION REVEAL ── */
export function Reveal({ children, style, delay = 0, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add("in"); }, { threshold: 0.06 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </div>
  );
}

/* ── TICKER ── */
export function Ticker() {
  const items = ["LangGraph","RAG Systems","MERN Stack","Agentic AI","FastAPI","LangChain","PostgreSQL","ChromaDB","FAISS","TensorFlow","React.js","Node.js","NestJS","MCP","LangSmith","XGBoost","Scikit-learn","Flask"];
  return (
    <div className="ticker-wrap">
      <div className="ticker-inner">
        {[...items, ...items].map((t, i) => <span key={i} className="ticker-item">◆ {t}</span>)}
      </div>
    </div>
  );
}

/* ── NEURAL LINES ── */
export function NeuralLines() {
  return (
    <svg className="neural-svg">
      <defs>
        <linearGradient id="nl" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="rgba(0,245,212,0)" />
          <stop offset="50%"  stopColor="rgba(0,245,212,0.45)" />
          <stop offset="100%" stopColor="rgba(168,85,247,0)" />
        </linearGradient>
      </defs>
      {["M 5% 20% Q 50% 50% 95% 80%","M 80% 5% Q 20% 45% 65% 95%","M 2% 65% Q 45% 35% 98% 45%"].map((d, i) => (
        <path key={i} d={d} fill="none" stroke="url(#nl)" strokeWidth="1" strokeDasharray="900"
          style={{ animation: `neural ${5 + i * 2}s ease-in-out infinite ${i * 1.8}s` }} />
      ))}
    </svg>
  );
}

/* ── PROJECT CARD ── */
export function ProjCard({ p, big = false }) {
  const [hov, setHov] = useState(false);
  const glowMap = { "var(--cyan)": "rgba(0,245,212,", "var(--violet)": "rgba(168,85,247,", "var(--gold)": "rgba(245,158,11,", "var(--rose)": "rgba(244,63,94,", "var(--emerald)": "rgba(16,185,129," };
  const rgba = glowMap[p.color] || "rgba(0,245,212,";

  return (
    <div
      className="glass proj-card"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "26px 28px",
        border: `1px solid ${hov ? p.color.replace("var(--", rgba).replace(")", ",0.38)") : "var(--border)"}`,
        position: "relative", overflow: "hidden",
        transition: "all .35s",
        transform: hov ? "translateY(-5px) scale(1.01)" : "none",
        boxShadow: hov ? `0 18px 56px ${rgba}.12)` : "none",
        gridColumn: big ? "span 2" : "span 1",
      }}
    >
      {hov && <div style={{ position: "absolute", left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${p.color},transparent)`, opacity: .55, animation: "scan 2s linear infinite" }} />}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
        <div>
          <div className="mono" style={{ fontSize: 9, color: "var(--muted)", letterSpacing: ".1em", marginBottom: 4 }}>/{p.id}</div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: big ? 24 : 20, color: p.color, letterSpacing: "-.01em", textShadow: hov ? `0 0 18px ${rgba}.3)` : undefined }}>{p.title}</h3>
          <div className="mono" style={{ fontSize: 9, color: "var(--muted)", marginTop: 2 }}>{p.sub}</div>
        </div>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${rgba}.1)`, border: `1px solid ${rgba}.22)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, flexShrink: 0 }}>⬡</div>
      </div>

      <p style={{ fontSize: 13, lineHeight: 1.78, color: "rgba(232,232,240,.6)", marginBottom: 14, fontWeight: 300 }}>{p.desc}</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 14 }}>
        {p.feats.map(f => <span key={f} className={`tag ${p.tc}`} style={{ fontSize: 8 }}>{f}</span>)}
      </div>

      <div style={{ paddingTop: 12, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          {p.stack.map((s, i) => (
            <span key={s} className="mono" style={{ fontSize: 9, color: "var(--muted)" }}>
              {i > 0 && <span style={{ color: "var(--border-hi)", marginRight: 5 }}>·</span>}{s}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {p.links?.github && (
            <a href={p.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm" style={{ padding: "5px 12px" }}>
              ⬡ GitHub
            </a>
          )}
          {p.links?.demo && (
            <a href={p.links.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm" style={{ padding: "5px 12px" }}>
              ↗ Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
