import {Currency} from '../types'
import {EXCHANGE_ACTION_TYPES} from './action-types'



const updateCurrencyPair = (side: string, currency: Currency) => ({
    type: EXCHANGE_ACTION_TYPES.UPDATE_CURRENCY_PAIR,
    side,
    currency,
})

const setCurrencyPair = (source: Currency, target: Currency) => {
    return {
        type: EXCHANGE_ACTION_TYPES.SET_CURRENCY_PAIR,
        source,
        target,
    }
}

const swipeCurrencies = () => ({
    type: EXCHANGE_ACTION_TYPES.SWIPE_CURRENCIES,
})

const updateAmount = (side: string, price?:  number, amount?: string) => ({
    type: EXCHANGE_ACTION_TYPES.UPDATE_AMOUNT,
    side,
    price: price ? parseFloat(price.toFixed(6)) : 0,
    amount: amount ? parseFloat(amount) : 0,
})

export default {
    updateCurrencyPair,
    setCurrencyPair,
    swipeCurrencies,
    updateAmount,
}
