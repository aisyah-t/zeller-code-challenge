/** @type {import('ts-jest').JestConfigWithTsJest} */

import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  testMatch: [
    "<rootDir>/src/*/*.test.(ts|tsx)",
    "<rootDir>/src/*/*/*.test.(ts|tsx)",
  ],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  moduleNameMapper: {
    "\\.(scss|sass)$": "identity-obj-proxy",
  },
  watchPathIgnorePatterns: ["<rootDir>/node_modules"],
};

export default config;
