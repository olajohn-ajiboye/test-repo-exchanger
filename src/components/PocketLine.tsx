import React from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import PocketSelector from './PocketSelector'
import { PocketWrapper, Input } from './Styled'

import actions from '../actions'
import { Currency } from '../services/priceApi'
import { RootState } from '../reducers'
import {Side} from '../types'



interface PocketProps {
    side: Side
}

const PocketLine = ({ side }: PocketProps) => {
    const dispatch = useDispatch()
    const { value, maxValue, price } = useSelector(
        ({ exchange: { sourceAmount, targetAmount, currencyPair }, prices, pockets }: RootState) => {
            const value = side === Side.source ? sourceAmount : targetAmount
            const pair =
                side === Side.source
                    ? `${currencyPair.source}/${currencyPair.target}`
                    : `${currencyPair.source}/${currencyPair.target}`
            const price = prices[pair]
            const maxValue = pockets[currencyPair.source].amount * (price && side === Side.source ? 1 : parseInt(price))
            return {
                value,
                price,
                maxValue,
            }
        },
        shallowEqual
    )

    const onAmountChange = (price: string, value: string) => {
        dispatch(actions.exchange.updateAmount(Side.source, price, value))
    }

    const onCurrencyChange = (currency: Currency) => {
        dispatch(actions.exchange.updateCurrencyPair(Side.source, currency))
    }

    return (
        <PocketWrapper background="white">
            <PocketSelector side={side} onChange={onCurrencyChange} />
            <Input
                autoFocus={true}
                type="number"
                placeholder="0"
                min="0"
                max={10000}
                value={value}
                onChange={({ target }) => onAmountChange(price, target.value)}
            />
        </PocketWrapper>
    )
}

export default PocketLine
