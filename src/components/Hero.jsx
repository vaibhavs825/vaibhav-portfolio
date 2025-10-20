import React from 'react'

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-6 items-center">
      <div>
        <p className="text-sm text-gray-600">Hi, my name is</p>
        <h1 className="text-4xl font-extrabold">Vaibhav Sharma</h1>
        <p className="mt-4 text-gray-700">
          I’m a Senior Data Scientist specializing in <strong>MLOps, data engineering, and scalable ML systems</strong>. I build production-grade ML pipelines that automate model training, testing, deployment and monitoring.
        </p>
        <div className="mt-6 flex gap-3">
          <a href="#projects" className="px-4 py-2 rounded-md bg-primary text-white">See projects</a>
          <a href="/resume.pdf" className="px-4 py-2 rounded-md border">Download resume</a>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="w-56 h-56 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-lg">
          <div className="text-center">Your Photo</div>
        </div>
      </div>
    </section>
  )
}
