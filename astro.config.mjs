import {
    defineConfig
} from 'astro/config';
export default defineConfig({
    markdown: {
        remarkPlugins: [setLayout],
    },
    site: 'https://izkustanford.com/',
});

function setLayout() {
    return function(_, file) {
        file.data.astro.frontmatter.layout = getFileLayout(file);
    };
}

function getFileLayout(file) {
    const defaultLayout = '@layouts/Default.astro';
    const initialLayout = file?.data?.astro?.frontmatter?.layout;
    if (initialLayout && initialLayout !== defaultLayout) {
        return file.data.astro.frontmatter.layout;
    }
    // const profileLayout = '@layouts/Profile.astro';
    // const isProlifeFolder = file?.history?.[0].includes('pages/people');
    // if (isProlifeFolder) {
    //     return initialLayout && initialLayout !== profileLayout ?
    //         initialLayout :
    //         profileLayout;
    // }
    return defaultLayout;
}
