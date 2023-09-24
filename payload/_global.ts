// import favicon from '../asset/table-tennis.ico';
// import previewImage from '../asset/table-tennis2.ico';
import { IGlobal } from '../component/common/IGlobal';

const title = 'Resume - 한상호';
const description = 'This is a web resume.';

export const _global: IGlobal.Payload = {
  favicon: '../asset/table-tennis.ico',
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: '../asset/table-tennis2.ico',
          width: 800,
          height: 600,
          alt: 'OpenGraph Image Sample.png',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Lorem',
        lastName: 'ipsum',
        username: 'lorem',
        gender: 'female',
      },
    },
  },
};
