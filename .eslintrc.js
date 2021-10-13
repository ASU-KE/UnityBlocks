module.exports = {
	extends: [
		'plugin:@wordpress/eslint-plugin/recommended',
		'plugin:prettier/recommended',
	],
	env: {
		browser: true,
		'cypress/globals': true,
		jest: true,
	},
	globals: {
		page: true,
	},
	plugins: [ 'cypress', 'chai-friendly' ],
	rules: {
		'jest/expect-expect': [
			'error',
			{
				assertFunctionNames: [
					'expect',
					'cy.get',
					'helpers.checkForBlockErrors',
				],
			},
		],
		// Disable issue: https://github.com/godaddy-wordpress/coblocks/issues/2036
		'import/no-extraneous-dependencies': 0,
		// Disable issue: https://github.com/godaddy-wordpress/coblocks/issues/2037
		'@wordpress/no-unsafe-wp-apis': 0,
		// Disable issue: https://github.com/godaddy-wordpress/coblocks/issues/2038
		'import/named': 0,
		'jsdoc/check-param-names': 0,
		'jsdoc/check-tag-names': 0,
		'jsdoc/check-types': 0,
		'jsdoc/no-undefined-types': 0,
		'jsdoc/valid-types': 0,
		'jsdoc/require-param': 0,
		'jsdoc/require-returns-check': 0,
		'jsdoc/require-returns-description': 0,
		'jsdoc/require-yields': 0,
	},
};
