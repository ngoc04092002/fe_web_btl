module.exports = {
	roots: ['<rootDir>/src'],
	verbose: true,
	bail: true,
	collectCoverage: true,
	testMatch: ['**/__test__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|_test_).+(ts|tsx|js)'],
	testPathIgnorePatterns: ['/node_modules/'],
	setupFiles: ['whatwg-fetch'],
	testEnvironment: 'jsdom',
};
