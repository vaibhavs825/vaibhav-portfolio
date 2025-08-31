import { ExternalLink, Github, Workflow, Zap, PieChart } from 'lucide-react'

function Projects() {
  const projects = [
    {
      title: "ML Pipeline Automation",
      description: "Automated ML pipeline for training, deployment & monitoring using MLflow & Kubernetes. Reduces model deployment time by 80% and ensures consistent model performance tracking.",
      icon: <Workflow className="w-8 h-8" />,
      tags: ["MLflow", "Kubernetes", "Python", "Docker", "MLOps"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Real-time Data Streaming",
      description: "Scalable Kafka + Spark system processing millions of daily events. Built for high-throughput data ingestion with real-time analytics and monitoring dashboards.",
      icon: <Zap className="w-8 h-8" />,
      tags: ["Kafka", "Spark", "Scala", "Real-time", "AWS"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Investment Dashboard", 
      description: "Personal finance dashboard for portfolio analytics, expense forecasting, and budget tracking. Features predictive modeling and interactive visualizations.",
      icon: <PieChart className="w-8 h-8" />,
      tags: ["Python", "Streamlit", "Tableau", "Finance", "Analytics"],
      gradient: "from-orange-500 to-red-600"
    }
  ]

  return (
    <section id="projects" className="bg-white section-padding">
      <div className="max-width-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing impactful data science and engineering solutions that solve real-world problems
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden card-hover"
              data-testid={`card-project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} text-white`}>
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      data-testid={`badge-project-tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                          data-testid={`button-view-project-${index}`}>
                    <ExternalLink className="w-4 h-4" />
                    <span>View Project</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                          data-testid={`button-github-project-${index}`}>
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects