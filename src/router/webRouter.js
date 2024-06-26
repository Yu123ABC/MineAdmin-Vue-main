import homePageRoutes from './homePageRoutes'
// import systemManage from './systemManage'
//系统路由
const routes = [
  {
    name: 'layout',
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: 'dashboard',
    children: homePageRoutes
  }, 
  {
    name: 'formLayout',
    path: '/formLayout',
    component: () => import('@/layout/index.vue'),
    redirect: 'openForm',
    children: [{
        name: 'openForm',
        path: '/openForm/:id',
        meta: {
          title: '公共表单',
          type: 'M',
        },
        component: () => import('@/layout/form.vue'),
    }]
  }, {
    name: 'autoform',
    path: '/autoform',
    component: () => import('@/layout/index.vue'),
    redirect: '/autoform/:id',
    children: [{
      name: 'autoformList',
      path: '/autoform:/:id',
      meta: {
        title: '自动表单',
        type: 'M',
      },
      component: () => import('@/views/setting/autoform/index.vue'),
    }]
  }, 
  
  // {
  //   name: 'login',
  //   path: '/login',
  //   component: () => import('@/views/login.vue'),
  //   meta: { title: '登录' }
  // },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/Home/home.vue'),
    meta: { title: '登录' }
  },
  {
    path: '/list',
    name: 'list',
    component:()=>import('@/views/list/list.vue'),
},
{
    path: '/zph',
    name: 'zph',
    component:()=>import('@/views/zph/zph.vue')
},

   {
    name: 'mineDoc',
    path: '/mineDoc',
    component: () => import('@/views/mineDoc/index.vue'),
    meta: { title: '接口文档' },
    children: [
      {
        path: '/interfaceList',
        name: 'interfaceList',
        meta: { title: '接口列表' },
        component: () => import('@/views/mineDoc/page/interfaceList.vue'),
      },
      {
        path: '/interfaceCode',
        name: 'interfaceCode',
        meta: { title: '代码释义' },
        component: () => import('@/views/mineDoc/page/interfaceCode.vue'),
      },
      {
        path: '/signature',
        name: 'signature',
        meta: { title: '签名算法' },
        component: () => import('@/views/mineDoc/page/signature.vue'),
      }
    ]
  }
  , {
    path: "/:pathMatch(.*)*",
    hidden: true,
    meta: { title: '访问的页面不存在' },
    component: () => import('@/layout/404.vue'),
  }
]

export default routes