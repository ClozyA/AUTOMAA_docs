import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "AUTO_MAA",
  description: "AUTO_MAA",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/user-guide" },
    ],

    sidebar: [
      {
        text: "AUTO_MAA 文档",
        items: [
          { text: "新手上路", link: "/user-guide" },
          { text: "进阶功能", link: "/advanced-features" },
          { text: "多开指南", link: "/multi-instance" },
          { text: "常见问题", link: "/frequently-asked-questions" },
          { text: "更新日志", link: "/changelog" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/DLmaster361/AUTO_MAA" },
    ],

    // 右侧目录（TOC）配置
    outline: {
      level: [2, 4], // 允许 h2 到 h4 级别的标题出现在右侧目录
      label: "目录", // 自定义目录标题
    },
  },
});
