import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
   
  title: "成大软件Wiki",
  description: "成大软件操作指南",
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },
  themeConfig: {
    logo: 'https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/wp-content/uploads/2024/01/cropped-android-chrome-512x512-2.png',
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '营业前台', link: '/营业前台/软件主界面简介' },
      { text: '常见问题', link: '/常见问题/∞常见问题处理方法' },
    ],

    sidebar: { // 侧边栏，可以分组
      "/常见问题/": [
          {
              text: "常见问题处理",
              items: [
              ],
          },
          {
              text: "常见问题",
              items: [
                  {
                      text: "∞常见问题处理方法",
                      link: "/常见问题/∞常见问题处理方法",
                  },
                  {
                      text: "如何修改工号密码",
                      link: "/常见问题/如何修改工号密码",
                  },
              ],
          },
      ],
      "/营业前台/": [
          {
              text: "前台操作文档",
              items: [
              ],
          },
          {
              text: "营业前台",
              items: [
                  {
                      text: "软件主界面简介",
                      link: "/营业前台/软件主界面简介",
                  }
              ],
          },
          {
            text: "会籍管理",
            items: [
            {
                text: "如何办理会员",
                link: "/营业前台/会籍管理/如何办理会员",
            },
            {
              text: "如何续充会员",
              link: "/营业前台/会籍管理/如何续充会员",
            },
            {
              text: "会员卡操作",
              link: "/营业前台/会籍管理/会员卡操作",
            },
            {
              text: "会员余额操作",
              link: "/营业前台/会籍管理/会员余额操作",
            },
            {
              text: "会员次卡券操作",
              link: "/营业前台/会籍管理/会员次卡券操作",
            }
            ],
          },
          {
            text: "桑拿水会",
            items: [
            {
                text: "前台开牌",
                link: "/营业前台/桑拿水会/前台开牌",
            },
            {
              text: "如何续充会员",
              link: "/营业前台/会籍管理/如何续充会员",
            },
            {
              text: "会员卡操作",
              link: "/营业前台/会籍管理/会员卡操作",
            },
            {
              text: "会员余额操作",
              link: "/营业前台/会籍管理/会员余额操作",
            },
            {
              text: "会员次卡券操作",
              link: "/营业前台/会籍管理/会员次卡券操作",
            }
            ],
          }
      ]
     
  },

    
  }
})
