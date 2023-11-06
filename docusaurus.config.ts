import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Coding Style Guide",
  tagline: "LionHeart Group Coding Style Guide",
  url: "https://lionheart-group.github.io",
  baseUrl: "/coding-style-guide/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "lionheart-group", // Usually your GitHub org/user name.
  projectName: "coding-style-guide", // Usually your repo name.
  trailingSlash: false,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"]
  },
  themeConfig: {
    navbar: {
      title: "Coding Style Guide",
      logo: {
        alt: "LionHeart",
        src: "img/logo.svg"
      },
      items: [
        {
          type: "doc",
          docId: "env/index",
          position: "left",
          label: "Environment"
        },
        {
          type: "doc",
          docId: "html/index",
          position: "left",
          label: "HTML"
        },
        {
          type: "doc",
          docId: "javascript/index",
          position: "left",
          label: "JavaScript"
        },
        {
          type: "doc",
          docId: "wordpress/index",
          position: "left",
          label: "WordPress"
        },
        {
          type: "doc",
          docId: "fegg/index",
          position: "left",
          label: "Fegg"
        },
        {
          to: "updated",
          label: "Updated History",
          position: "right"
        },
        {
          type: "localeDropdown",
          position: "right"
        },
        {
          href: "https://github.com/lionheart-group/coding-style-guide",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Environment",
              to: "/docs/env"
            },
            {
              label: "HTML",
              to: "/docs/html"
            },
            {
              label: "JavaScript",
              to: "/docs/javascript"
            },
            {
              label: "WordPress",
              to: "/docs/wordpress"
            },
            {
              label: "Fegg",
              to: "/docs/fegg"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "Updated History",
              to: "/updated"
            },
            {
              label: "GitHub",
              href: "https://github.com/lionheart-group/coding-style-guide"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LionHeart Group. Built with Docusaurus.`
    },
    prism: {
      additionalLanguages: ["php", "json"]
    }
  } satisfies Preset.ThemeConfig,
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/lionheart-group/coding-style-guide/edit/master/"
        },
        blog: {
          path: "updated",
          showReadingTime: false,
          editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
            `https://github.com/lionheart-group/coding-style-guide/edit/master/${blogDirPath}/${blogPath}`,
          routeBasePath: "updated",
          blogTitle: "Updated History",
          blogSidebarTitle: "Recent update"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      } satisfies Preset.Options
    ]
  ],
  plugins: ["docusaurus-plugin-sass"]
};

export default config;
