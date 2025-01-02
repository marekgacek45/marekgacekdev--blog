import type { Config } from 'tailwindcss'

export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				xs: '400px',
				max: '1980px',
			},
			fontFamily: {
				heading: ['var(--font-heading)', 'sans-serif'],
				text: ['var(--font-text)', 'monospace'],
				accent: ['var(--font-accent)', 'monospace'],
			},

			colors: {
				ownPurple: {
					400: '#7852BF',
					600: '#83688e',
				},
				ownPink: {
					200: '#f7adc5',
					400: '#d46892',
					600: '#e872bf',
				},
				ownYellow: {
					400: '#E9E159',
					600: '#f7c90f',
				},
				ownTurquise: {
					400: '#05bbd4',
					600: '#62c5c6',
				},
				ownBlue: {
					400: '#71c3e6',
					800: '4a47b8',
				},
				ownOrange: {
					600: '#fc9b7a',
				},

				fontDark: '#0f181f',
				fontLight: '#faf7f3',

				bgLight: {
					200: '#faf7f3',
					400: '#e9e7e4',
				},
				bgDark: {
					200: '#333',
					400: '#0f181f',
					600: '#161926',
				},
			},
			animation: {
				shake: ' shake 0.5s infinite',
				fadeIn: 'fadeIn 0.5s ease-in-out',
			},
			keyframes: {
				shake: {
					'0%': { transform: 'translate(1px, 1px) rotate(0deg)' },
					'10%': { transform: 'translate(-1px, -2px) rotate(-1deg)' },
					' 20%': { transform: 'translate(-3px, 0px) rotate(1deg)' },
					'30%': { transform: ' translate(3px, 2px) rotate(0deg)' },
					'40%': { transform: 'translate(1px, -1px) rotate(1deg)' },
					' 50%': {
						transform: ' translate(-1px, 2px) rotate(-1deg)',
					},
					'60%': { transform: ' translate(-3px, 1px) rotate(0deg)' },
					'70%': { transform: ' translate(3px, 1px) rotate(-1deg)' },
					'80%': { transform: 'translate(-1px, -1px) rotate(1deg)' },
					'90%': { transform: 'translate(1px, 2px) rotate(0deg)' },
					'100%': { transform: 'translate(1px, -2px) rotate(-1deg)' },
				},
				fadeIn: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
			},
			boxShadow: {
				custom: '10px 10px 0 rgba(0, 0, 0, 0.4)',
				customSmall: '5px 5px 0 rgba(0, 0, 0, 0.4)',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
} satisfies Config
