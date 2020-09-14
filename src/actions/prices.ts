import {PRICES_ACTION_TYPES} from './action-types'


const updateCurrencyPrice = (pair: string, price: string) => {
    return {
        type: PRICES_ACTION_TYPES.UPDATE_CURRENCY,
        pair,
        price: parseFloat(price),
    }
}

export default { updateCurrencyPrice }
