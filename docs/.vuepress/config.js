module.exports = {
    title: 'Cardinal',
    description: 'CTF AWD (Attack with Defense) 线下赛平台',

    themeConfig: {
        repo: 'Cardinal-Platform/docs',
        docsDir: 'docs',

        editLinks: true,
        editLinkText: '帮助我们改善此页面！',
        lastUpdated: '上次更新',

        smoothScroll: true,

        navbar: [{
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
                text: '耻辱柱',
                link: 'https://github.com/Cardinal-Platform/Hall-of-Shame'
            }
        ],

        sidebar: {
            '/guide/': [{
                text: '指南',
                collapsable: false,
                children: [
                    '/guide/',
                    'requirement',
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
            }],
            '/challenger/': [{
                text: '选手端',
                collapsable: false,
                children: [
                    '/challenger/',
                    'gamebox',
                    'rank',
                    'bulletin'
                ]
            }],
            '/manager/': [{
                text: '管理端',
                collapsable: false,
                children: [
                    '/manager/',
                    'panel',
                    'team',
                    'challenge',
                    'gamebox',
                    'flag',
                    'bulletin',
                    'account',
                    'asteroid'
                ]
            }],
            '/asteroid/': [{
                text: 'Asteroid',
                collapsable: false,
                children: [
                    '/asteroid/',
                    'install.md',
                    'setting.md',
                    'api.md'
                ]
            }],
            '/videos/': [{
                text: '视频教程',
                collapsable: false,
                children: [
                    '/videos/',
                    'intro',
                    'install',
                ]
            }],
            '/question/': [{
                text: '常见问题',
                collapsable: false,
                children: [
                    '/question/',
                    'how-about-check.md'
                ]
            }]
        }
    },
    plugins: [
        [
            '@vuepress/plugin-google-analytics',
            {
                id: 'UA-97978277-4'
            },
        ],
        ['@vuepress/plugin-pwa']
    ]
}