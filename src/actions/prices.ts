export enum PRICES_TYPES {
    UPDATE_CURRENCY = 'exchange/prices/update',
}

const updateCurrencyPrice = (pair: string, price: string) => ({
    type: PRICES_TYPES.UPDATE_CURRENCY,
    pair,
    price: parseFloat(price),
})

export default { updateCurrencyPrice }
