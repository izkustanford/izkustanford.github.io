import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  markdown: {
    remarkPlugins: [setLayout],
  },
  site: 'https://izkustanford.com/',
  integrations: [sitemap()],
});

function setLayout() {
  return function (_, file) {
    console.log(getFileLayout(file));
    file.data.astro.frontmatter.layout = getFileLayout(file);
  };
}

function getFileLayout(file) {
  const defaultLayout = '@layouts/Default.astro';
  const initialLayout = file?.data?.astro?.frontmatter?.layout;
  const profileLayout = '@layouts/Profile.astro';
  const isProlifeFolder = file?.history?.[0].includes('pages/people');

  if (initialLayout && initialLayout !== defaultLayout) {
    return file.data.astro.frontmatter.layout;
  }

  if (isProlifeFolder) {
    return initialLayout && initialLayout !== profileLayout
      ? initialLayout
      : profileLayout;
  }

  return defaultLayout;
}
