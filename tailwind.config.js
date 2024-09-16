/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "var(--text-color)",
        background: "var(--bg-white)",
        background2: "var(--primary-bg)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        accent: "var(--accent1)",
        accent2: "var(--accent2)",
      },
      fontSize: {
        sm: "0.750rem",
        base: "1rem",
        xl: "1.333rem",
        "2xl": "1.777rem",
        "3xl": "2.369rem",
        "4xl": "3.158rem",
        "5xl": "4.210rem",
      },
      fontFamily: {
        heading: "Mont",
        body: "Gcentra",
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
      animation: {
        float: "float 6s ease-in-out infinite"
      },
    },
  },
  plugins: [],
};
