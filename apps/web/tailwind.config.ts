import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./src/**/**/*.tsx"],
  presets: [sharedConfig],
  theme: {
    extend: {
      height: {
        'main': 'calc(100vh - 80px)',
      }
    }
  }
};

export default config;