export default {
  index: {
    title: "Home",
    type: "page",
    display: "hidden",
    theme: {
      footer: false,
      layout: "raw"
    }
  },
  docs: {
    type: "page",
    title: "文档"
  },
  apis: {
    title: "API",
    type: "menu",
    items: {
      "proto-loader": {
        title: "Proto Loader",
        href: "/zh/docs/apis/proto-loader"
      },
      "client-side": {
        title: "Client Side",
        href: "/zh/docs/apis/client-side"
      },
      "server-side": {
        title: "Server Side",
        href: "/zh/docs/apis/server-side"
      }
    }
  }
}
