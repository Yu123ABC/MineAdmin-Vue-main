import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { useUserStore } from '@/store'
import NProgress from 'nprogress'
import tool from '@/utils/tool'
import 'nprogress/nprogress.css'

import routes from './webRouter.js'

const title = import.meta.env.VITE_APP_TITLE
const defaultRoutePath = '/'
const whiteRoute = ['home','list','zph','interfaceList', 'interfaceCode', 'signature']

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const userStore = useUserStore();
  let toTitle = to.meta.title ? to.meta.title : to.name
  document.title = `${toTitle} - ${title}`
  const token = tool.local.get(import.meta.env.VITE_APP_TOKEN_PREFIX)
  
  // 登录状态下
  if (token) {
    if (to.name === 'home') {
      //next({ path: defaultRoutePath });
      next();
      return
    }

    if (! userStore.user && userStore.user == undefined ) {
      const data = await userStore.requestUserInfo();
      data && next({ path: to.path, query: to.query });
      next();
    } else {
      next()
    }
  } else {
    // 未登录的情况下允许访问的路由
    if (! whiteRoute.includes(to.name)) {
      next({ name: 'home', query: { redirect: to.fullPath } })
    } else {
      next()
    }
  }
})

router.afterEach((to, from) => {
  NProgress.done()
})

router.onError(error => {
  NProgress.done();
});


export default router