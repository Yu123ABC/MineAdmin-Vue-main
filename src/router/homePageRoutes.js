const homePageRoutes = [
  {
    name: 'dashboard',
    path: '/dashboard',
    meta: {
      title: '我的下载',
      icon: 'icon-dashboard',
      type: 'M',
      affix: true
    },
    component: () => import('@/layout/components/components/iframe-view-mydownload.vue'),
  }, {
    name: 'userCenter',
    path: '/usercenter',
    meta: {
      title: '我的收藏',
      icon: 'icon-user',
      type: 'M',
    },
    component: () => import('@/views/userCenter/index.vue'),
  }, {
    name: 'message',
    path: '/message',
    meta: {
      title: '密码修改',
      icon: 'icon-message',
      type: 'M',
    },
    component: () => import('@/views/userCenter/message.vue'),
  }
]

export const homePage = {
  name: 'home',
  path: '/home',
  meta: { title: '账户管理', icon: 'icon-home', hidden: false, type: 'M' }
}

export default homePageRoutes