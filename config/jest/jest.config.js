// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  verbose: true,

  roots: ["<rootDir>/../../src"],

  coverageDirectory: "coverage",

  globals: {
    "ts-jest": {
      "tsConfig": "tsconfig.json"
    }
  },

  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],

  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],

  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
};
