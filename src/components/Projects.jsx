import React, { useState } from 'react'
import projects from '../data/projects'

function Tag({ t }) { return <span className="text-xs px-2 py-1 rounded-full border bg-white/60">{t}</span> }

export default function Projects() {
  const [open, setOpen] = useState(null)
  return (
    <section id="projects" className="mt-12 max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold">Selected Projects</h2>
      <p className="mt-2 text-gray-600">Production work, open-source and prototypes.</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => (
          <article key={p.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 overflow-hidden">
            <div className="h-44 bg-gray-100" style={{ backgroundImage: `url(${p.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">{p.short}</p>
              <div className="mt-3 flex flex-wrap gap-2">{p.tech.slice(0,4).map(t => <Tag key={t} t={t} />)}</div>
              <div className="mt-4 flex items-center justify-between">
                <button onClick={() => setOpen(p.id)} className="text-sm underline">Read case study</button>
                <div className="flex gap-3">
                  {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="text-sm">Code</a>}
                  {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="text-sm">Live</a>}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6" onClick={() => setOpen(null)}>
          <div className="bg-white max-w-3xl w-full rounded-2xl p-6 shadow-lg" onClick={e=>e.stopPropagation()}>
            {(() => {
              const p = projects.find(x => x.id === open)
              if (!p) return null
              return (
                <>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">{p.title}</h3>
                      <div className="text-sm text-gray-600 mt-1">{p.role} • {p.tech.join(' • ')}</div>
                    </div>
                    <button onClick={()=>setOpen(null)} className="text-gray-500">Close</button>
                  </div>
                  <div className="mt-4 text-gray-700 space-y-3">
                    <p>{p.description}</p>
                    {p.impact && <p className="font-medium">Impact: {p.impact}</p>}
                  </div>
                  <div className="mt-6 flex gap-3">
                    {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border">View code</a>}
                    {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-black text-white">Open demo</a>}
                  </div>
                </>
              )
            })()}
          </div>
        </div>
      )}
    </section>
  )
}
