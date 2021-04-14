/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Button, Input } from 'antd';
import { UserOutlined, LockOutlined, PhoneOutlined } from '@ant-design/icons';
import './login.scss';

class Login extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div className="P-login">
        <div className="login-box">
          <h2>后台系统</h2>
          <Input size="large" placeholder="用户名" prefix={<UserOutlined />} />
          <Input
            className="password"
            size="large"
            placeholder="密码"
            prefix={<LockOutlined />}
          />
          <Input
            size="large"
            placeholder="请输入手机号"
            prefix={<PhoneOutlined />}
          />
          <Button
            className="login-button"
            type="primary"
            onClick={this.gotoHome.bind(this)}
          >
            登陆
          </Button>
        </div>
      </div>
    );
  }

  gotoHome () {
    console.log(111)
    this.props.history.push({ pathname: '/detail/management' });
  }
}
export default Login;
