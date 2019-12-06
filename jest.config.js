module.exports = {
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.test.json"
    }
  },
  testMatch: ["<rootDir>/src/**/*.test.ts"]
};
