/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Coding Style Guide',
  tagline: 'LionHeart Group Coding Style Guide',
  url: 'https://lionheart-group.gitlab.io/coding-style-guide/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'lionheart-group', // Usually your GitHub org/user name.
  projectName: 'coding-style-guide', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
  },
  themeConfig: {
    navbar: {
      title: 'Coding Style Guide',
      logo: {
        alt: 'LionHeart',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'html/index',
          position: 'left',
          label: 'HTML',
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
              label: 'HTML',
              to: '/docs/html',
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://gitlab.com/lionheart-group/coding-style-guide/-/edit/master/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://gitlab.com/lionheart-group/coding-style-guide/-/edit/master/docs/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
