module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: ["Neue-Regular", "Inter", "system-ui", "sans-serif"],
      sans: ["Neue-Regular", "Inter", "system-ui", "sans-serif"],
      mono: ["IBM", "Courier", "monospace"],
      neueLight: ["Neue-Light"],
      neueRegular: ["Neue-Regular"],
      neueBold: ["Neue-Bold"],
      neueMedium: ["Neue-Medium"],
      neueThin: ["Neue-Thin"],
      neueBlack: ["Neue-Black"],
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
        // Palette exacte du site Kau Studio (extraite via analyse)
        black: "#141414", // Couleur principale (1198 occurrences)
        anthracite: "#1d1d1d", // Noir secondaire
        charcoal: "#333333", // Conservé pour compatibilité
        gray: {
          DEFAULT: "#898989", // Gris principal texte secondaire (435 occurrences)
          light: "#808080", // Gris clair
          50: "#fefefe", // Presque blanc
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
          400: "#bdbdbd",
          500: "#898989", // Gris moyen (couleur principale)
          600: "#808080",
          700: "#616161",
          800: "#424242",
          900: "#1d1d1d",
        },
        white: "#fdfdfb", // Blanc cassé (17 occurrences)
        offWhite: "#fefefe",
        accent: {
          red: "#ff0000", // Rouge pur (12 occurrences)
          orange: "#ff3f0e", // Rouge-orange principal (16 occurrences)
        },
        // Anciennes couleurs conservées pour compatibilité
        brown: "#CD9D77",
        blue: "#2677bb",
        cyan: "#1aa9bc",
        fushia: "#de3d83",
        palette: {
          blue: "#105099",
          light: "#EAE9E5",
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
        blink: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-inOut",
        blink: "blink 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
