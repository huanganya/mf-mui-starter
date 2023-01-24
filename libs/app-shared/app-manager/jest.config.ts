/* eslint-disable */
export default {
  displayName: 'shared-app-manager',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/app-shared/app-manager',
};
