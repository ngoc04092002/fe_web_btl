module.exports = {
	roots: ['<rootDir>/src'],
	verbose: true,
	bail: true,
	collectCoverage: true,
	testMatch: ['**/__test__/**/*.+(ts|tsx|jsx)', '**/?(*.)+(spec|_test_).+(ts|tsx|jsx)'],
	testPathIgnorePatterns: ['/node_modules/'],
	setupFiles: ['whatwg-fetch'],
	testEnvironment: 'jsdom',
};
