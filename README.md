# sanghohan.github.io

한상호의 웹 이력서. <https://sanghohan.github.io>

Next.js 로 작성하고 `next export` 로 정적 페이지를 만들어 `docs/` 에 커밋하면,
GitHub Pages 가 `main` 브랜치의 `/docs` 를 그대로 서빙한다.

## 구조

```
payload/          이력서 데이터 (여기만 고치면 된다)
  index.ts        프로필 · 소개 · 스킬 · 학력 · 특허 · 링크 · 메타 정보
  career.ts       회사별 경력과 그 아래 프로젝트
  types.ts        데이터 모델 정의
component/Icon.tsx  인라인 SVG 아이콘
lib/date.ts       기간 · 근무 개월수 계산
pages/index.tsx   한 페이지짜리 이력서 화면
styles/globals.css  디자인 토큰과 전체 스타일 (라이트/다크/인쇄)
public/asset/     프로필 사진, favicon
docs/             배포 결과물. 직접 고치지 말고 빌드로 갱신한다.
```

## 수정 후 배포

```bash
npm ci --legacy-peer-deps   # 최초 1회 (lockfile 의 peer dependency 충돌 회피)
npm run export              # docs/ 재생성
git add -A && git commit -m "..." && git push
```

`npm run export` 는 lint → build → export → `docs/.nojekyll` 생성까지 한 번에 수행한다.
푸시하면 GitHub Pages 가 1~2분 안에 반영한다.

## 참고

- 경력 기간은 `payload/index.ts` 의 `meta.updatedAt` 을 기준일로 계산한다.
  재직 중인 회사의 근무 기간을 갱신하려면 이 날짜를 바꾼다.
- 다크 모드는 시스템 설정을 따르고, 우측 상단 버튼으로 직접 전환할 수 있다.
- 브라우저 인쇄(⌘P)하면 그대로 PDF 이력서가 되도록 인쇄 스타일을 넣어 두었다.

## License

MIT. 초기 구조는 [uyu423/resume-nextjs](https://github.com/uyu423/resume-nextjs) 에서 출발했다.
