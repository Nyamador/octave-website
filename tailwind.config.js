module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				purple: '#240127',
				lightPurple: '#F9E5F9',
			},
			backgroundImage: (theme) => ({
				'hero-pattern': "url('/svg/pattern.svg')",
				'teams-pattern': "url('/svg/pattern_light.svg')",
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
