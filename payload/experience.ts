import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: '원스토어(구 SK Planet)',
      position: 'Software Enginner, DevOps',
      startedAt: '2013-06',
      descriptions: [
        '회원 파트 개발/운영',
        '전시 파트 배치서버 운영, 전시 Admin 3.0 백엔드 개발',
        '원스토어 인앤결제 서버 Open API 개발',
        '원스토어 결제시스템 Pay-Planet Core 시스템 운영',
        'SKP NFC Open Platform TSM 서버 개발/운영',
      ],
      skillKeywords: [
        'Java',
        'Spring',
        'JPA',
        'Netty',
        'Hystrix',
        'Oracle',
        'Mysql',
        'Jenkins',
        'javaScript',
        'Jquery',
      ],
    },
    {
      title: 'SK C&C',
      position: 'Software Enginner',
      startedAt: '2011-07',
      endedAt: '2013-05',
      descriptions: ['NFC Open Platform TSM 서버 개발/운영', 'Usim card management system 운영'],
      skillKeywords: ['Java', 'Spring', 'Netty', 'Oracle', 'javaScript', 'Jquery', 'Jenkins'],
    },
    {
      title: '이노에이스',
      position: 'Software Enginner, DevOps',
      startedAt: '2009-01',
      endedAt: '2011-06',
      descriptions: [
        'SK Telecom 무선 네이트 통합플랫폼 개발',
        'SK Telecom Tbag(TCloud) 운영 PM',
        'SK Telecom ZoneCasting – ziggbee 칩셋을 이용한 모바일 방송연구 과제 수행',
      ],
      skillKeywords: [
        'Java',
        'Tomcat',
        'Unix-c',
        'tcp/udp',
        'multi process',
        'multi thread',
        'javaScript',
        'Jquery',
        'Wap',
      ],
    },
    {
      title: '필링크',
      position: 'Software Enginner, DevOps',
      startedAt: '2006-11',
      endedAt: '2008-12',
      descriptions: [
        '무선 통신 시스템 개발 업체',
        'SKT 모바일네트웍 게임 게이트웨이 - 요금제, 과금 데이터 연동',
        'SKT GXG 서비스 Admin 페이지 개발',
        'LG U+ 1000자 문자 서비스 Bug-fix 파견 업무',
      ],
      skillKeywords: ['Java', 'ejb', 'Unix-c', 'multi process', 'multi thread', 'javaScript'],
    },
  ],
};

export default experience;
