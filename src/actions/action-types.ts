import {Currency} from '../types'

// EXCHANGE
export enum EXCHANGE_ACTION_TYPES {
    UPDATE_CURRENCY_PAIR = 'exchange/ui/update_currency_pair',
    SET_CURRENCY_PAIR = 'exchange/ui/set_currency_pair',
    SWIPE_CURRENCIES = 'exchange/ui/swipe_currencies',
    UPDATE_AMOUNT = 'exchange/ui/update_amount',
}

export interface UpdateCurrencyPair {
    type: typeof EXCHANGE_ACTION_TYPES.UPDATE_CURRENCY_PAIR,
    side: string
    currency: Currency
}

export interface SetCurrencyPair {
    type: typeof EXCHANGE_ACTION_TYPES.SET_CURRENCY_PAIR,
    source: string
    target: string
}

export interface SwipeCurrencies {
    type: typeof EXCHANGE_ACTION_TYPES.SWIPE_CURRENCIES,
}

export interface  UpdateAmount {
    type: typeof EXCHANGE_ACTION_TYPES.UPDATE_AMOUNT,
    side: string
    price: number
    amount: number
}


// POCKETS

export enum POCKET_ACTION_TYPES {
    ADD_POCKET = 'pockets/add',
    REMOVE_POCKET = 'pockets/remove',
    TOPUP_POCKET = 'pockets/topup',
    WITHDRAW_POCKET = 'pockets/withdraw',
    EXCHANGE = 'pockets/exchange',
}

export interface AddPocket {
    type: typeof POCKET_ACTION_TYPES.ADD_POCKET,
    currency: Currency
}


export interface RemovePocket {
    type: typeof POCKET_ACTION_TYPES.REMOVE_POCKET,
    currency: Currency
}

export interface Topup {
    type: typeof POCKET_ACTION_TYPES.TOPUP_POCKET,
    currency: Currency
    amount:number
}

export interface Withdraw {
    type: typeof POCKET_ACTION_TYPES.WITHDRAW_POCKET,
    currency: Currency
    amount: number
}

export interface Exchange{
    type: typeof POCKET_ACTION_TYPES.EXCHANGE,
    source: string
    target: string
    amount: number
    price: number
}


// PRICES
export enum PRICES_ACTION_TYPES {
    UPDATE_CURRENCY = 'exchange/prices/update',
}

export interface UpdateCurrencyPrice {
    type: typeof PRICES_ACTION_TYPES.UPDATE_CURRENCY,
    pair: string
    price: number
}


export type ExchangeActions = UpdateCurrencyPair| SetCurrencyPair| SwipeCurrencies| UpdateAmount
export type PocketActions = RemovePocket| AddPocket| Topup |  Withdraw | Exchange
export type PriceActions = UpdateCurrencyPrice 