/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [
		plugin(function ({ addComponents }) {
			addComponents({
				".center-absolute": {
					transform: "translate3d(0,0,0)",
					"-webkit-transform": "translate3d(0,0,0)",
				},
				".gradient-1": {
					"background-image": "linear-gradient(43deg, rgb(65, 88, 208) 0%, rgb(200, 80, 192) 46%, rgb(255, 204, 112) 100%)",
				},
				".gradient-2": {
					"background-image": "linear-gradient(45deg, rgb(251, 171, 126) 0%, rgb(247, 206, 104) 100%)",
				},
				".gradient-3": {
					"background-image": "linear-gradient(45deg, rgb(133, 255, 189) 0%, rgb(255, 251, 125) 100%)",
				},
				".gradient-4": {
					"background-image": "linear-gradient(45deg, rgb(139, 198, 236) 0%, rgb(149, 153, 226) 100%)",
				},
				".gradient-5": {
					"background-image": "linear-gradient(45deg, rgb(251, 218, 97) 0%, rgb(255, 90, 205) 100%)",
				},
				".gradient-6": {
					"background-image": "linear-gradient(45deg, rgb(255, 222, 233) 0%, rgb(181, 255, 252) 100%)",
				},
				".gradient-7": {
					"background-image": "linear-gradient(147deg, rgb(255, 229, 59) 0%, rgb(255, 37, 37) 74%)",
				},
			});
		}),
	],
};
