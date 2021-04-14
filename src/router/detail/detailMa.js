
const detail = {
  path: '/detail',
  meta: {
    title: '详情',
  },
  icon: 'login',
  children: [
    {
      path: 'management',
      meta: {
        title: '详情管理',
      },
      // component: (resolve) => require(['@/pages/Detail/index'], resolve)
    }
  ]
}
export default detail;
