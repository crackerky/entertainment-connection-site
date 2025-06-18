import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // メインカラー - C86,M67,Y6,K0,R45,G86,B160
        primary: {
          DEFAULT: "rgb(45, 86, 160)",
          foreground: "rgb(255, 255, 255)",
          light: "rgb(65, 106, 180)",
          dark: "rgb(25, 66, 140)",
        },
        // サブカラー1 - C62,M10,Y75,K0,R105,G175,B98
        secondary: {
          DEFAULT: "rgb(105, 175, 98)",
          foreground: "rgb(255, 255, 255)",
          light: "rgb(125, 195, 118)",
          dark: "rgb(85, 155, 78)",
        },
        // サブカラー2 - C33,M0,Y90,K0,R188,G213,B48
        accent: {
          DEFAULT: "rgb(188, 213, 48)",
          foreground: "rgb(0, 0, 0)",
          light: "rgb(208, 233, 68)",
          dark: "rgb(168, 193, 28)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        "2xl": "2rem",
        "3xl": "3rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "blob": {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        "gradient-x": {
          "0%, 100%": { 
            "background-position": "left center"
          },
          "50%": { 
            "background-position": "right center"
          },
        },
        "gradient-y": {
          "0%, 100%": { 
            "background-position": "center top"
          },
          "50%": { 
            "background-position": "center bottom"
          },
        },
        "gradient-xy": {
          "0%, 100%": { 
            "background-position": "left top"
          },
          "25%": { 
            "background-position": "right top"
          },
          "50%": { 
            "background-position": "right bottom"
          },
          "75%": { 
            "background-position": "left bottom"
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "blob": "blob 7s infinite",
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
        "gradient-xy": "gradient-xy 15s ease infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config