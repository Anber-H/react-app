const detail = {
  path: '/collecte',
  meta: {
    title: '收集',
  },
  icon: 'login',
  children: [
    {
      path: 'management',
      meta: {
        title: '收集管理',
      },
      // component: (resolve) => require(['@/pages/Collecte/index'], resolve)
    },
    {
      path: 'card',
      meta: {
        title: '明信片',
      },
      // component: (resolve) => require(['@/pages/Collecte/index'], resolve)
    }
  ]
}
export default detail;
