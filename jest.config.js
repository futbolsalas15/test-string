/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  rootDir: "./src",
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      tsconfig: "./src/tsconfig.spec.json",
    },
  },
};
