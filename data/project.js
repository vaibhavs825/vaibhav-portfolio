// src/data/projects.js
const projects = [
  {
    id: 'model-ci',
    title: 'Model CI/CD for churn prediction',
    short: 'End-to-end CI/CD for models: train → test → package → deploy with monitoring.',
    description: `Built an automated CI/CD pipeline for churn prediction models. Responsibilities:
- Designed training jobs, automated tests for data drift and model quality,
- Packaged models into Docker images and deployed to Kubernetes,
- Added monitoring + alerts for model performance.`,
    role: 'Lead MLOps Engineer',
    impact: 'Reduced time-to-deploy from 3 days → 3 hours; lowered model rollback incidents by 60%.',
    tech: ['Python', 'MLflow', 'Kubernetes', 'Airflow', 'Docker'],
    repo: 'https://github.com/vaibhavs825/your-model-ci-repo',
    live: '', // if you have a demo or dashboard URL
    image: '/attached_assets/model-ci-screenshot.png' // or an external URL
  },
  {
    id: 'feature-store',
    title: 'Realtime Feature Store',
    short: 'Streaming feature store to serve low-latency features for production models',
    description: `Implemented a streaming feature store using Kafka + Redis for low-latency reads. Built ingestion, aggregator jobs and a consistent schema for features.`,
    role: 'Data Platform Engineer',
    impact: 'Serves 50k+ feature queries/day with 120ms median latency.',
    tech: ['Kafka', 'Redis', 'Python', 'Spark'],
    repo: 'https://github.com/vaibhavs825/your-feature-store',
    live: '',
    image: '/attached_assets/feature-store.png'
  },
  // add more projects...
];

export default projects;
