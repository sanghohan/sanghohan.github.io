/** 'YYYY-MM' 을 월 단위 정수로 변환한다. */
function toMonthIndex(ym: string): number {
  const [year, month] = ym.split('-').map(Number);
  return year * 12 + (month - 1);
}

/** '2024-04' -> '2024.04' */
export function formatMonth(ym: string): string {
  const [year, month] = ym.split('-');
  return `${year}.${month}`;
}

/** 종료일이 없으면 '현재' 로 표기한다. */
export function formatPeriod(startedAt: string, endedAt?: string): string {
  return `${formatMonth(startedAt)} – ${endedAt ? formatMonth(endedAt) : '현재'}`;
}

/**
 * 시작월과 종료월을 모두 포함하여 기간을 계산한다.
 *
 * @param asOf 종료일이 없을 때 기준이 되는 날짜. 빌드 시점이 아닌 고정값을 넘겨
 *             서버/클라이언트 렌더링 결과가 달라지지 않도록 한다.
 */
export function formatDuration(
  startedAt: string,
  endedAt: string | undefined,
  asOf: string,
): string {
  const from = toMonthIndex(startedAt);
  const to = toMonthIndex(endedAt ?? asOf.slice(0, 7));
  const months = Math.max(0, to - from + 1);

  const years = Math.floor(months / 12);
  const restMonths = months % 12;

  if (years === 0) {
    return `${restMonths}개월`;
  }
  if (restMonths === 0) {
    return `${years}년`;
  }
  return `${years}년 ${restMonths}개월`;
}
