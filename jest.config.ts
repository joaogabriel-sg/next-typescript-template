import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

export default createJestConfig({
  clearMocks: true,
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  modulePaths: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/.test/setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
});
