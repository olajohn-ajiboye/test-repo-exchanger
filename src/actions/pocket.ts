import {Currency} from '../types'
import {  POCKET_ACTION_TYPES} from './action-types'




const addPocket = (currency: Currency) => {
    return {
        type: POCKET_ACTION_TYPES.ADD_POCKET,
        currency,
    }
}

const removePocket = (currency: Currency) => ({
    type: POCKET_ACTION_TYPES.REMOVE_POCKET,
    currency,
})

// TODO:  use valueAs number in input
const topup = (currency: Currency, amount: string) => ({
    type: POCKET_ACTION_TYPES.TOPUP_POCKET,
    currency,
    amount: parseFloat(amount) ,
})

const withdraw = (currency: Currency, amount: string) => ({
    type: POCKET_ACTION_TYPES.WITHDRAW_POCKET,
    currency,
    amount: parseFloat(amount),
})

const exchange = (source: Currency, target: Currency, amount: string, price: number) => ({
    type: POCKET_ACTION_TYPES.EXCHANGE,
    source,
    target,
    amount: parseFloat(amount),
    price: parseFloat(price.toFixed(6)),
})

export default {
    addPocket,
    removePocket,
    topup,
    withdraw,
    exchange,
}
