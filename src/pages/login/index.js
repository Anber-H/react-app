import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as actionCreators from './store/actionCreators';
// import axios from 'axios';
// import { API_CODE, API_LIST, API_FAILED} from '../../common/js/api';
import {Button, Input} from 'antd';
import { UserOutlined, LockOutlined, PhoneOutlined } from '@ant-design/icons';
import './login.scss';

class Login extends Component {
    render() {
        return (
            <div className="P-login">
                <div className="login-box">
                    <h2>后台系统</h2>
                    <Input size="large" placeholder="用户名" prefix={<UserOutlined />}/>
                    <Input className="password" size="large" placeholder="密码" prefix={<LockOutlined />}/>
                    <Input size="large" placeholder="请输入手机号" prefix={<PhoneOutlined />}/>
                    <Button className="login-button" type="primary" onClick={this.gotoHome.bind(this)}>登陆</Button>
                </div>
                {/* <Header 
                    name='洛阳白牡丹'/>
                <h1>Login page</h1>
                <p>login: myData = {this.props.myData}</p>
                <Button type="primary" onClick={()=> {this.props.setData('123456')}}>更改login的myData</Button>
                <Button onClick={this.getData}>Ajax请求</Button>
                <Button onClick={this.gotoHome.bind(this)}>跳转Home页</Button> */}
            </div>
        )
    }

    gotoHome() {
        console.log(11,this.props.location.state)
        this.props.history.push({from: {pathname: '/'}})
    }

    // getData() {
    //     axios.get(API_LIST.GET_DATA).then((res) => {
    //         let result = res.data
    //         if(result.code === API_CODE.OK) {
    //             alert('获取数据成功：' + result.data)
    //         } else {
    //             alert(result.message)
    //         }
    //     }).catch(() => {
    //         alert(API_FAILED)
    //     })
    // }
}

// 把store中的数据映射到组件的props
// const mapStateToProps = (state) => ({
//     myData: state.getIn(['login', 'myData']),
// })

// // 把store的Dispatch映射到组件的props
// const mapDispatchToProps = (dispatch) => ({
//     setData(data) {
//         const action = actionCreators.setData(data)
//         dispatch(action)
//     }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Login)
export default Login;