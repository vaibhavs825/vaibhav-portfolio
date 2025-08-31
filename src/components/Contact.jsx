import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="bg-gray-50 section-padding">
      <div className="max-width-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Interested in collaborating on data science projects or discussing opportunities? 
            I'd love to hear from you.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 card-hover">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-primary-50 rounded-lg">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">Let's discuss opportunities</p>
                </div>
              </div>
              <a 
                href="mailto:vaibhavs825@gmail.com" 
                className="text-primary-600 hover:text-primary-700 font-medium"
                data-testid="link-contact-email"
              >
                vaibhavs825@gmail.com
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 card-hover">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-primary-50 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Consultation</h3>
                  <p className="text-gray-600">Free 30-min strategy call</p>
                </div>
              </div>
              <button 
                className="text-primary-600 hover:text-primary-700 font-medium"
                data-testid="button-schedule-call"
              >
                Schedule a Call
              </button>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Connect on Social Media
            </h3>
            
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/vaibhavsharma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-6 py-3 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors group"
                data-testid="link-social-github"
              >
                <Github className="w-5 h-5 text-gray-700 group-hover:text-gray-900" />
                <span className="font-medium text-gray-700 group-hover:text-gray-900">GitHub</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/vaibhavs825" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-6 py-3 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors group"
                data-testid="link-social-linkedin"
              >
                <Linkedin className="w-5 h-5 text-gray-700 group-hover:text-gray-900" />
                <span className="font-medium text-gray-700 group-hover:text-gray-900">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact