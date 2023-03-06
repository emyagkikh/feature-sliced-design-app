export const buildSvgLoader: () => Record<string, RegExp | string[]> = () => ({
  'test': /\.svg$/,
  'use': ['@svgr/webpack'],
});
