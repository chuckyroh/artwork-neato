module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
		defaultLineHeights: true,
		standardFontWeights: true
	},
	purge: {
		content: [
	    	'./src/**/*.vue',
	    	'./src/*.vue'
		]
	},
	theme: {
		extend: {}
	},
	variants: {},
	plugins: []
}
