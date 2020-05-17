import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  // basic
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  // error
  {
    path: '/404',
    component: () => import('@/views/error/404'),
    hidden: true
  },
  {
    path: '/403',
    component: () => import('@/views/error/403'),
    hidden: true
  },
  {
    path: '/500',
    component: () => import('@/views/error/500'),
    hidden: true
  },

  // fix
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '主页', icon: 'dashboard_line' }
    }]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // dynamic
  {
    path: '/user',
    component: Layout,
    name: 'User',
    meta: { title: '用户管控', icon: 'user_line' , roles: ['admin','editor']},
    children: [
      {
        path: 'outer',
        name: 'Outer',
        component: () => import('@/views/user/outer/index'),
        meta: { title: '外部用户', icon: 'user_line' },
        children: [
          {
            path: 'control',
            name: 'Control',
            component: () => import('@/views/user/outer/list'),
            meta: { title: '整体管控', icon: 'user_line' }
          },
          {
            path: 'detail/:id',
            name: 'Detail',
            component: () => import('@/views/user/outer/detail'),
          }
        ]
      },
      {
        path: 'admin',
        name: 'Admin',
        component: () => import('@/views/user/inner/index'),
        meta: { title: '管理员用户', icon: 'admin' , roles: ['admin']},
        children: [
          {
            path: 'control',
            name: 'Control',
            component: () => import('@/views/user/inner/list'),
            meta: { title: '管理员控制', icon: 'admin' }
          },
          {
            path: 'power',
            name: 'ower',
            component: () => import('@/views/user/inner/power'),
            meta: { title: '权限控制', icon: 'admin' }
          },
          {
            path: 'detail/:id',
            name: 'Detail',
            component: () => import('@/views/user/inner/detail'),
          }
        ]
      }
    ]
  },

  {
    path: '/video',
    component: Layout,
    name: 'Video',
    meta: { title: '视频管控', icon: 'video' , roles: ['admin','editor']},
    children: [
      {
        path: 'manage',
        name: 'Manage',
        component: () => import('@/views/video/list'),
        meta: { title: '视频管理', icon: 'video' }
      },
      {
        path: 'audit',
        name: 'Audit',
        component: () => import('@/views/video/auditlist'),
        meta: { title: '视频审核', icon: 'video' }
      },
      {
        path: 'auditDetail/:id',
        name: 'AuditDetail',
        component: () => import('@/views/video/auditdetail')
      }
    ]
  },

  {
    path: '/message',
    component: Layout,
    name: 'Message',
    meta: { title: '舆论控制', icon: 'order' , roles: ['admin','editor']},
    children: [
      {
        path: 'barrage',
        name: 'Barrage',
        component: () => import('@/views/message/barrage/list'),
        meta: { title: '弹幕管理', icon: 'order' }
      },
      {
        path: 'barrageDetail/:id',
        name: 'BarrageDetail',
        component: () => import('@/views/message/barrage/detail')
      },
      {
        path: 'comment',
        name: 'Comment',
        component: () => import('@/views/message/comment/list'),
        meta: { title: '评论管理', icon: 'order' }
      },
      {
        path: 'commentDetail/:id',
        name: 'CommentDetail',
        component: () => import('@/views/message/comment/detail')
      }
    ]
  },

  {
    path: '/platform',
    component: Layout,
    name: 'Platform',
    meta: { title: '平台配置', icon: 'setting' , roles: ['admin','editor']},
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/views/platform/index'),
        meta: { title: '首页配置', icon: 'setting' }
      },
      {
        path: 'category',
        name: 'Category',
        component: () => import('@/views/platform/category'),
        meta: { title: '分类配置', icon: 'setting' }
      },
      {
        path: 'router',
        name: 'Router',
        component: () => import('@/views/platform/router'),
        meta: { title: '页签配置', icon: 'setting' }
      }
    ]
  },

  {
    path: 'external-link',
    meta: { title: '跳转到…', icon: 'link' , roles: ['admin','editor']},
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: '主站', icon: 'link' }
      },
      {
        path: 'http://www.baidu.com',
        meta: {title: '夜莺监控', icon: 'link'}
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
