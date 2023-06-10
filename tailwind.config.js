module.exports = {
  content: ["./*.{html, cjs}", './src/*.{html, cjs}'],
  theme: {
    extend: {
      colors: {
        clr_primary: '#222222',
        clr_monochrome_dark: '#888888',
        clr_monochrome_gray: '#BBBBBB',
        clr_white: '#FFFFFF',
        clr_black: '#000000'
      },
      fontSize: {
        'sm': '12px',
        'base': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}


