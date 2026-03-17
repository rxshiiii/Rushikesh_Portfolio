"use client";
import Link from "next/link";
import { NeuralLines, Ticker, Reveal } from "../../components/shared";
import SplineComponent from '../components/SplineComponent';
import SplineErrorBoundary from '../components/SplineErrorBoundary';

export default function HomePage() {
  return (
    <div className="page" style={{ overflow: "hidden" }}>
      {/* ── HERO ────────────────────────────── */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: 0, position: "relative" }}>
        <NeuralLines />

        {/* Orbital rings */}
        <div style={{ position: "absolute", width: 700, height: 700, border: "1px solid rgba(0,245,212,.045)", borderRadius: "50%", top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "rotateCW 28s linear infinite", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 480, height: 480, border: "1px solid rgba(168,85,247,.045)", borderRadius: "50%", top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "rotateCCW 20s linear infinite", pointerEvents: "none" }} />

        <div className="hero-grid" style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "100vh" }}>
          {/* LEFT TEXT */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px clamp(24px,5vw,80px)" }}>
            {/* Status pill */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,245,212,.06)", border: "1px solid rgba(0,245,212,.2)", borderRadius: 99, padding: "6px 16px", marginBottom: 36, alignSelf: "flex-start", animation: "appear .7s ease both" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--cyan)", display: "inline-block", animation: "pulse 1.5s ease-in-out infinite" }} />
              <span className="mono" style={{ fontSize: 10, color: "var(--cyan)", letterSpacing: ".12em" }}>B.TECH AI ENGINEER · PUNE, INDIA</span>
            </div>

            <h1 className="display" style={{ fontSize: "clamp(4rem,7.5vw,8rem)", lineHeight: .95, marginBottom: 22, animation: "appear .8s ease .1s both" }}>
              <span className="grad-metal">ENGINEERING</span>
              <br />
              <span style={{ color: "var(--cyan)", textShadow: "0 0 60px rgba(0,245,212,.5)" }}>AGENTIC</span>
              <br />
              <span className="grad-metal">AUTONOMY.</span>
            </h1>

            <p style={{ fontWeight: 300, fontSize: "clamp(13px,1.6vw,17px)", color: "var(--muted)", lineHeight: 1.85, marginBottom: 44, maxWidth: 460, animation: "appear .8s ease .2s both" }}>
              Bridging Full-Stack Systems with Self-Reasoning AI Infrastructure. Building systems where AI doesn't assist — it decides.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", animation: "appear .8s ease .3s both" }}>
              <Link href="/projects" className="btn btn-primary">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" /><path d="M4 6h4M6 4l2 2-2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
                System Artifacts
              </Link>
              <Link href="/contact" className="btn btn-ghost">Contact →</Link>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: 28, marginTop: 60, paddingTop: 32, borderTop: "1px solid var(--border)", animation: "appear .8s ease .45s both" }}>
              {[["10+", "Projects Built"], ["4+", "AI Agents Deployed"], ["13+", "Technologies"]].map(([v, l]) => (
                <div key={l}>
                  <div className="display grad-cyan" style={{ fontSize: 34, lineHeight: 1 }}>{v}</div>
                  <div className="mono" style={{ fontSize: 9, color: "var(--muted)", letterSpacing: ".1em", marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: SPLINE */}
          <div className="spline-col" style={{ position: "relative", overflow: "hidden" }}>
            <SplineErrorBoundary>
              <SplineComponent
                scene="https://my.spline.design/3drobotheadtrackingmousecopy-9a00d2fb8eaef9ba2f1c1f7ffc7f3a17/"
              />
            </SplineErrorBoundary>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, var(--bg) 0%, transparent 18%, transparent 80%, var(--bg) 100%)", pointerEvents: "none", zIndex: 1 }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "30%", background: "linear-gradient(to top, var(--bg), transparent)", pointerEvents: "none", zIndex: 1 }} />
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "20%", background: "linear-gradient(to bottom, var(--bg), transparent)", pointerEvents: "none", zIndex: 1 }} />
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{ position: "absolute", bottom: 100, left: "52.00066189705282%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, zIndex: 3, animation: "appear 1s ease .7s both" }}>
          <span className="mono" style={{ fontSize: 9, color: "var(--muted)", letterSpacing: ".12em" }}>SCROLL</span>
          <div style={{ width: 1, height: 36, background: "linear-gradient(to bottom, var(--cyan), transparent)", animation: "pulse 2s ease-in-out infinite" }} />
        </div>
      </section>

      <Ticker />

      {/* ── QUICK LINKS STRIP ── */}
      <section style={{ padding: "80px clamp(24px,6vw,120px)" }}>
        <Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 14 }}>
            {[
              { label: "About Me", sub: "Vision & Background", href: "/about", color: "var(--violet)" },
              { label: "Projects", sub: "AI · Web · ML Systems", href: "/projects", color: "var(--cyan)" },
              { label: "Skills", sub: "Tech Arsenal", href: "/skills", color: "var(--gold)" },
              { label: "Experience", sub: "Roles & Education", href: "/experience", color: "var(--rose)" },
              { label: "Contact", sub: "Let's Build Together", href: "/contact", color: "var(--emerald)" },
            ].map(card => (
              <Link key={card.href} href={card.href} style={{ textDecoration: "none" }}>
                <div className="glass" style={{ padding: "22px 24px", border: `1px solid var(--border)`, transition: "all .3s", cursor: "pointer" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = card.color + "55"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "none"; }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 22, color: card.color, marginBottom: 4 }}>{card.label}</div>
                  <div className="mono" style={{ fontSize: 9, color: "var(--muted)", letterSpacing: ".1em" }}>{card.sub} →</div>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
