
const detail = {
  path: '/general/Detail',
  meta: {
    title: '详情',
  },
  icon: 'login',
  children: [
    {
      path: 'login',
      meta: {
        title: '详情管理',
      },
      component: (resolve) => require(['@/pages/Detail/index'], resolve)
    }
  ]
}
export default detail;
