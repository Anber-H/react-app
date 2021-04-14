import React, { Component } from 'react';
import './Header.scss';
import {NavLink} from 'react-router-dom';

const selectedStyle = {
  backgroundColor: 'red',
  color: 'slategray'
}
class Header extends Component {
  render () {
    return (
      <div>
        <nav>
          {/* <NavLink to="/home" activeStyle={selectedStyle}>首页</NavLink>
          <NavLink to="/Detail" activeStyle={selectedStyle}>详情</NavLink>
          <NavLink to="/Login" activeStyle={selectedStyle}>登陆</NavLink>
          <NavLink to="/Collecte" activeStyle={selectedStyle}>收集</NavLink> */}
        </nav>
      </div>
    )
  }
}

export default Header;
