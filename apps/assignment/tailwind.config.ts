import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";
import tailwindScrollbar from "tailwind-scrollbar";

const config: Pick<Config, "content" | "presets" | "theme" | "plugins"> = {
	content: ["./src/**/*.tsx"],
	presets: [sharedConfig],
	theme: {
		extend: {
			boxShadow: {
				modalBoxShadow: "100px 90px 50px #e06e9b",
			},
		},
	},
	plugins: [tailwindScrollbar({ nocompatible: true })],
};

export default config;
