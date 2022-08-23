/* eslint-disable import/no-anonymous-default-export */
export default {
  bail: true,
  clearMocks: true,
  collectCoverageFrom: [
    'src/**/*.tsx',
    'src/**/*.spec.tsx',
    'src/**/*.test.tsx',
    '!src/**/_app.tsx',
    '!src/**/_document.tsx',
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleNameMapper: {
    '\\.(scss|css|sass)$': '<rootDir>/src/tests/mocks/styleMock.ts',
    '@/public/(.*)': '<rootDir>/public/$1',
    '@/(.*)': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['**/*.(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
            decorators: true,
          },
          keepClassNames: true,
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
            react: {
              runtime: 'automatic',
            },
          },
        },
        module: {
          type: 'es6',
          noInterop: false,
        },
      },
    ],
  },
};
