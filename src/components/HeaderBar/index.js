import React,{Component} from 'react';
import { Layout, Menu } from 'antd';
import './HeaderBar.scss';

const { Header } = Layout;
class HeaderBar extends Component {
  render() {
    return (
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['system']}>
          <Menu.Item key="system">系统管理</Menu.Item>
          <Menu.Item key="article">文章管理</Menu.Item>
          <Menu.Item key="user">用户管理</Menu.Item>
        </Menu>
      </Header>
    )
  }
}

export default HeaderBar;