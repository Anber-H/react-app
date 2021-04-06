import React, { Component } from 'react';
import './home.scss';
import Header from '../../components/header';

class Home extends Component {
    render() {
        return (
            <div className="P-home">
                <Header
                  name="洛阳白牡丹"
                  func={()=>{console.log('func')}}/>
                <h1>Home page</h1>
            </div>
        )
    }
}

export default Home
