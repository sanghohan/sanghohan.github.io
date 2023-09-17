import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Java, Kotlin',
      level: 3,
    },
    {
      title: 'Spring',
      level: 3,
    },
    {
      title: 'C#',
      level: 2,
    },
    {
      title: 'GO',
      level: 2,
    },
    {
      title: 'Unix-C',
      level: 2,
    },
  ],
};

const infra: ISkill.Skill = {
  category: 'Infra',
  items: [
    {
      title: 'AWS',
      level: 3,
    },
    {
      title: 'K8S(EKS)',
      level: 3,
    },
    {
      title: 'Airflow',
      level: 3,
    },
    {
      title: 'GCP',
      level: 2,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      level: 3,
    },
    {
      title: 'Postgresql',
      level: 3,
    },
    {
      title: 'Redis',
      level: 2,
    },
    {
      title: 'MongoDB',
      level: 1,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'javascript.js',
      level: 2,
    },
    {
      title: 'Vue.js',
      level: 2,
    },
    {
      title: 'jquery.js',
      level: 2,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'jira',
    },
    {
      title: 'linux',
    },
    {
      title: 'git',
    },
    {
      title: 'wiki',
    },
    {
      title: 'jenkins',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, infra, database, frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
