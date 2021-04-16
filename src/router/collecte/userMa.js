import LoadableComponent from '../../utils/LoadableComponent';

const detail = {
  path: '/user',
  meta: {
    title: '用户',
  },
  icon: 'login',
  component: LoadableComponent(() => import('@/pages/Collecte/user'))
}
export default detail;
