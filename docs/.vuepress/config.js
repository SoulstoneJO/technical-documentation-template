module.exports = {
    host: 'localhost',
    port: '8000',
    // 多语言支持
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: '日本語', // 将会被设置为 <html> 的 lang 属性
            title: '日本语项目标题',
            description: 'Vue-powered Static Site Generator'
        },
        '/ch/': {
            lang: '简体中文',
            title: '中文项目标题',
            description: 'Vue 驱动的静态网站生成器'
        }
    },
    // 主题配置
    themeConfig: {
        locales: {
            '/': {
                sidebar: 'auto',
                selectText: '言語選択',
                label: '日本語',
                ariaLabel: '言語',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                nav: [
                    { text: 'ホームページ', link: '/' },
                    { text: 'マニュアル', link: '/manual/' },
                    { text: 'データプロセス', link: '/data/' }
                ],
            },
            '/ch/': {
                sidebar: 'auto',
                // 多语言下拉菜单的标题
                selectText: '选择语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
                // 编辑链接文字
                editLinkText: '在 GitHub 上编辑此页',
                // Service Worker 的配置
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用.",
                        buttonText: "刷新"
                    }
                },
                nav: [
                    { text: '首页', link: '/ch/' },
                    { text: '用户手册', link: '/ch/manual/' },
                    { text: '数据追踪', link: '/ch/data/' }
                ],
            }
        }
    }
}