const { description } = require('../../package')
const { catalogue } = require('./videos')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Cardinal',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#4f92ce' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: "shortcut icon", href: "/favicon.ico"}]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    repoLabel: '查看源码',
    docsRepo: 'Cardinal-Platform/pages',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',

    lastUpdated: '上次更新',
    smoothScroll: true,
    nav: [
      {
        text: '指南',
        link: '/guide/',
      },
      {
        text: '选手端',
        link: '/challenger/'
      },
      {
        text: '管理端',
        link: '/manager/'
      },
      {
        text: '3D实时大屏(Asteroid)',
        link: '/asteroid/'
      },
      {
        text: '常见问题',
        link: '/question/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/vidar-team/Cardinal'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: '指南',
          collapsable: false,
          children: [
            '',
            'requirement',
            'before-start',
            'install',
            'first-running',
            'rules',
            'structure',
            'develop',
            'error-code',
            'i18n',
            'contributor',
            'donate'
          ]
        }
      ],
      '/challenger/': [
        {
          title: '选手端',
          collapsable: false,
          children: [
            '',
            'gamebox',
            'rank',
            'bulletin'
          ]
        }
      ],
      '/manager/': [
        {
          title: '管理端',
          collapsable: false,
          children: [
            '',
            'panel',
            'team',
            'challenge',
            'gamebox',
            'flag',
            'bulletin',
            'account',
            'asteroid'
          ]
        }
      ],
      '/asteroid/': [
        {
          title: 'Asteroid',
          collapsable: false,
          children: [
            '',
            'install.md',
            'setting.md',
            'api.md'
          ]
        }
      ],
      '/videos/': [
        {
          title: '视频教程',
          collapsable: false,
          children: [
            'intro',
            'install',
          ]
        }
      ],
      '/question/': [
        {
          title: '常见问题',
          collapsable: false,
          children: [
            '',
            'how-about-check.md'
          ]
        }
    ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
        '@vuepress/google-analytics',
        {
            'ga': 'UA-97978277-4' // UA-00000000-0
        }
    ]
  ]
}
