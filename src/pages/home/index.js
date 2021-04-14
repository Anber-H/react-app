import React, { Component } from 'react';
import './Home.scss';
import {Header} from '../../components';

class Home extends Component {
  render () {
    return (
      <div className="P-home">
        <Header
          name="洛阳白牡丹"
          func={() => {console.log('func')}}/>
        <h1>首页</h1>
      </div>
    )
  }
}

export default Home
