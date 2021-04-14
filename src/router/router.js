import { Home, Detail, NotFound, Collecte } from '../pages/index';

const routes = [{
  key: 'home',
  name: '首页',
  path: '/home',
  component: Home
}, {
  key: 'Collecte',
  name: '收集',
  path: '/Collecte',
  component: Collecte
}, {
  key: 'Detail',
  name: '详情',
  path: '/Detail',
  component: Detail
}, {
  key: '404',
  name: '404',
  path: '/404',
  components: NotFound
}];

export default routes

