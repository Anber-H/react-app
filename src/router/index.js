import detail from './detail';
import collecte from './collecte';
// import menu from '@/config/pages/menu';
// import util from '../utils/tool';
// import  _ from '@/libs/_';
// import {BrowserRouter as Router, Route} from 'react-router-dom';

const all = {
  detail,
  collecte
}
// const findAll = (arr = []) => {
//   arr.forEach((element) => {
//     if (element.children && element.children.length) {
//       element.children = findAll(element.children);
//     }
//   });
//   return arr;
// };

// export const nav = menu;
// export const defaultKey = nav && nav.length ? nav[0].key : 'collecte';
// export const routes = findAll(all[_.pathname(defaultKey)]);
// console.log(all, 11)
// console.log(routes, 22)
// console.log(defaultKey, 33)
// console.log(_.pathname(defaultKey), 44)
// console.log(nav, defaultKey, 55)
// console.log(...util.unpackage(routes), 66)
// export default new Router({
//   'routes': [...util.unpackage(routes)]
// });
export default all;
