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
    title: "Documentation"
  },
  apis: {
    title: "API",
    type: "menu",
    items: {
      "proto-loader": {
        title: "Proto Loader",
        href: "/en/docs/apis/proto-loader"
      },
      "client-side": {
        title: "Client Side",
        href: "/en/docs/apis/client-side"
      },
      "server-side": {
        title: "Server Side",
        href: "/en/docs/apis/server-side"
      }
    }
  }
}
