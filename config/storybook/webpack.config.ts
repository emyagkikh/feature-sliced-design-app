import type webpack from 'webpack';
import { type BuildPaths } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    'build': '',
    'app': '',
    'html': '',
    'entry': '',
    'src': path.resolve(__dirname, '../../src'),
  };

  config?.resolve?.modules?.push(paths.src);
  config?.resolve?.extensions?.push('ts', 'tsx');

  if (config.module?.rules) {
    // @ts-expect-error ddd
    config.module.rules = config.module?.rules?.map((rule: webpack.RuleSetRule) => {
      if (rule.type === 'asset/resource') {
        return { ...rule, 'exclude': /\.svg$/i };
      }

      return rule;
    });
  }

  config?.module?.rules?.push(buildSvgLoader());
  config?.module?.rules?.push(buildCssLoader(true));

  return config;
};
