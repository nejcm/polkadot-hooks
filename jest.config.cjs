const config = require("@nejcm/configs/src/jest.config");

module.exports = Object.assign(config, {
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs|cjs)$': '<rootDir>/config/babelTransform.cjs',
  },
});
