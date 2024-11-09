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
        "primary": "#FFFFFF",       // Primary White
        "secondary": "#F0F0F0",     // Light Gray
        "accent": "#E0E0E0",        // Lighter Gray for Accent
        "neutral": "#CFCFCF",       // Neutral Gray for Text Outline
        "base-100": "#FFFFFF",      // Base White Background
        "info": "#F9F9F9",          // Very Light Gray for Info
        "success": "#D0D0D0",       // Light Gray as Success Highlight
        "warning": "#E8E8E8",       // Soft Light Gray for Warning
        "error": "#CCCCCC",         // Subtle Light Gray for Error
      }
      
    }],
  },
};
export default config;
