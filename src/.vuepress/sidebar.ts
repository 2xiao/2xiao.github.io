import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/leetcode/": [
    "",
    {
      text: "第一章 序章",
      prefix: "outline/",
      children: [
        "intro",
        "complexity",
        "solution_list",
        {
          text: "1.4 学习计划",
          link: "plan/README.md",
          activeMatch: "^/leetcode/outline/plan",
        },
        {
          text: "1.5 题解标签",
          link: "tag/README.md",
          activeMatch: "^/leetcode/outline/tag",
        },
      ],
      collapsible: true,
    },
    {
      text: "第二章 数据结构",
      prefix: "ds/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "第三章 算法",
      prefix: "algorithm/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "第四章 LeetCode 题解",
      prefix: "problem/",
      children: [
        // AUTO_GEN_CONFIG_START
        {
          text: "0001-0099",
          collapsible: true,
          children: [
            "0001",
            "0002",
            "0003",
            "0004",
            "0006",
            "0007",
            "0008",
            "0009",
            "0011",
            "0012",
            "0013",
            "0015",
            "0016",
            "0018",
            "0019",
            "0020",
            "0021",
            "0023",
            "0024",
            "0025",
            "0026",
            "0027",
            "0033",
            "0036",
            "0041",
            "0048",
            "0054",
            "0058",
            "0059",
            "0061",
            "0062",
            "0063",
            "0066",
            "0070",
            "0073",
            "0080",
            "0082",
            "0083",
            "0086",
            "0088",
            "0092"
          ],
        },
        {
          text: "0100-0199",
          collapsible: true,
          children: [
            "0120",
            "0125",
            "0128",
            "0136",
            "0141",
            "0143",
            "0146",
            "0151",
            "0152",
            "0155",
            "0167",
            "0169",
            "0189"
          ],
        },
        {
          text: "0200-0299",
          collapsible: true,
          children: [
            "0203",
            "0206",
            "0217",
            "0219",
            "0224",
            "0225",
            "0232",
            "0234",
            "0238",
            "0242",
            "0259",
            "0279",
            "0283"
          ],
        },
        {
          text: "0300-0399",
          collapsible: true,
          children: [
            "0328",
            "0344",
            "0345",
            "0380",
            "0394"
          ],
        },
        {
          text: "0400-0499",
          collapsible: true,
          children: [
            "0445",
            "0485",
            "0496",
            "0498"
          ],
        },
        {
          text: "0500-0599",
          collapsible: true,
          children: [
            "0503",
            "0509"
          ],
        },
        {
          text: "0600-0699",
          collapsible: true,
          children: [
            "0611",
            "0622",
            "0678",
            "0682"
          ],
        },
        {
          text: "0700-0799",
          collapsible: true,
          children: [
            "0705",
            "0706",
            "0707",
            "0724",
            "0739"
          ],
        },
        {
          text: "0800-0899",
          collapsible: true,
          children: [
            "0844",
            "0876",
            "0880"
          ],
        },
        {
          text: "1000-1099",
          collapsible: true,
          children: [
            "1021",
            "1047"
          ],
        },
        {
          text: "1100-1199",
          collapsible: true,
          children: [
            "1190"
          ],
        },
        {
          text: "1400-1499",
          collapsible: true,
          children: [
            "1441",
            "1472",
            "1475"
          ],
        },
        {
          text: "面试题",
          collapsible: true,
          children: [
            "i_16.25"
          ],
        },
        {
          text: "剑指 Offer",
          collapsible: true,
          children: [
            "jz_offer_03_1",
            "jz_offer_04_1",
            "jz_offer_09_1",
            "jz_offer_22_1"
          ],
        },
        {
          text: "剑指 Offer II",
          collapsible: true,
          children: [
            "jz_offer_II_031"
          ],
        },// AUTO_GEN_CONFIG_END
      ],
      collapsible: true,
    },
  ],
  "/react/": "structure",
});
