/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/router/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			boxShadow: {
				'3xl': '2px 2px 30px 8px rgb(0 ,0 ,0,0.28)',
			},
		},
		screens: {
			'cus-screen': '840px',
		},
	},
	plugins: [],
};
