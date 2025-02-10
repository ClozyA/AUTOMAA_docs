import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/AUTOMAA_docs/',
  title: "AUTOMAA",
  description: "AUTOMAA",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/user-guide' }
    ],

    sidebar: [
      {
        text: 'AUTO_MAA 文档',
        items: [
          { text: '新手上路', link: '/user-guide' },
          { text: '进阶功能', link: '/advanced-features' },
          { text: 'Q&A', link: '/qa' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DLmaster361/AUTO_MAA' }
    ]
  }
})
