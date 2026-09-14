import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '다양한 경험을 해왔고, 문제 해결 과정과 배우는 것을 즐깁니다. ' +
      'Kotlin, Java, Spring Framework 를 사용하여 주로 업무를 해왔습니다. ' +
      '여러 분야의 사람들과 소통하는 것에도 익숙하여, 타 부서 사람들과도 잘 어울리는 편입니다.',
    'AI를 활용하여 개발 전반에 반복되는 업무를 자동화하여 업무의 효율성을 높이고 있습니다. ' +
      '항상 무엇이든 먼저 해보고 효율적인 방향을 제시하려 노력합니다.',
    '경력 19년 11개월 (2006.11 ~ )',
  ],
  sign: 'donjiral',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
