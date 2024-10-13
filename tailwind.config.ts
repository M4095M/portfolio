import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkSlateBlue: '#483D8B',
        slateGray: '#708090',
        goldenrod: '#DAA520',
        whiteSmoke: '#F5F5F5',
        lavenderBlush: '#FFF0F5',
        charcoal: '#333333',
        lightSlateGray: '#778899',
        deepPurple: '#5B4B8A',
        royalBlue: '#4169E1',
        mediumSlateBlue: '#7B68EE',
        darkViolet: '#9400D3',
        lavender: '#E6E6FA',
        aliceBlue: '#F0F8FF',
        slateBlue: '#6A5ACD',
        lightSkyBlue: '#87CEFA',
      },
      fontFamily: {
        'geist-sans': ['var(--font-geist-sans)', 'sans-serif'], 
        'geist-mono': ['var(--font-geist-mono)', 'monospace'], 
      },
    },
  },
  plugins: [],
};
export default config;
