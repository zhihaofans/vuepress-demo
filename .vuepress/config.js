module.exports = {
  title: 'My VuePress Project',
  description: `A simple VuePress project deployed with ${PRODUCT_NAME}.`,
  port: 8080,
  theme: 'vuepress-theme-maker',
  themeConfig: {
    /*logo: '/logo.jpg',*/
    subNav: [],
    nav: [
      { text: '🏠 Home', link: '/' },
      { text: '📖 Theme', link: '/categories/theme/' },
      { text: '🐉 Maker', link: '/categories/maker/' },
      { text: '🔥 Animation', link: '/categories/animation/' },
      { text: '📽 Old Time', link: '/categories/oldtime/' },
      { text: '🔗 friend-links', link: '/friend-links/' },
    ],
    searchPlaceholder: 'Search',
    searchMaxSuggestions: 10,
    /*social: [
      {
        type: 'email',
        link: 'cmgddd@163.com'
      },
      {
        type: 'github',
        link: '80maker/vuepress-theme-maker'
      },
      {
        type: 'qq',
        link: '//qm.qq.com/cgi-bin/qm/qr?k=fknyQ434nkzVUWUmJ6rpIPctkS9eyQaZ&jump_from=webapi'
      },
      {
        type: 'feed',
        link: '/rss.xml'
      }
    ],
    copyright: '© 2020 ❤️ <a target="_blank" href="https://17ria.com/">Neil Chen</a>'
  },
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    ['@vuepress/blog', {
      globalPagination: {
        prevText: '',
        nextText: ''
      },
      directories: [
        {
          id: 'post',
          dirname: '_post',
          path: '/post/',
          itemPermalink: '/post/:year/:month/:day/:slug.html',
          pagination: {
            perPagePosts: 10,
          },
        }
      ],
      frontmatters: [
        {
          id: "tag",
          keys: ['tag', 'tags'],
          path: '/tags/',
          frontmatter: { title: 'Tag' },
          pagination: {
            lengthPerPage: 10
          }
        },
        {
          id: "category",
          keys: ['category', 'categories'],
          path: '/categories/',
          frontmatter: { title: 'Category' },
          pagination: {
            lengthPerPage: 10
          }
        }
      ],
      sitemap: {
        hostname: 'https://80shuo.com'
      },
      feed: {
        canonical_base: 'http://80shuo.com',
      },
      comment: {
        service: 'vssue',
        owner: '80maker',
        repo: '80maker.github.io',
        clientId: 'Iv1.57b5c522319529f6',
        clientSecret: '7ad0e3d1455a2d6425c813b37a0526e9bd820657',
      }*/
    }]
  ]
}