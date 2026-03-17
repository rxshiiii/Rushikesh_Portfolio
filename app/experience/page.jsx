"use client";
import { Reveal, Ticker, NeuralLines } from "../../components/shared";

const EXP = [
  {
    role: "Full Stack Developer Intern",
    org: "Incrust Software",
    period: "2024",
    type: "INDUSTRY",
    color: "var(--cyan)", tc: "tag-c",
    desc: "Scaled a production-grade carbon emission reporting platform using Angular, NestJS, PostgreSQL in microservice architecture. Optimized backend emission calculations and implemented strict validation pipelines for enterprise auditability.",
    stack: ["Angular", "NestJS", "PostgreSQL", "Microservices", "TypeScript"],
    achievements: [
      "Deployed production microservice architecture handling enterprise carbon data",
      "Implemented strict validation pipelines ensuring audit compliance",
      "Optimized backend emission calculation algorithms",
    ],
  },
  {
    role: "Web Dev Lead",
    org: "GDGC DYPIU",
    period: "2024 – Present",
    type: "LEADERSHIP",
    color: "var(--violet)", tc: "tag-v",
    desc: "Leading technical workshops and mentoring students on scalable web systems and backend engineering. Orchestrating community learning sessions bridging theory with real-world engineering.",
    stack: ["Leadership", "React", "Node.js", "Mentoring", "Workshops"],
    achievements: [
      "Led technical workshops on scalable web architecture",
      "Mentored students bridging academic theory with industry practice",
      "Organized hands-on coding sessions and hackathon guidance",
    ],
  },
];

const EDUCATION = {
  degree: "B.Tech in Computer Science (AI & ML)",
  school: "D Y Patil International University",
  location: "Pune, Maharashtra",
  period: "2022 – 2026",
  coursework: [
    "Data Structures & Algorithms", "Operating Systems", "DBMS",
    "Object-Oriented Programming", "Computer Networks", "Machine Learning",
    "Computer Vision", "Generative AI", "Quantum Computing", "NLP",
  ],
};

