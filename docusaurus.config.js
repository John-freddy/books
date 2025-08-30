// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vecin@ Inmobiliari@',
  tagline: 'Una fuente de luz en los momentos en que se necesita un poco de claridad.',
  favicon: 'img/lucurna-favicon.ico',

  future: { v4: true },

  // GitHub Pages (usuario/repositorio)
  url: 'https://john-freddy.github.io',
  baseUrl: '/books/',

  // Repo
  organizationName: 'John-freddy',
  projectName: 'books',

  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // PlayBook (docs principal) via preset classic
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js', // Sidebar de PlayBook
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
      },
    ],
  ],

  // Secciones adicionales (cada una es un plugin docs)
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cb-ventas',                // identificador único
        path: 'docs-cb-ventas',         // carpeta
        routeBasePath: 'cb-ventas',     // /cb-ventas
        sidebarPath: './sidebars-cb-ventas.js',
        editUrl: 'https://github.com/John-freddy/books/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'prospeccion',              // identificador único
        path: 'docs-prospeccion',       // carpeta
        routeBasePath: 'prospeccion',   // /prospeccion
        sidebarPath: './sidebars-prospeccion.js',
        editUrl: 'https://github.com/John-freddy/books/tree/main/',
      },
    ],
  ],

  // Búsqueda local (para Docusaurus v3)
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        language: ['es'],
        // Incluye todas tus rutas base de docs
        docsRouteBasePath: ['docs', 'cb-ventas', 'prospeccion'],
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
      }),
    ],
  ],

  themeConfig: {
    image: 'img/lucurna-social-card.png',
    navbar: {
      title: 'Vecin@ Inmobiliari@',
      logo: { alt: 'My Site Logo', src: 'img/lucurna-guayacan.svg' },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'PlayBook' },
        { type: 'docSidebar', docsPluginId: 'prospeccion', sidebarId: 'prospeccionSidebar', position: 'left', label: 'Prospección' },
        { type: 'docSidebar', docsPluginId: 'cb-ventas', sidebarId: 'cbVentasSidebar', position: 'left', label: 'CB-Ventas' },
        { type: 'search', position: 'right' }, // 🔎 botón de búsqueda
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Books • Construidos con ❤️ usando Docusaurus`,
    },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
  },
};

export default config;
