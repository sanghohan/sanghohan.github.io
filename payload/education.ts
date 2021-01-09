import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '단국대학교 서울캠퍼스',
      subTitle: '전기전자 컴퓨터 공학부 졸업',
      startedAt: '1999-03',
      endedAt: '2005-08',
    },
    {
      title: '태성 고등학교',
      subTitle: '졸업',
      startedAt: '1996-03',
      endedAt: '1999-02',
    },
  ],
};

export default education;
