import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { type BuildOptions } from './types/config';

export const buildPlugins = ({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] => ([
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({
    'template': paths.html,
  }),
  new MiniCssExtractPlugin({
    'filename': 'css/[name][contenthash:8].css',
    'chunkFilename': 'css/[name][contenthash:8].css',
  }),
  new BundleAnalyzerPlugin({
    'openAnalyzer': false,
  }),
  new webpack.DefinePlugin({
    '__DEV__': JSON.stringify(isDev),
  }),
]);
