

import { defineClientAppEnhance } from '@vuepress/client'

import element3 from 'element3'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.use(element3)
})