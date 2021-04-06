/*
  使用Fragment去掉组件外层标签
  exact表示是否精确匹配。
  component表示绑定的组件。
  path表示路径，这个很好理解。
*/
import React, { Fragment } from 'react';
import Login from './pages/login';
import Home from './pages/home';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route exact path="/" component={Login} />
          <Redirect to={"/login"} />
        </Switch>
      </HashRouter>
    </Fragment>
  )
}

export default App
