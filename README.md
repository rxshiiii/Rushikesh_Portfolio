# Rushikesh Ankaikar — Portfolio

Hyper-modern "Agentic-Era" dark-mode portfolio built with Next.js 14 App Router.

## 🚀 Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🔗 EDITING YOUR LINKS

> **All project and social links are in ONE file: `lib/links.js`**

Open `lib/links.js` and replace each `"https://github.com/rxshiiii"` placeholder with your actual repo/demo URL.

```js
// lib/links.js
export const AI_PROJECT_LINKS = {
  blogAgent: {
    github: "https://github.com/rxshiiii/your-blog-agent-repo",  // ← Replace this
    demo:   "https://your-demo-url.com",                          // ← Add demo if any
  },
  // ... etc
};
```

If a project has **no demo**, leave `demo: ""` and the Demo button won't appear.

---

## 📁 File Structure

```
portfolio/
├── app/
│   ├── layout.jsx          ← Root layout (TopNav, Cursor, MeshBg)
│   ├── page.jsx            ← Exports home page
│   ├── home/
│   │   └── page.jsx        ← Hero + Spline Robot + Quick Links
│   ├── about/
│   │   └── page.jsx        ← About, Vision, Education
│   ├── projects/
│   │   └── page.jsx        ← All Projects (AI / ML / Web tabs)
│   ├── skills/
│   │   └── page.jsx        ← Tech Spheres + Category Bento
│   ├── experience/
│   │   └── page.jsx        ← Roles + Education + Soft Skills
│   └── contact/
│       └── page.jsx        ← Email, Phone, Social Links
├── components/
│   └── shared.jsx          ← MeshBg, Cursor, TopNav, ProjCard, Ticker…
├── lib/
│   └── links.js            ← ⭐ ALL YOUR LINKS GO HERE
├── styles/
│   └── globals.css         ← Global dark-mode design system
├── next.config.js
└── package.json
```

---

## 🖇 Spline Robot

The Spline 3D robot head is embedded as an `<iframe>` in `app/home/page.jsx`.

The current URL points to the Spline community preview. To use your own Spline scene:
1. Publish your scene in Spline
2. Copy the embed URL from `Share → Embed → Scene URL`
3. Replace the `src` in the iframe inside `app/home/page.jsx`

---

## 🎨 Customization

| What | Where |
|------|-------|
| Colors & fonts | `styles/globals.css` `:root` block |
| Your name/info | `components/shared.jsx` TopNav logo |
| Social links | `lib/links.js` SOCIAL_LINKS |
| Project links | `lib/links.js` *_PROJECT_LINKS |
| Project data | `app/projects/page.jsx` AI/ML/WEB_PROJECTS arrays |
| Spline scene | `app/home/page.jsx` iframe `src` |

---

## ✅ Pages

| Route | Page |
|-------|------|
| `/` | Home + Hero + Spline Robot |
| `/about` | About + Vision + Education |
| `/projects` | All Projects with AI / ML / Web tabs |
| `/skills` | Tech Sphere Grid + Category Bento |
| `/experience` | Experience + Education Timeline |
| `/contact` | Contact + Social Links |
