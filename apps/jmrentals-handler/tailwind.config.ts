// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: [
    "../../packages/ui/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    // "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    // "./app/**/*.{ts,tsx}",
    // "./src/**/*.{ts,tsx}",
  ],
  presets: [sharedConfig],
};

export default config;
