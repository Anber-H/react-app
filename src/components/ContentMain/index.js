import React from 'react'
import { withRouter, Switch } from 'react-router-dom'
import PrivateRoute from '../PrivateRoute'
import routes from '../../router/router';
@withRouter
class ContentMain extends React.Component {
  render () {
    console.log(routes.routes, 'routes.routes')
    return (
      <div style={{padding: 16, position: 'relative'}}>
        <Switch>
          {
            routes.routes.map((item) => {
              if (item.children) {
                return item.children.map((child) => (<PrivateRoute key={child.key} exact path={child.key} component={child.component}/>))
              } else {
                return <PrivateRoute key={item.key} exact path={item.key} component={item.component}/>
              }
            })
          }
        </Switch>
      </div>
    )
  }
}

export default ContentMain
