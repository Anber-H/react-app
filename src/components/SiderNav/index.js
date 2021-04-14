import React from 'react'
import CustomMenu from '../CustomMenu/index';
import menus from '../../router';
const matchKey = window.location.pathname.split('/')[1]

class SiderNav extends React.Component {
  render () {
    return (
      <div style={{height: '100vh', overflowY: 'scroll'}}>
        <CustomMenu menus={menus[matchKey]}/>
      </div>
    )
  }
}

export default SiderNav
