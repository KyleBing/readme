const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "KyleBing's 文库",
  tagline: 'kylebing@163.com',
  url: 'https://kylebing.cn',
  baseUrl: '/readme/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'KyleBing', // Usually your GitHub org/user name.
  projectName: 'readme', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'KyleBing\'s 文档',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {type: 'doc', docId: 'intro', position: 'left', label: '文档',},
        // {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/about', label: 'About', position: 'right'},
        {
          label: 'Home',
          href: 'https://kylebing.cn',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} My Docs, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://kylebing.cn/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://kylebing.cn/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
