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
        displayAllHeaders: true,
        nav: [
            {
                text: 'Docs',
                link: '/',
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
            '/_docs/': [
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
                        'acceptable-use-policy',
                        // 'consuming-gcp-pub-sub',
                        // 'building-a-slack-application',

                    ]
                }
            ],
            '/': [
                {
                    title: 'Getting Started',
                    collapsable: false,
                    path: '/',
                    sidebarDepth: 1,
                    children: [
                        '',
                        'quick-start',
                    ]
                },
                {
                    title: 'Tutorials',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        'tutorials/',
                        'tutorials/json-essentials',
                        'tutorials/working-with-lists',
                    ]
                },
                {
                    title: 'Guide',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        'guide/naming-conventions',
                        'guide/graph-anatomy',
                        'guide/endpoints',
                        'guide/modules',
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
