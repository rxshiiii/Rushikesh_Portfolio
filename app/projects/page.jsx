"use client";
import { useState } from "react";
import { Reveal, Ticker, ProjCard, NeuralLines } from "../../components/shared";
import { AI_PROJECT_LINKS, ML_PROJECT_LINKS, WEB_PROJECT_LINKS } from "../../lib/links";

/* ── DATA ──────────────────────────────────── */
const AI_PROJECTS = [
  {
    id: "A01", title: "Autonomous Blog Writing Agent", sub: "LangGraph Multi-Agent System",
    color: "var(--cyan)", tc: "tag-c",
    desc: "End-to-end research-grounded content generation pipeline. Designed a multi-stage LangGraph workflow (Router → Research → Orchestrator → Parallel Workers → Reducer) for autonomous technical blog generation. Integrated Tavily-based retrieval with strict citation grounding and recency filtering to prevent hallucinated sources. Implemented parallel section generation, structured Pydantic outputs, retry logic, and optional Gemini-based diagram generation.",
    feats: ["Multi-Agent Orchestration", "Citation Grounding", "Parallel Execution", "Diagram Generation", "Retry Logic"],
    stack: ["LangGraph", "LangChain", "Tavily", "Pydantic", "Gemini", "Python"],
    links: AI_PROJECT_LINKS.blogAgent,
  },
  {
    id: "A02", title: "LangGraph PDF Chatbot", sub: "Agentic RAG System",
    color: "var(--violet)", tc: "tag-v",
    desc: "Multi-tool AI assistant with persistent memory and intelligent tool routing. Developed state-driven AI agent with dynamic tool selection (Search, Calculator, RAG). Implemented PDF-based semantic retrieval using embeddings and FAISS. Enabled persistent multi-thread memory using SQLite checkpointing.",
    feats: ["Dynamic Tool Selection", "PDF Semantic Search", "Persistent Memory", "Multi-thread", "State Machine"],
    stack: ["LangGraph", "FAISS", "SQLite", "Python", "Embeddings"],
    links: AI_PROJECT_LINKS.pdfChatbot,
  },
  {
    id: "A03", title: "YouTubeChat", sub: "Multimodal RAG System",
    color: "var(--gold)", tc: "tag-g",
    desc: "Chat with YouTube lecture videos using Retrieval-Augmented Generation. Built pipeline: Video → Whisper → Embeddings → ChromaDB → LLM response. Implemented semantic chunk retrieval using Gemini embeddings and Groq LLM. Optimized long-form transcript chunking for contextual accuracy.",
    feats: ["Video Transcription", "Semantic Retrieval", "LLM Chat", "Chunk Optimization", "ChromaDB"],
    stack: ["Whisper", "ChromaDB", "Gemini", "Groq LLM", "RAG", "Python"],
    links: AI_PROJECT_LINKS.youtubeChat,
  },
  {
    id: "A04", title: "WorkforceForge", sub: "Autonomous Agentic Learning System",
    color: "var(--rose)", tc: "tag-r",
    desc: "AI-driven platform aligning learners with real-time workforce trends using multi-agent orchestration. Designed multi-agent architecture using LangGraph for job-skill trend detection and adaptive mentorship. Implemented NLP-based skill clustering and emerging skill classification with persistent memory. Full-stack system deployed with FastAPI, React.js, Tailwind CSS, and PostgreSQL.",
    feats: ["Skill Trend Detection", "Adaptive Mentorship", "Skill Clustering", "Full-Stack", "Persistent Memory"],
    stack: ["LangGraph", "FastAPI", "React.js", "PostgreSQL", "NLP", "Tailwind CSS"],
    links: AI_PROJECT_LINKS.workforceForge,
  },
];

