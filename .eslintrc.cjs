/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	root: true,
	extends: ["plugin:vue/essential", "plugin:prettier-vue/recommended", "prettier"],
	overrides: [
		{
			files: ["cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}"],
			extends: ["plugin:cypress/recommended"],
		},
	],
	parserOptions: {
		sourceType: "module",
	},
	env: { es6: true },
	plugins: ["simple-import-sort"],
	rules: {
		"prettier-vue/prettier": [
			"error",
			{
				arrowParens: "always",
				bracketSpacing: true,
				embeddedLanguageFormatting: "auto",
				htmlWhitespaceSensitivity: "strict",
				insertPragma: false,
				jsxBracketSameLine: true,
				jsxSingleQuote: true,
				printWidth: 150,
				proseWrap: "preserve",
				quoteProps: "as-needed",
				requirePragma: false,
				semi: true,
				singleQuote: false,
				tabWidth: 4,
				trailingComma: "es5",
				useTabs: true,
				vueIndentScriptAndStyle: true,
			},
		],
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
	},
};
