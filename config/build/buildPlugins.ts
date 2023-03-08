import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { type BuildOptions } from './types/config';

export const buildPlugins = ({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] => {
  const pluginsCommon: webpack.WebpackPluginInstance[] = [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      'template': paths.html,
    }),
  ];

  const pluginsDev: webpack.WebpackPluginInstance[] = [
    new BundleAnalyzerPlugin({
      'openAnalyzer': false,
    }),
    new webpack.DefinePlugin({
      '__DEV__': JSON.stringify(isDev),
    }),
  ];

  const pluginsProd: webpack.WebpackPluginInstance[] = [
    new MiniCssExtractPlugin({
      'filename': 'css/[name][contenthash:8].css',
      'chunkFilename': 'css/[name][contenthash:8].css',
    }),
  ];

  let pluginsTotal: webpack.WebpackPluginInstance[] = [];

  if (isDev) {
    pluginsTotal = pluginsCommon.concat(pluginsDev);
  }

  if (!isDev) {
    pluginsTotal = pluginsCommon.concat(pluginsProd);
  }

  return pluginsTotal;
};
