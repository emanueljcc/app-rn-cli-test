/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.{js,jsx,ts,tsx}',
		'./src/App.{js,jsx,ts,tsx}',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		borderWidth: {
			1: '1px',
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',

			black: '#000',
			white: '#fff',
			success: '#00B833',
			warning: '#FFB818',
			error: '#FF0000',

			blueCompany: '#334FFA',
			gray: {
				100: '#9B9898',
			},
			purple: {
				100: '#CFD6FF',
			},
		},
		extend: {
			fontFamily: {
				avenirBlack: ['Avenir-Black'],
				avenirLight: ['Avenir-Light'],
				avenirHeavy: ['Avenir-Heavy'],
			},
			zIndex: {
				1: '1',
				2: '2',
			},
		},
	},
	plugins: [],
};
