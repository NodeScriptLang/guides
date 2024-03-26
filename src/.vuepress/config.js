const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'NodeScript | Documentation',
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
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
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
        text: 'Docs',
        link: '/docs/',
      },
      {
        text: 'FAQs',
        link: '/faqs/',
      },
      {
        text: 'NodeScript',
        link: 'https://nodescript.dev'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'tutorial',
            'technical-overview',
          ]
        }
      ],
      '/docs/': [
        {
          title: 'NodeScript',
          collapsable: false,
          children: [
            '',
            'getting started',
            'organisations',
            'workspaces',
            'graphs',
            'nodes',
            'modules',
            'schedules',
            'endpoints',
            'variables',
            'usecases',
            'example-graphs',
          ]
        }
      ],
      '/faqs/': [
        {
          title: 'FAQs',
          collapsable: false,
          children: [
            '',
            'feedback-and-support',
            'privacy-policy',
            // 'consuming-gcp-pub-sub',
            // 'building-a-slack-application',

          ]
        }
      ],
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
