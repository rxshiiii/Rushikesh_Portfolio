"use client";
import { useState } from "react";
import { Reveal, Ticker, NeuralLines } from "../../components/shared";
import { SOCIAL_LINKS } from "../../lib/links";

const SOCIALS = [
  { n: "GitHub",     e: "⬡", url: SOCIAL_LINKS.github,   c: "#6e40c9", sub: "rxshiiii" },
  { n: "LinkedIn",   e: "◈", url: SOCIAL_LINKS.linkedin,  c: "#0a66c2", sub: "rushikesh-ankaikar" },
  { n: "LeetCode",   e: "◆", url: SOCIAL_LINKS.leetcode,  c: "#f89c1c", sub: "rxshiii" },
  { n: "X / Twitter",e: "✕", url: SOCIAL_LINKS.twitter,   c: "#e7e7e7", sub: "@rgankaikar" },
];

export default function ContactPage() {
  const [cp, setCp] = useState("");
  const copy = (v, k) => { navigator.clipboard.writeText(v); setCp(k); setTimeout(() => setCp(""), 2000); };

  return (
    <div className="page">
      <NeuralLines />

      {/* ── HEADER ── */}
      <section style={{ padding: "80px clamp(24px,6vw,120px) 60px", position: "relative", zIndex: 1 }}>
        <Reveal>
          <span className="tag tag-c" style={{ marginBottom: 20, display: "inline-block" }}>GET IN TOUCH</span>
          <h1 className="display grad-metal" style={{ fontSize: "clamp(3rem,7vw,8rem)", lineHeight: .95, marginBottom: 24 }}>
            LET'S BUILD<br /><span className="grad-cyan">SOMETHING</span><br />IMPOSSIBLE.
          </h1>
          <p style={{ fontWeight: 300, fontSize: "clamp(13px,1.6vw,17px)", color: "var(--muted)", maxWidth: 500, lineHeight: 1.85 }}>
            Open to full-time AI engineering roles, research collaborations, and ambitious product builds. Let's connect.
          </p>
        </Reveal>
      </section>

      <Ticker />

      {/* ── CONTACT CARDS ── */}
      <section style={{ padding: "60px clamp(24px,6vw,120px)", position: "relative", zIndex: 1 }}>
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16, maxWidth: 1000 }}>

          {/* Email — full width */}
          <Reveal style={{ gridColumn: "1 / -1" }}>
            <div className="glass glass-hi" style={{ padding: "32px 36px", cursor: "pointer", transition: "all .3s" }}
              onClick={() => copy(SOCIAL_LINKS.email, "email")}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(0,245,212,.4)"; e.currentTarget.style.boxShadow = "0 0 40px rgba(0,245,212,.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-hi)"; e.currentTarget.style.boxShadow = "none"; }}>
              <div className="mono" style={{ fontSize: 9, color: "var(--cyan)", letterSpacing: ".14em", marginBottom: 8 }}>PRIMARY CHANNEL</div>
              <div className="display" style={{ fontSize: "clamp(20px,3vw,36px)", marginBottom: 6 }}>{SOCIAL_LINKS.email}</div>
              <div className="mono" style={{ fontSize: 9, color: cp === "email" ? "var(--cyan)" : "var(--muted)" }}>
                {cp === "email" ? "✓ Copied to clipboard" : "Click to copy →"}
              </div>
            </div>
          </Reveal>

          {/* Phone */}
          <Reveal delay={100}>
            <div className="glass" style={{ padding: "26px 30px", border: "1px solid var(--border)", cursor: "pointer", transition: "all .3s", height: "100%" }}
              onClick={() => copy(SOCIAL_LINKS.phone, "phone")}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(168,85,247,.4)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; }}>
              <div className="mono" style={{ fontSize: 9, color: "var(--violet)", letterSpacing: ".14em", marginBottom: 8 }}>DIRECT LINE</div>
              <div className="display" style={{ fontSize: 26, marginBottom: 6 }}>{SOCIAL_LINKS.phone}</div>
              <div className="mono" style={{ fontSize: 9, color: cp === "phone" ? "var(--violet)" : "var(--muted)" }}>
                {cp === "phone" ? "✓ Copied" : "Click to copy →"}
              </div>
            </div>
          </Reveal>

          {/* Status */}
          <Reveal delay={150}>
            <div className="glass" style={{ padding: "26px 30px", border: "1px solid rgba(16,185,129,.2)", background: "rgba(16,185,129,.04)", height: "100%" }}>
              <div className="mono" style={{ fontSize: 9, color: "var(--emerald)", letterSpacing: ".14em", marginBottom: 12 }}>CURRENT STATUS</div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--emerald)", boxShadow: "0 0 10px var(--emerald)", animation: "pulse 1.5s ease-in-out infinite", display: "inline-block" }} />
                <span className="display" style={{ fontSize: 22, color: "var(--emerald)" }}>AVAILABLE</span>
              </div>
              <p style={{ fontWeight: 300, fontSize: 13, color: "var(--muted)", lineHeight: 1.7 }}>
                Open to full-time positions, internships, and freelance AI/Full-Stack projects.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SOCIAL LINKS ── */}
      <section style={{ padding: "0 clamp(24px,6vw,120px)", position: "relative", zIndex: 1, maxWidth: 1000, margin: "0 auto" }}>
        <Reveal>
          <div className="mono" style={{ fontSize: 9, color: "var(--gold)", letterSpacing: ".14em", marginBottom: 20 }}>SOCIAL CHANNELS</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 14 }}>
            {SOCIALS.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>
                  <div className="glass" style={{ padding: "20px 22px", border: "1px solid var(--border)", transition: "all .3s", cursor: "pointer" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = s.c + "60"; e.currentTarget.style.background = s.c + "0d"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "var(--surface)"; e.currentTarget.style.transform = "none"; }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                      <span style={{ fontSize: 22, color: s.c }}>{s.e}</span>
                      <div>
                        <div style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15, color: "var(--text)" }}>{s.n}</div>
                        <div className="mono" style={{ fontSize: 8, color: "var(--muted)" }}>{s.sub}</div>
                      </div>
                    </div>
                    <div className="mono" style={{ fontSize: 8, color: s.c, letterSpacing: ".1em" }}>VIEW PROFILE →</div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── QUICK EMAIL FORM PROMPT ── */}
      <section style={{ padding: "40px clamp(24px,6vw,120px) 120px", position: "relative", zIndex: 1 }}>
        <Reveal>
          <div className="glass" style={{ padding: "36px 40px", textAlign: "center", border: "1px solid rgba(0,245,212,.15)", background: "linear-gradient(135deg,rgba(0,245,212,.04),rgba(168,85,247,.04))" }}>
            <div className="display grad-cyan" style={{ fontSize: "clamp(1.8rem,3vw,3rem)", marginBottom: 10 }}>READY TO DEPLOY.</div>
            <p style={{ fontWeight: 300, color: "var(--muted)", marginBottom: 24, fontSize: 15, maxWidth: 460, margin: "0 auto 24px" }}>
              Drop an email, connect on LinkedIn, or explore the work on GitHub. Every great system starts with a conversation.
            </p>
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="btn btn-primary" style={{ textDecoration: "none", display: "inline-flex" }}>
              ✉ Send Email
            </a>
          </div>
        </Reveal>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: "0 clamp(24px,6vw,120px) 60px", zIndex: 1, position: "relative" }}>
        <div style={{ paddingTop: 28, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span className="mono" style={{ fontSize: 9, color: "var(--muted)", letterSpacing: ".1em" }}>
            © 2025 RUSHIKESH ANKAIKAR · ALL SYSTEMS OPERATIONAL
          </span>
          <span className="mono" style={{ fontSize: 9, color: "var(--cyan)", letterSpacing: ".1em", animation: "pulse 2s ease-in-out infinite" }}>
            ◉ AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>
      </footer>
    </div>
  );
}
