module.exports = [
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
    ];