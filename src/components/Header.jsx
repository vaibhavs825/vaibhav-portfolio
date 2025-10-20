import React from 'react'

export default function Header() {
  return (
    <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
      <div className="text-lg font-bold">Vaibhav Sharma</div>
      <nav className="space-x-4 text-sm">
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
      </nav>
    </header>
  )
}
