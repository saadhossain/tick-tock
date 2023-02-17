/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary": "#FF5E3E",
                "secondary": "#595182"
            },
            fontFamily: {
                'josefin': ['Josefin Sans', 'sans-serif'],
                'shantell': ['Shantell Sans', 'cursive']
            }
        },
    },
    plugins: [],
}