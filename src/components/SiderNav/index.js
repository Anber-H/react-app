import React,{Component} from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const {  Sider } = Layout;

class SiderNav extends Component {
render(){
  return(
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['system']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="站点管理">
            <Menu.Item key="1">站点管理</Menu.Item>
            <Menu.Item key="2">站点配送时间管理</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="账号管理">
            <Menu.Item key="3">账户管理</Menu.Item>
            <Menu.Item key="4">角色管理</Menu.Item>
            <Menu.Item key="5">设置</Menu.Item>
          </SubMenu>
          <Menu.Item icon={<SettingOutlined />} key="6">App设置</Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  )
}
}
export default SiderNav;