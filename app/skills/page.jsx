"use client";
import { useState } from "react";
import { Reveal, Ticker } from "../../components/shared";

const SPHERES = [
  { n: "Python",       e: "🐍", c: "#3776ab" }, { n: "React",        e: "⚛",  c: "#61dafb" },
  { n: "LangChain",    e: "⛓",  c: "#00d4aa" }, { n: "LangGraph",    e: "🕸",  c: "#7c3aed" },
  { n: "FastAPI",      e: "⚡", c: "#05998b" }, { n: "MongoDB",      e: "🍃", c: "#47a248" },
  { n: "PostgreSQL",   e: "🐘", c: "#4169e1" }, { n: "TensorFlow",   e: "🧠", c: "#ff6f00" },
  { n: "XGBoost",      e: "📈", c: "#e07b39" }, { n: "FAISS",        e: "🔍", c: "#4287f5" },
  { n: "ChromaDB",     e: "💾", c: "#ff4f8b" }, { n: "GitHub",       e: "🐙", c: "#6e40c9" },
  { n: "AWS",          e: "☁",  c: "#ff9900" }, { n: "NestJS",       e: "🔷", c: "#e0234e" },
  { n: "Hugging Face", e: "🤗", c: "#ffd21e" }, { n: "Scikit-learn", e: "📊", c: "#f7931e" },
  { n: "Node.js",      e: "🟢", c: "#339933" }, { n: "TypeScript",   e: "🔵", c: "#3178c6" },
];

const CATS = [
  { cat: "Programming Languages", items: ["Python","JavaScript","Java","C","C++","TypeScript"], color: "var(--cyan)",    tc: "tag-c" },
  { cat: "AI & LLM Engineering",  items: ["LangChain","LangGraph","LangSmith","MCP","FastMCP","RAG","Agentic AI","Prompt Engineering","LLMOPS","Memory Persistence","Observability"], color: "var(--violet)", tc: "tag-v" },
  { cat: "Vector Databases",      items: ["ChromaDB","FAISS","pgvector","Embedding Models"], color: "var(--cyan)",    tc: "tag-c" },
  { cat: "ML / Deep Learning",    items: ["Scikit-learn","TensorFlow","Keras","XGBoost","NumPy","Pandas","Matplotlib","Hugging Face Transformers","SVM","Logistic Regression"], color: "var(--gold)",   tc: "tag-g" },
  { cat: "Frontend",              items: ["React.js","Redux","Tailwind CSS","Angular.js","HTML","CSS","TypeScript"], color: "var(--rose)",   tc: "tag-r" },
  { cat: "Backend & Frameworks",  items: ["Node.js","Express.js","NestJS","FastAPI","Flask","JWT","OAuth","REST APIs"], color: "var(--violet)", tc: "tag-v" },
  { cat: "Databases & Cloud",     items: ["MongoDB","PostgreSQL","MySQL","Firebase","AWS"], color: "var(--gold)",   tc: "tag-g" },
  { cat: "Dev Tools",             items: ["Git","GitHub","Postman","VS Code","Jupyter","Google Colab","Streamlit"], color: "var(--cyan)",    tc: "tag-c" },
  { cat: "DSA Topics",            items: ["Arrays","Strings","Linked Lists","Trees","Graphs","HashMaps","Backtracking","DP (Basic)"], color: "var(--rose)",   tc: "tag-r" },
  { cat: "Spoken Languages",      items: ["English","Hindi","Marathi","Sanskrit (Read & Write)"], color: "var(--gold)",   tc: "tag-g" },
];

function Sphere({ s, i }) {
  const [h, setH] = useState(false);
  return (
    <div className="sphere" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ animation: `float ${4 + i * 0.28}s ease-in-out infinite ${i * 0.18}s` }}>
      <div className="sphere-orb" style={{
        width: h ? 68 : 52, height: h ? 68 : 52,
        background: `radial-gradient(circle,${s.c}25,rgba(0,0,0,.35))`,
        border: `1px solid ${h ? s.c + "80" : "rgba(255,255,255,.1)"}`,
        boxShadow: h ? `0 0 28px ${s.c}55,inset 0 0 16px rgba(255,255,255,.06)` : undefined,
        fontSize: h ? 28 : 20,
      }}>
        {s.e}
      </div>
      <span className="mono" style={{ fontSize: 8, color: h ? s.c : "var(--muted)", transition: "color .3s", textShadow: h ? `0 0 10px ${s.c}` : undefined, letterSpacing: ".08em" }}>{s.n}</span>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <div className="page">
      {/* ── HEADER ── */}
      <section style={{ padding: "80px clamp(24px,6vw,120px) 60px", position: "relative", zIndex: 1 }}>
        <Reveal>
          <span className="tag tag-g" style={{ marginBottom: 20, display: "inline-block" }}>TECHNICAL ARSENAL</span>
          <h1 className="display grad-metal" style={{ fontSize: "clamp(3rem,7vw,8rem)", lineHeight: .95, marginBottom: 24 }}>
            DIGITAL<br /><span className="grad-cyan">FLUID.</span>
          </h1>
          <p style={{ fontWeight: 300, fontSize: "clamp(13px,1.6vw,17px)", color: "var(--muted)", maxWidth: 500, lineHeight: 1.85 }}>
            A curated stack of technologies — from LLM orchestration and vector databases to full-stack production systems.
          </p>
        </Reveal>
      </section>

      <Ticker />

      {/* ── SPHERES ── */}
      <section style={{ padding: "60px clamp(24px,6vw,120px)", position: "relative", zIndex: 1 }}>
        <Reveal>
          <div className="mono" style={{ fontSize: 9, color: "var(--cyan)", letterSpacing: ".14em", marginBottom: 20 }}>TECHNOLOGY NODES</div>
          <div className="glass glass-hi" style={{ padding: "44px 40px" }}>
            <div className="skill-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(84px,1fr))", gap: "30px 20px" }}>
              {SPHERES.map((s, i) => <Sphere key={s.n} s={s} i={i} />)}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── CATEGORY BENTO ── */}
      <section style={{ padding: "0 clamp(24px,6vw,120px) 120px", position: "relative", zIndex: 1 }}>
        <Reveal delay={80}>
          <div className="mono" style={{ fontSize: 9, color: "var(--violet)", letterSpacing: ".14em", marginBottom: 20 }}>SKILL CATEGORIES</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(270px,1fr))", gap: 14 }}>
            {CATS.map(({ cat, items, color, tc }, i) => (
              <Reveal key={cat} delay={i * 60}>
                <div className="glass" style={{ padding: "20px 22px", border: "1px solid var(--border)", transition: "all .3s", height: "100%" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = color + "44"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; }}>
                  <div className="mono" style={{ fontSize: 9, color, letterSpacing: ".1em", marginBottom: 12 }}>{cat.toUpperCase()}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {items.map(it => <span key={it} className={`tag ${tc}`} style={{ fontSize: 8 }}>{it}</span>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
