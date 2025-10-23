/*
Shubham Modi — Modern Tech Portfolio (React-ready)

Problem addressed:
The original canvas had raw HTML or an HTML-file placed into a .tsx/.jsx environment which caused a parser error like:
  SyntaxError: /index.tsx: Unexpected token (1:0)

Why that happens:
TypeScript/JSX parsers expect valid JavaScript/JSX syntax. Raw HTML (<!DOCTYPE html> ... ) at the top of a .tsx/.jsx file will cause an "Unexpected token" on the first character.

What I changed:
- Rewrote the entire document into a safe, framework-friendly React component (JSX) file that works in .jsx/.tsx projects when saved as `Portfolio.jsx` or `Portfolio.tsx` (with minimal typing changes).
- Included a "Download HTML" feature that generates a clean standalone HTML file (so you can open the portfolio directly in a browser without React). This prevents running raw HTML inside your React/TypeScript entry file.
- Included clear usage instructions and troubleshooting notes.

How to use:
1) If you want to preview inside React:
   - Save this file as `src/Portfolio.jsx` and import it in your application (App.jsx / main.jsx):
       import Portfolio from './Portfolio'
       function App(){ return <Portfolio/> }
   - Make sure Tailwind (or any CSS) is available. For quick preview, include the Tailwind CDN link in your public/index.html.

2) If you got the original error running HTML in a TypeScript entry file (index.tsx), instead:
   - Do NOT paste any raw HTML at the top of `index.tsx`.
   - Either import a React component (this file) or serve the standalone HTML via a static file (e.g., public/index.html or GitHub Pages).

3) Want a standalone .html download? Click the "Download HTML" button in the component — it creates a downloadable file with the same styling (Tailwind CDN used).

If you use TypeScript (.tsx) and want typed props, tell me and I'll convert this to a typed `Portfolio.tsx`.

*/

import React from 'react'

const PROFILE_PIC = 'https://avatars.githubusercontent.com/u/583231?v=4' // replace with your image URL

