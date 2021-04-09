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

  toggle = () => {
    // console.log(this)  状态提升后，到底是谁调用的它
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    // 设置Sider的minHeight可以使左右自适应对齐
    return (
      <div id='page'>
        <Layout>
        <HeaderBar collapsed={this.state.collapsed} onToggle={this.toggle}/>
          <Layout>
            <Sider collapsible
                  trigger={null}
                  collapsed={this.state.collapsed}
                  >
              <SiderNav/>
            </Sider>
            <Content>
              <ContentMain/>
              <Footer style={{textAlign: 'center'}}>React-app ©2021 Created by anber_99@163.com 
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