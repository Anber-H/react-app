
const detail = {
  path: '/general/Collecte',
  meta: {
    title: '收集',
  },
  icon: 'login',
  children: [
    {
      path: 'login',
      meta: {
        title: '收集管理',
      },
      component: (resolve) => require(['@/pages/Collect/index'], resolve)
    }
  ]
}
export default detail;
