import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets" | "theme"> = {
	content: ["./src/**/*.tsx"],
	presets: [sharedConfig],
	theme: {
		extend: {
			boxShadow: {
				modalBoxShadow: "100px 90px 50px #e06e9b",
			},
		},
	},
};

export default config;
