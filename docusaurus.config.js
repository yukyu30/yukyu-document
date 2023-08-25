/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Yukyu Document Site',
  tagline: '制作物に関する規約一覧',
  url: 'https://yukyu30.github.io',
  baseUrl: '/yukyu-document/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'yukyu30', // Usually your GitHub org/user name.
  projectName: 'yukyu-document', // Usually your repo name.
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
          docId: 'term-of-use/index',
          position: 'left',
          label: 'Docs',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '利用規約',
              to: '/docs/term-of-use',
            },
            {
              label: 'よくある質問',
              to: '/docs/faq',
            },
            {
              label: '連絡先',
              to: '/docs/contact',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Github Repo',
              href: 'https://github.com/yukyu30/yukyu-document/',
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
          title: 'Other Site',
          items: [
            {
              label: 'SUZURI',
              href: 'https://suzuri.jp/yukyu30',
            },
            {
              label: 'Booth',
              href: 'https://uq-konpeki-dou.booth.pm/',
            },
            {
              label: 'pixiv fanbox',
              href: 'https://yukyu30.fanbox.cc/',
            },
            {
              label: 'yukyu.net',
              href: 'https://yukyu.net',
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
          editUrl: 'https://github.com/yukyu30/yukyu-document/edit/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/yukyu30/yukyu-document/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
};
