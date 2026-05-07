import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Awesome Crops",
  description: "Crops Trading Timeproof",
  head: [["meta", { name: "baidu-site-verification", content: "codeva-6QTR394Cjf" }]],

  locales: {
    root: {
      lang: "zh-CN",
      label: "中文",
      title: "了不起的作物",
      description: "农作物 交易 长久",
      themeConfig: {
        nav: [
          { text: "首页", link: "/" },
          { text: "农作物", link: "/crops/" },
          { text: "面粉厂", link: "/flour-factory/" },
        ],
        sidebar: {
          "/crops/": [
            {
              text: "农作物",
              collapsed: false,
              items: [
                { text: "简介", link: "/crops/" },
                {
                  text: "小麦",
                  collapsed: true,
                  items: [
                    { text: "简介", link: "/crops/wheat/" },
                    {
                      text: "加工制粉流程",
                      link: "/crops/wheat/processing",
                    },
                    {
                      text: "小麦粉(面粉)",
                      link: "/crops/wheat/wheat-flour",
                    },
                    {
                      text: "副产物",
                      collapsed: true,
                      items: [
                        {
                          text: "简介",
                          link: "/crops/wheat/by-products",
                        },
                        {
                          text: "次粉",
                          link: "/crops/wheat/Midds/",
                        },
                        {
                          text: "麦麸",
                          link: "/crops/wheat/wheat-bran/",
                        },
                        {
                          text: "麦胚",
                          link: "/crops/wheat/wheat-germ/",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          "/flour-factory/": [
            {
              text: "面粉厂",
              items: [
                { text: "简介", link: "/flour-factory/" },
                {
                  text: "益海嘉里",
                  link: "/flour-factory/Yihai-Kerry/",
                },
              ],
            },
          ],
        },
      },
    },
    en: {
      lang: "en",
      label: "English",
      link: "/en/",
      title: "Awesome Crops",
      description: "Crops Trading Guide",
      themeConfig: {
        nav: [
          { text: "Home", link: "/en/" },
          { text: "Crops", link: "/en/crops/" },
        ],
        sidebar: [
          {
            text: "Crops",
            items: [
              { text: "Overview", link: "/en/crops/" },
              {
                text: "Wheat",
                items: [
                  { text: "Introduction", link: "/en/crops/wheat/" },
                  {
                    text: "Processing",
                    link: "/en/crops/wheat/processing",
                  },
                  {
                    text: "Wheat Flour",
                    link: "/en/crops/wheat/wheat-flour",
                  },
                  {
                    text: "By-products",
                    link: "/en/crops/wheat/by-products",
                  },
                  {
                    text: "Middlings",
                    items: [
                      {
                        text: "What is Middlings?",
                        link: "/en/crops/wheat/Midds/",
                      },
                    ],
                  },
                  {
                    text: "Wheat Bran",
                    items: [
                      {
                        text: "What is Wheat Bran?",
                        link: "/en/crops/wheat/wheat-bran/",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  },

  themeConfig: {
    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
    search: {
      provider: "local",
    },
  },
});
