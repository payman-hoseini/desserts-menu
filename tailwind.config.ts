import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors : {
        'Red' : 'hsl(14, 86%, 42%)',
        'Green' : 'hsl(159, 69%, 38%)',
        'Rose' : {
          50 : 'hsl(20, 50%, 98%)',
          100 : 'hsl(13, 31%, 94%)',
          300 : 'hsl(14, 25%, 72%)',
          400 : 'hsl(7, 20%, 60%)',
          500 : 'hsl(12, 20%, 44%)',
          900 : 'hsl(14, 65%, 9%)',
        }
      },
      fontFamily : {
        RedHat : ['RedHat']
      }
    },
  },
  plugins: [],
};
export default config;
