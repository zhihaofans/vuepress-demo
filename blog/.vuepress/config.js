module.exports = {
    base: "https://condescending-jang-4087d7.netlify.app/",
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
    themeConfig: {
        nav: [{ text: "🏠 Home", link: "/" }],
        searchPlaceholder: "Search",
        searchMaxSuggestions: 10
    },
    plugins: [
        [
            "@vuepress/search",
            {
                searchMaxSuggestions: 10
            }
        ],
        [
            "@vuepress/blog",
            {
                globalPagination: {
                    prevText: "",
                    nextText: ""
                },
                directories: [
                    {
                        id: "post",
                        dirname: "_post",
                        path: "/post/",
                        itemPermalink: "/post/:year/:month/:day/:slug.html",
                        pagination: {
                            perPagePosts: 10
                        }
                    }
                ],
                frontmatters: [
                    {
                        id: "tag",
                        keys: ["tag", "tags"],
                        path: "/tags/",
                        frontmatter: { title: "Tag" },
                        pagination: {
                            lengthPerPage: 10
                        }
                    },
                    {
                        id: "category",
                        keys: ["category", "categories"],
                        path: "/categories/",
                        frontmatter: { title: "Category" },
                        pagination: {
                            lengthPerPage: 10
                        }
                    }
                ]
            }
        ]
    ]
};