module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'


  ],
  theme: {
    container: {
      center: true,
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    }
    ,
    colors: {
      lightRed: "#f87171",
      teal: "#2dd4bf",
      teal2: "#14b8a6",
      blue1: "#22d3ee",
      blue2: "#38bdf8",
      blue3: "#06b6d4",
      rose: "#fb7185",
      darkSlate: "#0f172a",
      lightGray: "#f7f7f7",
      white: "#fff",
      dark: "#000",
      yellowDark: "#f39c12",
      paste: "#1abc9c",
      darkGray: "#B3B3B3"

    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}