import { PRICES_ACTION_TYPES, PriceActions} from '../actions/action-types'


interface InitialState {
    [key: string]: number
}

const initialState: InitialState = {
    'GBP/USD': 1.2827893689,
}
export default (state = initialState, action: PriceActions) => {
    switch (action.type) {
        case PRICES_ACTION_TYPES.UPDATE_CURRENCY: {
            const { pair, price } = action
            return {
                ...state,
                [pair]: price,
            }
        }

        default:
            return state
    }
}
