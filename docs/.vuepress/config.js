module.exports = {
    base: '/node-red-contrib-home-assistant-websocket/',
    title: 'node-red-contrib-home-assistant-websocket',
    description:
        'Node-RED integration with Home Assistant through the WebSocket and HTTP API',
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
    plugins: [
        ['@vuepress/google-analytics', { ga: 'UA-155074503-1' }],
        ['@vuepress/plugin-back-to-top', true],
        '@vuepress/medium-zoom',
        ['vuepress-plugin-code-copy', true],
    ],
    themeConfig: {
        repo: 'zachowj/node-red-contrib-home-assistant-websocket',
        repoLabel: 'Github',
        docsDir: 'docs',
        docsBranch: 'dev',
        editLinks: true,
        editLinkText: 'Help us improve this page!',
        lastUpdated: 'Last Updated',
        nav: [
            { text: 'Guides', link: '/guide/' },
            { text: 'Nodes', link: '/node/' },
            { text: 'FAQ', link: '/FAQ.md' },
            { text: 'Cookbook', link: '/cookbook/' },
            { text: 'Scrubber', link: '/scrubber/' },
            {
                text: 'Forums',
                link: 'https://github.com/zachowj/node-red-contrib-home-assistant-websocket/discussions',
            },
        ],
        sidebar: {
            '/cookbook/': [
                {
                    title: 'Cookbook',
                    collapsable: false,
                    children: [
                        'jsonata',
                        'motion-triggered-light',
                        'saving-and-restoring-states',
                        'get-state_changed-events-based-on-area',
                        'sun-events',
                        'vacation-mode',
                        'expiration-date-monitor',
                        'using-date-and-time-entities-to-trigger-flows',
                        'check-if-an-entity-was-turned-on-in-the-last-24-hours',
                        'starting-flow-after-home-assistant-restart',
                        'holiday-lights-scheduler-and-demo-mode-for-wled',
                        'actionable-notifications-subflow-for-android',
                    ],
                },
            ],
            '/guide/': [
                {
                    title: 'Guides',
                    collapsable: false,
                    children: [
                        '',
                        'first-automation',
                        'call-service',
                        'conditionals',
                        'mustache-templates',
                        'jsonata',
                    ],
                },
                {
                    title: 'Custom Integration',
                    collapsable: false,
                    children: [
                        'custom_integration/',
                        'custom_integration/event-nodes',
                        'custom_integration/switch',
                    ],
                },
                {
                    title: 'Contribute to',
                    collapsable: false,
                    children: ['development', 'documentation'],
                },
            ],
            '/node/': [
                {
                    title: 'Nodes',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        'API',
                        'call-service',
                        'config-server',
                        'current-state',
                        'device',
                        'entity',
                        'events-all',
                        'events-state',
                        'fire-event',
                        'get-entities',
                        'get-history',
                        'poll-state',
                        'render-template',
                        'tag',
                        'time',
                        'trigger-state',
                        'wait-until',
                        'webhook',
                        'zone',
                    ],
                },
            ],
        },
    },
};
