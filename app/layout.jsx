import "../styles/globals.css";
import { Cursor, MeshBg, Particles, TopNav } from "../components/shared";

export const metadata = {
  title: "Rushikesh Ankaikar — AI Engineer",
  description: "B.Tech AI Engineer. Building Agentic Systems, LangGraph Pipelines, Full-Stack Platforms.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MeshBg />
        <Particles />
        <Cursor />
        <TopNav />
        <main style={{ position: "relative", zIndex: 2 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
