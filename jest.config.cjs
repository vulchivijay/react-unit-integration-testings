// jest.config.cjs
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // If using JSX in JS files
    '\\.(css|less|sass|scss)$': 'jest-transform-stub', // Or identity-obj-proxy
    '\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1', // Example for path aliases
    '\\.(svg|jpg|jpeg|png|gif)$': '<rootDir>/fileMock.cjs'
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.jsx'], // Setup file for Jest DOM.
};