// #201e1c
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx}",
    "./src/components/**/*.{html,js,jsx}",
    "./src/layouts/**/*.{html,js,jsx}",
    "./src/index.html",
  ],
  theme: {
    extend: {
      colors: {
        personal_blue: {
          light: "#232F3E",
          DEFAULT: "#0b192f",
          text: "#64feda",
          textTitle: "#ccd6f6",
          textParagraph: "#8892b0",
          workBackground: "#334d6a",
          lightBlue: "#102340",
          blogsLightBlue: "#242b4c",
        },
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "reveal-block": {
          from: {
            left: "0%",
            width: "0%",
          },
          "50%": {
            left: "0%",
            width: "100%",
          },
          to: {
            left: "100%",
            width: "0%",
          },
        },
        "appear-text": {
          from: {
            opacity: "0",
            transform: "translateX(0px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0px)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "fade-out-down": "fade-out-down 0.5s ease-out",
        "fade-in-up": "fade-in-up 3s ease-out",
        "fade-out-up": "fade-out-up 0.5s ease-out",
        "reveal-block": "reveal-block 6s cubic-bezier(0.19, 1, 0.22, 1)",
        "appear-text": "appear-text 7s ease-out",
      },
      fontFamily: {
        body: ["Nunito"],
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-pseudo-elements"),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        ".empty-content": {
          content: "''",
          width: "0px",
        },
        ".empty-line": {
          border: "1px solid white",
        },
      };
      addUtilities(newUtilities, {
        variants: ["before", "after"],
      });
    }),
  ],
};
