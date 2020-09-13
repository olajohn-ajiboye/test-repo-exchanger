import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import actions from '../actions'
import { RootState } from '../reducers'

const Button = styled.button`
    width: calc(100% - 200px);
    height: 60px;
    border-radius: 30px;
    margin: 3rem 100px 100px;
    background-color: purple;
    color: white;
    font-size: 24px;
    cursor: pointer;
    opacity: 0.5
    
    &:disabled {
        background-color: rgba(235, 0, 141, 0.5);
        cursor: inherit;
    }
`

const ExchangeButton = () => {
    const dispatch = useDispatch()

    const { source, target, amount, price, disabled } = useSelector(
        ({ exchange, prices, pockets }: RootState) => ({
            source: exchange.currencyPair.source,
            target: exchange.currencyPair.target,
            amount: exchange.sourceAmount as string,
            price: prices[`${exchange.currencyPair.source}/${exchange.currencyPair.target}`],
            disabled: !exchange.sourceAmount || exchange.sourceAmount > pockets[exchange.currencyPair.source].amount,
        }),
        shallowEqual
    )

    const handleOnClick = () => {
        if (!disabled) {
            dispatch(actions.pockets.exchange(source, target, amount, price))
            dispatch(actions.exchange.updateAmount('source'))
        }
    }

    return (
        <Button disabled={disabled} onClick={() => handleOnClick}>
            {' '}
            Exchange
        </Button>
    )
}

export default ExchangeButton
