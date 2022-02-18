export const data = {
  "key": "v-cb4aacd2",
  "path": "/install.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "安装",
      "slug": "安装",
      "children": [
        {
          "level": 3,
          "title": "npm 安装",
          "slug": "npm-安装",
          "children": []
        },
        {
          "level": 3,
          "title": "CDN",
          "slug": "cdn",
          "children": []
        },
        {
          "level": 3,
          "title": "Hello world",
          "slug": "hello-world",
          "children": []
        }
      ]
    }
  ],
  "git": {},
  "filePathRelative": "install.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
