module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	animation: true,
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
			keyframes: {
				animation: {
					pul: 'bgpulse 2s ease-in-out infinite'
				},
				bgpulse: {
					'0% 100%':{ 'background-color': '#f9c5d1',
						'background-image': 'linear-gradient(315deg, #f9c5d1 0%, #9795ef 74%)'
					},
					'50%': {
						'background-color': '#861657',
						'background-image': 'linear-gradient(326deg, #861657 0%, #ffa69e 74%)'

					}
					
				}
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
