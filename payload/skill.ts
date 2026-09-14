import { ISkill } from '../component/skill/ISkill';

const language: ISkill.Skill = {
  category: 'Language',
  items: [{ title: 'Kotlin' }, { title: 'Java' }, { title: 'Unix-C' }, { title: 'JavaScript' }],
};

const framework: ISkill.Skill = {
  category: 'Framework',
  items: [
    { title: 'Spring Framework' },
    { title: 'Spring Boot' },
    { title: 'Spring Data JPA' },
    { title: 'Spring Batch' },
    { title: 'Spring Security' },
    { title: 'React / Next.js' },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    { title: 'Oracle' },
    { title: 'PostgreSQL' },
    { title: 'Redis' },
    { title: 'DynamoDB' },
    { title: 'BigQuery' },
  ],
};

const infra: ISkill.Skill = {
  category: 'Infra / DevOps',
  items: [
    { title: 'AWS (EKS)' },
    { title: 'Azure (AKS)' },
    { title: 'Kubernetes' },
    { title: 'Docker' },
    { title: 'Helm Chart' },
    { title: 'Linux' },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    { title: 'GitHub Actions' },
    { title: 'Jenkins' },
    { title: 'Argo CD / Argo Workflow' },
    { title: 'Airflow' },
    { title: 'Swagger' },
    { title: 'Git' },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [language, framework, database, infra, etc],
};

export default skill;
