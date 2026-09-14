import career from './career';
import { About, Credential, Education, LinkItem, Meta, Profile, Resume, SkillGroup } from './types';

const meta: Meta = {
  updatedAt: '2026-09-14',
  siteUrl: 'https://sanghohan.github.io',
  title: '한상호 | Backend Engineer',
  description:
    '19년차 백엔드 개발자 한상호의 이력서. Kotlin·Java·Spring 기반의 서버 개발과 결제·커머스 도메인, 팀 리딩 경험.',
  favicon: '/asset/table-tennis.ico',
  ogImage: 'https://sanghohan.github.io/asset/sangho.jpg',
  sign: 'donjiral',
};

const profile: Profile = {
  name: '한상호',
  englishName: 'Sangho Han',
  headline: 'Backend Engineer · Tech Lead',
  tagline:
    'Kotlin과 Spring으로 결제·커머스 도메인의 서버를 만들고, 레거시를 다시 살려내는 일을 해왔습니다.',
  photo: '/asset/sangho.jpg',
  contacts: [
    { label: 'sanghohan@gmail.com', href: 'mailto:sanghohan@gmail.com', icon: 'mail' },
    { label: '010-4044-85XX', icon: 'phone' },
    { label: 'github.com/sanghohan', href: 'https://github.com/sanghohan', icon: 'github' },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=100001597576423',
      icon: 'facebook',
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/channel/UCM4taYYMdhvwQSBAStbYB5Q',
      icon: 'youtube',
    },
  ],
};

const about: About = {
  paragraphs: [
    '다양한 경험을 해왔고, 문제 해결 과정과 배우는 것을 즐깁니다. Kotlin, Java, Spring Framework를 사용하여 주로 업무를 해왔습니다.',
    '여러 분야의 사람들과 소통하는 것에 익숙하여 타 부서 사람들과도 잘 어울리는 편입니다. 항상 무엇이든 먼저 해보고 효율적인 방향을 제시하려 노력합니다.',
    'AI를 활용해 개발 전반에 반복되는 업무를 자동화하여 업무의 효율성을 높이고 있습니다.',
  ],
  facts: [
    { label: '주력 스택', value: 'Kotlin · Spring' },
    { label: '현재', value: '원스토어 개발팀장 대행' },
  ],
};

const skills: SkillGroup[] = [
  { category: 'Language', items: ['Kotlin', 'Java', 'Unix-C', 'JavaScript'] },
  {
    category: 'Framework',
    items: [
      'Spring Boot',
      'Spring Framework',
      'Spring Data JPA',
      'Spring Batch',
      'Spring Security',
      'React',
      'Next.js',
    ],
  },
  { category: 'Database', items: ['Oracle', 'PostgreSQL', 'Redis', 'DynamoDB', 'BigQuery'] },
  {
    category: 'Infra',
    items: ['AWS (EKS)', 'Azure (AKS)', 'Kubernetes', 'Docker', 'Helm Chart', 'Linux'],
  },
  {
    category: 'DevOps',
    items: ['GitHub Actions', 'Jenkins', 'Argo CD', 'Argo Workflow', 'Airflow', 'Swagger'],
  },
];

const educations: Education[] = [
  {
    school: '단국대학교',
    major: '전기전자 컴퓨터 공학부 (서울캠퍼스) 졸업',
    startedAt: '1999-03',
    endedAt: '2005-08',
  },
  { school: '태성고등학교', major: '졸업', startedAt: '1996-03', endedAt: '1999-02' },
];

const credentials: Credential[] = [
  {
    title: '공개특허 10-2015-0090467',
    issuer: '애플릿 발급 시스템 및 그 방법, 그리고 이에 적용되는 장치',
    at: '2014-01',
  },
  { title: '정보처리기사', issuer: '한국산업인력공단', at: '2004-06' },
];

const links: LinkItem[] = [
  {
    label: '수행 프로젝트 상세',
    href: 'https://www.slideshare.net/secret/Jxpsd6PlFlgOzn',
    note: 'SlideShare',
  },
  {
    label: 'SK플래닛, ‘스마트터치(SmartTouch)’ 출시',
    href: 'https://www.skplanet.com/pr/newsView?sSeq=116&sKey=&sWord=&cPage=1',
    note: '2012.12.11 보도자료',
  },
];

const resume: Resume = {
  meta,
  profile,
  about,
  skills,
  career,
  educations,
  credentials,
  links,
};

export default resume;
