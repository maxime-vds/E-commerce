/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nimbus: ['nimbus'],
        nunito: ['nunito'],
        nunitoItalic: ['nunito-italic'],
        archivo: ['archivo-black'],
        montserrat: ['montserrat'],
        montserratItalic: ['montserrat-italic'],
        quicksand: ['quicksand'],
        chillax: ['chillax'],
      },
    },
  },
  plugins: [import('daisyui')],
}
