import React from 'react'
import Loadable from 'react-loadable'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

class LoadingPage extends React.Component {
  // 类似github页面加载的那个加载条
  componentWillMount () {
    NProgress.start()
  }
  componentWillUnmount () {
    NProgress.done()
  }
  render () {
    return (
      <div/>
    )
  }
}

const LoadableComponent = (component) => Loadable({
  loader: component,
  // eslint-disable-next-line react/display-name
  loading: () => <LoadingPage/>
})

export default LoadableComponent
