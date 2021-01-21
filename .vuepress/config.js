module.exports = {
  title: 'My VuePress Project',
  description: `A simple VuePress project deployed with ${PRODUCT_NAME}.`,
  theme:'vuepress-theme-maker',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guides/' },
    ],
  },
  dest: 'public',
}