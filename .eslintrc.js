module.exports = {
	root: true,
	globals: {
		use: true,
	},
	extends: 'sora/nuxt',
	rules: {
		semi: ['error', 'never'],
		'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 5 }]
	},
}
