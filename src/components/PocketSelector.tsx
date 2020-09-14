import React from 'react'
import styled from 'styled-components'
import { useSelector, shallowEqual } from 'react-redux'

import { RootState } from '../reducers'
import { Currency } from '../services/priceApi'


interface BalanceProps {
    readonly warning: boolean
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`

const Balance = styled.span<BalanceProps>`
    padding-top: 6px;
    color: ${props => (props.warning ? 'rgb(235, 0, 141)' : 'rgb(150, 150, 150)')};
    font-size: 12px;
`

const Select = styled.select`
    width: 120px;
    height: 50px;
    background-color: white;
    font-size: 20px;
    border-radius: 3px;
    margin: 10px;
`


interface PocketProps {
    side: string
    onChange: (value: Currency) => void
}
const PocketSelector = ({ side, onChange }: PocketProps) => {
    const { pockets, warning, value, ignoredValue } = useSelector(
        ({ exchange: { sourceAmount, currencyPair }, pockets }: RootState) => {
            return {
                pockets,
                value: currencyPair[side],
                warning: side === 'source' && parseFloat(sourceAmount) > pockets[currencyPair.source].amount,
                ignoredValue: currencyPair[side === 'source' ? 'target' : 'source'],
            }
        },
        shallowEqual
    )

    return (
        <Wrapper>
            <Select onChange={({ target }) => onChange(target.value as Currency)} value={value}>
                {Object.keys(pockets)
                    .filter(currency => currency !== ignoredValue)
                    .map(currency => (
                        <option key={currency}>{currency}</option>
                    ))}
            </Select>
            <Balance warning={warning}>
                Balance: {pockets[value].amount.toFixed(2)} {value}
            </Balance>
        </Wrapper>
    )
}

export default PocketSelector
