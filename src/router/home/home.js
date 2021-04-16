import LoadableComponent from '../../utils/LoadableComponent';
const home = {
  path: '/home',
  meta: {
    title: '首页',
  },
  icon: 'login',
  component: LoadableComponent(() => import('@/pages/Home'))
}
export default home;
