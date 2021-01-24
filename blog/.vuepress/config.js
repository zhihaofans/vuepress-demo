module.exports = {
    title: "zhihaofans",
    description: `A simple VuePress blog.`,
    port: 8080,
    locales: {
        '/': {lang: 'zh-CN'}
    },
    markdown: {
        lineNumbers: true,
        extractHeaders: ["h2", "h3", "h4"],
        plugins: {
            "markdown-it-mark": true,
            "markdown-it-footnote": true,
            "markdown-it-abbr": true,
            "markdown-it-task-lists": true
        }
    },
    theme: "vuepress-theme-reco",
    themeConfig: require('./config/themeConfigReco'),
    plugins: require('./config/plugins')
};