import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
import SiderNav from '../../components/SiderNav'
import ContentMain from '../../components/ContentMain';
import {routes} from '../../router';
import nav from '@/config/pages/menu';
import { UserOutlined } from '@ant-design/icons';
import {NavLink} from 'react-router-dom';
import HeaderBar from '../../components/HeaderBar'

const { Header } = Layout;
const {Sider, Content, Footer} = Layout
const { SubMenu } = Menu;
const selectedStyle = {
  backgroundColor: 'red',
  color: 'slategray'
}
class Index extends Component {
  state = {
    collapsed: false
  }
  render () {
    console.log(nav, 'navnavnav')
    // 设置Sider的minHeight可以使左右自适应对齐
    return (
      <div id='page' style={{height: '100%'}}>
        <Layout style={{height: '100%'}}>
          <HeaderBar/>
          <Layout>
            <Sider collapsible trigger={null}>
              <SiderNav/>
            </Sider>
            <Content>
              <ContentMain/>
              <Footer style={{textAlign: 'center', position: 'absolute', bottom: 0, left: '40%'}}>React-app ©2021 Created by anber_99@163.com
                <a target='_blank' href='https://github.com/Anber-H/react-app' rel="noreferrer">
                  github地址
                </a>
              </Footer>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default Index
