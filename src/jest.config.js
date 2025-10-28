// root/jest.config.js
import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!(jest-preset-angular)/)'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
      isolatedModules: true
    }
  }
};

export default config;





// Not sure whats happening here
// export default {
//   preset: 'jest-preset-angular',
//   setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
//   testEnvironment: 'jsdom',
//   transform: {
//     '^.+\\.(ts|mjs|html|js)$': [
//       'ts-jest',
//       {
//         tsconfig: '<rootDir>/tsconfig.spec.json',
//         stringifyContentPathRegex: '\\.html$',
//       },
//     ],
//   },
//   moduleFileExtensions: ['ts', 'html', 'js', 'json'],
//   coverageDirectory: 'coverage',
//   collectCoverageFrom: ['src/app/**/*.ts'],
// };
