import type webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import path from 'path';
import { type BuildEnv, type BuildMode } from './config/build/types/config';

const paths = {
  'entry': path.resolve(__dirname, 'src', 'index.tsx'),
  'build': path.resolve(__dirname, 'build'),
  'html': path.resolve(__dirname, 'public', 'index.html'),
  'src': path.resolve(__dirname, 'src'),
  'app': path.resolve(__dirname),
};

const config = (env: BuildEnv): webpack.Configuration => {
  const mode: BuildMode = env.mode || 'development';
  const PORT = env.port || 3000;

  const isDev = mode === 'development';

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    'port': PORT,
  });
};

export default config;
