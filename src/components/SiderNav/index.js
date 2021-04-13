import React from 'react'
import CustomMenu from "../CustomMenu/index";

const menus = [
  {
    title: '详情管理',
    icon: 'laptop',
    key: '/general/detail',
    subs: [
      {key: '/general/detail', title: '详情管理', icon: ''}
    ]
  }
]

class SiderNav extends React.Component {
  render() {
    return (
      <div style={{height: '100vh',overflowY:'scroll'}}>
        <CustomMenu menus={menus}/>
      </div>
    )
  }
}

export default SiderNav