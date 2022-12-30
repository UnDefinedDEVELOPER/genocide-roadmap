/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			keyframes: {
				move: {
					'0%': { transform: 'translateX(-10px)' },
					'100%': { transform: 'translateX(0px)' }
				},
			},
			animation: {
				'move-md': 'move 0.5s ease-in-out'
			}
		}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#cbd5e1',

					secondary: '#ef4444',

					accent: '#111827',

					neutral: '#1c1917',

					'base-100': '#2A303C',

					info: '#3ABFF8',

					success: '#36D399',

					warning: '#FBBD23',

					error: '#F87272'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
