import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import counter from './counter'
import homeReducer from '../reducers/home'

export default combineReducers({
  routing: routerReducer,
  counter,
  home: homeReducer
})
