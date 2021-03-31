module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				purple: '#240127',
				lightPurple: '#F1B9FF',
			},
			backgroundImage: (theme) => ({
				'hero-pattern': "url('/svg/pattern.svg')",
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
