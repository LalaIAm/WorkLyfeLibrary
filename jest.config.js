module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "**/src/components/*.{js|jsx}",
    "!**/node_modules/**",
    "!**/src/components/*.stories.js",
  ],
  reporters: ["default", "jest-junit"],
  testResultsProcessor: "jest-junit",
  outputDirectory: "/results",
};