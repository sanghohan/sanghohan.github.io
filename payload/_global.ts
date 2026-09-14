import { IGlobal } from '../component/common/IGlobal';

const title = 'Resume - 한상호';
const description = '19년차 백엔드 개발자 한상호의 웹 이력서입니다. Kotlin, Java, Spring 기반의 서버 개발과 팀 리딩 경험.';

export const _global: IGlobal.Payload = {
  favicon: '/asset/table-tennis.ico',
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: 'https://sanghohan.github.io/asset/sangho.jpg',
          width: 800,
          height: 600,
          alt: 'OpenGraph Image Sample.png',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Sangho',
        lastName: 'Han',
        username: 'sanghohan',
      },
    },
  },
};
