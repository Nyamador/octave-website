module.exports = {
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				purple: '#240127',
				lightPurple: '#F9E5F9',
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
