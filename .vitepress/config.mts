import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的文档",
  description: "HA!",
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  base: '/readme',
  outDir: 'docs',
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: '我的文档',
    nav: [
      { text: '主页', link: '/' },
      { text: '日记', link: '/diary/项目介绍' },
      { text: 'V2ray', link: '/v2ray/v2ray 客户端 Linux' }
    ],

    sidebar: [
      {
        text: '1. 标题日记',
        items: [
          { text: '项目介绍', link: '/diary/项目介绍' },
          { text: '账单使用', link: '/diary/账单使用' },
          { text: '共享日记', link: '/diary/共享日记' },

          { text: '不明显的一些功能', link: '/diary/不明显的一些功能' },
          { text: '日记显示', link: '/diary/日记显示' },
          { text: '待办列表', link: '/diary/待办列表' },
          { text: '银行卡列表', link: '/diary/银行卡列表' },
          { text: '日历翻阅日记', link: '/diary/日历翻阅日记' },

          { text: '部署说明', link: '/diary/部署说明' },
          { text: '项目截图', link: '/diary/项目截图' },
        ]
      },
      {
        text: '2. v2ray',
        items: [
          { text: 'v2ray 客户端 Linux', link: '/v2ray/v2ray 客户端 Linux' },
          { text: 'v2ray 客户端 macOS', link: '/v2ray/v2ray 客户端 macOS' },
          { text: 'v2ray 客户端 Windows', link: '/v2ray/v2ray 客户端 Windows' },
          { text: 'v2ray 服务器配置', link: '/v2ray/v2ray 服务器配置' },
          { text: 'v2ray 谷歌浏览器插件使用', link: '/v2ray/v2ray 谷歌浏览器插件使用' },
        ]
      },
      {
        text: '3. 五笔码表助手',
        items: [
          { text: '五笔码表助手', link: '/wubiDictEditor/五笔码表助手使用说明' },
          { text: '码表处理工具', link: '/wubiDictEditor/tool' },
        ]
      },
      {
        text: '〇、预设',
        items: [
          { text: 'Markdown 例子', link: '/preset/markdown-examples' },
          { text: 'API 例子', link: '/preset/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2024 我的文档'
    },
    
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    }
  }
})
