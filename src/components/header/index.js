import React, { Component } from 'react'
import './header.scss'

class Header extends Component {
    render() {
        return (
            <div className="M-header">
                Header: {this.props.name}
            </div>
        )
    }
}

export default Header
