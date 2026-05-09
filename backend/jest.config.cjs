module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testPathIgnorePatterns: ['/node_modules/', '/src/generated/', '/dist/'],
  modulePathIgnorePatterns: ['<rootDir>/dist', '<rootDir>/src/generated/prisma'],
};
