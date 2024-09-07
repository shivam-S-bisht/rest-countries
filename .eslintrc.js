// TODO deprecated file - https://eslint.org/docs/latest/use/configure/configuration-files-deprecated
// supported config files - https://eslint.org/docs/latest/use/configure/configuration-files
module.exports = {
	root: true,
	extends: [
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/recommended',
		'eslint:recommended', // eslint recommnded rules - https://eslint.org/docs/latest/rules/
		'plugin:react-hooks/recommended', // enforces rules of hooks- https://react.dev/reference/rules/rules-of-hooks
		'plugin:import/recommended', // enforeces imports - https://github.com/import-js/eslint-plugin-import?tab=readme-ov-file#helpful-warnings
	],
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			parserOptions: {
				project: './tsconfig.json',
			},
		},
	],
	rules: {
		'no-duplicate-imports': 'error',
		'@typescript-eslint/no-explicit-any': 'off',
		// TODO check this rule
		'no-mixed-spaces-and-tabs': 'off',
		'no-undef': 'off',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{ argsIgnorePattern: '^__' },
		],
	},
	settings: {
		'import/resolver': {
			typescript: {},
		},
	},
};
