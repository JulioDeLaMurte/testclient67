module.exports = {
	globDirectory: 'Acuitis/',
	globPatterns: [
		'**/*.{html,mp3,css,scss,webp,ico,svg,jpg,jpeg,png,js,json}'
	],
	swDest: 'Acuitis/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};