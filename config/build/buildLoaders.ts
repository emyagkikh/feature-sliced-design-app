import type webpack from 'webpack';
import { type BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;

  const svgLoader = buildSvgLoader();

  const fileLoader = {
    'test': /\.(png|jpe?g|gif|woff|woff2)$/i,
    'use': [
      {
        'loader': 'file-loader',
      },
    ],
  };

  const typeScriptLoader = {
    'test': /\.tsx?$/,
    'use': 'ts-loader',
    'exclude': /node_modules/,
  };

  const sassLoader = buildCssLoader(isDev);

  return ([
    typeScriptLoader,
    sassLoader,
    fileLoader,
    svgLoader,
  ]);
};
