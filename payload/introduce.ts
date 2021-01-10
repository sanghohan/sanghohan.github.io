import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '다양한 경험을 한 백엔드 개발자 입니다. 새로운 시스템을 구축하는것도 물론 가슴뛰는 일이지만, 기존 시스템을 자효율적으로 리펙토링 하는것도 좋아합니다. ' +
      '동료 간의 신뢰를 쌓고, 팀워크로 인한 지식/기술 습득 과정을 매우 좋아하는 개발자입니다. 타 부서와 커뮤니케이션에서도 그들의 언어를 사용하려고 노력하여 원만한 관계를 유지하는 편입니다. 심플한 설계와 이해하기 쉬운 개발을 지향합니다.',
  ],
  sign: 'donjiral',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
