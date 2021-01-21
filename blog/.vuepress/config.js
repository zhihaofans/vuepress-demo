module.exports = {
    title: "zhihaofans",
    description: `A simple VuePress blog.`,
    port: 8080,
    theme: "vuepress-theme-maker",
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
    themeConfig: require('./config/themeConfig'),
    plugins: require('./config/plugins')
};