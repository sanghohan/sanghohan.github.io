import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Store Api Center(SAC)',
      startedAt: '2019-01',
      where: 'OneStore',
      descriptions: [
        { content: 'OneStore Api Center 개발/운영' },
        {
          content: '2020년 - 회원 모듈 운영, 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '인증 레거시 리펙토링' },
            { content: '회원파트 결제 수단 추가 개발' },
            { content: 'PG사 연동 개발' },
          ],
        },
        {
          content: '2019년 - 전시 모듈 운영, 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '2년간 진행 되지 않았던 전시 랭킹 배치 신규 버전으로 porting 프로젝트 성공, 원스토어 배치 서버 전체 이전 작업',
            },
            {
              content: '전시 3.0 Admin 백엔드 개발 - 밤낮/주말을 가리지 않아서 촉박한 일정을 소화',
            },
          ],
        },
      ],
    },
    {
      title: '원스토어 결제시스템 Pay-Planet',
      startedAt: '2014-09',
      endedAt: '2018-12',
      where: 'SKP, OneStore',
      descriptions: [
        {
          content: '원스토어 인앱결제 서버 API',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'https://dev.onestore.co.kr/wiki/ko/doc/%EA%B0%9C%EB%B0%9C%EB%8F%84%EA%B5%AC/api-v5-sdk-v17/api',
            },
            {
              content:
                '개발사로 하여금 구글플레이 API 환경과 유사한 API를 제공하므로써 원스토어 입점 증대에 기여함',
            },
          ],
        },
        {
          content: 'Pay-Planet',
          weight: 'MEDIUM',
          descriptions: [
            { content: '인수인계 받은지 2주만에 결제 시스템 오픈/안정적인 운영' },
            { content: 'PG사 연동개발, 통신사 연동 개발' },
            { content: '운영에 필요한 Admin 개발, log viewer 개발 등으로 운영효율 증대' },
          ],
        },
      ],
    },
    {
      title: 'NFC Open Platform, Usim card management system',
      startedAt: '2011-07',
      endedAt: '2014-08',
      where: 'SK C&C, SK Planet',
      descriptions: [
        {
          content:
            '휴대폰에 신용카드, 교통카드를 발급, 삭제 사용가능/사용가능 등의 기능을 제공하는 Open API 서버구축 및 상용화',
        },
        { content: '대표적인 서비스 - 티머니, 캐시비등의 교통 카드, 각 신용카드사의 모바일 카드' },
        { content: 'TDD, 페어프로그래밍 경험' },
        {
          content:
            '리펙토링, 모듈 간소화 작업으로 nGrinder로 테스트 결과, 기존 대비 2.7배의 처리 능력 향상',
        },
      ],
    },

    {
      title: 'SK Telecom 네이트 통합플랫폼',
      startedAt: '2010-01',
      endedAt: '2010-12',
      where: '이노에이스',
      descriptions: [
        {
          content: 'SKT 무선 NATE 서비스',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '생활 In 화보서비스 - SKT 무선 포탈 NATE 서비스의 매출에 많은 부분을 기여하는 화보서비스 문자 중계서비스를 안정적으로 개발/운영 함',
            },
            {
              content:
                '2010 월드컵 실시간 문자 중계 서비스 - 계약 문제로 월드컵 오픈 1주일전 개발 시작,' +
                ' 우여곡절 끝에 서비스 오픈 성공, 한국 경기중 예상치 못하게 승부차기가 오래 진행되어, 실시간 모니터링 덕분에 UI긴급 수정하여 오류발생을 최소화 함',
            },
          ],
        },
        {
          content: 'SK Telecom Tbag(TCloud) 운영 PM',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Tbag 서비스의 중요한업무, 필요 없는 업무를 정리하여 업무효율 증대' },
          ],
        },
      ],
    },
    {
      title: 'SK Telecom ZoneCasting',
      startedAt: '2009-01',
      endedAt: '2009-12',
      where: '이노에이스',
      descriptions: [
        { content: 'tcp/udp를 동시에 지원하여, p2p 및 방송 패킷 동시 가능하도록 개발 함' },
        { content: '방송 패킷을 빠르게 전송해야하는 요구사항을 방송 기준치를 상회하여 충족함' },
      ],
    },
    {
      title: 'SKT 모바일 네트워크 게임 게이트웨이',
      startedAt: '2006-11',
      endedAt: '2009-01',
      where: '필링크',
      descriptions: [
        {
          content:
            'Unix C 개발자가 부족하여 경험도 부족한 신입 사원 이였으나, 훌륭한 상사를 만나 빠른 시간 안에 기존 소스를 습득, 운영/개발을 맡아 상사의 일을 성공적으로 분담',
        },
        {
          content:
            '기존 소스를 바탕으로 게임아이템 판매 게이트웨이를 설계/개발하여 성공적으로 오픈, SKT 본사에서 게임 개발자 설명회 진행',
        },
        {
          content:
            '타업체가 LG U+ 1000자 문자서비스 순서 바뀜 버그를 수정하지 못하여, LG U+로 파견 업무를 나가, 2주만에 문제 해결하여 조기 진급 포상',
        },
        {
          content:
            '훌륭한 사수를 많나 문서 관리의 중요성, 개발자 로서의 자세 등을 배울 수 있었던 경험 이였습니다.',
        },
      ],
    },
  ],
};

export default project;
