import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const setLayout = () => {
    return function (_, file) {
        file.data.astro.frontmatter.layout = file.data.astro.frontmatter.layout || "@layouts/Default.astro";
    };
};

export default defineConfig({
    markdown: {
        remarkPlugins: [setLayout],
    },
    site: "https://izkustanford.com/",
    integrations: [sitemap()],
});
