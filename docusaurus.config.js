// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vecin@ Inmobiliari@',
  tagline: 'Somos la única inmobiliaria en Cali que te asigna una Vecina Inmobiliaria: una agente experta que vive y respira tu mismo barrio.',
  favicon: 'img/favicon.ico',

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
    defaultLocale: 'es', // Cambiado a español
    locales: ['es'],
  },

  // PlayBook (docs principal) via preset classic
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
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

  // Secciones adicionales
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cb-ventas',
        path: 'docs-cb-ventas',
        routeBasePath: 'cb-ventas',
        sidebarPath: './sidebars-cb-ventas.js',
        editUrl: 'https://github.com/John-freddy/books/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'prospeccion',
        path: 'docs-prospeccion',
        routeBasePath: 'prospeccion',
        sidebarPath: './sidebars-prospeccion.js',
        editUrl: 'https://github.com/John-freddy/books/tree/main/',
      },
    ],
  ],

  themeConfig: {
    // Meta tags para verificación de Algolia
    metadata: [
      // Meta tag existente de Algolia
      {
        name: 'algolia-site-verification',
        content: '8F71E87B170AE9D5'
      },
      // 👇 NUEVOS META TAGS PARA MÓVILES
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'default'
      },
      {
        name: 'apple-mobile-web-app-title',
        content: 'Vecin@ Inmobiliari@'
      },
      {
        name: 'mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'theme-color',
        content: '#2e8555'
      },
      {
        name: 'msapplication-TileColor',
        content: '#2e8555'
      }
    ],

    image: 'img/royal-social-card.png',
    
    // 🔍 CONFIGURACIÓN DE ALGOLIA CON CREDENCIALES CORRECTAS
    algolia: {
      appId: '81D1OBH61M',
      apiKey: 'a48881bb67a39f6061f77c4a4e65e617',
      indexName: 'Books', // Prueba primero con este nombre simple
      
      // Configuración opcional
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: 'search',
      
      // Configuración para múltiples secciones de docs
      facetFilters: [],
      
      // Debug para desarrollo
      debug: true, // Activé debug para ver más información
    },

    navbar: {
      title: 'Vecin@ Inmobiliari@',
      logo: { alt: 'My Site Logo', src: 'img/logo.svg' },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'PlayBook' },
        { type: 'docSidebar', docsPluginId: 'prospeccion', sidebarId: 'prospeccionSidebar', position: 'left', label: 'Prospección' },
        { type: 'docSidebar', docsPluginId: 'cb-ventas', sidebarId: 'cbVentasSidebar', position: 'left', label: 'CB-Ventas' },
        {
          type: 'search',
          position: 'right',
        },
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