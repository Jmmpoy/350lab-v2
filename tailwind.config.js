module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Futura", "Arial", "sans-serif"],
      mono: ["Lucida Console", "Courier", "monospace"],
      neueLight: ["Neue-Light"],
      neueRegular: ["Neue-Regular"],
      neueBold: ["Neue-Bold"],
      futuraLight: ["Futura-Light"],
      foundersLight: ["FoundersLight"],
      founders: ["Founders"],
      ibm: ["IBM"],
      ibmLight: ["IBMLight"],
    },
    screens: {
      xsm: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "2000px",
    },
    extend: {
      colors: {
        black: "#1A1A1A",
        white: "#FFF",
        offWhite: "#FDFBEE",
        gray: "#888888",
        brown: "#CD9D77",
        orange: "#f77e5e",
        blue: "#2677bb",
        cyan: "#1aa9bc",
        fushia: "#de3d83",
        palette: {
          blue: "#105099",
          light: "#EAE9E5",
        },
        "example-color": {
          light: "#EAE9E5",
          DEFAULT: "#d18d67",
          dark: "#ce8860",
        },
      },
      height: (theme) => ({
        "50vh": "50vh",
        "75vh": "75vh",
      }),
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-inOut",
      },
    },
  },
  plugins: [],
};
