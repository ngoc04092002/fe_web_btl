/** @type {import('tailwindcss').Config} */

const labelsClasses = ['indigo', 'gray', 'green', 'blue', 'red', 'purple'];
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/router/**/*.{js,ts,jsx,tsx}',
	],
	purge: {
		content: [
			'./src/pages/**/*.{js,ts,jsx,tsx}',
			'./src/components/**/*.{js,ts,jsx,tsx}',
			'./src/router/**/*.{js,ts,jsx,tsx}',
			'./public/index.html',
		],
		//Because we made a dynamic class with the label we need to add those clases
		// to the safe list so the purge does not remove that
		safelist: [
			...labelsClasses.map((lbl) => `bg-${lbl}-500`),
			...labelsClasses.map((lbl) => `bg-${lbl}-200`),
			...labelsClasses.map((lbl) => `text-${lbl}-400`),
		],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			keyframes: {
				wiggle: {
					'0%': { transform: 'translate(-50%, -120%)' },
					'100%': { transform: 'translate(-50%, 0)' },
				},
			},
			animation: {
				wiggle: 'wiggle 0.2s ease-in-out',
			},
			aspectRatio: {
				'4/3': '4 / 3',
			},
			boxShadow: {
				'3xl': '2px 2px 30px 8px rgb(0 ,0 ,0,0.28)',
				'sm-cs': '1px 1px 3px 2px #ccc',
				'sm-cs-0': '1px 1px 4px 0px rgba(0, 0, 0, 0.15)',
				'sm-cs-0360': '0px 3px 6px 0px rgba(0, 0, 0, 0.2)',
			},
			gridTemplateColumns: {
				'3r-cus': 'repeat(3, minmax(100px, 1fr))',
				'1/5': '1fr 5fr',
			},
			fontFamily: {
				sans: ['Open Sans'],
			},
		},
		screens: {
			'cus-screen': '840px',
			'sm-500': '500px',
			'sm': '640px',
			// => @media (min-width: 640px) { ... }

			'md': '768px',
			// => @media (min-width: 768px) { ... }

			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }

			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms')],
};
