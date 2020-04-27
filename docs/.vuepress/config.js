const { description } = require('../../package')

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
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
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
    lastUpdated: false,
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
            'install',
            'first-running'
          ]
        }
      ],
      '/challenger/': [
        {
          title: '选手端',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
      '/manager/': [
        {
          title: '管理端',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
      '/question/': [
        {
          title: '常见问题',
          collapsable: false,
          children: [
            '',
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
  ]
}
