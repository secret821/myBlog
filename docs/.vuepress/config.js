import { defineUserConfig, defaultTheme  } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
export default defineUserConfig({
  base:'/myBlog/',
  lang: 'zh-CN',
  title: '留简',
  description: 'ly_blog',
//   head: [
//     ['base', { href: 'https://ohudong.cztv.com' }]
//   ],
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: "HOME",
        link: "/",
      },
      { text: "NOTE", link: "/Note/" },
      { text: "DEMO", link: "/DEMO/" },
      { text: "git", link: "https://github.com/secret821/liuyan.github.io" },
      { text: "微博", link: "https://weibo.com/u/7346009584" },
    ],
    sidebar: {
      // "/Note/": ["HTML","CSS","node","数据库","js","jscode","VUEUI","react", "微信小程序","UniApp","game"],
      "/DEMO/": ["动态背景图", "时钟","贪吃蛇","填色游戏","拼图游戏"],
    },
    sidebarDepth: 2, // 侧边栏显示2级
  }),
})