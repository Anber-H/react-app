import React, {Component} from 'react';
import { Layout, Menu } from 'antd';
import './HeaderBar.scss';
import routes from '../../router/router.js';
const { Header } = Layout;
import nav from '@/config/pages/menu';
class HeaderBar extends Component {
  render () {
    return (
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          {nav.map((item, index) => (
            <Menu.Item key={item.key}>
              <a href={window.location.origin + '/' + item.key + '/management'}>
                {item.name}
              </a>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
    )
  }
}

export default HeaderBar;
