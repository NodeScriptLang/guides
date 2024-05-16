const { description } = require('../../package')

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'NodeScript · Docs',
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
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }],
        ['link', {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Fira+Sans:ital,wght@0,400;0,500;1,400;1,500&display=swap',
        }],
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
        logo: '/img/logo.svg',
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
                        'terms-&-conditions',
                        'privacy-policy',
                        'acceptable-use-policy'
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
                        'tutorials/http-requests',
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
                        'guide/fetch-vs-http-request',
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
