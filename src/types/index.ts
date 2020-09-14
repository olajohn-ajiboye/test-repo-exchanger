
export type Currency = 'EUR' | 'USD' | 'GBP'

export interface CurrencyPair {
    source: string
    target: string
}

export interface CurrencyRatesPair {
    [key: string]: number
}