// Standalone HTML string (used for download). Keep it simple so it can be opened directly in a browser.
const standaloneHTML = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Shubham Modi — Portfolio</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-900 text-slate-100 font-sans p-6">
  <div class="max-w-5xl mx-auto bg-gradient-to-r from-slate-800 via-slate-900 to-black rounded-2xl shadow-2xl overflow-hidden">
    <div class="md:flex">
      <aside class="w-full md:w-1/3 p-8 bg-gradient-to-b from-[#0f172a] to-transparent">
        <img src="${PROFILE_PIC}" alt="profile" class="w-36 h-36 rounded-full object-cover ring-4 ring-slate-700 mx-auto" />
        <h1 class="text-center mt-4 text-2xl font-bold">Shubham Modi</h1>
        <p class="text-center mt-2 text-sm text-slate-400">B.Tech (I.T.) @ BIT Sindri | Aspiring Software Engineer | Passionate About Technology & Problem-Solving</p>

        <div class="mt-6 text-sm space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-slate-300">Location</span>
            <span class="font-medium">Dhanbad, Jharkhand, India</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-slate-300">Status</span>
            <span class="font-medium">Open to opportunities / Internships</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-slate-300">Connections</span>
            <span class="font-medium">500+ followers</span>
          </div>
        </div>

        <a href="https://www.linkedin.com/in/shubham-modi-95866826b/" target="_blank" class="block mt-6 text-center text-sm bg-gradient-to-r from-indigo-600 to-violet-600 py-2 rounded-lg font-semibold shadow-md">View on LinkedIn</a>

        <div class="mt-8">
          <h3 class="text-slate-300 uppercase text-xs tracking-widest">Skills</h3>
          <div class="mt-3 flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-slate-800/60 rounded-full text-xs border border-slate-700">JavaScript</span>
            <span class="px-3 py-1 bg-slate-800/60 rounded-full text-xs border border-slate-700">React.js</span>
            <span class="px-3 py-1 bg-slate-800/60 rounded-full text-xs border border-slate-700">CSS</span>
            <span class="px-3 py-1 bg-slate-800/60 rounded-full text-xs border border-slate-700">Java</span>
            <span class="px-3 py-1 bg-slate-800/60 rounded-full text-xs border border-slate-700">Layout Design</span>
            <span class="px-3 py-1 bg-slate-800/60 rounded-full text-xs border border-slate-700">Front-End Development</span>
          </div>
        </div>
      </aside>

      <main class="w-full md:w-2/3 p-8">
        <section>
          <h2 class="text-xl font-semibold">About</h2>
          <p class="mt-3 text-slate-300 leading-relaxed">I am currently pursuing B.Tech in Information Technology at BIT Sindri, after completing my Diploma in Computer Science & Engineering from Government Polytechnic Ranchi (2022–2025). I enjoy building clean, accessible web interfaces and learning full-stack development. My recent work includes a web-design internship and several small projects to explore UI, UX and React-based development.</p>
        </section>

        <section class="mt-8">
          <h2 class="text-xl font-semibold">Experience</h2>
          <div class="mt-4 space-y-4">
            <article class="p-4 bg-slate-800/40 rounded-lg border border-slate-700">
              <h3 class="font-semibold">Campus Ambassador</h3>
              <p class="text-sm text-slate-400">Physics Wallah (PW) • India (Remote) <span class="float-right text-slate-400">Oct 2025 - Present</span></p>
              <p class="mt-2 text-slate-300 text-sm">Representing PW on campus; engaging students with learning resources and promotions.</p>
            </article>
            <article class="p-4 bg-slate-800/40 rounded-lg border border-slate-700">
              <h3 class="font-semibold">Intern — Web Design (Internship)</h3>
              <p class="text-sm text-slate-400">Briztech Infosystems • Remote <span class="float-right text-slate-400">Sep 2024 - Oct 2024</span></p>
              <p class="mt-2 text-slate-300 text-sm">Completed a 1-month internship focused on HTML, CSS, JavaScript and React. Delivered an e-commerce style demo and received A+ grade.</p>
            </article>
          </div>
        </section>

        <section class="mt-8 grid md:grid-cols-2 gap-6">
          <div>
            <h2 class="text-xl font-semibold">Education</h2>
            <ul class="mt-4 space-y-3">
              <li class="p-3 bg-slate-800/30 rounded-md border border-slate-700">
                <strong class="block">Bachelor of Technology (B.Tech), Information Technology</strong>
                <span class="text-slate-400 text-sm">BIT Sindri</span>
                <div class="text-slate-500 text-xs mt-1">Sep 2024 - Sep 2028</div>
              </li>
              <li class="p-3 bg-slate-800/30 rounded-md border border-slate-700">
                <strong class="block">Diploma, Computer Science & Engineering (Grade: A)</strong>
                <span class="text-slate-400 text-sm">Government Polytechnic Ranchi</span>
                <div class="text-slate-500 text-xs mt-1">Jul 2022 - Jul 2025</div>
              </li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-semibold">Certifications & Projects</h2>
            <div class="mt-4 space-y-3">
              <div class="p-3 bg-slate-800/30 rounded-md border border-slate-700">
                <div class="font-medium">JavaScript Certification Test - Youtube Course</div>
                <div class="text-slate-400 text-sm">Complete Coding by Prashant Sir • Oct 2024 • ID: EZAJZ7DH</div>
              </div>
              <div class="p-3 bg-slate-800/30 rounded-md border border-slate-700">
                <div class="font-medium">Web Design Specialist Certification</div>
                <div class="text-slate-400 text-sm">BRIZTECH INFOSYSTEMS PVT.LTD • Oct 2024</div>
              </div>
              <a href="https://shubhammodi7.github.io/MyPortfolio/" target="_blank" class="block p-3 bg-slate-800/30 rounded-md border border-slate-700 hover:scale-[1.01] transition">
                <div class="font-medium">My Portfolio</div>
                <div class="text-slate-400 text-sm">A personal portfolio site to experiment and showcase projects.</div>
              </a>
            </div>
          </div>
        </section>

        <section class="mt-8">
          <h2 class="text-xl font-semibold">Languages & Contact</h2>
          <div class="mt-3 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div class="text-slate-300">English (Professional) • Hindi (Native)</div>
            <div class="flex items-center gap-3">
              <a href="https://www.linkedin.com/in/shubham-modi-95866826b/" target="_blank" class="text-sm px-3 py-2 bg-slate-800/40 rounded-lg border border-slate-700">LinkedIn</a>
              <a href="mailto:shubham@example.com" class="text-sm px-3 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-lg font-semibold">Email</a>
            </div>
          </div>
        </section>

        <footer class="mt-10 text-center text-xs text-slate-500">Built with ❤️ — Modern Tech theme.</footer>
      </main>
    </div>
  </div>
