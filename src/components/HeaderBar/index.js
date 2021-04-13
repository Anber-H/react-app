import React,{Component} from 'react';
import { Layout, Menu } from 'antd';
import './HeaderBar.scss';
import routes from '../../router/router.js';
const { Header } = Layout;
class HeaderBar extends Component {
  render() {
    return (
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['article']}>
          {routes.map((item,index)=>{
            return (
              <Menu.Item key={item.key}>
                <a href={window.location.origin+'/general/'+item.key}>
                  {item.name}
                </a>
              </Menu.Item>
            )
          })}
        </Menu>
      </Header>
    )
  }
}

export default HeaderBar;