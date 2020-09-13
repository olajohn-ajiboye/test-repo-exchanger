import { PRICES_TYPES } from '../actions/prices'

interface InitialState {
    [key: string]: number
}

const initialState: InitialState = {
    'GBP/USD': 1.2827893689,
}
export default (state = initialState, action: any) => {
    switch (action.type) {
        case PRICES_TYPES.UPDATE_CURRENCY: {
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
