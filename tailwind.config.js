module.exports = {
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			purple: '#240127',
			lightPurple: '#F1B9FF',
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
