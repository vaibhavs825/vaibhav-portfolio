import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

function Hero() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-width-container section-padding text-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            Vaibhav <span className="gradient-text">Sharma</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-600 font-medium">
            Senior Data Scientist | MLOps & Data Engineering Enthusiast
          </h2>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Passionate about transforming data into actionable insights. Specializing in building scalable 
            ML pipelines, real-time data systems, and end-to-end MLOps solutions that drive business value.
          </p>
          
          <div className="flex justify-center space-x-6 pt-4">
            <a 
              href="https://github.com/vaibhavsharma" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 hover:bg-primary-50 transition-colors group"
              data-testid="link-github"
            >
              <Github className="w-6 h-6 text-gray-700 group-hover:text-primary-600" />
            </a>
            
            <a 
              href="https://linkedin.com/in/vaibhavsharma" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 hover:bg-primary-50 transition-colors group"
              data-testid="link-linkedin"
            >
              <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-primary-600" />
            </a>
            
            <a 
              href="mailto:your.email@example.com" 
              className="p-3 rounded-full bg-gray-100 hover:bg-primary-50 transition-colors group"
              data-testid="link-email"
            >
              <Mail className="w-6 h-6 text-gray-700 group-hover:text-primary-600" />
            </a>
          </div>
          
          <button 
            onClick={() => scrollToSection('skills')}
            className="mt-12 inline-flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
            data-testid="button-scroll-skills"
          >
            <span>Explore My Work</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero