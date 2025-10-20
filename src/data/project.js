const projects = [
  {
    id: 'unifai',
    title: 'UnifAI (Optum)',
    short: 'E2E MLOps pipeline to streamline in-house model lifecycle.',
    description: `Built and maintained scalable data and model pipelines for Optum Labs. Managed data migration from Parquet to Delta, used MLflow for experiment tracking, and orchestrated workflows with Airflow. Developed a Brew installer to simplify onboarding.`,
    role: 'Data Scientist (Engineering Team)',
    impact: 'Improved deployment reliability and reduced onboarding complexity.',
    tech: ['Python','MLflow','Airflow','DeltaLake','Databricks','Azure'],
    repo: '',
    live: '',
    image: '/assets/unifai.png'
  },
  {
    id: 'data-extractor',
    title: 'Data Extractor (Vitrana)',
    short: 'NLP pipeline for extracting structured data from medical text.',
    description: `Designed ML & DL pipelines using NER (BiLSTM, BERT), coreference resolution, relational modeling and object detection to extract entities from diverse medical narratives and forms.`,
    role: 'Software Engineer — R&D',
    impact: 'Significantly improved extraction efficiency.',
    tech: ['Python','TensorFlow','BERT','OpenCV'],
    repo: '',
    live: '',
    image: '/assets/data-extractor.png'
  },
  // ... other projects (Text2Face, Blistick, HiLIT, ML_WorkFlow, Jira tool)
]

export default projects
