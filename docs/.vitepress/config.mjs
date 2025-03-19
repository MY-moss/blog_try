import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog_dist/',
  head: [["link", { rel: "icon", href: "../assets/logo2.jpg" }]],
  title: "moyangspace",   //左上角标题
  description: "A VitePress Site",
  themeConfig: {
    logo:'../assets/logo5.png',
  
    outlineTitle:"文章目录",
    outline:[2,6],
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页' , link: '/' },
      { text: '示例', link: '/markdown-examples' },
      {
        text: '科技',
        items: [
            {
                text: '第1篇',
                items: [
                    { text: '第1节', link: '../../txt/tech/txt1.md' },
                    { text: 'section-A-2', link: '/test/sectionA-2' },
                    { text: 'section-A-3', link: '/test/sectionA-3' },
                ]
            },
            { 
                text: 'item-3-B', 
                items: [
                    {text: 'section-B-1', link: '/test/setctionB-1'},
                    {text: 'section-B-2', link: '/test/setctionB-2'},
                    {text: 'section-B-3', link: '/test/setctionB-3'},
                ]
            },
            { text: '作文', link: '../../txt/essay/txt1.md' },
        ]
      },
      {
        text: 'CTF',
        items: [
            {
                text: '比赛wp',
                items: [
                    { text: 'section-A-1', link: '../../txt/match/CTF/txt1.md' },
                    { text: 'section-A-2', link: '/test/sectionA-2' },
                    { text: 'section-A-3', link: '/test/sectionA-3' },
                ]
            },
            { 
                text: '练习wp', 
                items: [
                    {text: 'section-B-1', link: '../../txt/match/practice/txt1.md'},
                    {text: 'section-B-2', link: '/test/setctionB-2'},
                    {text: 'section-B-3', link: '/test/setctionB-3'},
                ]
            },
            { text: 'item-3-3', link: '/item3/3' },
            { text: 'item-3-4', link: '/item3/4' }
        ]
      },
    ] ,

    sidebar: {
      '/txt/essay/':[
        { 
          text: 'Examples',
          items: [
            { text: 'Markdown 演示', link: '/markdown-examples' },
            { text: 'Runtime API 演示', link: '/api-examples' }
          ]
        },
        { 
          text: 'Examples2',
          items: [
            { text: 'Markdown 演示2', link: '/markdown-examples' },
            { text: 'Runtime API 演示2', link: '/api-examples' }
          ]
        }    
      ],
      '/txt/tech/':[
        { 
          text: 'Examples',
          items: [
            { text: 'Markdown 演示', link: '/markdown-examples' },
            { text: 'Runtime API 演示', link: '/api-examples' }
          ]
        },
        { 
          text: 'Examples2',
          items: [
            { text: 'Markdown 演示2', link: '/markdown-examples' },
            { text: 'Runtime API 演示2', link: '/api-examples' }
          ]
        }    
      ],
      '/txt/match/CTF/':[
        { 
          text: 'Examples',
          items: [
            { text: 'Markdown 演示', link: '/markdown-examples' },
            { text: 'Runtime API 演示', link: '/api-examples' }
          ]
        },
        { 
          text: 'Examples2',
          items: [
            { text: 'Markdown 演示2', link: '/markdown-examples' },
            { text: 'Runtime API 演示2', link: '/api-examples' }
          ]
        }    
      ],
      '/txt/match/practice/':[
        { 
          text: 'Examples',
          items: [
            { text: 'Markdown 演示', link: '/markdown-examples' },
            { text: 'Runtime API 演示', link: '/api-examples' }
          ]
        },
        { 
          text: 'Examples2',
          items: [
            { text: 'Markdown 演示2', link: '/markdown-examples' },
            { text: 'Runtime API 演示2', link: '/api-examples' }
          ]
        }    
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MY-moss' }  //用于实现右上角的自己账号的转跳
    ],

    footer:{
      message:"时间赐我青春与死亡，尽管我带着镣铐，依然可以像大海一样歌唱",
       copyright:"2025 @ MoYang",    //页脚,用于写备案等一些东西了
    },

    // 设置搜索框的样式
    search: {
      provider: "local",
        options: {
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              noResultsText: "无法找到相关结果",
              resetButtonTitle: "清除查询条件",
              footer: {
                selectText: "选择",
                navigateText: "切换",
              },
            },
          },
        },
    },

    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    
  },
}) 

