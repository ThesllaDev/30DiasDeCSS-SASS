import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	base: "https://ThesllaDev.github.io/30DiasDeCSS-SASS/",
	build: {
		outDir: "build",
	},
	plugins: [react()],
});
