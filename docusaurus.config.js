// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vecin@ Inmobiliari@',
  tagline: 'Una fuente de luz en los momentos en que se necesita un poco de claridad.',
  favicon: 'img/lucurna-favicon.ico',

  future: { v4: true },

  // ✅ GitHub Pages (usuario/repositorio)
  url: 'https://john-freddy.github.io',
  baseUrl: '/playbook/',

  // ✅ Tu usuario y repo en GitHub
  organizationName: 'John-freddy',
  projectName: 'playbook',

  // (Opcional si usas "docusaurus deploy" a gh-pages; con GitHub Actions no hace falta)
  // deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // ✅ Edit links al nuevo repo
          editUrl: 'https://github.com/John-freddy/playbook/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: { type: ['rss', 'atom'], xslt: true },
          // ✅ Edit links al nuevo repo
          editUrl: 'https://github.com/John-freddy/playbook/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: { customCss: './src/css/custom.css' },
      }),
    ],
  ],

  themeConfig: ({
    image: 'img/lucurna-social-card.png',
    navbar: {
      title: 'Vecin@ Inmobiliari@',
      logo: { alt: 'My Site Logo', src: 'img/lucurna-guayacan.svg' },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'PlayBook' },
        // Si quieres botón a GitHub, descomenta y actualiza:
        // { href: 'https://github.com/John-freddy/playbook', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Books • Construidos con ❤️ usando Docusaurus`,
    },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
  }),
};

export default config;
