/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./**/*.{html,js}", "./public/js/**/*.js"],
    theme: {
        extend: {
            fontFamily: {
                rubik: ['"Rubik"', ...defaultTheme.fontFamily.sans],
                quicksand: ['"Quicksand"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
