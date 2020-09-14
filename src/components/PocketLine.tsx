import React from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import PocketSelector from './PocketSelector'
import { PocketWrapper, Input } from './Styled'

import actions from '../actions'
import { Currency } from '../services/priceApi'
import { RootState } from '../reducers'




interface PocketProps {
    side: string
}

const PocketLine = ({ side }: PocketProps) => {
    const dispatch = useDispatch()
    
    const { value, price } = useSelector(
        ({ exchange: { sourceAmount, targetAmount, currencyPair }, prices, pockets }: RootState) => {
            const value = side === 'source' ? sourceAmount : targetAmount
            const pair =
                side === 'source'
                    ? `${currencyPair.source}/${currencyPair.target}`
                    : `${currencyPair.source}/${currencyPair.target}`
            const price = prices[pair]
            return {
                value,
                price,
            }
        },
        shallowEqual
    )

    const onAmountChange = (price: number, value: string) => {
        dispatch(actions.exchange.updateAmount(side, price, value))
    }

    const onCurrencyChange = (currency: Currency) => {
        dispatch(actions.exchange.updateCurrencyPair('source', currency))
    }

    return (
        <PocketWrapper background="white">
            <PocketSelector side={side} onChange={onCurrencyChange} />
            <Input
                autoFocus={true}
                type="number"
                placeholder="0"
                min="0"
                value={value}
                onChange={({ target }) => onAmountChange(price, target.value)}
            />
        </PocketWrapper>
    )
}

export default PocketLine
