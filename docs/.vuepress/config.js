module.exports = {
  title: 'WeekTips',// 设置网站标题
  description: '一款简洁好用的待办软件',
  base: '/',   // 设置站点根路径
  dest: './ROOT',  // 设置输出目录
  head: [
    [
      'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
      { rel: 'icon', href: 'logo.png' }
    ]
  ],
  plugins: [],
  themeConfig: {
      // 添加导航栏
      nav: [
          { text: '主页', link: '/' },
          { text: '指南', link: '/guide/' },
    ],
      // 为以下路由添加左侧边栏
      sidebar: {
          '/guide/': [
              {
                title: 'WeekTips详细教程',
                collapsable: false,
                children: [ 
                    { 
                      title: '介绍', 
                      path: '/guide/介绍', 
                    },
                    { 
                      title: '项目说明', 
                      path: '/guide/项目说明', 
                    },
                    { 
                      title: '开发', 
                      path: '/guide/开发', 
                    },
                    { 
                      title: '特色', 
                      path: '/guide/特色', 
                    },
                ]
              }
          ],
      },
      sidebarDepth: 2,//左侧导航显示的层级
      lastUpdated: 'Last Updated'
  }
}