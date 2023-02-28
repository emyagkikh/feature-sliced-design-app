/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';

export default {
  'moduleDirectories': [
    'node_modules',
  ],
  'moduleFileExtensions': [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  'rootDir': '../../',
  'testEnvironment': 'jsdom',
  'testMatch': [
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
  ],
  'modulePaths': [
    '<rootDir>src',
  ],
  'setupFilesAfterEnv': ['<rootDir>/config/jest/jest-setup.ts'],
  'moduleNameMapper': {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
  },
};
