/*
  使用Fragment去掉组件外层标签
  exact表示是否精确匹配。
  component表示绑定的组件。
  path表示路径，这个很好理解。
*/
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from './pages/Index/index';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  render () {
    return (
      <div className="App" style={{height: '100%'}}>
        <Switch>
          <Route path='/collecte#/management' component={Index}/>
          <PrivateRoute path='/' component={Index}/>
        </Switch>
      </div>
    );
  }
}

export default App;
