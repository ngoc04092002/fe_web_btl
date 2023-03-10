module.exports = {
	'root': true,
	'extends': [
		'react-app',
		// Chúng ta sẽ dùng các rule mặc định từ các plugin mà chúng ta đã cài.
		'eslint:recommended',
		'plugin:import/recommended',
		// Disable các rule mà eslint xung đột với prettier.
		// Để cái này ở dưới để nó override các rule phía trên!.
		'eslint-config-prettier',
	],
	'parser': '@typescript-eslint/parser',
	'plugins': ['prettier', 'react-hooks', 'import', '@tanstack/query'],
	'rules': {
		'react/no-multi-comp': ['on', { 'ignoreStateless': true }], // cho phép return 2 comp trong 1 file
		'@tanstack/query/exhaustive-deps': 'error',
		'@tanstack/query/prefer-query-object-syntax': 'error',
		// Tắt rule yêu cầu import React trong file jsx
		'react/react-in-jsx-scope': 'off',

		//Update as of 2021: All current versions of major browsers now automatically use the behavior of rel="noopener" for any target="_blank" link, nullifying this issue
		// Cảnh báo khi thẻ <a target='_blank'> mà không có rel="noreferrer"
		'react/jsx-no-target-blank': 'warn',
		'import/named': 'off',
		'import/no-unresolved': 'off',
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
				'alphabetize': {
					'order': 'asc',
				},
				'pathGroups': [
					{
						'pattern': 'react-query',
						'group': 'external',
						'position': 'before',
					},
				],
			},
		],
		'jsx-quotes': ['error', 'prefer-single'],
		'prefer-arrow-callback': ['error', { 'allowNamedFunctions': true }],
		'prettier/prettier': [
			'warn',
			{
				'arrowParens': 'always',
				'bracketSameLine': false,
				'bracketSpacing': true,
				'embeddedLanguageFormatting': 'auto',
				'htmlWhitespaceSensitivity': 'css',
				'insertPragma': false,
				'jsxSingleQuote': true,
				'proseWrap': 'preserve',
				'quoteProps': 'preserve',
				'requirePragma': false,
				'semi': true,
				'singleAttributePerLine': true,
				'singleQuote': true,
				'trailingComma': 'all',
				'useTabs': true,
				'vueIndentScriptAndStyle': false,
				'printWidth': 100,
				'tabWidth': 2,
			},
		],
		'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
		'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
		'react/display-name': 'error',
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error', // kiểm tra xem câu lệnh nào k dùng sẽ báo lỗi
		'react/jsx-no-undef': 'error',
		'react/jsx-fragments': ['error', 'syntax'],
		'max-depth': ['warn', 2], //chỉ cho phép 2 if lồng nhau
		'max-lines': ['error', { 'max': 250, 'skipBlankLines': true, 'skipComments': true }],
		'eqeqeq': ['error', 'allow-null'],
		'quotes': ['error', 'single', 'avoid-escape'],
		// enable additional rules
		// "indent": ["error", 4],
		'linebreak-style': ['error', 'unix'],

		// override configuration set by extending "eslint:recommended"
		'no-empty': 'warn',
		'no-cond-assign': ['error', 'always'],

		// disable rules from base configurations
		'for-direction': 'off',

		// disable
		'init-declarations': 'off',
		'no-console': 'off',
		'no-inline-comments': 'off',
		'curly': 'error',
	},
	'env': {
		'browser': true,
		'node': true,
		'commonjs': true,
		'es6': true,
	},
	'settings': {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			'node': {
				'extensions': ['.js', '.ts', '.tsx', '.jsx'],
			},
		},
		'react': {
			// Nói eslint-plugin-react tự động biết version của React.
			'version': 'detect',
		},
	},
};
