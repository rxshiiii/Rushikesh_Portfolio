"use client";
import Link from "next/link";
import { Reveal, Ticker, NeuralLines } from "../../components/shared";

export default function AboutPage() {
  return (
    <div className="page">
      <NeuralLines />

      {/* ── HEADER ── */}
      <section style={{ padding: "80px clamp(24px,6vw,120px) 60px", position: "relative", zIndex: 1 }}>
        <Reveal>
          <span className="tag tag-v" style={{ marginBottom: 20, display: "inline-block" }}>ABOUT</span>
          <h1 className="display grad-metal" style={{ fontSize: "clamp(3rem,7vw,8rem)", lineHeight: .95, marginBottom: 24 }}>
            THE ARCHITECT<br />BEHIND<br /><span className="grad-cyan">THE SYSTEMS.</span>
          </h1>
          <p style={{ fontWeight: 300, fontSize: "clamp(14px,1.8vw,18px)", color: "var(--muted)", maxWidth: 560, lineHeight: 1.85 }}>
            B.Tech AI Engineer at D Y Patil International University, Pune. Building the intersection of full-stack engineering and self-reasoning AI infrastructure.
          </p>
        </Reveal>
      </section>

      <Ticker />

      {/* ── AVATAR + VISION ── */}
      <section style={{ padding: "60px clamp(24px,6vw,120px)", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 18, maxWidth: 1100 }}>

          {/* Avatar */}
          <Reveal delay={0}>
            <div className="glass glass-hi" style={{ padding: "40px", textAlign: "center", minHeight: 360, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20 }}>
              <div style={{ width: 130, height: 130, borderRadius: "50%", background: "linear-gradient(135deg,rgba(0,245,212,.15),rgba(168,85,247,.15))", border: "1px solid rgba(0,245,212,.3)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 40px rgba(0,245,212,.1)", animation: "float 5s ease-in-out infinite" }}>
                <span className="display grad-cyan" style={{ fontSize: 60 }}>R</span>
              </div>
              <div>
                <div className="display" style={{ fontSize: 26, marginBottom: 4 }}>RUSHIKESH ANKAIKAR</div>
                <div className="mono" style={{ fontSize: 9, color: "var(--cyan)", letterSpacing: ".12em", marginBottom: 14 }}>AI ENGINEER · FULL-STACK</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
                  {["Python", "React", "LangGraph", "FastAPI", "LangChain"].map(t => (
                    <span key={t} className="tag tag-c" style={{ fontSize: 8 }}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", paddingTop: 16, borderTop: "1px solid var(--border)", width: "100%" }}>
                <a href="https://github.com/rxshiiii" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">⬡ GitHub</a>
                <a href="https://www.linkedin.com/in/rushikesh-ankaikar-6965902a4/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">◈ LinkedIn</a>
              </div>
            </div>
          </Reveal>

          {/* Vision */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { n: "01", t: "I engineer systems that synthesize autonomous reasoning with scalable full-stack architecture." },
              { n: "02", t: "My work orchestrates MERN-based production platforms with self-improving agentic intelligence." },
              { n: "03", t: "I design infrastructure where AI doesn't assist — it decides." },
            ].map(({ n, t }, i) => (
              <Reveal key={n} delay={i * 120}>
                <div className="glass" style={{ padding: "22px 26px", border: "1px solid var(--border)", transition: "all .3s" }}>
                  <div className="mono" style={{ fontSize: 9, color: "var(--cyan)", letterSpacing: ".12em", marginBottom: 8 }}>/{n}</div>
                  <p style={{ fontWeight: 300, lineHeight: 1.85, color: "rgba(232,232,240,.8)", fontSize: 15 }}>{t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: "0 clamp(24px,6vw,120px) 60px", position: "relative", zIndex: 1 }}>
        <Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 12 }}>
            {[["10+","Projects Built"],["4+","AI Agents"],["2","Roles Held"],["3+","AI Pipelines"],["∞","Systems Ahead"]].map(([v, l]) => (
              <div key={l} className="glass" style={{ padding: "20px", textAlign: "center", border: "1px solid var(--border)" }}>
                <div className="display grad-cyan" style={{ fontSize: 38, lineHeight: 1 }}>{v}</div>
                <div className="mono" style={{ fontSize: 9, color: "var(--muted)", letterSpacing: ".1em", marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── EDUCATION ── */}
      <section style={{ padding: "0 clamp(24px,6vw,120px) 60px", position: "relative", zIndex: 1 }}>
        <Reveal>
          <h2 className="display grad-metal" style={{ fontSize: "clamp(2rem,4vw,4rem)", marginBottom: 28 }}>EDUCATION.</h2>
          <div className="glass" style={{ padding: "28px 32px", background: "linear-gradient(135deg,rgba(245,158,11,.04),rgba(168,85,247,.04))", border: "1px solid rgba(245,158,11,.18)", display: "flex", alignItems: "center", gap: 24 }}>
            <div style={{ width: 64, height: 64, borderRadius: 14, background: "linear-gradient(135deg,rgba(245,158,11,.18),rgba(168,85,247,.18))", border: "1px solid rgba(245,158,11,.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, flexShrink: 0 }}>🎓</div>
            <div>
              <div className="mono" style={{ fontSize: 9, color: "var(--gold)", letterSpacing: ".12em", marginBottom: 5 }}>2022 – 2026</div>
              <h3 className="display" style={{ fontSize: 24, marginBottom: 4 }}>B.TECH IN COMPUTER SCIENCE (AI & ML)</h3>
              <div className="mono" style={{ fontSize: 10, color: "var(--muted)", marginBottom: 12 }}>D Y Patil International University · Pune, Maharashtra</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {["Machine Learning","Generative AI","Computer Vision","Deep Learning","Quantum Computing","NLP"].map(c => (
                  <span key={c} className="tag tag-g" style={{ fontSize: 8 }}>{c}</span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── INTERESTS ── */}
      <section style={{ padding: "0 clamp(24px,6vw,120px) 100px", position: "relative", zIndex: 1 }}>
        <Reveal>
          <h2 className="display grad-metal" style={{ fontSize: "clamp(2rem,4vw,4rem)", marginBottom: 28 }}>AREAS OF INTEREST.</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {["Artificial Intelligence","Generative AI","LLM Systems","Agentic AI","Machine Learning","Deep Learning","NLP","Computer Vision","Quantum Computing","Full-Stack Engineering"].map(a => (
              <span key={a} className="tag tag-c" style={{ fontSize: 11, padding: "6px 14px" }}>{a}</span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "0 clamp(24px,6vw,120px) 120px", zIndex: 1, position: "relative" }}>
        <Reveal>
          <div className="glass" style={{ padding: "40px", textAlign: "center", border: "1px solid rgba(0,245,212,.15)", background: "linear-gradient(135deg,rgba(0,245,212,.04),rgba(168,85,247,.04))" }}>
            <div className="display grad-cyan" style={{ fontSize: "clamp(1.8rem,3vw,3rem)", marginBottom: 12 }}>LET'S BUILD TOGETHER.</div>
            <p style={{ fontWeight: 300, color: "var(--muted)", marginBottom: 28, fontSize: 15 }}>Open to full-time roles, internships, and agentic AI collaborations.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-primary">Get In Touch →</Link>
              <Link href="/projects" className="btn btn-ghost">View Projects</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
