/* eslint-disable */
export default {
  displayName: 'shared-app',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '@mf-mui-starter/common-lib': '<rootDir>/../../libs/common-lib/src',
    '@mf-mui-starter/app-shared': '<rootDir>/src',
  },
  coverageDirectory: '../../coverage/libs/app-shared',
  coverageReporters: ['text'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
