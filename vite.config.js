import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            jsxImportSource: "@emotion/react",
        }),
        tsconfigPaths(),
        svgr({
            svgrOptions: {
                icon: true,
                memo: true,
            },
        }),
        sentryVitePlugin({
            org: "taeseung-yoo",
            project: "javascript-react",
        }),
    ],
    build: {
        sourcemap: true,
    },
});
