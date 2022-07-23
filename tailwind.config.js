module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./Components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        primary: "2rem",
      },
      colors: {
        primary: "var( --color-primary)",
        primaryGrad: "var(--color-primary-grad)",
        primaryLighter: "#FA6BFF",
        // secondary: "var(--color-secondary)",
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
        "2xl": "1495px",
        "3xl": "1181px",
        hdr: "1164px",
        sidebar: "752px",
        mobile: "395px",
        table: "419px",
        events_card: "1285px",
        event_detail: "1211px",
        landing_1068: "1068px",
        landing_868: "868px",
        // => @media (min-width: 1536px) { ... }
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",

        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px",

        raffDraw: "repeat(auto-fit, minmax(28rem, 1fr))",
      },
      flex: {
        2: "2 2 50%",
      },
      backgroundImage: {
        homepage: "url('/bg-home-min.png')",
        sidebar: "url('/sidebar-image.jpg')",
        flare: "url(/flare.jpg)",
        fire: "url(/fire.mp4)",
        party: "url('/bg-party.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
