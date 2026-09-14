import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '원웹샵(OneWebShop) 오픈',
      startedAt: '2024-04',
      where: '원스토어',
      descriptions: [
        {
          content: '아이템을 웹에서 판매하는 웹샵 개발 리딩 - webshop.onestore.net 개발/오픈',
          weight: 'MEDIUM',
        },
        { content: '업무 분배, 서버 셋팅, 네트워크, 도메인 등 인프라 구성 전반 담당' },
        { content: 'Webshop API Server 개발 - Kotlin, Spring Boot, Redis, JPA, Swagger' },
      ],
    },
    {
      title: '글로벌/국내 웹서비스 Project Leading',
      startedAt: '2024-04',
      where: '원스토어',
      descriptions: [
        {
          content:
            'm.onestore.co.kr(국내), m.onestore.net(싱가폴·미국), m.enjoystore.com.tw(대만) 운영/개발',
          weight: 'MEDIUM',
        },
        {
          content: '역할',
          weight: 'MEDIUM',
          descriptions: [
            { content: '프로젝트 리더, 프로젝트 인원 4명 (프론트 3명, 백엔드 본인 1명)' },
            { content: '레거시 소스 리팩토링 및 재개발, Backend 개발 전담' },
            { content: '국내 웹 서비스 재개발 제안 및 주도' },
            { content: '글로벌 웹서비스 k8s 이전 주도' },
          ],
        },
        {
          content: '기대효과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '프로젝트 기술 부채 해결, 주니어·중간 레벨 개발자의 개발 스킬 및 개발 의지 증대',
            },
          ],
        },
        {
          content: '개발/배포 환경',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Front : React, Next.js, JSP, JSTL' },
            {
              content:
                'Backend : Kotlin, Spring Boot, Spring Data JPA, Java, Spring, Redis, Oracle, Swagger-UI',
            },
            { content: '글로벌 : Azure, AKS, Docker Image, Argo Workflow, Argo CD' },
            { content: '국내 : VM 장비, Jenkins 배포' },
          ],
        },
      ],
    },
    {
      title: '스티커 스토어 재개발',
      startedAt: '2024-05',
      endedAt: '2024-10',
      where: '원스토어',
      descriptions: [
        {
          content: '레거시 SMS 이모티콘 판매 시스템을 재개발하고 구독 기능을 추가하여 오픈',
          weight: 'MEDIUM',
        },
        { content: '현재 삼성폰에서 SMS 창을 열면 확인 가능' },
        {
          content: '역할',
          weight: 'MEDIUM',
          descriptions: [
            { content: '프로젝트 리더, 프로젝트 인원 4명' },
            { content: '시스템 설계 및 Backend(API Server) 개발 전담' },
            { content: '서버, 방화벽, 네트워크, 도메인 셋팅 요청 및 구성 참여' },
          ],
        },
        {
          content: '개발/배포 환경',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Front : React, Next.js' },
            { content: 'Backend : Kotlin, Spring Boot, Spring Security, Redis, Swagger-UI' },
            { content: 'VM 장비, Jenkins 배포' },
          ],
        },
      ],
    },
    {
      title: '고객 분석 시스템(대시보드) 개발',
      startedAt: '2022-06',
      endedAt: '2024-04',
      where: '이마트',
      descriptions: [
        {
          content:
            '이마트·트레이더스 고객 데이터(성별, 나이, 고객등급, 판매금액 등)를 시각화하는 분석 대시보드 개발',
          weight: 'MEDIUM',
        },
        { content: '해당 소스를 바탕으로 가락시장 경락가 데이터 대시보드로 확장' },
        {
          content: '역할',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Backend Tech 리더, 프로젝트 인원 6명' },
            { content: 'BigQuery에서 고객 데이터를 읽어 PostgreSQL로 적재하는 파이프라인 개발' },
            { content: '160만 건의 데이터를 매일 Sync' },
            { content: 'Chart를 위한 데이터 제공 API 개발' },
            { content: 'EKS 구성 및 GitHub Actions 기반 CI/CD 구축' },
          ],
        },
        {
          content: '개발/배포 환경',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Kotlin, Spring Boot, Spring Data JPA, Spring Security, Spring Batch, Airflow, K8s CronJob, Swagger-UI',
            },
            { content: 'AWS, EKS, Docker Image, GitHub Actions, Helm Chart' },
          ],
        },
        {
          content:
            'AWS Admin 권한을 받아 AWS 서비스의 모든 설정을 직접 경험하며 익숙해질 수 있었습니다.',
        },
      ],
    },
    {
      title: '이마트 영수증 데이터 조회 API 개발',
      startedAt: '2022-06',
      endedAt: '2024-04',
      where: '이마트',
      descriptions: [
        { content: '영수증 데이터를 제공하는 API 서버를 개발하여 EKS에 구성 및 서비스' },
        { content: '역할 : API Server 개발, EKS 서비스 환경 구축' },
        {
          content: '개발 환경 : Kotlin, Spring Boot, GitHub Actions, Helm Chart, AWS, EKS, DynamoDB',
        },
      ],
    },
    {
      title: '원스토어 결제시스템 Core(원페이) 개발/운영',
      startedAt: '2016-03',
      endedAt: '2022-06',
      where: '원스토어',
      descriptions: [
        {
          content: '원스토어 결제를 책임지는 원페이 Backend 서버 개발/운영 - 담당자 1명(본인)',
          weight: 'MEDIUM',
        },
        {
          content:
            'Front Server로부터 결제 정보를 받아 PG사(네이버페이, 페이코, 통신사 후불 등) 연동',
        },
        { content: '구매시스템 및 입점사에 결제 결과 전송 개발' },
        { content: '네이버 스토어 이관에 따른 결제내역 이관 작업 수행' },
        { content: '초당 20여 건의 결제 트래픽, 하루 400~500MB의 로그가 발생하는 시스템 운영' },
        { content: '운영에 필요한 Admin 및 Log Viewer 개발로 운영 효율 증대' },
      ],
    },
    {
      title: '원스토어 인앱결제 SDK Open API 설계/개발',
      startedAt: '2016-03',
      endedAt: '2022-06',
      where: '원스토어',
      descriptions: [
        {
          content:
            '개발사에게 구글플레이 API와 유사한 환경의 API를 제공함으로써 원스토어 입점 증대에 기여',
          weight: 'MEDIUM',
        },
        {
          content: 'https://onestore-dev.gitbook.io/dev/tools/tools/old-version/v19/api-api-v6',
          href: 'https://onestore-dev.gitbook.io/dev/tools/tools/old-version/v19/api-api-v6',
        },
        { content: '역할 : API 설계, API 개발, API 설명 문서 작성 - 담당자 2명 중 1인' },
        { content: '개발 환경 : Java, Spring Boot' },
      ],
    },
    {
      title: '원스토어 배치 시스템 업그레이드',
      startedAt: '2016-03',
      endedAt: '2022-06',
      where: '원스토어',
      descriptions: [
        {
          content: '레거시화된 원스토어 전체 배치 프로젝트를 Spring Batch로 업그레이드',
          weight: 'MEDIUM',
        },
        { content: '배치 목록 현행화(약 200여 개의 Jenkins Job) 및 새 서버로 이전 작업' },
        {
          content:
            '여러 개발자의 손을 타며 묵혀놨던 배치서버 이관 프로젝트를 담당자 1명(본인)으로 성공적으로 수행',
        },
        { content: '개발 환경 : Java, Spring Batch, Oracle' },
      ],
    },
    {
      title: '원스토리 서비스 API 개발/운영, 서버 분리',
      startedAt: '2016-03',
      endedAt: '2022-06',
      where: '원스토어',
      descriptions: [
        {
          content:
            '원스토리 서비스 개편을 앞둔 시점에 긴급 투입되어 API 로직 수정, Bug fix, 성능 개선 수행 - 담당자 1명(본인)',
          weight: 'MEDIUM',
        },
        {
          content:
            '이전 백엔드 개발자를 대체하여 성능 개선 및 해결하지 못했던 버그들을 해결, 그 해 SR 평가를 받음',
        },
        {
          content:
            '원스토어 서버에 함께 있던 원스토리(만화·도서 서비스)를 분리하여 유지보수 용이성 증대',
          weight: 'MEDIUM',
        },
        { content: 'VM, Azure 서버에 WAS, Batch, RabbitMQ 등을 설치 및 셋팅' },
        { content: '개발 환경 : Java 1.8, Spring Boot 2.x, iBATIS, Oracle' },
      ],
    },
    {
      title: '원스토어 회원 모듈 운영/개발',
      startedAt: '2016-03',
      endedAt: '2022-06',
      where: '원스토어',
      descriptions: [
        { content: '기업회원 레거시 소스 리팩토링' },
        { content: '영세중소기업 카드공제 차액 연동 배치 개발' },
        { content: '회원 파트 결제 수단 추가 개발 및 PG사 연동 개발' },
        {
          content:
            '역할 : Project Leader, 수행 인원 3명 - 판매자 회원 모듈 및 기타 모듈 담당',
        },
        { content: '개발 환경 : Java, Spring, iBATIS, Oracle' },
      ],
    },
    {
      title: 'IN-APP 결제시스템 개발/운영',
      startedAt: '2013-06',
      endedAt: '2016-03',
      where: 'SK플래닛',
      descriptions: [
        {
          content: '협력사가 개발해 놓은 In-App 결제 시스템 개발/운영 - JSP로만 이루어진 모듈',
          weight: 'MEDIUM',
        },
        { content: '한 파일에 8,000라인 이상인 레거시 코드를 분석 후 모듈화하여 효율적으로 운영' },
        {
          content:
            '매달 1일 서버 폭주(Ting 요금제)로 인한 장애를, 열악한 환경에서 아파치 캐시·mod_ratelimit·로드 밸런싱·KeepAlive 설정으로 최소화',
        },
      ],
    },
    {
      title: 'NFC Open Platform, 유심 관리 시스템(UCMS)',
      startedAt: '2011-07',
      endedAt: '2016-03',
      where: 'SK C&C, SK플래닛',
      descriptions: [
        {
          content:
            '휴대폰에 신용카드·교통카드를 발급, 삭제, 사용가능/사용불가 처리하는 기능을 제공하는 Open API 서버 구축 및 상용화',
          weight: 'MEDIUM',
        },
        { content: '대표적인 서비스 - 티머니, 캐시비 등의 교통카드 및 각 신용카드사의 모바일 카드' },
        {
          content:
            '리팩토링 및 불필요한 모듈 식별·제거 작업 결과, nGrinder 테스트에서 기존 대비 2.7배의 처리 능력 향상 - 담당자 2명',
        },
        { content: '레거시 Java 소스를 Spring Framework로 재개발 - 개발 리더 2명 중 1인, 총 10여 명' },
      ],
    },
    {
      title: 'SKT 무선 NATE 서비스',
      startedAt: '2010-12',
      endedAt: '2011-07',
      where: '인크로스',
      descriptions: [
        {
          content:
            '생활 In 화보서비스 - SKT 무선 포탈 NATE 서비스의 매출에 많은 부분을 기여하는 화보서비스와 문자 중계서비스를 안정적으로 개발/운영',
          weight: 'MEDIUM',
        },
        {
          content:
            '2010 월드컵 실시간 문자 중계 서비스 - 계약 문제로 오픈 1주일 전 개발을 시작했으나 서비스 오픈에 성공. 한국 경기 중 승부차기가 예상보다 길어졌을 때 실시간 모니터링으로 UI를 긴급 수정하여 오류 발생을 최소화',
        },
        {
          content: 'SK Telecom Tbag(TCloud) 운영 PM - 업무를 분석하여 불필요한 업무를 정리, 업무 효율 증대',
          weight: 'MEDIUM',
        },
      ],
    },
    {
      title: 'SK Telecom ZoneCasting',
      startedAt: '2009-01',
      endedAt: '2010-12',
      where: '이노에이스',
      descriptions: [
        {
          content: 'SKT의 실험적 프로젝트로, 근거리 통신망(ZigBee)을 이용한 방송 서비스',
          weight: 'MEDIUM',
        },
        {
          content:
            '모바일 네트워크 게임서버 소스를 기반으로, TCP/UDP를 동시에 지원하는 멀티 프로세스·멀티 스레드 데몬 개발',
        },
        { content: 'P2P 및 방송 패킷이 동시에 가능하도록 개발' },
        { content: '방송 패킷을 빠르게 전송해야 하는 요구사항을 방송 기준치를 상회하여 충족' },
        { content: '상사의 도움 없이 단독 진행' },
      ],
    },
    {
      title: 'SKT 모바일 네트워크 게임 게이트웨이',
      startedAt: '2006-11',
      endedAt: '2009-01',
      where: '젬백스링크',
      descriptions: [
        {
          content:
            '서버를 구축할 수 없는 중소 업체들을 위한 모바일 네트워크 게임 서버 프로젝트 - TCP/IP 멀티 프로세스, 멀티 스레드 데몬 개발',
          weight: 'MEDIUM',
        },
        {
          content:
            'Unix C 개발자가 부족하여 경험이 부족한 신입이었으나, 훌륭한 상사를 만나 빠른 시간 안에 기존 소스를 습득하여 운영/개발을 맡아 상사의 일을 성공적으로 분담',
        },
        {
          content:
            '기존 소스를 바탕으로 게임아이템 판매 게이트웨이를 설계/개발하여 성공적으로 오픈, SKT 본사에서 게임 개발자 설명회 진행',
        },
        {
          content:
            '타 업체가 수정하지 못한 LG U+ 1000자 문자서비스 순서 오류 버그를 파견 2주 만에 해결하여 조기 진급 포상',
        },
        {
          content:
            '훌륭한 사수를 만나 문서 관리의 중요성, 개발자로서의 자세 등을 배울 수 있었던 경험이었습니다.',
        },
      ],
    },
  ],
};

export default project;