const ML_PROJECTS = [
  {
    id: "M01", title: "Disease Prediction System", sub: "ML Healthcare Platform",
    color: "var(--emerald)", tc: "tag-e",
    desc: "A healthcare prediction platform integrating multiple ML models for Breast Cancer, Diabetes, Parkinson's, and Heart Disease prediction. Implemented a REST API-based prediction pipeline with an interactive UI for real-time medical inputs and predictions.",
    feats: ["Multi-Disease Prediction", "REST API Pipeline", "Real-time Predictions", "Interactive UI", "4 ML Models"],
    stack: ["React.js", "Flask API", "Python", "Scikit-learn", "XGBoost", "SVM", "Logistic Regression"],
    links: ML_PROJECT_LINKS.diseasePrediction,
  },
  {
    id: "M02", title: "Breast Cancer Classification", sub: "Artificial Neural Network",
    color: "var(--violet)", tc: "tag-v",
    desc: "A deep learning proof-of-concept for breast cancer classification using an Artificial Neural Network. Focused on understanding deep learning fundamentals, model architecture design, and evaluation metrics. Implemented with TensorFlow/Keras for binary classification.",
    feats: ["Neural Network", "Binary Classification", "Model Evaluation", "Deep Learning Fundamentals"],
    stack: ["Python", "TensorFlow", "Keras", "Scikit-learn", "NumPy", "Pandas"],
    links: ML_PROJECT_LINKS.breastCancerANN,
  },
];

const WEB_PROJECTS = [
  {
    id: "W01", title: "Contest Management System", sub: "Full-Stack MERN · EdTech",
    color: "var(--cyan)", tc: "tag-c",
    desc: "A full-stack MERN application to create, manage, and explore coding contests. Features role-based access for students and admins, user authentication, contest filters, interested/liked contest tracking, and auto-expiry of contests.",
    feats: ["Role-Based Auth", "Contest Management", "Auto-expiry System", "User Tracking", "Filters"],
    stack: ["React", "Express.js", "MongoDB", "Tailwind CSS", "Node.js", "JWT"],
    links: WEB_PROJECT_LINKS.contestManagement,
  },
  {
    id: "W02", title: "Educational Platform", sub: "E-Learning · Payments",
    color: "var(--violet)", tc: "tag-v",
    desc: "Full-stack platform for online course purchasing and management with role-based authentication, payments, reviews, and a fully responsive UI. Includes Mail Sender and multiple role-based access control.",
    feats: ["Course Management", "Payment Gateway", "Review System", "Multi-Role Access", "Mail Sender"],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Payment API"],
    links: WEB_PROJECT_LINKS.educationalPlatform,
  },
  {
    id: "W03", title: "E-Commerce Frontend", sub: "React · API Integration",
    color: "var(--gold)", tc: "tag-g",
    desc: "Responsive e-commerce frontend with product listings, cart functionality, and API integration using React and Tailwind CSS.",
    feats: ["Product Catalog", "Shopping Cart", "Responsive UI", "API Integration"],
    stack: ["React", "Tailwind CSS", "REST APIs"],
    links: WEB_PROJECT_LINKS.ecommerce,
  },
  {
    id: "W04", title: "Map Navigator", sub: "Real-time Tracking",
    color: "var(--rose)", tc: "tag-r",
    desc: "Interactive web app for real-time location tracking and path visualization using HTML, CSS, and JavaScript with Maps API.",
    feats: ["Real-time Tracking", "Path Visualization", "Interactive UI"],
    stack: ["HTML", "CSS", "JavaScript", "Maps API"],
    links: WEB_PROJECT_LINKS.mapNavigator,
  },
  {
    id: "W05", title: "Weather Forecasting App", sub: "API · Real-time Data",
    color: "var(--cyan)", tc: "tag-c",
    desc: "Built using JavaScript and APIs to show real-time temperature, humidity, and weather conditions with a clean Tailwind UI.",
    feats: ["Real-time Data", "Weather Conditions", "API Integration", "Clean UI"],
    stack: ["JavaScript", "Weather API", "Tailwind CSS"],
    links: WEB_PROJECT_LINKS.weatherApp,
  },
  {
    id: "W06", title: "Razorpay Clone (UI)", sub: "Pixel-Perfect Clone",
    color: "var(--violet)", tc: "tag-v",
    desc: "Fully responsive clone of Razorpay's landing page using Tailwind CSS. Focused on layout precision and interactive hover states.",
    feats: ["Responsive Layout", "Modern Design", "Interactive Sections", "Pixel Perfect"],
    stack: ["HTML", "Tailwind CSS"],
    links: WEB_PROJECT_LINKS.razorpayClone,
  },
  {
    id: "W07", title: "Spotify Clone", sub: "HTML · CSS · Layout",
    color: "var(--gold)", tc: "tag-g",
    desc: "Basic clone of Spotify homepage using HTML and CSS. Focused on layout, spacing, and color scheme without interactivity.",
    feats: ["Clean UI", "Music-themed Styling", "Homepage Layout"],
    stack: ["HTML", "CSS"],
    links: WEB_PROJECT_LINKS.spotifyClone,
  },
];

