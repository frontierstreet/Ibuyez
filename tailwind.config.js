/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			gridTemplateColumns: {
				167: "repeat(auto-fill, minmax(167px, 1fr))",
				330: "repeat(auto-fill, minmax(330px, 1fr))",
				538: "repeat(auto-fill, minmax(538px, 1fr))"
			},
			fontFamily: {
				"dm-sans": "'DM Sans', sans-serif"
			},
			colors: {
				border: "#ccc",
				primary: "#3A0CA3",
				blue: "rgb(37, 147, 254)",
				yellow: "#fddf14",
				D50100: "#D50100",
				FEDF18: "#FEDF18",
				_14142B: "#14142B",
				_41F153: "#41F153",
				C9C7C7: "#C9C7C7",
				E8EBEC: "#E8EBEC",
				F6F7FB: "#F6F7FB",
				white: "#ffff",
				placeholder: "#121212"
			},
			borderRadius: {
				10: "10px"
			},
			screens: {
				950: "950px",
				1400: "1400px",
				1800: "1800px",
				393: "393px",
				1436: "1436px",
				390: "390px",
				1300: "1300px",
				1010: "1010px",
				868: "868px",
				630: "630px",
				436: "436px",
				1020: "1020px"
			}
		}
	},
	plugins: []
}
