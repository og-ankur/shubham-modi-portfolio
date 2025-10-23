/*
Shubham Modi — Modern Tech Portfolio (Single-file React component)
Theme: Modern Tech (Tailwind + Framer Motion)

How to use:
1. Create a React project (Vite or CRA) with Tailwind configured.
2. Install framer-motion: `npm install framer-motion`.
3. Drop this file as `src/Portfolio.jsx` and import it in `src/main.jsx` (or App.jsx):
     import Portfolio from './Portfolio';
     <Portfolio />
4. Replace `PROFILE_PIC` URL or import with your image.

Notes: This component is intentionally self-contained for quick preview — extract sections into smaller components for production.
*/

import React from 'react'
import { motion } from 'framer-motion'

const PROFILE_PIC = 'https://avatars.githubusercontent.com/u/583231?v=4' // replace with your image URL

export default function Portfolio() {
  const data = {
    name: 'Shubham Modi',
    headline: 'B.Tech (I.T.) @ BIT Sindri | Aspiring Software Engineer | Passionate About Technology & Problem-Solving',
    location: 'Dhanbad, Jharkhand, India',
    linkedin: 'https://www.linkedin.com/in/shubham-modi-95866826b/',
    about: `I am currently pursuing B.Tech in Information Technology at BIT Sindri, after completing my Diploma in Computer Science & Engineering from Government Polytechnic Ranchi (2022–2025). I enjoy building clean, accessible web interfaces and learning full-stack development. My recent work includes a web-design internship and several small projects to explore UI, UX and React-based development.`,
    experiences: [
      {
        title: 'Campus Ambassador',
        company: 'Physics Wallah (PW)',
        date: 'Oct 2025 - Present',
        location: 'India (Remote)',
        desc: 'Representing PW on campus; engaging students with learning resources and promotions.'
      },
      {
        title: 'Intern — Web Design (Internship)',
        company: 'Briztech Infosystems',
        date: 'Sep 2024 - Oct 2024',
        location: 'Remote',
        desc: 'Completed a 1-month internship focused on HTML, CSS, JavaScript and React. Delivered an e-commerce style demo and received A+ grade.'
      }
    ],
    education: [
      {
        degree: 'Bachelor of Technology (B.Tech), Information Technology',
        school: 'BIT Sindri',
        date: 'Sep 2024 - Sep 2028'
      },
      {
        degree: 'Diploma, Computer Science & Engineering (Grade: A)',
        school: 'Government Polytechnic Ranchi',
        date: 'Jul 2022 - Jul 2025'
      }
    ],
    projects: [
      {
        name: 'My Portfolio',
        desc: "A personal portfolio site to experiment and showcase projects.",
        url: 'https://shubhammodi7.github.io/MyPortfolio/'
      }
    ],
    certifications: [
      { title: 'JavaScript Certification Test - Youtube Course', issuer: 'Complete Coding by Prashant Sir', date: 'Oct 2024', id: 'EZAJZ7DH' },
      { title: 'Web Design Specialist Certification', issuer: 'BRIZTECH INFOSYSTEMS PVT.LTD', date: 'Oct 2024' }
    ],
    skills: ['JavaScript', 'React.js', 'CSS', 'Java', 'Layout Design', 'Front-End Development'],
    languages: ['English (Professional)', 'Hindi (Native)']
  }

  return (
    <div className="min-h-screen bg-gray-900 text-slate-100 font-sans p-6">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-slate-800 via-slate-900 to-black rounded-2xl shadow-2xl overflow-hidden">
        <div className="md:flex">
          {/* Left column - Hero */}
          <motion.aside
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/3 p-8 bg-gradient-to-b from-[#0f172a] to-transparent"
          >
            <img src={PROFILE_PIC} alt="profile" className="w-36 h-36 rounded-full object-cover ring-4 ring-slate-700 mx-auto" />
            <h1 className="text-center mt-4 text-2xl font-bold">{data.name}</h1>
            <p className="text-center mt-2 text-sm text-slate-400">{data.headline}</p>

            <div className="mt-6 text-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Location</span>
                <span className="font-medium">{data.location}</span>
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

            <a href={data.linkedin} target="_blank" rel="noreferrer" className="block mt-6 text-center text-sm bg-gradient-to-r from-indigo-600 to-violet-600 py-2 rounded-lg font-semibold shadow-md">View on LinkedIn</a>

            <div className="mt-8">
              <h3 className="text-slate-300 uppercase text-xs tracking-widest">Skills</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {data.skills.map((s) => (
                  <span key={s} className="px-3 py-1 bg-slate-800/60 rounded-full text-xs border border-slate-700">{s}</span>
                ))}
              </div>
            </div>
          </motion.aside>

          {/* Right column - Content */}
          <main className="w-full md:w-2/3 p-8">
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <h2 className="text-xl font-semibold">About</h2>
              <p className="mt-3 text-slate-300 leading-relaxed">{data.about}</p>
            </motion.section>

            <motion.section className="mt-8" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
              <h2 className="text-xl font-semibold">Experience</h2>
              <div className="mt-4 space-y-4">
                {data.experiences.map((exp) => (
                  <article key={exp.title} className="p-4 bg-slate-800/40 rounded-lg border border-slate-700">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">{exp.title}</h3>
                        <p className="text-sm text-slate-400">{exp.company} • <span className="text-slate-300">{exp.location}</span></p>
                      </div>
                      <span className="text-sm text-slate-400">{exp.date}</span>
                    </div>
                    <p className="mt-2 text-slate-300 text-sm">{exp.desc}</p>
                  </article>
                ))}
              </div>
            </motion.section>

            <motion.section className="mt-8 grid md:grid-cols-2 gap-6" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
              <div>
                <h2 className="text-xl font-semibold">Education</h2>
                <ul className="mt-4 space-y-3">
                  {data.education.map((ed) => (
                    <li key={ed.school} className="p-3 bg-slate-800/30 rounded-md border border-slate-700">
                      <strong className="block">{ed.degree}</strong>
                      <span className="text-slate-400 text-sm">{ed.school}</span>
                      <div className="text-slate-500 text-xs mt-1">{ed.date}</div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold">Certifications & Projects</h2>
                <div className="mt-4 space-y-3">
                  {data.certifications.map((c) => (
                    <div key={c.title} className="p-3 bg-slate-800/30 rounded-md border border-slate-700">
                      <div className="font-medium">{c.title}</div>
                      <div className="text-slate-400 text-sm">{c.issuer} • {c.date} {c.id ? `• ID: ${c.id}` : ''}</div>
                    </div>
                  ))}

                  {data.projects.map((p) => (
                    <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="block p-3 bg-slate-800/30 rounded-md border border-slate-700 hover:scale-[1.01] transition">
                      <div className="font-medium">{p.name}</div>
                      <div className="text-slate-400 text-sm">{p.desc}</div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.section>

            <motion.section className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <h2 className="text-xl font-semibold">Languages & Contact</h2>
              <div className="mt-3 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="text-slate-300">{data.languages.join(' • ')}</div>
                </div>
                <div className="flex items-center gap-3">
                  <a href={data.linkedin} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 bg-slate-800/40 rounded-lg border border-slate-700">LinkedIn</a>
                  <a href={`mailto:shubham@example.com`} className="text-sm px-3 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-lg font-semibold">Email</a>
                </div>
              </div>
            </motion.section>

            <footer className="mt-10 text-center text-xs text-slate-500">Built with ❤️ — Modern Tech theme. Customize further by splitting this file into components and connecting to your real contact details.</footer>
          </main>
        </div>
      </div>
    </div>
  )
}
