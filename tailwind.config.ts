import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

const config: Config = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/entities/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/shared/**/*.{js,ts,jsx,tsx,mdx}',
	],

	theme: {
		colors: {
			primary: '#e30b13',
			black: colors.black,
			white: colors.white,
			transparent: colors.transparent,
			error: {
				500: '#e30b13',
			},
			yellow: {
				700: '#f5c521',
			},
			gray: {
				300: '#d9dae8',
				400: '#999aa5',
				500: '#66676e',
				600: '#39393f',
				700: '#242529',
				800: '#191b1f',
				900: '#101215',
			},
		},
		extend: {
			spacing: {
				0.5: '0.12rem',
				layout: '2.75rem',
			},
			fontSize: {
				'2lg': '1.38rem',
			},
			borderRadius: {
				image: '0.5rem',
				layout: '0.8rem',
			},
			transitionTimingFunction: {
				default: 'ease-in-out',
			},
			transitionDuration: {
				default: '200ms',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
			},
			keyframes: {
				fade: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				scaleIn: {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)',
					},
					'50%': {
						opacity: '0.3',
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)',
					},
				},
			},
			animation: {
				fade: 'fade 0.5s ease-in-out',
				scaleIn: 'scaleIn 0.35s ease-in-out',
			},
		},
	},
	plugins: [
		plugin(({ addComponents, addUtilities, theme }) => {
			addComponents({
				'.button-primary': {
					backgroundColor: theme('colors.primary'),
					borderRadius: '0.65rem',
					color: '#fff',
					transition: 'background-color 0.3 ease-in-out',
					'&:hover': {
						backgroundColor: '#ff0009',
					},
				},
				'text-link': {
					color: 'rgba(255, 255, 255 0.9)',
					transition: 'text-decoration-color 0.3 ease-in-out',
					textDecorationLine: 'underline',
					textDecorationColor: 'rgba(255, 255, 255 0.2)',
					textUnderlineOffset: '4',
					'&:hover': {
						textDecorationColor: 'rgba(255, 255, 255 0.9)',
					},
				},
				'.air-block': {
					backgroundColor: theme('colors.gray.900'),
					borderRadius: theme('borderRadius.layout'),
					color: theme('colors.white'),
					boxShadow: theme('boxShadow.lg'),
				},
			});
			addUtilities({
				'.text-shadow': {
					textShadow: '1px 1px rgba(0, 0, 0, 0.4)',
				},
				'.outline-border-none': {
					outline: 'none',
					border: 'none',
				},
				'.flex-center-between': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				},
				'.image-link-bg': {
					objectFit: 'cover',
					objectPosition: 'center',
					pointerEvents: 'none',
				},
			});
		}),
	],
};
export default config;
