/**
 * 이력서 데이터 모델
 *
 * 회사(Company) 아래에 프로젝트(Project)가 중첩되는 구조로,
 * 실제 이력서 문서와 동일한 계층을 가진다.
 */

export interface Contact {
  /** 화면에 보이는 텍스트 */
  label: string;
  /** 클릭 시 이동할 주소. 없으면 링크가 아닌 텍스트로 렌더링된다. */
  href?: string;
  /** 아이콘 종류 */
  icon: 'mail' | 'phone' | 'github' | 'facebook' | 'youtube' | 'link';
}

export interface Profile {
  name: string;
  englishName: string;
  /** 이름 아래 한 줄 타이틀 */
  headline: string;
  /** 타이틀 아래 요약 문장 */
  tagline: string;
  photo: string;
  contacts: Contact[];
}

export interface About {
  /** 문단 단위 자기소개 */
  paragraphs: string[];
  /** 히어로 영역에 강조해서 보여줄 항목. '총 경력' 은 career 데이터에서 계산되므로 넣지 않는다. */
  facts: { label: string; value: string }[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  startedAt: string;
  endedAt?: string;
  /** 한 줄 요약. 카드 상단에 본문보다 진하게 노출된다. */
  summary?: string;
  bullets: string[];
  stack?: string[];
  link?: { label: string; href: string };
}

export interface Company {
  name: string;
  /** 사명 변경 등 부가 표기 */
  nameNote?: string;
  role: string;
  startedAt: string;
  /** 없으면 '재직 중' 으로 표기된다. */
  endedAt?: string;
  summary: string;
  projects: Project[];
}

export interface Education {
  school: string;
  major: string;
  startedAt: string;
  endedAt: string;
}

export interface Credential {
  title: string;
  issuer: string;
  at: string;
}

export interface LinkItem {
  label: string;
  href: string;
  note?: string;
}

export interface Meta {
  /** YYYY-MM-DD. 경력 기간 계산의 기준일로도 사용된다. */
  updatedAt: string;
  siteUrl: string;
  title: string;
  description: string;
  favicon: string;
  ogImage: string;
  sign: string;
}

export interface Resume {
  meta: Meta;
  profile: Profile;
  about: About;
  skills: SkillGroup[];
  career: Company[];
  educations: Education[];
  credentials: Credential[];
  links: LinkItem[];
}
