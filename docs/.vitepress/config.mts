import { defineConfig } from 'vitepress'

let updatedFiles = new Set();  // 确保初始化 updatedFiles
export default defineConfig({
  title: "软件指南Wiki",
  description: "软件操作指南",
  head: [
    [
      'script',
      {
        async: true,
        defer: true,
        src: 'http://123.60.71.32:40205/tracker.js',
        'data-website-id': 'clx1br3mx000clj4lhsrzhjwv'
      }
    ],
    //网站图标
    ['link', { rel: 'icon', href: 'https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/wp-content/uploads/2024/01/symbol.svg' }]
  ],
  sitemap: {
    hostname: 'https://wiki.cdsoftcn.com/'
  },
  //链接去除.html
  cleanUrls:true,
  markdown: {
    //标记文本显示中文
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    }
  },
  themeConfig: {
    logo: 'https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/wp-content/uploads/2024/01/cropped-android-chrome-512x512-2.png',
    //页面大纲
    outline:{
      level:[2,6],
      label:'页面导航'
    },
    darkModeSwitchLabel:'显示模式',
    //用于自定义深色模式开关标签，该标签仅在移动端视图中显示。
    lightModeSwitchTitle:'浅色模式',
    //用于自定义悬停时显示的浅色模式开关标题。
    darkModeSwitchTitle:'深色模式',
    //用于自定义悬停时显示的深色模式开关标题。
    sidebarMenuLabel:'菜单',
    //用于自定义侧边栏菜单标签，该标签仅在移动端视图中显示。
    returnToTopLabel:'回到顶部',
    //用于自定义返回顶部按钮的标签，该标签仅在移动端视图中显示。

    //文章底部添加在github上编辑的按钮
    editLink: {
      pattern: 'https://github.com/MatrixShoo/CDSoftWiki/edit/main/docs/:path',
      text: '在GitHub上编辑此文档'
    },
    //启用最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    //启用algolia搜索
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
    //页面底部添加前一篇和后一篇按钮
    docFooter: {
      prev: '前一篇',
      next: '后一篇'
    },
    //添加主页页脚
    footer: {
      message: '<a href="https://vitepress.dev/zh/" target="_blank">基于VitePress生成</a>',
      copyright: 'Copyright © 2024 <a href="https://cdsoftcn.com/" target="_blank">杭州成大经纬科技有限公司</a>'
    },
    // https://vitepress.dev/reference/default-theme-config
    //菜单栏
    nav: [
      { text: 'Wiki首页', link: '/' },
      { text: '常见问题', link: '/常见问题/手牌占用问题' },
      {// 营业前台
        text: '营业前台',
        items: [
          { text: '桑拿水会', link: '/营业前台/桑拿水会/前台开牌' },
          { text: '会籍管理', link: '/营业前台/会籍管理/如何办理会员' },
          { text: '财务预收', link: '/营业前台/财务预收/账单操作' },
          { text: '票券管理', link: '/营业前台/票券管理/票券管理' },
          { text: '签单挂帐', link: '/营业前台/签单挂账/签单挂账' },
          
        ]
      },     
      {// 库房管理
        text: '库房管理',
        items: [
          { text: '基础数据', link: '/库房管理/基础数据/仓库设置' },
          { text: '库存操作', link: '/库房管理/库存管理/库存操作' },
         
          
        ]
      },
      {// 线上平台
        text: '线上平台', 
        items: [
          { text: '微信平台', link: '/线上平台/微信平台/微信报表' },
          { text: '票务平台', link: '/线上平台/票务平台/抖音接口' },
          { text: '短信平台', link: '/线上平台/短信平台/短信平台' },
         
        ]
      },
      {// 系统设置
        text: '系统设置', 
        items: [
          { text: '厅牌管理', link: '/系统设置/厅牌管理/如何增加厅牌类别' },
          { text: '商品管理', link: '/系统设置/商品管理/项目类别管理' },
          { text: '活动管理', link: '/系统设置/活动管理/免项促销' },
          { text: '人事管理', link: '/系统设置/人事管理/职位类别管理' },
          { text: '会员管理', link: '/系统设置/会员管理/会员卡种管理' },
          { text: '数据删除', link: '/系统设置/数据删除/数据删除' },
        ]
      },
      { // 接口管理
        text: '接口管理', 
        items: [
          { text: '硬件接口', link: '/接口管理/硬件接口/爱莎中控鞋柜+捷成安闸机' },
          { text: '报钟器指南', link: '/接口管理/报钟器指南/技师上钟' },
         
        ]
      },
      { // 钟房管理
        text: '钟房管理', 
        items: [
          { text: '排钟准备', link: '/钟房管理/排钟准备' },
          { text: '技师班次', link: '/钟房管理/技师班次' },     
          { text: '钟房管理', link: '/钟房管理/钟房管理' },              
        ]
      },
      
    ],
    //左侧边栏
    sidebar: { // 侧边栏，可以分组
      "/常见问题/": [
          {
              text: "常见问题处理",
              items: [
              ],
          },
          {
              text: "常见问题",
              collapsed: true,
              items: [
                  {
                      text: "手牌占用问题",
                      link: "/常见问题/手牌占用问题",
                  },
                  {
                    text: "手牌刷新问题",
                    link: "/常见问题/手牌刷新问题",
                  },
                  {
                      text: "如何修改密码",
                      link: "/常见问题/如何修改密码",
                  },
                  {
                    text: "系统服务保活",
                    link: "/常见问题/成大服务保活",
                  },
                  {
                    text: "更换双屏图片",
                    link: "/常见问题/更换双屏图片",
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
          {//桑拿水会
            text: "桑拿水会",
            collapsed: true,
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
            },
            {
              text: "激活注销",
              link: "/营业前台/桑拿水会/激活注销",
            },
            {
              text: "入团出团",
              link: "/营业前台/桑拿水会/入团出团",
            },
            {
              text: "冻结解冻",
              link: "/营业前台/桑拿水会/冻结解冻",
            },
            {
              text: "押金收退",
              link: "/营业前台/桑拿水会/押金收退",
            },
            {
              text: "点单录入",
              link: "/营业前台/桑拿水会/点单录入",
            },
            {
              text: "查看消费",
              link: "/营业前台/桑拿水会/查看消费",
            },
            {
              text: "手牌转账",
              link: "/营业前台/桑拿水会/手牌转账",
            },
            {
              text: "收银结算",
              link: "/营业前台/桑拿水会/收银结算",
            },
            {
              text: "账单操作",
              link: "/营业前台/桑拿水会/账单操作",
            },
            {
              text: "夜审交班",
              link: "/营业前台/桑拿水会/夜审交班",
            },
            {
              text: "手牌详情",
              link: "/营业前台/桑拿水会/手牌详情",
            },
            {
              text: "当前概览",
              link: "/营业前台/桑拿水会/当前概览",
            },
            {
              text: "前台查询",
              link: "/营业前台/桑拿水会/前台查询",
            },
            {
              text: "房间管理",
              link: "/营业前台/桑拿水会/房间管理",
            }
            
            ],
          },
          {//会籍管理
            text: "会籍管理",
            collapsed: true,
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
              text: "会员相关操作",
              link: "/营业前台/会籍管理/会员卡操作",
            },
            {
              text: "会员余额操作",
              link: "/营业前台/会籍管理/会员余额操作",
            },
            {
              text: "会员次卡券操作",
              link: "/营业前台/会籍管理/会员次卡券操作",
            },
            {
              text: "会员群发短信",
              link: "/营业前台/会籍管理/会员群发短信",
            }
            ],
          },
          {//财务预收
            text: "财务预收",
            collapsed: true,
            items: [
            {
              text: "账单操作",
              link: "/营业前台/财务预收/账单操作",
            },         
            ],
          },
          {//票券管理
            text: "票券管理",
            collapsed: true,
            items: [
            {
              text: "账单操作",
              link: "/营业前台/票券管理/票券管理",
            },         
            ],
          },
          {//签单挂帐
            text: "签单挂帐",
            collapsed: true,
            items: [
            {
              text: "签单挂帐",
              link: "/营业前台/签单挂账/签单挂账",
            },         
            ],
          },
      ],
      "/库房管理/": [
          {
              text: "库房管理",
              items: [
              ],
          },
          {//基础数据
              text: "基础数据",
              collapsed: true,
              items: [
                  {
                      text: "仓库设置",
                      link: "/库房管理/基础数据/仓库设置",
                  },
                  {
                    text: "物料类别",
                    link: "/库房管理/基础数据/物料类别",
                  },
                  {
                    text: "物料设置",
                    link: "/库房管理/基础数据/物料设置",
                  },
                  {
                    text: "供应商管理",
                    link: "/库房管理/基础数据/供应商管理",
                  },
                
              ],
          },
          {//库存管理
            text: "库存管理",
            collapsed: true,
            items: [
                {
                    text: "库房入库",
                    link: "/库房管理/库存管理/库存操作",
                },
                {
                  text: "变动单据",
                  link: "/库房管理/库存管理/变动单据",
                },
                {
                  text: "变动明细",
                  link: "/库房管理/库存管理/变动明细",
                },
                {
                  text: "供应商账",
                  link: "/库房管理/库存管理/供应商账",
                },
              
            ],
          },
      ],
      "/系统设置/": [
          {
            text: "后台设置文档",
            items: [
            ],
          },
          {//厅牌管理
            text: "厅牌管理",
            collapsed: true,
            items: [
                {
                    text: "增加厅牌类别",
                    link: "/系统设置/厅牌管理/如何增加厅牌类别",
                },
                {
                  text: "增加厅牌号码",
                  link: "/系统设置/厅牌管理/如何增加厅牌号码",
              }
            ],
          }, 
          {//商品管理
          text: "商品管理",
          collapsed: true,
          items: [
              {
                  text: "项目类别管理",
                  link: "/系统设置/商品管理/项目类别管理",
              },
              {
                text: "商品项目管理",
                link: "/系统设置/商品管理/商品项目管理",
              },             
              {
                text: "项目价格管理",
                link: "/系统设置/商品管理/项目价格管理",
              },
              {
                text: "厨房打印管理",
                link: "/系统设置/商品管理/厨房打印管理",
              },
              {
                text: "过夜费用管理",
                link: "/系统设置/商品管理/过夜费用管理",
              },
          ],
          },
          {//活动管理
          text: "活动管理",
          collapsed: true,
          items: [
              {
                  text: "免项促销管理",
                  link: "/系统设置/活动管理/免项促销",
              },
              {
                text: "套票促销管理",
                link: "/系统设置/活动管理/套票促销",
              },
              {
                text: "套餐促销管理",
                link: "/系统设置/活动管理/套餐促销",
              },
              {
                text: "票种票券管理",
                link: "/系统设置/活动管理/票种管理",
              }
              
              
          ],
          },
          {//人事管理
          text: "人事管理",
          collapsed: true,
          items: [
              {
                  text: "职位类别管理",
                  link: "/系统设置/人事管理/职位类别管理",
              }, 
              {
                text: "员工信息管理",
                link: "/系统设置/人事管理/员工信息管理",
              },
              {
                text: "技师类别管理",
                link: "/系统设置/人事管理/技师类别管理",
              }, 
              {
                text: "技师信息管理",
                link: "/系统设置/人事管理/技师信息管理",
              },
              {
                text: "技师提成管理",
                link: "/系统设置/人事管理/技师提成管理",
              }, 
              {
                text: "员工提成管理",
                link: "/系统设置/人事管理/员工提成管理",
              },                                       
          ],
          },
          {//会员管理
          text: "会员管理",
          collapsed: true,
          items: [
             {
                text: "会员卡种管理",
                link: "/系统设置/会员管理/会员卡种管理",
              }, 
              {
                text: "充值方案管理",
                link: "/系统设置/会员管理/充值方案管理",
              }, 
              {
                text: "折扣方案管理",
                link: "/系统设置/会员管理/折扣方案管理",
              },
              {
                text: "充值提成管理",
                link: "/系统设置/会员管理/充值提成管理",
              },
              {
                text: "会员送券管理",
                link: "/系统设置/会员管理/会员送券管理",
              },
                                                   
          ],
          },
          {//数据删除
            text: "数据删除",
            collapsed: true,
            items: [
               {
                  text: "数据删除",
                  link: "/系统设置/数据删除/数据删除",
                },                                                    
            ],
            }
        
      ],
      "/接口管理/": [
          {
              text: "接口管理",
              items: [
              ],
          },
          {//硬件接口
              text: "硬件接口",
              collapsed: true,
              items: [
                  {
                      text: "中控鞋柜+闸机",
                      link: "/接口管理/硬件接口/爱莎中控鞋柜+捷成安闸机",
                  },
                  {
                    text: "捷成安闸机自助餐",
                    link: "/接口管理/硬件接口/捷成安闸机自助餐",
                  },
                  {
                    text: "帝派DP4000+闸机",
                    link: "/接口管理/硬件接口/帝派DP4000+云控闸机",
                  },
                  {
                    text: "亿德报钟器配置",
                    link: "/接口管理/硬件接口/亿德报钟器配置",
                  },
                  {
                    text: "帝派报钟器配置",
                    link: "/接口管理/硬件接口/帝派报钟器配置",
                  },
                  {
                    text: "锐派报钟器配置",
                    link: "/接口管理/硬件接口/锐派报钟器配置",
                  },
              ],
          },
          {//报钟器指南
            text: "报钟器指南",
            collapsed: true,
            items: [
                {
                    text: "技师上钟",
                    link: "/接口管理/报钟器指南/技师上钟",
                },
                {
                  text: "技师加钟",
                  link: "/接口管理/报钟器指南/技师加钟",
                },
                {
                  text: "技师下钟",
                  link: "/接口管理/报钟器指南/技师下钟",
                },
                {
                  text: "派遣技师",
                  link: "/接口管理/报钟器指南/派遣技师",
                },
                {
                  text: "商品点单",
                  link: "/接口管理/报钟器指南/商品点单",
                },
                {
                  text: "呼叫服务",
                  link: "/接口管理/报钟器指南/呼叫服务",
                },
                {
                  text: "清洁房间",
                  link: "/接口管理/报钟器指南/清洁房间",
                },
                {
                  text: "房态查询",
                  link: "/接口管理/报钟器指南/房态查询",
                },
                {
                  text: "技师查询",
                  link: "/接口管理/报钟器指南/技师查询",
                },
                {
                  text: "消费查询",
                  link: "/接口管理/报钟器指南/消费查询",
                },
                {
                  text: "钟数查询",
                  link: "/接口管理/报钟器指南/钟数查询",
                },
               
            ],
          },
          
      ],
      "/线上平台/": [
          {
              text: "线上平台",
              items: [
              ],
          },
          {//微信平台
              text: "微信平台",
              collapsed: true,
              items: [
                  {
                      text: "微信报表",
                      link: "/线上平台/微信平台/微信报表",
                  },
                  {
                    text: "商城搭建",
                    link: "/线上平台/微信平台/商城搭建",
                  },
                  {
                    text: "扫码点餐",
                    link: "/线上平台/微信平台/扫码点餐",
                  },
                  {
                    text: "扫码取号",
                    link: "/线上平台/微信平台/扫码取号",
                  },
                  {
                    text: "菜单管理",
                    link: "/线上平台/微信平台/公众号菜单",
                  },
                  {
                    text: "商城装修",
                    link: "/线上平台/微信平台/商城装修",
                  },
                  {
                    text: "商城售票",
                    link: "/线上平台/微信平台/商城售票",
                  },
                  {
                    text: "商城订单",
                    link: "/线上平台/微信平台/商城订单",
                  },
                  {
                    text: "小程序码",
                    link: "/线上平台/微信平台/小程序码",
                  },
                  {
                    text: "自动回复",
                    link: "/线上平台/微信平台/自动回复",
                  },
                  {
                    text: "会员积分",
                    link: "/线上平台/微信平台/会员积分",
                  },
              ],
          },
          {//票务平台
            text: "票务平台",
            collapsed: true,
            items: [
                {
                    text: "抖音接口",
                    link: "/线上平台/票务平台/抖音接口",
                },
                {
                  text: "美团接口",
                  link: "/线上平台/票务平台/美团接口",
                },
                {
                  text: "乐活游接口",
                  link: "/线上平台/票务平台/乐活游接口",
                },
            ],
          },
          {//短信平台
          text: "短信平台",
          collapsed: true,
          items: [
              {
                  text: "短信平台功能",
                  link: "/线上平台/短信平台/短信平台",
              },
              
          ],
          },
          
      ],
       "/钟房管理/": [
          {
              text: "钟房管理",
              items: [
              ],
          },
          {//钟房管理
              text: "钟房管理",
              collapsed: true,
              items: [
                  {
                      text: "排钟准备",
                      link: "/钟房管理/排钟准备",
                  },
                  {
                      text: "技师班次",
                      link: "/钟房管理/技师班次",
                  },
                  {
                      text: "钟房管理",
                      link: "/钟房管理/钟房管理",
                  },
                
              ],
          },
      ],
     
  },  
  }
})
function transformHtml(code: any, id: any, ctx: any) {
  throw new Error('Function not implemented.');
}

