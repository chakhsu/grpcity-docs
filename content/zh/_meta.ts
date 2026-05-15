export default {
  index: {
    title: "Home",
    type: "page",
    display: "hidden",
    theme: {
      layout: "full",
      sidebar: false,
      toc: false,
      breadcrumb: false,
      pagination: false,
      timestamp: false,
    },
  },
  docs: {
    type: "page",
    title: "文档",
  },
  start: {
    type: "page",
    title: "快速上手",
    href: "/docs/start",
  },
  guide: {
    type: "page",
    title: "指南",
    href: "/docs/guide",
  },
  advanced: {
    type: "page",
    title: "高级",
    href: "/docs/advanced",
  },
  apis: {
    type: "page",
    title: "API",
    href: "/docs/apis",
  },
};
