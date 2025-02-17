import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends('next/core-web-vitals'),
	...compat.config({
		extends: ['plugin:prettier/recommended'], // .eslintrc.js의 설정을 직접 가져옴
		plugins: ['prettier'],
		rules: {
			'no-undef': 'error',
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
			'no-const-assign': 'error', // const 재할당 금지
		},
	}),
];

export default eslintConfig;
