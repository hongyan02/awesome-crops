import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",

  title: "Awesome Crops",
  description: "Crops Trading Timeproof",
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
                text: "小麦的加工及其副产物",
                link: "/crops/wheat/by-product",
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
