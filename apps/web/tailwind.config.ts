import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./src/**/**/*.tsx"],
  presets: [sharedConfig],
  theme: {
    extend: {
      height: {
        'main': 'calc(100vh - 80px)',
      },
      boxShadow: {
        'custom': '0px 2px 0px #24ADD6',
      },
    }
  }
};

export default config;