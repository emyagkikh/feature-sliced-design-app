import path from 'path';

export default {
  'globals': {
    '__DEV__': true,
  },
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
    '<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)',
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
