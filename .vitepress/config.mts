import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KyleBing's README",
  description: "HA!",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  base: '/readme',
  outDir: 'dist',
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'V2ray', link: '/v2ray/v2ray 客户端 Linux' }
    ],

    sidebar: [
      {
        text: '1. v2ray',
        items: [
          { text: 'v2ray 客户端 Linux', link: '/v2ray/v2ray 客户端 Linux' },
          { text: 'v2ray 客户端 macOS', link: '/v2ray/v2ray 客户端 macOS' },
          { text: 'v2ray 客户端 Windows', link: '/v2ray/v2ray 客户端 Windows' },
          { text: 'v2ray 服务器配置', link: '/v2ray/v2ray 服务器配置' },
          { text: 'v2ray 谷歌浏览器插件使用', link: '/v2ray/v2ray 谷歌浏览器插件使用' },
        ]
      },
      {
        text: '2. 五笔码表助手',
        items: [
          { text: '五笔码表助手', link: '/wubiDictEditor/wubi-dict-editor' },
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
    ]
  }
})
