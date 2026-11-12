import { Company } from './types';

const career: Company[] = [
  {
    name: '원스토어(주)',
    role: '개발 리더 / Tech Lead',
    startedAt: '2024-04',
    summary:
      '웹 커머스 도메인의 백엔드를 총괄하며 신규 웹샵 오픈과 국내·글로벌 웹서비스 재개발을 리딩했고, 현재는 원퀘스트(ONEquest)와 글로벌 버전 Cross Play에서 설계·개발·검증과 일감·PR 생성, 디펙트 처리까지 AI Agent로 자동화한 개발 프로세스를 팀 표준으로 확산하고 있습니다.',
    projects: [
      {
        title: '원퀘스트(ONEquest) 신규 개발·오픈 - 퀘스트·리워드 플랫폼',
        startedAt: '2026-04',
        summary:
          '게임 설치·플레이 등 미션을 완료하면 원스토어 포인트(글로벌은 $ONE 토큰)를 지급하는 퀘스트·리워드 플랫폼의 백엔드를 신규 개발해 오픈. 설계·개발·검증과 일감·PR 생성까지 AI Agent 기반으로 자동화해 진행',
        bullets: [
          '퀘스트 등록·참여·달성 조건 검증·보상 지급(원스토어 포인트) 백엔드 API와 운영 Admin 설계·개발',
          "입점 게임의 설치·플레이 이벤트를 퀘스트 조건으로 연동해 오픈 - '프로스트 킹덤 in 원퀘스트' 이벤트로 서비스 시작(2026.07)",
          '텔레그램·지갑·웹으로 흩어져 있던 참여형 프로모션을 원스토어 플랫폼 안으로 통합, 글로벌 버전 Cross Play와 같은 구조로 설계',
          '요구사항·아키텍처 제약·코딩 규칙을 담은 프로젝트 컨텍스트 문서를 기준으로 AI Agent가 도메인 모델·REST API·DB 스키마를 설계하고 구현 → 테스트 생성 → 자체 검증까지 수행, 사람은 정확성·보안·성능·유지보수성 리뷰에 집중',
          'MCP로 Jira·Bitbucket·Confluence를 Agent에 연결해 설계 문서 → 일감 생성 → 브랜치·구현 → 테스트 → PR 생성·설명 작성까지 자동화',
          'AI-ready DB 표준의 첫 적용 - 새 DB 엔진 대신 MySQL 위에 AI 질의에 최적화된 표준 레이어를 두는 방향으로 결정하고, Codex로 구조화 질의 PoC(SQL 파서 우회, PK fast path)를 수행·검증',
          '설계~PR까지 반복 작업을 자동화해 개발 리드타임 단축, 테스트 커버리지와 문서 최신성 확보',
        ],
        stack: [
          'Kotlin',
          'Spring Boot',
          'MySQL',
          'Redis',
          'Claude Code',
          'Codex',
          'MCP',
          'Jira',
          'Bitbucket',
        ],
      },
      {
        title: 'Cross Play(크로쓰 플레이) - 원퀘스트 글로벌 버전 개발',
        startedAt: '2026-03',
        summary:
          'Cross 생태계 게임의 사전예약~플레이 단계 퀘스트를 수행하면 Cross 토큰·럭키박스를 보상하는 글로벌 퀘스트·리워드 플랫폼의 백엔드 개발',
        bullets: [
          '원퀘스트의 글로벌 버전으로, 국내와 동일한 AI Agent 기반 설계·개발·검증·일감·PR 자동화 프로세스로 개발',
          '텔레그램 미니앱으로 운영되던 서비스를 웹 서비스로 확장한 Cross Play 2.0 업데이트(2026.06)에 백엔드로 참여',
          '퀘스트 진행·검증과 보상 지급 API 개발, 글로벌 서비스에 맞춘 다국어·시간대 처리',
        ],
        stack: ['Kotlin', 'Spring Boot', 'MySQL', 'Claude Code', 'Codex', 'MCP'],
      },
      {
        title: '디펙트 처리 자동화 - Claude·Codex 기반 원인 분석·수정·검증·PR',
        startedAt: '2026-10',
        summary:
          'Jira에 등록된 디펙트를 AI Agent가 분석·수정·검증하고 PR까지 생성하도록 자동화해, 사람은 최종 리뷰와 머지 판단에 집중',
        bullets: [
          '등록된 디펙트(Jira)를 Agent가 읽어 재현 조건·관련 코드·로그를 분석하고 원인 후보와 영향 범위를 정리',
          'Claude Code와 Codex를 교차 활용 - 한쪽이 수정 코드와 회귀 테스트를 작성하면 다른 쪽이 정확성·회귀 위험·보안을 독립 검토해 단일 모델 의존 완화',
          '수정 → 테스트 → PR 생성·설명 작성 → Jira 상태 전환까지 MCP로 연결해 자동화, 사람은 최종 코드 리뷰와 머지 판단',
          '반복 유형의 디펙트를 분류해 재발 방지 규칙(코딩 규칙·테스트 케이스)을 프로젝트 컨텍스트 문서에 반영',
          '디펙트 1건당 분석·수정·PR 생성에 걸리는 시간을 단축하고 처리 과정을 일관된 형식으로 기록',
        ],
        stack: ['Claude Code', 'Codex', 'MCP', 'Jira', 'Bitbucket', 'Kotlin', 'Spring Boot'],
      },
      {
        title: 'AI Agent 기반 개발 프로세스 팀 표준화',
        startedAt: '2025-01',
        summary:
          'ONEquest에서 검증한 Agent 기반 개발 방식을 팀 표준으로 정리하고, AI 도구 검토와 도입 적합성 평가를 주도',
        bullets: [
          '레거시 API 서버(moweb-api·webshop-api 등)의 코드 분석·리팩터링·테스트 코드 생성·기술 문서화에 AI Agent를 적용',
          'AI 생성 코드 리뷰 기준과 Agent 가이드(컨텍스트 문서·코딩 규칙 전달 방식)를 수립해 팀원이 같은 방식으로 일하도록 전파',
          'AI Agent를 사내 Confluence·Jira와 연동해 조사·분석 결과와 기술 결정을 위키 문서로 즉시 반영',
          'Claude·ChatGPT·Cursor·n8n·Flowise 등 AI 도구를 백엔드 워크플로 관점에서 검토하고 도입 적합성 평가',
        ],
        stack: ['Claude Code', 'Codex', 'MCP', 'Kotlin', 'Spring Boot'],
      },
      {
        title: '백엔드 기술 방향성 수립 · 아키텍처 검토',
        startedAt: '2025-06',
        summary: 'JDK·동시성 모델의 기술 방향을 비교 검토해 팀의 의사결정 근거를 문서로 유지',
        bullets: [
          'JDK 17 + Kotlin Coroutines 기반 서비스의 JDK 25 LTS 업그레이드 방향 수립',
          'Spring WebFlux · MVC+Coroutines · Virtual Threads(JEP 491 포함)를 비교해 Confluence 기술 문서로 유지',
          'Coroutines→Virtual Threads 전면 전환은 ROI가 낮다고 판단해 보류 — 근거 기반의 기술 의사결정',
        ],
        stack: ['JDK 25', 'Kotlin Coroutines', 'Virtual Threads'],
      },
      {
        title: '원웹샵(OneWebShop) 오픈',
        startedAt: '2024-04',
        summary: '아이템을 웹에서 판매하는 웹샵을 신규 개발하여 오픈',
        bullets: [
          '웹샵 개발 리딩 - 업무 분배, 서버 셋팅, 네트워크, 도메인 등 시스템 구성 전반 담당',
          'Webshop API Server 설계·개발 - REST API 설계 기준과 Swagger 문서 표준 정립',
        ],
        stack: ['Kotlin', 'Spring Boot', 'Spring Data JPA', 'Redis', 'Swagger', 'Docker'],
        link: { label: 'webshop.onestore.net', href: 'https://webshop.onestore.net' },
      },
      {
        title: '국내·글로벌 웹서비스 Project Leading',
        startedAt: '2024-04',
        summary: '국내와 싱가폴·미국·대만 웹서비스를 함께 운영하며 레거시를 재개발',
        bullets: [
          '프로젝트 리더, 인원 4명 (프론트 3명, 백엔드 본인 1명)',
          '레거시 소스 리팩토링 및 재개발, Backend 개발 전담',
          '국내 웹 서비스 재개발을 제안하고 주도',
          '글로벌 웹서비스의 Docker·Kubernetes(AKS) 이전을 주도 (Argo CD 배포 파이프라인은 DevOps와 협업)',
          '코드 리뷰와 기술 멘토링으로 기술 부채를 해소하는 동시에 주니어·중간 레벨 개발자의 개발 스킬과 개발 의지를 끌어올림',
        ],
        stack: [
          'Kotlin',
          'Spring Boot',
          'Spring Data JPA',
          'Java',
          'Spring',
          'React',
          'Next.js',
          'JSP',
          'Redis',
          'Oracle',
          'Docker',
          'Azure',
          'AKS',
          'Argo CD',
          'Jenkins',
        ],
        link: { label: 'm.onestore.co.kr', href: 'https://m.onestore.co.kr' },
      },
      {
        title: '스티커 스토어 재개발',
        startedAt: '2024-05',
        endedAt: '2024-10',
        summary: '레거시 SMS 이모티콘 판매 시스템을 재개발하고 구독 기능을 추가하여 오픈',
        bullets: [
          '삼성폰에서 SMS 창을 열면 실제 동작을 확인할 수 있음',
          '프로젝트 리더, 인원 4명 - 시스템 설계 및 Backend(API Server) 개발 전담',
          '서버, 방화벽, 네트워크, 도메인 셋팅 요청 및 구성 참여',
        ],
        stack: ['Kotlin', 'Spring Boot', 'Spring Security', 'Redis', 'React', 'Next.js', 'Jenkins'],
      },
    ],
  },
  {
    name: '(주)이마트',
    role: '개발 리딩 / Tech Leader',
    startedAt: '2022-06',
    endedAt: '2024-04',
    summary:
      '이마트·트레이더스의 고객 데이터를 다루는 분석 시스템과 API를 설계하고, AWS EKS 기반의 운영 환경을 직접 구축했습니다.',
    projects: [
      {
        title: '고객 분석 시스템(대시보드) 개발',
        startedAt: '2022-06',
        endedAt: '2024-04',
        summary: '고객 데이터를 기반으로 분석 결과를 시각화하는 대시보드',
        bullets: [
          'Backend Tech 리더, 프로젝트 인원 6명',
          '성별·나이·고객등급·판매금액 등 고객 데이터를 시각화',
          'BigQuery에서 고객 데이터를 읽어 PostgreSQL로 적재하는 파이프라인 개발, 160만 건을 매일 Sync',
          'Chart 렌더링을 위한 데이터 제공 API 개발',
          'EKS 구성 및 GitHub Actions 기반 CI/CD 구축',
          '동일한 구조를 확장하여 가락시장 경락가 데이터 대시보드로 재활용',
          'AWS Admin 권한을 받아 서비스 전반의 설정을 직접 경험',
        ],
        stack: [
          'Kotlin',
          'Spring Boot',
          'Spring Data JPA',
          'Spring Batch',
          'Spring Security',
          'PostgreSQL',
          'BigQuery',
          'AWS',
          'EKS',
          'Helm',
          'Airflow',
          'GitHub Actions',
        ],
      },
      {
        title: '고객 식별 키 발급 시스템 개발',
        startedAt: '2022-06',
        endedAt: '2022-12',
        summary: '광고 데이터 수집을 위한 고객 식별 체계 구축',
        bullets: ['광고 데이터 수집을 위한 fingerPrinter 개발', '고객 식별 key 발급 서버 개발'],
        stack: ['Kotlin', 'Spring Boot', 'AWS', 'EKS'],
      },
      {
        title: '영수증 데이터 조회 API 개발',
        startedAt: '2022-06',
        endedAt: '2024-04',
        summary: '영수증 데이터를 제공하는 API 서버를 개발하여 EKS에 구성 및 서비스',
        bullets: ['API Server 개발', 'EKS 서비스 환경 구축'],
        stack: ['Kotlin', 'Spring Boot', 'DynamoDB', 'AWS', 'EKS', 'Helm', 'GitHub Actions'],
      },
    ],
  },
  {
    name: '원스토어(주)',
    role: '개발 리딩',
    startedAt: '2016-03',
    endedAt: '2022-06',
    summary:
      '원스토어의 결제 Core, 인앱결제 Open API, 배치 시스템 등 스토어의 핵심 백엔드를 개발하고 운영했습니다.',
    projects: [
      {
        title: '원스토어 결제시스템 Core(원페이) 개발/운영',
        startedAt: '2016-03',
        endedAt: '2022-06',
        summary: '원스토어 결제를 책임지는 원페이 Backend 서버 - 담당자 1명(본인)',
        bullets: [
          'Front Server로부터 결제 정보를 받아 PG사(네이버페이, 페이코, 통신사 후불 등) 연동',
          '구매시스템 및 입점사에 결제 결과 전송 개발',
          '네이버 스토어 이관에 따른 결제내역 이관 작업 수행',
          '초당 20여 건의 결제 트래픽, 하루 400~500MB의 로그가 발생하는 시스템을 단독 운영하며 장애 원인 분석과 재발 방지 대책 수립',
          '운영에 필요한 Admin, Log Viewer를 직접 개발하여 운영 효율 증대',
        ],
        stack: ['Java', 'Spring', 'Oracle'],
      },
      {
        title: '원스토어 인앱결제 SDK Open API 설계/개발',
        startedAt: '2016-03',
        endedAt: '2022-06',
        summary:
          '개발사에게 구글플레이와 유사한 환경의 Open API를 제공하여 원스토어 입점 증대에 기여',
        bullets: [
          '외부 개발사가 사용하는 REST API의 설계 표준을 수립하고 개발, 개발자 문서 작성까지 담당 - 담당자 2명 중 1인',
        ],
        stack: ['Java', 'Spring Boot'],
        link: {
          label: 'API 문서 보기',
          href: 'https://onestore-dev.gitbook.io/dev/tools/tools/old-version/v19/api-api-v6',
        },
      },
      {
        title: '원스토어 배치 시스템 업그레이드',
        startedAt: '2016-03',
        endedAt: '2022-06',
        summary: '레거시화된 전체 배치 프로젝트를 Spring Batch로 업그레이드',
        bullets: [
          '배치 목록 현행화(약 200여 개의 Jenkins Job) 및 새 서버로 이전',
          '여러 개발자의 손을 타며 묵혀뒀던 배치서버 이관을 담당자 1명(본인)으로 완료',
        ],
        stack: ['Java', 'Spring Batch', 'Oracle', 'Jenkins'],
      },
      {
        title: '원스토리 서비스 API 개발/운영, 서버 분리',
        startedAt: '2016-03',
        endedAt: '2022-06',
        summary: '서비스 개편을 앞두고 긴급 투입되어 API 로직 수정과 성능 개선을 수행',
        bullets: [
          '이전 백엔드 개발자를 대체하여 해결되지 않던 버그와 성능 문제를 해결, 그 해 SR 평가를 받음',
          '원스토어 서버에 함께 있던 원스토리(만화·도서 서비스)를 분리하여 유지보수 용이성 증대',
          'VM, Azure 서버에 WAS, Batch, RabbitMQ 등을 설치 및 셋팅',
        ],
        stack: ['Java 1.8', 'Spring Boot 2.x', 'iBATIS', 'Oracle', 'RabbitMQ', 'Azure'],
      },
      {
        title: '원스토어 회원 모듈 운영/개발',
        startedAt: '2016-03',
        endedAt: '2022-06',
        summary: 'Project Leader, 수행 인원 3명 - 판매자 회원 모듈 및 기타 모듈 담당',
        bullets: [
          '기업회원 레거시 소스 리팩토링',
          '영세중소기업 카드공제 차액 연동 배치 개발',
          '회원 파트 결제 수단 추가 개발 및 PG사 연동 개발',
        ],
        stack: ['Java', 'Spring', 'iBATIS', 'Oracle'],
      },
    ],
  },
  {
    name: '에스케이플래닛(주)',
    role: 'Software Engineer',
    startedAt: '2013-06',
    endedAt: '2016-03',
    summary:
      '협력사가 남긴 레거시 결제 모듈을 인수해 안정화하고, NFC Open Platform의 성능을 크게 끌어올렸습니다.',
    projects: [
      {
        title: 'IN-APP 결제시스템 개발/운영',
        startedAt: '2013-06',
        endedAt: '2016-03',
        summary: 'JSP로만 이루어진 In-App 결제 시스템을 인수하여 개발/운영',
        bullets: [
          '한 파일에 8,000라인 이상인 레거시 코드를 분석 후 모듈화하여 효율적으로 운영',
          '매달 1일 서버 폭주(Ting 요금제)로 반복되던 장애의 원인을 분석하고, 열악한 환경에서 아파치 캐시·mod_ratelimit·로드 밸런싱·KeepAlive 설정으로 재발을 최소화',
        ],
        stack: ['Java', 'JSP', 'Apache', 'Oracle'],
      },
      {
        title: 'NFC Open Platform',
        startedAt: '2013-06',
        endedAt: '2016-03',
        summary: '모바일 신용카드·교통카드를 발급/관리하는 Open API 서버 구축 및 상용화 - 담당 2명',
        bullets: [
          '휴대폰에 신용카드·교통카드를 발급, 삭제, 사용가능/사용불가 처리하는 기능을 제공',
          '대표 서비스 - 티머니, 캐시비 등의 교통카드 및 각 신용카드사의 모바일 카드',
          '리팩토링과 불필요한 모듈 식별·제거 결과, nGrinder 측정에서 기존 대비 2.7배의 처리 능력 향상',
        ],
        stack: ['Java', 'Spring', 'Oracle', 'nGrinder'],
      },
    ],
  },
  {
    name: 'SK 씨앤씨(주)',
    role: 'Software Engineer (계약직)',
    startedAt: '2011-07',
    endedAt: '2013-06',
    summary:
      '유심 관리 시스템(UCMS)을 운영하면서 레거시 Java 소스를 Spring Framework로 재개발했습니다.',
    projects: [
      {
        title: 'UCMS(유심 관리 시스템) 운영 및 재개발',
        startedAt: '2011-07',
        endedAt: '2013-06',
        summary: '레거시 Java 소스를 Spring Framework 기반으로 재개발',
        bullets: [
          '개발 리더 2명 중 1인, 총 인원 10여 명',
          'NFC Open Platform TSM 서버 개발/운영을 함께 담당',
        ],
        stack: ['Java', 'Spring', 'Oracle', 'jQuery'],
      },
    ],
  },
  {
    name: '인크로스(주) 관악지점',
    role: 'Software Engineer',
    startedAt: '2010-12',
    endedAt: '2011-07',
    summary: 'SKT 무선 포탈 NATE의 매출 기여도가 높은 서비스들을 개발/운영했습니다.',
    projects: [
      {
        title: 'SKT 무선 NATE 서비스',
        startedAt: '2010-12',
        endedAt: '2011-07',
        summary: '생활 In 화보서비스와 문자 중계 서비스를 안정적으로 개발/운영',
        bullets: [
          '2010 월드컵 실시간 문자 중계 서비스 - 계약 문제로 오픈 1주일 전 개발을 시작했으나 오픈에 성공',
          '한국 경기 중 승부차기가 예상보다 길어지자, 실시간 모니터링으로 UI를 긴급 수정하여 오류를 최소화',
          'SK Telecom Tbag(TCloud) 운영 PM - 업무를 분석해 불필요한 업무를 정리하여 효율 증대',
        ],
        stack: ['Java', 'Tomcat', 'WAP'],
      },
    ],
  },
  {
    name: '이노에이스(주)',
    role: 'Software Engineer',
    startedAt: '2009-01',
    endedAt: '2010-12',
    summary: '근거리 통신망을 이용한 방송 서비스 서버를 상사의 도움 없이 단독으로 개발했습니다.',
    projects: [
      {
        title: 'SK Telecom ZoneCasting Server',
        startedAt: '2009-01',
        endedAt: '2010-12',
        summary: '근거리 통신망(ZigBee)을 이용한 방송 서비스 - SKT의 실험적 프로젝트',
        bullets: [
          '모바일 네트워크 게임서버 소스를 기반으로 TCP/UDP를 동시 지원하는 멀티 프로세스·멀티 스레드 데몬 개발',
          'P2P 및 방송 패킷이 동시에 가능하도록 설계',
          '방송 패킷을 빠르게 전송해야 하는 요구사항을 방송 기준치를 상회하여 충족',
          '상사의 도움 없이 단독 진행',
        ],
        stack: ['Unix-C', 'TCP/UDP', 'Multi Process', 'Multi Thread'],
      },
    ],
  },
  {
    name: '(주)젬백스링크',
    nameNote: '입사 당시 사명 필링크(주)',
    role: 'Software Engineer',
    startedAt: '2006-11',
    endedAt: '2009-01',
    summary:
      'Unix C로 모바일 네트워크 게임 게이트웨이를 개발하며 개발자로서의 기본기를 다졌습니다.',
    projects: [
      {
        title: 'SKT 모바일 네트워크 게임 게이트웨이',
        startedAt: '2006-11',
        endedAt: '2009-01',
        summary: '서버를 구축할 수 없는 중소 업체들을 위한 모바일 네트워크 게임 서버',
        bullets: [
          'TCP/IP 멀티 프로세스, 멀티 스레드 데몬 개발',
          'Unix C 개발자가 부족해 경험이 부족한 신입이었으나, 빠르게 기존 소스를 습득하여 운영/개발을 맡음',
          '기존 소스를 바탕으로 게임아이템 판매 게이트웨이를 설계/개발하여 오픈, SKT 본사에서 게임 개발자 설명회 진행',
          '타 업체가 수정하지 못한 LG U+ 1000자 문자서비스 순서 오류 버그를 파견 2주 만에 해결하여 조기 진급 포상',
        ],
        stack: ['Unix-C', 'Java', 'EJB', 'Multi Process', 'Multi Thread'],
      },
    ],
  },
];

export default career;
