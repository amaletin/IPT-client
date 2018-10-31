const TEST_REGEX = '(/src/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$';

module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testRegex: TEST_REGEX,
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next/', '<rootDir>/node_modules/', '/src/__tests__/utils.ts',
  ],
  moduleFileExtensions: [
    'ts', 'tsx', 'js', 'jsx',
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/actions/*.{js,jsx,ts,tsx}',
    '**/components/*.{js,jsx,ts,tsx}',
    '**/lib/*.{js,jsx,ts,tsx}',
    '**/reducers/*.{js,jsx,ts,tsx}',
    '**/store/*.{js,jsx,ts,tsx}',
  ],
};
