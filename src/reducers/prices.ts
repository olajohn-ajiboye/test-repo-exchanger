import { PRICES_TYPES } from '../actions/prices'

interface InitialState {
    pair: string
    price: number
}

const initialState: InitialState = {
    pair: 'EUR/USD',
    price: 0.01,
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
