import React, {Component} from 'react';
import { Layout, Menu } from 'antd';
import './HeaderBar.scss';
const { Header } = Layout;
import nav from '@/config/pages/menu';
class HeaderBar extends Component {
  render () {
    return (
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          {nav.map((item) => (
            <Menu.Item key={item.key}>
              <a href={window.location.origin + '/' + item.key}>
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
