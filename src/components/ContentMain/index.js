import React from 'react'
import { withRouter, Switch, Redirect } from 'react-router-dom'
import LoadableComponent from '../../utils/LoadableComponent'
import PrivateRoute from '../PrivateRoute'

const Home = LoadableComponent(() => import('../../pages/Home/index'))  // 参数一定要是函数，否则不会懒加载，只会代码拆分
const DeatilDemo = LoadableComponent(() => import('../../pages/Detail/index'))
const CollecteDemo = LoadableComponent(() => import('../../pages/Collecte/index'))
@withRouter
class ContentMain extends React.Component {
  render () {
    return (
      <div style={{padding: 16, position: 'relative'}}>
        <Switch>
          <PrivateRoute exact path='/general/home' component={Home}/>
          <PrivateRoute exact path='/detail/management' component={DeatilDemo}/>
          <PrivateRoute exact path='/collecte/management' component={CollecteDemo}/>
          <Redirect exact from='/' to='/login'/>
        </Switch>
      </div>
    )
  }
}

export default ContentMain
