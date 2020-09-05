import { combineReducers } from 'redux'

import prices from '../reducers/prices'
import exchange from '../reducers/exchange'

export default combineReducers({
    prices,
    exchange,
})
