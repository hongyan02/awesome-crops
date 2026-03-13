import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Awesome Crops",
  description: "Crops Trading Timeproof",
  head: [
    ["meta", { name: "baidu-site-verification", content: "codeva-6QTR394Cjf" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "农作物", link: "/crops/" },
    ],

    sidebar: [
      {
        text: "农作物",
        items: [
          { text: "简介", link: "/crops/" },
          {
            text: "小麦",
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
                link: "/crops/wheat/by-products",
              },
              {
                text: "次粉",
                items: [{ text: "什么是次粉？", link: "/crops/wheat/Midds/" }],
              },
              {
                text: "麦麸",
                items: [
                  { text: "什么是麦麸？", link: "/crops/wheat/wheat-bran/" },
                ],
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    search: {
      provider: "local",
    },
  },
});
