import { Code, Database, Cloud, GitBranch, BarChart3, Workflow } from 'lucide-react'

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "SQL", "Scala"]
    },
    {
      title: "MLOps & Orchestration", 
      icon: <Workflow className="w-6 h-6" />,
      skills: ["MLflow", "Kubeflow", "Airflow", "CI/CD", "GitHub Actions"]
    },
    {
      title: "Data Engineering",
      icon: <Database className="w-6 h-6" />,
      skills: ["Kafka", "Spark", "Snowflake", "Docker", "Kubernetes"]
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS", "Azure", "GCP"]
    },
    {
      title: "Data Visualization",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: ["Tableau", "PowerBI", "Streamlit"]
    }
  ]

  return (
    <section id="skills" className="bg-gray-50 px-6 py-16 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building robust data solutions with modern technologies and industry best practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              data-testid={`card-skill-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills