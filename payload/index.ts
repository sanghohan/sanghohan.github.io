import career from './career';
import { About, Credential, Education, LinkItem, Meta, Profile, Resume, SkillGroup } from './types';

const meta: Meta = {
  updatedAt: '2026-11-12',
  siteUrl: 'https://sanghohan.github.io',
  title: '한상호 | Senior Backend Engineer · Tech Lead',
  description:
    '20년차 백엔드 개발자 한상호의 이력서. Kotlin·Java·Spring 기반의 결제·커머스 서버 설계, 팀 리딩, AI Agent 기반 개발 프로세스.',
  favicon: '/asset/table-tennis.ico',
  ogImage: 'https://sanghohan.github.io/asset/sangho.jpg',
  sign: 'donjiral',
};

const profile: Profile = {
  name: '한상호',
  englishName: 'Sangho Han',
  headline: 'Senior Backend Engineer · Tech Lead',
  tagline:
    'Kotlin·Java·Spring으로 결제·커머스 서버의 아키텍처를 설계하고 레거시를 다시 살려 왔습니다. 지금은 AI Agent를 개발 프로세스에 녹여 팀이 일하는 방식을 바꾸는 데 집중하고 있습니다.',
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
    '20년간 결제·커머스·고객 데이터 도메인에서 Java·Kotlin·Spring 기반 서버를 설계하고 운영해 왔습니다. 아키텍처 설계와 기술 방향성 수립, REST API 설계 기준 정립, DB 설계와 쿼리 최적화, 장애 원인 분석과 재발 방지까지 백엔드의 전 과정을 직접 책임져 왔습니다.',
    '현재는 개발 리딩을 맡아 코드 리뷰와 기술 멘토링, 주요 기술 과제의 설계 검토를 맡고 있으며 프론트엔드·인프라·기획 등 유관 부서와의 협업을 주도합니다. 여러 분야의 사람들과 소통하는 데 익숙하고, 무엇이든 먼저 해보고 효율적인 방향을 제시하려 노력합니다.',
    'Claude Code·Codex 같은 AI Agent를 코드 분석·리팩터링·테스트 코드 생성·기술 문서화에 적용하고 있습니다. AI가 만든 코드의 정확성·보안·성능·유지보수성은 결국 사람이 책임져야 한다고 생각하며, 요구사항과 아키텍처 제약, 코딩 규칙을 Agent에 명확히 전달하는 방법을 정리해 팀에 확산하고 있습니다. 원퀘스트(ONEquest)와 글로벌 버전 Cross Play에서는 설계·개발·검증과 일감·PR 생성, 디펙트 처리까지 Claude·Codex 기반으로 자동화해 이 방식을 실제 서비스로 검증했습니다.',
  ],
  facts: [
    { label: '주력 스택', value: 'Kotlin · Java · Spring' },
    { label: '현재', value: '원스토어 개발 리더' },
    { label: 'AI Dev Tools', value: 'Claude Code · Codex' },
  ],
};

const skills: SkillGroup[] = [
  { category: 'Language', items: ['Kotlin', 'Java', 'TypeScript', 'JavaScript', 'Unix-C'] },
  {
    category: 'Framework',
    items: [
      'Spring Boot',
      'Spring Framework',
      'Kotlin Coroutines',
      'Spring Data JPA',
      'Spring Batch',
      'Spring Security',
      'React',
      'Next.js',
    ],
  },
  {
    category: 'Database',
    items: ['MySQL', 'Oracle', 'PostgreSQL', 'Redis', 'DynamoDB', 'BigQuery'],
  },
  {
    category: 'Infra',
    items: [
      'Docker',
      'Kubernetes',
      'AWS (EKS)',
      'Azure (AKS)',
      'Helm Chart',
      'Linux',
      'Shell Script',
    ],
  },
  {
    category: 'DevOps',
    items: ['Git', 'GitHub Actions', 'Jenkins', 'Argo CD', 'Argo Workflow', 'Airflow', 'Swagger'],
  },
  { category: 'AI Dev Tools', items: ['Claude Code', 'Codex', 'MCP', 'Claude Cowork'] },
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
