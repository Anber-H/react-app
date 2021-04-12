/*
  使用Fragment去掉组件外层标签
  exact表示是否精确匹配。
  component表示绑定的组件。
  path表示路径，这个很好理解。
*/
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import routes from './router/router.js';
// import Login from './pages/Login/index';
import Index from './pages/Index/index';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height:'100%'}}>
        <Switch>
          <Route path='/' component={Index}/>
          <PrivateRoute path='/' component={Index}/>
        </Switch>
          {/* <Switch>
            {
              routes.map(route => {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    component={route.component}/>
                )
              })
            }
            <Redirect exact from="/" to={routes[0].path} />
            <Redirect to="/404"/>
          </Switch> */}
      </div>
    );
  }
}

export default App;
