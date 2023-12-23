
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6755e8",
        muted: "#dcdfeb",
        mutedForeground: "#36392e",
        border: "#cfd8dc",
        input: "#cfd8dc",
        dark: {
          background: 'hsl(224, 71.4%, 4.1%)',
          foreground: 'hsl(210, 20%, 98%)',
          muted: 'hsl(220, 14.3%, 95.9%)',
          border: 'hsl(215, 27.9%, 16.9%)',
          input: 'hsl(215, 27.9%, 16.9%)',
          ring: 'hsl(263.4, 70%, 50.4%)',
        },
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      borderRadius: {
        custom: "30% 70% 70% 30% / 47% 34% 66% 53% ",
      },
      backgroundImage: {
        "hero-image":
          "url('https://img.freepik.com/premium-photo/surreal-composition-beautiful-multicolored-robot-generative-ai_372999-12663.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702771200&semt=ais')",
      },
    },
  },
  plugins: [],
});
