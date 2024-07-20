import { Inria_Sans } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      fontRopa: ["Ropa Sans", "sans-serif"],
      Inria_Sans: ["Inria Sans", "sans-serif"]
    },
    colors:{
      'mono' : '#5E37EC',
      'di' : '#f8d0ef',
      'tri' : '#AB7979',
      'white' : '#f8fafc'

    },
  },
  plugins: [],
};
export default config;
