import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends('next/core-web-vitals'),
	{
		files: ['pages/_app.jsx', '**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				ecmaFeatures: { jsx: true },
			},
		},
		plugins: {
			prettier: eslintPluginPrettier,
			react: eslintPluginReact,
			'react-hooks': eslintPluginReactHooks,
		},
		rules: {
			'prettier/prettier': [
				'error',
				{
					singleQuote: true,
					semi: true,
					useTabs: true,
					tabWidth: 2,
					trailingComma: 'all',
					printWidth: 80,
					bracketSpacing: true,
					arrowParens: 'avoid',
				},
			],
			'no-undef': 'error',
			'no-const-assign': 'error',
		},
	},
];

export default eslintConfig;
