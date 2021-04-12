import React from 'react'
import {Layout} from 'antd'
import SiderNav from '../../components/SiderNav'
import ContentMain from '../../components/ContentMain'
import HeaderBar from '../../components/HeaderBar'

const {Sider, Content, Footer} = Layout


class Index extends React.Component{
  state = {
    collapsed: false
  }
  render() {
    // 设置Sider的minHeight可以使左右自适应对齐
    return (
      <div id='page' style={{height:'100%'}}>
        <Layout style={{height:'100%'}}>
          <HeaderBar/>
          <Layout>
            <Sider collapsible trigger={null}>
              <SiderNav/>
            </Sider>
            <Content>
              <ContentMain/>
              <Footer style={{textAlign: 'center',position:'absolute',bottom:0,left:'40%'}}>React-app ©2021 Created by anber_99@163.com 
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