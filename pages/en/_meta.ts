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
    title: "Documentation",
  },
  start: {
    type: "page",
    title: "Get Started",
    href: "/en/docs/start",
  },
  guide: {
    type: "menu",
    title: "Guide",
    items: {
      "user-guide": {
        title: "User Guide",
        href: "/en/docs/guide",
      },
      loader: {
        title: "Loader",
        href: "/en/docs/guide/loader",
      },
      client: {
        title: "Client",
        href: "/en/docs/guide/client",
      },
      server: {
        title: "Server",
        href: "/en/docs/guide/server",
      },
      "async-stream": {
        title: "Async Stream",
        href: "/en/docs/guide/async-stream",
      },
      credentials: {
        title: "Credentials",
        href: "/en/docs/guide/credentials",
      },
      metadata: {
        title: "Metadata",
        href: "/en/docs/guide/metadata",
      },
      status: {
        title: "Status",
        href: "/en/docs/guide/status",
      },
      config: {
        title: "Config",
        href: "/en/docs/guide/config",
      },
    },
  },
  advanced: {
    type: "menu",
    title: "Advanced",
    items: {
      overview: {
        title: "Overview",
        href: "/en/docs/advanced",
      },
      "client-middleware": {
        title: "Client Middleware",
        href: "/en/docs/advanced/client-middleware",
      },
      "server-middleware": {
        title: "Server Middleware",
        href: "/en/docs/advanced/server-middleware",
      },
      "grpc-reflection": {
        title: "gRPC Reflection",
        href: "/en/docs/advanced/grpc-reflection",
      },
      "handle-proto": {
        title: "Handle Proto",
        href: "/en/docs/advanced/handle-proto",
      },
    },
  },
  apis: {
    title: "API",
    type: "menu",
    items: {
      "proto-loader": {
        title: "Proto Loader",
        href: "/en/docs/apis/proto-loader",
      },
      "client-side": {
        title: "Client Side",
        href: "/en/docs/apis/client-side",
      },
      "server-side": {
        title: "Server Side",
        href: "/en/docs/apis/server-side",
      },
    },
  },
};
