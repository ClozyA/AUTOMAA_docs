import type { FooterData } from "@theojs/lumen";

export const Footer_Data: FooterData = {
  // beian: { icp: "备案号", police: "公网安备号", showIcon: true },
  author: { name: "ClozyA", link: "https://github.com/ClozyA" },
  group: [
    {
      title: "本体链接",
      icon: "bx:link", // `iconify`图标
      color: "rgba(255, 87, 51, 1)",
      links: [
        {
          name: "AUTO_MAA本体GitHub",
          link: "https://github.com/DLmaster361/AUTO_MAA",
          icon: "solar:book-bold",
        },
      ],
    },
    {
      title: "文档站链接",
      icon: "bx:link",
      color: "rgba(255, 87, 51, 1)",
      links: [
        {
          name: "AUTO_MAA文档站GitHub",
          icon: "solar:book-bold",
          link: "https://github.com/ClozyA/AUTOMAA_docs",
        },
      ],
    },
  ],
};
