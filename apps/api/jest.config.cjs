const path = require("path");

/** @type {import('jest').Config} */
module.exports = {
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: "src",
  testRegex: ".*\\.spec\\.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  testEnvironment: "node",
  moduleNameMapper: {
    "^@controle-gado/shared$": path.join(
      __dirname,
      "../../packages/shared/src/index.ts",
    ),
  },
};
