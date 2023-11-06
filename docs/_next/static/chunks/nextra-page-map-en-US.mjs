import en_US_meta from "../../../pages/en-US/_meta.ts";
import en_US_apis_meta from "../../../pages/en-US/apis/_meta.ts";
import en_US_guide_meta from "../../../pages/en-US/guide/_meta.ts";
import en_US_start_meta from "../../../pages/en-US/start/_meta.ts";
export const pageMap = [{
  data: en_US_meta
}, {
  name: "apis",
  route: "/en-US/apis",
  children: [{
    data: en_US_apis_meta
  }, {
    name: "client-proxy",
    route: "/en-US/apis/client-proxy",
    frontMatter: {
      "sidebar_label": "Client Proxy"
    }
  }, {
    name: "grpcloader",
    route: "/en-US/apis/grpcloader",
    frontMatter: {
      "sidebar_label": "Grpcloader"
    }
  }, {
    name: "server",
    route: "/en-US/apis/server",
    frontMatter: {
      "sidebar_label": "Server"
    }
  }]
}, {
  name: "apis",
  route: "/en-US/apis",
  frontMatter: {
    "sidebar_label": "Apis"
  }
}, {
  name: "guide",
  route: "/en-US/guide",
  children: [{
    data: en_US_guide_meta
  }, {
    name: "client",
    route: "/en-US/guide/client",
    frontMatter: {
      "sidebar_label": "Client"
    }
  }, {
    name: "config",
    route: "/en-US/guide/config",
    frontMatter: {
      "sidebar_label": "Config"
    }
  }, {
    name: "credentials",
    route: "/en-US/guide/credentials",
    frontMatter: {
      "sidebar_label": "Credentials"
    }
  }, {
    name: "error",
    route: "/en-US/guide/error",
    frontMatter: {
      "sidebar_label": "Error"
    }
  }, {
    name: "loader",
    route: "/en-US/guide/loader",
    frontMatter: {
      "sidebar_label": "Loader"
    }
  }, {
    name: "metadata",
    route: "/en-US/guide/metadata",
    frontMatter: {
      "sidebar_label": "Metadata"
    }
  }, {
    name: "middleware",
    route: "/en-US/guide/middleware",
    frontMatter: {
      "sidebar_label": "Middleware"
    }
  }, {
    name: "proto",
    route: "/en-US/guide/proto",
    frontMatter: {
      "sidebar_label": "Proto"
    }
  }, {
    name: "server",
    route: "/en-US/guide/server",
    frontMatter: {
      "sidebar_label": "Server"
    }
  }, {
    name: "status",
    route: "/en-US/guide/status",
    frontMatter: {
      "sidebar_label": "Status"
    }
  }, {
    name: "stream-v2",
    route: "/en-US/guide/stream-v2",
    frontMatter: {
      "sidebar_label": "Stream V2"
    }
  }, {
    name: "stream",
    route: "/en-US/guide/stream",
    frontMatter: {
      "sidebar_label": "Stream"
    }
  }]
}, {
  name: "guide",
  route: "/en-US/guide",
  frontMatter: {
    "sidebar_label": "Guide"
  }
}, {
  name: "index",
  route: "/en-US",
  frontMatter: {
    "sidebar_label": "Index"
  }
}, {
  name: "start",
  route: "/en-US/start",
  children: [{
    data: en_US_start_meta
  }, {
    name: "client",
    route: "/en-US/start/client",
    frontMatter: {
      "sidebar_label": "Client"
    }
  }, {
    name: "proto-loader",
    route: "/en-US/start/proto-loader",
    frontMatter: {
      "sidebar_label": "Proto Loader"
    }
  }, {
    name: "server",
    route: "/en-US/start/server",
    frontMatter: {
      "sidebar_label": "Server"
    }
  }]
}, {
  name: "start",
  route: "/en-US/start",
  frontMatter: {
    "sidebar_label": "Start"
  }
}];