</body>
</html>`

export default function Portfolio(){
  // helper: create and download standalone HTML file
  const downloadHTML = () => {
    const blob = new Blob([standaloneHTML], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'Shubham_Modi_Portfolio.html'
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-slate-100 font-sans p-6">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-slate-800 via-slate-900 to-black rounded-2xl shadow-2xl overflow-hidden">
        <div className="md:flex">
          <aside className="w-full md:w-1/3 p-8 bg-gradient-to-b from-[#0f172a] to-transparent">
            <img src={PROFILE_PIC} alt="profile" className="w-36 h-36 rounded-full object-cover ring-4 ring-slate-700 mx-auto" />
            <h1 className="text-center mt-4 text-2xl font-bold">Shubham Modi</h1>
            <p className="text-center mt-2 text-sm text-slate-400">B.Tech (I.T.) @ BIT Sindri | Aspiring Software Engineer | Passionate About Technology & Problem-Solving</p>

            <div className="mt-6 text-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Location</span>
                <span className="font-medium">Dhanbad, Jharkhand, India</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Status</span>
                <span className="font-medium">Open to opportunities / Internships</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Connections</span>
                <span className="font-medium">500+ followers</span>
              </div>
            </div>

            <a href="https://www.linkedin.com/in/shubham-modi-95866826b/" target="_blank" rel="noreferrer" className="block mt-6 text-center text-sm bg-gradient-to-r from-indigo-600 to-violet-600 py-2 rounded-lg font-semibold shadow-md">View on LinkedIn</a>

            <div className="mt-8">
              <h3 className="text-slate-300 uppercase text-xs tracking-widest">Skills</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {['JavaScript','React.js','CSS','Java','Layout Design','Front-End Development'].map((s)=> (
                  <span key={s} className="px-3 py-1 bg-slate-800/60 rounded-full text-xs border border-slate-700">{s}</span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <button onClick={downloadHTML} className="w-full text-sm px-3 py-2 bg-slate-800/40 rounded-lg border border-slate-700">Download HTML (Standalone)</button>
            </div>
          </aside>

          <main className="w-full md:w-2/3 p-8">
            <section>
              <h2 className="text-xl font-semibold">About</h2>
              <p className="mt-3 text-slate-300 leading-relaxed">I am currently pursuing B.Tech in Information Technology at BIT Sindri, after completing my Diploma in Computer Science & Engineering from Government Polytechnic Ranchi (2022–2025). I enjoy building clean, accessible web interfaces and learning full-stack development. My recent work includes a web-design internship and several small projects to explore UI, UX and React-based development.</p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold">Experience</h2>
              <div className="mt-4 space-y-4">
                <article className="p-4 bg-slate-800/40 rounded-lg border border-slate-700">
                  <h3 className="font-semibold">Campus Ambassador</h3>
                  <p className="text-sm text-slate-400">Physics Wallah (PW) • India (Remote) <span className="float-right text-slate-400">Oct 2025 - Present</span></p>
                  <p className="mt-2 text-slate-300 text-sm">Representing PW on campus; engaging students with learning resources and promotions.</p>
                </article>

                <article className="p-4 bg-slate-800/40 rounded-lg border border-slate-700">
                  <h3 className="font-semibold">Intern — Web Design (Internship)</h3>
                  <p className="text-sm text-slate-400">Briztech Infosystems • Remote <span className="float-right text-slate-400">Sep 2024 - Oct 2024</span></p>
                  <p className="mt-2 text-slate-300 text-sm">Completed a 1-month internship focused on HTML, CSS, JavaScript and React. Delivered an e-commerce style demo and received A+ grade.</p>
                </article>
              </div>
            </section>

            <section className="mt-8 grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold">Education</h2>
                <ul className="mt-4 space-y-3">
                  <li className="p-3 bg-slate-800/30 rounded-md border border-slate-700">
                    <strong className="block">Bachelor of Technology (B.Tech), Information Technology</strong>
                    <span className="text-slate-400 text-sm">BIT Sindri</span>
                    <div className="text-slate-500 text-xs mt-1">Sep 2024 - Sep 2028</div>
                  </li>

                  <li className="p-3 bg-slate-800/30 rounded-md border border-slate-700">
                    <strong className="block">Diploma, Computer Science & Engineering (Grade: A)</strong>
                    <span className="text-slate-400 text-sm">Government Polytechnic Ranchi</span>
                    <div className="text-slate-500 text-xs mt-1">Jul 2022 - Jul 2025</div>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold">Certifications & Projects</h2>
                <div className="mt-4 space-y-3">
                  <div className="p-3 bg-slate-800/30 rounded-md border border-slate-700">
                    <div className="font-medium">JavaScript Certification Test - Youtube Course</div>
                    <div className="text-slate-400 text-sm">Complete Coding by Prashant Sir • Oct 2024 • ID: EZAJZ7DH</div>
                  </div>

                  <div className="p-3 bg-slate-800/30 rounded-md border border-slate-700">
                    <div className="font-medium">Web Design Specialist Certification</div>
                    <div className="text-slate-400 text-sm">BRIZTECH INFOSYSTEMS PVT.LTD • Oct 2024</div>
                  </div>

                  <a href="https://shubhammodi7.github.io/MyPortfolio/" target="_blank" rel="noreferrer" className="block p-3 bg-slate-800/30 rounded-md border border-slate-700 hover:scale-[1.01] transition">
                    <div className="font-medium">My Portfolio</div>
                    <div className="text-slate-400 text-sm">A personal portfolio site to experiment and showcase projects.</div>
                  </a>
                </div>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold">Languages & Contact</h2>
              <div className="mt-3 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="text-slate-300">English (Professional) • Hindi (Native)</div>
                <div className="flex items-center gap-3">
                  <a href="https://www.linkedin.com/in/shubham-modi-95866826b/" target="_blank" rel="noreferrer" className="text-sm px-3 py-2 bg-slate-800/40 rounded-lg border border-slate-700">LinkedIn</a>
                  <a href="mailto:shubham@example.com" className="text-sm px-3 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-lg font-semibold">Email</a>
                </div>
              </div>
            </section>

            <footer className="mt-10 text-center text-xs text-slate-500">Built with ❤️ — Modern Tech theme.</footer>
          </main>
        </div>
      </div>
    </div>
  )
}
