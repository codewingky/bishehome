export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"VDAP\",\"description\":\"ðï¸ ä¸ä¸ªæ¯æå¤ç§æ°æ®ææç®æ³çå¯è§åæ°æ®åæå¹³å°ï¼ä½¿ç¨ Django-ninja å Vue.jsã\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
