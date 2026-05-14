export default {
  index: {
    title: "Home",
    type: "page",
    display: "hidden",
    theme: {
      layout: "raw",
    },
  },
  docs: {
    type: "page",
    title: "文档",
  },
  start: {
    type: "page",
    title: "快速上手",
    href: "/zh/docs/start",
  },
  guide: {
    type: "menu",
    title: "指南",
    items: {
      "user-guide": {
        title: "使用指南",
        href: "/zh/docs/guide",
      },
      loader: {
        title: "Loader",
        href: "/zh/docs/guide/loader",
      },
      client: {
        title: "Client",
        href: "/zh/docs/guide/client",
      },
      server: {
        title: "Server",
        href: "/zh/docs/guide/server",
      },
      "async-stream": {
        title: "Async Stream",
        href: "/zh/docs/guide/async-stream",
      },
      credentials: {
        title: "Credentials",
        href: "/zh/docs/guide/credentials",
      },
      metadata: {
        title: "Metadata",
        href: "/zh/docs/guide/metadata",
      },
      status: {
        title: "Status",
        href: "/zh/docs/guide/status",
      },
      config: {
        title: "Config",
        href: "/zh/docs/guide/config",
      },
    },
  },
  advanced: {
    type: "menu",
    title: "高级",
    items: {
      overview: {
        title: "概览",
        href: "/zh/docs/advanced",
      },
      "client-middleware": {
        title: "Client Middleware",
        href: "/zh/docs/advanced/client-middleware",
      },
      "server-middleware": {
        title: "Server Middleware",
        href: "/zh/docs/advanced/server-middleware",
      },
      "grpc-reflection": {
        title: "gRPC Reflection",
        href: "/zh/docs/advanced/grpc-reflection",
      },
      "handle-proto": {
        title: "Handle Proto",
        href: "/zh/docs/advanced/handle-proto",
      },
    },
  },
  apis: {
    title: "API",
    type: "menu",
    items: {
      "proto-loader": {
        title: "Proto Loader",
        href: "/zh/docs/apis/proto-loader",
      },
      "client-side": {
        title: "Client Side",
        href: "/zh/docs/apis/client-side",
      },
      "server-side": {
        title: "Server Side",
        href: "/zh/docs/apis/server-side",
      },
    },
  },
};
