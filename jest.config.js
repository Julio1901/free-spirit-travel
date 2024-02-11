const nextJest = require("next/jest.js");
 
const createJestConfig = nextJest({
  // Forneça o caminho para o seu aplicativo Next.js para carregar next.config.js e arquivos .env no ambiente de teste
  dir: './',
});

/**
 * @type {import('jest').Config}
 */
const config = {
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    "testEnvironment": "jsdom",
    preset: "ts-jest",
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.{ts,tsx}',
        '!**/node_modules/**',
        '!**/vendor/**',
      ],
};
 
// createJestConfig é exportado desta forma para garantir que next/jest possa carregar o configuração Next.js que é assíncrona
module.exports = createJestConfig(config);