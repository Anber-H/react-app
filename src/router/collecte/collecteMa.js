import LoadableComponent from '../../utils/LoadableComponent';

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
      component: LoadableComponent(() => import('@/pages/Collecte'))
    },
    {
      path: 'card',
      meta: {
        title: '明信片',
      },
      component: LoadableComponent(() => import('@/pages/Collecte'))
    }
  ]
}
export default detail;
