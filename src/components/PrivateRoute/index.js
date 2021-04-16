/* eslint-disable react/prop-types */
import React from 'react'
import { Route } from 'react-router-dom'
// import { isAuthenticated } from '../../utils/Session'

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (<Component {...props} />)}/>
)

export default PrivateRoute
