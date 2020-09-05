export enum EXCHANGE_ACTION_TYPES {
    UPDATE_CURRENCY_PAIR = 'exchange/ui/update_currency_pair',
    SET_CURRENCY_PAIR = 'exchange/ui/set_currency_pair',
    SWIPE_CURRENCIES = 'exchange/ui/swipe_currencies',
    UPDATE_AMOUNT = 'exchange/ui/update_amount',
}

type Side = 'source' | 'target'
type Currency = 'EUR' | 'USD' | 'GBP'

const updateCurrencyPair = (side: Side, currency: Currency) => ({
    type: EXCHANGE_ACTION_TYPES.UPDATE_CURRENCY_PAIR,
    side,
    currency,
})

const setCurrencyPair = (source: Currency, target: Currency) => ({
    type: EXCHANGE_ACTION_TYPES.SET_CURRENCY_PAIR,
    source,
    target,
})

const swipeCurrencies = () => ({
    type: EXCHANGE_ACTION_TYPES.SWIPE_CURRENCIES,
})

const updateAmount = (side: Side, price: string, amount: string) => ({
    type: EXCHANGE_ACTION_TYPES.UPDATE_AMOUNT,
    side,
    price: price ? parseFloat(price) : 0,
    amount: amount ? parseFloat(amount) : '',
})

export default {
    updateCurrencyPair,
    setCurrencyPair,
    swipeCurrencies,
    updateAmount,
}
