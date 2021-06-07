/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Yukyu Document Site',
  tagline: '制作物に関する規約一覧',
  url: 'https://yukyu30.github.io',
  baseUrl: '/yukyu_document/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'yukyu30', // Usually your GitHub org/user name.
  projectName: 'yukyu_document', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Yukyu Document Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
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
              label: 'はじめに',
              to: '/docs/intro',
            },
            {
                label: '利用規約',
                to: '/docs/intro',
            },
            {
                label: '連絡先',
                to: '/docs/contact',
            },
          ],
        },
        {
          title: 'SNS',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/yukyu30',
            },
          ],
        },
        {
          title: 'Site',
          items: [
            {
              label: 'Booth',
              href: 'https://uq-konpeki-dou.booth.pm/',
            },
            {
              label:'pixiv fanbox',
              href: 'https://yukyu30.fanbox.cc/',
            },
            {
              label: 'SUZURI',
              href:'https://suzuri.jp/yukyu_konpeki_dou',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/yukyu30',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} yukyu`,
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