const ALL_PROJECTS = [...AI_PROJECTS, ...ML_PROJECTS, ...WEB_PROJECTS];

/* ── TABS ── */
const TABS = [
  { key: "all",  label: "All Projects", count: ALL_PROJECTS.length },
  { key: "ai",   label: "🤖 Agentic AI",  count: AI_PROJECTS.length },
  { key: "ml",   label: "🧠 ML / DL",     count: ML_PROJECTS.length },
  { key: "web",  label: "💻 Web",          count: WEB_PROJECTS.length },
];

/* ── PAGE ── */
export default function ProjectsPage() {
  const [tab, setTab] = useState("all");

  const projects = tab === "all" ? ALL_PROJECTS : tab === "ai" ? AI_PROJECTS : tab === "ml" ? ML_PROJECTS : WEB_PROJECTS;

  return (
    <div className="page">
      <NeuralLines />

      {/* ── HEADER ── */}
      <section style={{ padding: "80px clamp(24px,6vw,120px) 60px", position: "relative", zIndex: 1 }}>
        <Reveal>
          <span className="tag tag-c" style={{ marginBottom: 20, display: "inline-block" }}>SYSTEM ARTIFACTS</span>
          <h1 className="display grad-metal" style={{ fontSize: "clamp(3rem,7vw,8rem)", lineHeight: .95, marginBottom: 24 }}>
            DEPLOYED.<br />ENGINEERED.<br /><span className="grad-cyan">OPERATIONAL.</span>
          </h1>
          <p style={{ fontWeight: 300, fontSize: "clamp(13px,1.6vw,17px)", color: "var(--muted)", maxWidth: 500, lineHeight: 1.85 }}>
            A full catalogue of shipped systems — agentic pipelines, ML models, and full-stack platforms built for real problems.
          </p>
        </Reveal>
      </section>

      <Ticker />

      {/* ── TAB SWITCHER ── */}
      <section style={{ padding: "40px clamp(24px,6vw,120px) 0", position: "relative", zIndex: 1 }}>
        <Reveal>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }}>
            {TABS.map(t => (
              <button key={t.key} onClick={() => setTab(t.key)} className="btn" style={{
                padding: "8px 20px",
                fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".08em",
                background: tab === t.key ? "rgba(0,245,212,.12)" : "var(--surface)",
                border: `1px solid ${tab === t.key ? "rgba(0,245,212,.4)" : "var(--border)"}`,
                color: tab === t.key ? "var(--cyan)" : "var(--muted)",
                boxShadow: tab === t.key ? "0 0 20px rgba(0,245,212,.15)" : "none",
                borderRadius: 99,
              }}>
                {t.label}
                <span style={{ marginLeft: 6, background: "rgba(255,255,255,.08)", borderRadius: 99, padding: "1px 7px", fontSize: 8 }}>{t.count}</span>
              </button>
            ))}
          </div>

          {/* ── PROJECT GRID ── */}
          <div className="bento" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
            {projects.map((p, i) => (
              <div key={p.id} style={{ gridColumn: i === 0 && projects.length > 2 ? "span 2" : "span 1" }}>
                <ProjCard p={p} big={i === 0 && projects.length > 2} />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── BOTTOM PADDING ── */}
      <div style={{ height: 120 }} />
    </div>
  );
}
