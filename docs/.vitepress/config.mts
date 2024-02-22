import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
   
  title: "成大软件Wiki",
  description: "成大软件操作指南",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: '常见问题', link: '/常见问题/∞常见问题处理方法' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '常见问题',
        items: [
          { text: '∞常见问题处理方法', link: '/常见问题/∞常见问题处理方法' },
          { text: '如何修改工号密码', link: '/常见问题/如何修改工号密码' }
        ]
      }
    ],

    
  }
})
