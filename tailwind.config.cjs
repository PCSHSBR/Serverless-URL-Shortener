/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Anuphan Variable', 'sans-serif']
			},
			colors: {
				'dark-base-50': '#23384D'
			},
		},
		screens: {
			xxs: '300px',
			xs: '475px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		}
	},
	daisyui: {
		themes: [
			{
				light: {
					text: '#0c221d',
					'base-100': '#FFFFFF',
					primary: '#2fdada',
					secondary: '#ebf9f9',
					accent: '#1d5448',
					error: '#e4725e',
					warning: '#fba609'
				},
				dark: {
					text: '#ffffff',
					'base-100': '#222B39',
					primary: '#1EFCCC',
					secondary: '#113b3b',
					accent: '#4ac0a7',
					error: '#e4725e',
					warning: '#fba609'
				}
			}
		]
	},

	plugins: [require('daisyui')]
};

module.exports = config;
