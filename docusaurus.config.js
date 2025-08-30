// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vecin@ Inmobiliari@',
  tagline: 'Una fuente de luz en los momentos en que se necesita un poco de claridad.',
  favicon: 'img/lucurna-favicon.ico',

  future: { v4: true },

  url: 'https://john-freddy.github.io',
  baseUrl: '/books/',

  organizationName: 'John-freddy',
  projectName: 'books',

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
          sidebarPath: './sidebars.js', // ← Sidebar de PlayBook
          editUrl: 'https://github.com/John-freddy/books/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: { type: ['rss', 'atom'], xslt: true },
          editUrl: 'https://github.com/John-freddy/books/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: { customCss: './src/css/custom.css' },
      }),
    ],
  ],

  // 👇 Aquí añadimos el nuevo plugin para cb-ventas
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cb-ventas',                         // identificador único
        path: 'docs-cb-ventas',                  // carpeta que crearás
        routeBasePath: 'cb-ventas',              // URL base (/cb-ventas)
        sidebarPath: require.resolve('./sidebars-cb-ventas.js'),
        editUrl: 'https://github.com/John-freddy/books/tree/main/',
      },
    ],
  ],

  themeConfig: ({
    image: 'img/lucurna-social-card.png',
    navbar: {
      title: 'Vecin@ Inmobiliari@',
      logo: { alt: 'My Site Logo', src: 'img/lucurna-guayacan.svg' },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'PlayBook' },
        { type: 'docSidebar', docsPluginId: 'cb-ventas', sidebarId: 'cbVentasSidebar', position: 'left', label: 'CB-Ventas' },
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
