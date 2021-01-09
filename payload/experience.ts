import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: '원스토어(구 SK Planet)',
      position: 'Software Enginner, DevOps',
      startedAt: '2013-06',
      descriptions: [
        '회원 파트 결제수단 API 개발, FDS 적용',
        '전시 파트 배치서버 운영, 전시 Admin 3.0 백엔드 개발',
        '원스토어 인앤결제 서버 API 설계/개발/구축/운영, Log Viewer개발 https://dev.onestore.co.kr/devpoc/reference/view/IAP_v17_09_server_api',
        '원스토어 결제시스템 Pay-Planet Core 시스템 운영',
      ],
      skillKeywords: ['Java', 'Spring', 'Hystrix', 'Oracle', 'Mysql', 'Jenkins', 'javaScript', 'Jquery'],
    },
    {
      title: 'SK C&C',
      position: 'Software Enginner',
      startedAt: '2011-07',
      endedAt: '2013-05',
      descriptions: [
        'NFC Open Platform TSM 서버 개발/운영',
        'Usim card management system 운영, Spring 적용',
      ],
      skillKeywords: ['Java', 'Spring', 'Oracle', 'javaScript', 'Jquery', 'Jenkins'],
    },
    {
      title: '이노에이스',
      position: 'Software Enginner, DevOps',
      startedAt: '2009-01',
      endedAt: '2011-06',
      descriptions: [
        '무선 통신 시스템 개발 업체',
        'SKT NFC Open Platform TSM 서버 개발/운영',
        'Usim card management system 운영, Spring 적용',
      ],
      skillKeywords: ['Java', 'Spring', 'Struts', 'Unix-c', 'javaScript', 'Jquery', 'Wap'],
    },
    {
      title: '필링크',
      position: 'Software Enginner, DevOps',
      startedAt: '2006-11',
      endedAt: '2009-03',
      descriptions: [
        '무선 통신 시스템 개발 업체',
        'SKT 모바일네트웍 게임 게이트웨이 개발/운영',
        'SKT GXG 서비스 Admin 페이지 개발',
        'LG U+ 1000자 문자 서비스 Bug-fix 파견 업무',
      ],
      skillKeywords: ['Java', 'ejb', 'Unix-c', 'javaScript'],
    },
  ],
};

export default experience;
