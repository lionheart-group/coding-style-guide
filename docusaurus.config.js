// @ts-check

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'Coding Style Guide',
  tagline: 'LionHeart Group Coding Style Guide',
  url: 'https://lionheart-group.gitlab.io',
  baseUrl: '/coding-style-guide/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'lionheart-group', // Usually your GitHub org/user name.
  projectName: 'coding-style-guide', // Usually your repo name.
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Coding Style Guide',
        logo: {
          alt: 'LionHeart',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'env/index',
            position: 'left',
            label: 'Environment',
          },
          {
            type: 'doc',
            docId: 'html/index',
            position: 'left',
            label: 'HTML',
          },
          {
            type: 'doc',
            docId: 'javascript/index',
            position: 'left',
            label: 'JavaScript',
          },
          {
            type: 'doc',
            docId: 'wordpress/index',
            position: 'left',
            label: 'WordPress',
          },
          {
            type: 'doc',
            docId: 'fegg/index',
            position: 'left',
            label: 'Fegg',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://gitlab.com/lionheart-group/coding-style-guide',
            label: 'GitLab',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Environment',
                to: '/docs/env',
              },
              {
                label: 'HTML',
                to: '/docs/html',
              },
              {
                label: 'JavaScript',
                to: '/docs/javascript',
              },
              {
                label: 'WordPress',
                to: '/docs/wordpress',
              },
              {
                label: 'Fegg',
                to: '/docs/fegg',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitLab',
                href: 'https://gitlab.com/lionheart-group/coding-style-guide',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LionHeart Group. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ['php']
      }
    }),
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://gitlab.com/lionheart-group/coding-style-guide/-/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://gitlab.com/lionheart-group/coding-style-guide/-/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
};
