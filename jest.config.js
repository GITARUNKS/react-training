export default {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy"
    },
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
    transformIgnorePatterns: ["/node_modules/(?!(axios)/)"],
    collectCoverageFrom: [
        "src/lib/**/*.{js,jsx,ts,tsx}",
        "!<rootDir>/node_modules/",
        "!<rootDir>/config/",
        "!<rootDir>/src/stories/*.{js,jsx,ts,tsx}",
        "!<rootDir>/src/main.tsx",
        "!<rootDir>/src/lib/**/index.tsx" // Exclude all index.tsx files within /lib
    ],
    coverageDirectory: "<rootDir>/docs/coverage", // Specifying the output directory here
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    }
};