import { combineReducers } from 'redux'

import prices from '../reducers/prices'
import exchange from '../reducers/exchange'
import pockets from '../reducers/pockets'

const rootReducer = combineReducers({
    prices,
    exchange,
    pockets,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
