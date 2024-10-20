import type { Config } from "tailwindcss";
import daisyui from "daisyui"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: [
    {
      mytheme: {
        "primary": "#F9A825", // Text Orange
        "secondary": "#A3D977", // Grass Green
        "accent": "#FCD34D", // Chick Yellow
        "neutral": "#D17A00", // Darker Orange (Text Outline)
        "base-100": "#FDF2D7", // Background Beige
        "info": "#FEF7E3", // Sky White
        "success": "#81C784", // Complementing Green
        "warning": "#FFB74D", // Darker Yellow
        "error": "#E57373",  // Red-orange
      },
    }],
  },
};
export default config;
