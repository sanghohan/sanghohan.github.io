/* eslint-disable */
const { homepage } = require('./package.json');

/**
 * homepage 가 하위 경로를 가지면(예: user.github.io/repo) 그 경로를 assetPrefix 로 쓴다.
 * 루트 도메인이면 빈 값이 되어 아무것도 붙지 않는다.
 */
function resolveAssetPrefix() {
  if (process.env.NODE_ENV !== 'production' || !homepage) {
    return '';
  }

  try {
    const { pathname } = new URL(homepage);
    return pathname === '/' ? '' : pathname;
  } catch {
    return '';
  }
}

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  assetPrefix: resolveAssetPrefix(),
};
