export enum POCKET_ACTION_TYPES {
    ADD_POCKET = 'pockets/add',
    REMOVE_POCKET = 'pockets/remove',
    TOPUP_POCKET = 'pockets/topup',
    WITHDRAW_POCKET = 'pockets/withdraw',
    EXCHANGE = 'pockets/exchange',
}

type Currency = 'EUR' | 'GBP' | 'USD'

const addPocket = (currency: Currency) => {
    return{
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
    amount: parseFloat(amount),
})

const withdraw = (currency: Currency, amount: string) => ({
    type: POCKET_ACTION_TYPES.WITHDRAW_POCKET,
    currency,
    amount: parseFloat(amount),
})

const exchange = (source: Currency, target: Currency, amount: string, price: string) => ({
    type: POCKET_ACTION_TYPES.EXCHANGE,
    source,
    target,
    amount: parseFloat(amount),
    price: parseFloat(price),
})

export default {
    addPocket,
    removePocket,
    topup,
    withdraw,
    exchange,
}
