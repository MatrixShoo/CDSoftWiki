import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "成大软件Wiki",
  description: "成大软件操作指南",
  head: [['link', { rel: 'icon', href: 'https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/wp-content/uploads/2024/01/symbol.svg' }]],
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
    outline:[2,6],
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    search: {
      provider: 'algolia',
      options: {
        appId: 'VNUQ9V1AA6',
        apiKey: '91d0b4cafedfffc8b6043fe056ee4609',
        indexName: 'cdsoftcn',
        locales: {
          zh: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                }
              }
            }
          }
        }
      }
    },
    docFooter: {
      prev: '前一篇',
      next: '后一篇'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present 杭州成大经纬科技有限责任公司'
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
              text: "取消开牌",
              link: "/营业前台/桑拿水会/取消开牌",
            },
            {
              text: "手牌换牌",
              link: "/营业前台/桑拿水会/手牌换牌",
            },
            {
              text: "手牌留言",
              link: "/营业前台/桑拿水会/手牌留言",
            },
            {
              text: "修改留言",
              link: "/营业前台/桑拿水会/修改留言",
            }
            ],
          }
      ]
     
  },  
  }
})
