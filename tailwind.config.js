/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		extend: {
			colors: {},
			animation: {
				gradientAnimation: 'gradientAnimation 15s ease infinite',
				move: 'move 1s infinite alternate',
				bouncingArrow: 'bouncingArrow 1s infinite alternate',
				pulse: 'pulse 2s infinite',
			},
			boxShadow: {
				md: '0 3px 10px rgba(0, 0, 0, 0.5)',
				card: '0 15px 25px rgba(129, 124, 124, 0.4)',
			},
			// backgroundImage: {
			// 	'background-container-images':
			// 		"url('https://w7.pngwing.com/pngs/204/842/png-transparent-line-euclidean-gradient-gradient-line-blue-angle-text-thumbnail.png')",
			// },
		},
	},
	plugins: [],
};
