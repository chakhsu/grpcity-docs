import zh_CN_meta from "../../../pages/zh-CN/_meta.ts";
import zh_CN_apis_meta from "../../../pages/zh-CN/apis/_meta.ts";
import zh_CN_guide_meta from "../../../pages/zh-CN/guide/_meta.ts";
import zh_CN_start_meta from "../../../pages/zh-CN/start/_meta.ts";
export const pageMap = [{
  data: zh_CN_meta
}, {
  name: "apis",
  route: "/zh-CN/apis",
  children: [{
    data: zh_CN_apis_meta
  }, {
    name: "client-proxy",
    route: "/zh-CN/apis/client-proxy",
    frontMatter: {
      "sidebar_label": "Client Proxy"
    }
  }, {
    name: "grpcloader",
    route: "/zh-CN/apis/grpcloader",
    frontMatter: {
      "sidebar_label": "Grpcloader"
    }
  }, {
    name: "server",
    route: "/zh-CN/apis/server",
    frontMatter: {
      "sidebar_label": "Server"
    }
  }]
}, {
  name: "apis",
  route: "/zh-CN/apis",
  frontMatter: {
    "sidebar_label": "Apis"
  }
}, {
  name: "guide",
  route: "/zh-CN/guide",
  children: [{
    data: zh_CN_guide_meta
  }, {
    name: "client",
    route: "/zh-CN/guide/client",
    frontMatter: {
      "sidebar_label": "Client"
    }
  }, {
    name: "config",
    route: "/zh-CN/guide/config",
    frontMatter: {
      "sidebar_label": "Config"
    }
  }, {
    name: "credentials",
    route: "/zh-CN/guide/credentials",
    frontMatter: {
      "sidebar_label": "Credentials"
    }
  }, {
    name: "error",
    route: "/zh-CN/guide/error",
    frontMatter: {
      "sidebar_label": "Error"
    }
  }, {
    name: "loader",
    route: "/zh-CN/guide/loader",
    frontMatter: {
      "sidebar_label": "Loader"
    }
  }, {
    name: "metadata",
    route: "/zh-CN/guide/metadata",
    frontMatter: {
      "sidebar_label": "Metadata"
    }
  }, {
    name: "middleware",
    route: "/zh-CN/guide/middleware",
    frontMatter: {
      "sidebar_label": "Middleware"
    }
  }, {
    name: "proto",
    route: "/zh-CN/guide/proto",
    frontMatter: {
      "sidebar_label": "Proto"
    }
  }, {
    name: "server",
    route: "/zh-CN/guide/server",
    frontMatter: {
      "sidebar_label": "Server"
    }
  }, {
    name: "status",
    route: "/zh-CN/guide/status",
    frontMatter: {
      "sidebar_label": "Status"
    }
  }, {
    name: "stream-v2",
    route: "/zh-CN/guide/stream-v2",
    frontMatter: {
      "sidebar_label": "Stream V2"
    }
  }, {
    name: "stream",
    route: "/zh-CN/guide/stream",
    frontMatter: {
      "sidebar_label": "Stream"
    }
  }]
}, {
  name: "guide",
  route: "/zh-CN/guide",
  frontMatter: {
    "sidebar_label": "Guide"
  }
}, {
  name: "index",
  route: "/zh-CN",
  frontMatter: {
    "sidebar_label": "Index"
  }
}, {
  name: "start",
  route: "/zh-CN/start",
  children: [{
    data: zh_CN_start_meta
  }, {
    name: "client",
    route: "/zh-CN/start/client",
    frontMatter: {
      "sidebar_label": "Client"
    }
  }, {
    name: "proto-loader",
    route: "/zh-CN/start/proto-loader",
    frontMatter: {
      "sidebar_label": "Proto Loader"
    }
  }, {
    name: "server",
    route: "/zh-CN/start/server",
    frontMatter: {
      "sidebar_label": "Server"
    }
  }]
}, {
  name: "start",
  route: "/zh-CN/start",
  frontMatter: {
    "sidebar_label": "Start"
  }
}];