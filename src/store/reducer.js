import { combineReducers } from 'redux-immutable'

import { reducer as loginReducer } from '../pages/Login/store/index'
import { reducer as headerReducer } from '../components/Header/store'

const reducer = combineReducers({
  login: loginReducer,
  header: headerReducer
})

export default reducer
