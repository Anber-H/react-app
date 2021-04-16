import LoadableComponent from '../../utils/LoadableComponent';

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
      component: LoadableComponent(() => import('@/pages/Detail'))
    }
  ]
}
export default detail;
