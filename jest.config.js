import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.js'],
  transformIgnorePatterns: [
    '/node_modules/(?!aws-amplify|@aws-sdk)(.*)',
    '\\.pnp\\.[^\\\\]+$',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '\\.svg$': '<rootDir>/src/mocks/svgMock.js',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/mocks/file-mock.js',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^lib/(.*)$': '<rootDir>/src/lib/$1',
    '^mocks/(.*)$': '<rootDir>/src/mocks/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^routes/(.*)$': '<rootDir>/src/routes/$1',
    '^services/(.*)$': '<rootDir>/src/services/$1',
    '^store$': '<rootDir>/src/store/index.ts',
    '^store/(.*)$': '<rootDir>/src/store/$1',
    '^styles/(.*)$': '<rootDir>/src/styles/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['node_modules', 'public'],
  coverageThreshold: {
    global: {
      lines: 60,
    },
  },
};

export default config;