export default function ExperiencePage() {
  return (
    <div className="page">
      <NeuralLines />

      {/* ── HEADER ── */}
      <section style={{ padding: "80px clamp(24px,6vw,120px) 60px", position: "relative", zIndex: 1 }}>
        <Reveal>
          <span className="tag tag-v" style={{ marginBottom: 20, display: "inline-block" }}>EXPERIENCE & EDUCATION</span>
          <h1 className="display grad-metal" style={{ fontSize: "clamp(3rem,7vw,8rem)", lineHeight: .95, marginBottom: 24 }}>
            ROLES &<br /><span className="grad-violet">ORIGINS.</span>
          </h1>
          <p style={{ fontWeight: 300, fontSize: "clamp(13px,1.6vw,17px)", color: "var(--muted)", maxWidth: 500, lineHeight: 1.85 }}>
            Every role, every system deployed, every student mentored — each one a node in the larger architecture.
          </p>
        </Reveal>
      </section>

      <Ticker />

      {/* ── EXPERIENCE CARDS ── */}
      <section style={{ padding: "60px clamp(24px,6vw,120px)", position: "relative", zIndex: 1 }}>
        <Reveal>
          <div className="mono" style={{ fontSize: 9, color: "var(--cyan)", letterSpacing: ".14em", marginBottom: 24 }}>PROFESSIONAL ROLES</div>
        </Reveal>
        <div className="exp-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 18 }}>
          {EXP.map((e, i) => (
            <Reveal key={i} delay={i * 150}>
              <div className="glass glass-hi" style={{ padding: "30px 32px", height: "100%", transition: "all .3s" }}
                onMouseEnter={el => { el.currentTarget.style.borderColor = e.color + "44"; el.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={el => { el.currentTarget.style.borderColor = "var(--border-hi)"; el.currentTarget.style.transform = "none"; }}>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
                  <div>
                    <div className="mono" style={{ fontSize: 9, color: e.color, letterSpacing: ".12em", marginBottom: 5 }}>{e.type} · {e.period}</div>
                    <h3 className="display" style={{ fontSize: 24, marginBottom: 3 }}>{e.role}</h3>
                    <div className="mono" style={{ fontSize: 10, color: "var(--muted)" }}>{e.org}</div>
                  </div>
                  <span className={`tag ${e.tc}`} style={{ fontSize: 8, flexShrink: 0 }}>DEPLOYED</span>
                </div>

                <p style={{ fontSize: 13, lineHeight: 1.82, color: "rgba(232,232,240,.65)", marginBottom: 18, fontWeight: 300 }}>{e.desc}</p>

                {/* Achievements */}
                <div style={{ padding: "14px 16px", background: `${e.color.replace("var(--","rgba(").replace(")",",0.05)")}`, border: `1px solid ${e.color.replace("var(--","rgba(").replace(")",",0.15)")}`, borderRadius: 10, marginBottom: 16 }}>
                  <div className="mono" style={{ fontSize: 8, color: e.color, letterSpacing: ".1em", marginBottom: 8 }}>KEY ACHIEVEMENTS</div>
                  {e.achievements.map((a, j) => (
                    <div key={j} style={{ display: "flex", gap: 8, marginBottom: j < e.achievements.length - 1 ? 6 : 0 }}>
                      <span style={{ color: e.color, fontSize: 10, flexShrink: 0, marginTop: 1 }}>◆</span>
                      <span style={{ fontSize: 12, lineHeight: 1.6, color: "rgba(232,232,240,.7)", fontWeight: 300 }}>{a}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {e.stack.map(s => <span key={s} className={`tag ${e.tc}`} style={{ fontSize: 8 }}>{s}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section style={{ padding: "0 clamp(24px,6vw,120px)", position: "relative", zIndex: 1 }}>
        <Reveal>
          <div className="mono" style={{ fontSize: 9, color: "var(--gold)", letterSpacing: ".14em", marginBottom: 24 }}>EDUCATION</div>
          <div className="glass" style={{ padding: "32px 36px", background: "linear-gradient(135deg,rgba(245,158,11,.04),rgba(168,85,247,.04))", border: "1px solid rgba(245,158,11,.2)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 24, alignItems: "flex-start" }}>
              <div style={{ width: 72, height: 72, borderRadius: 16, background: "linear-gradient(135deg,rgba(245,158,11,.18),rgba(168,85,247,.18))", border: "1px solid rgba(245,158,11,.28)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 34, flexShrink: 0 }}>🎓</div>
              <div>
                <div className="mono" style={{ fontSize: 9, color: "var(--gold)", letterSpacing: ".12em", marginBottom: 6 }}>UNDERGRADUATE · {EDUCATION.period}</div>
                <h3 className="display" style={{ fontSize: "clamp(18px,2.5vw,26px)", marginBottom: 4 }}>{EDUCATION.degree.toUpperCase()}</h3>
                <div className="mono" style={{ fontSize: 10, color: "var(--muted)", marginBottom: 18 }}>{EDUCATION.school} · {EDUCATION.location}</div>
                <div className="mono" style={{ fontSize: 9, color: "var(--gold)", letterSpacing: ".1em", marginBottom: 10 }}>RELEVANT COURSEWORK</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {EDUCATION.coursework.map(c => <span key={c} className="tag tag-g" style={{ fontSize: 8 }}>{c}</span>)}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── SOFT SKILLS ── */}
      <section style={{ padding: "40px clamp(24px,6vw,120px) 120px", position: "relative", zIndex: 1 }}>
        <Reveal delay={100}>
          <div className="mono" style={{ fontSize: 9, color: "var(--rose)", letterSpacing: ".14em", marginBottom: 20 }}>SOFT SKILLS</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {["Problem Solving", "Quick Learning", "Presentation Skills", "Adaptability", "Technical Mentoring", "Workshop Leadership"].map(s => (
              <span key={s} className="tag tag-r" style={{ fontSize: 11, padding: "6px 14px" }}>{s}</span>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
