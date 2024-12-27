import FlowbitePlugin from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [FlowbitePlugin],
};

export default config;
