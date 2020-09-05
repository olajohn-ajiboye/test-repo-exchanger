import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { ExchangeButton, ExchangeSwipe, PocketLine } from '../components'
import Header from '../components/Header'
import actions from '../actions'

export const WidgetWrapper = styled.div`
    width: 400px;
    height: 600px;
    margin: 3rem;
    background-color: rgb(240, 240, 240);
    border: 1px solid rgb(240, 240, 240);
    border-radius: 12px;
`

const ExchangeWidget = () => {
    const dispatch = useDispatch()
    dispatch(actions.prices.updateCurrencyPrice('USD/GBP', '0.7777'))
    dispatch(actions.exchange.updateCurrencyPair('source', 'GBP'))
    dispatch(actions.pockets.addPocket('GBP'))
    return (
        <WidgetWrapper>
            <Header />
            <PocketLine />
            <ExchangeSwipe price={1000} swipeCurrencies={() => {}} />
            <PocketLine />
            <ExchangeButton />
        </WidgetWrapper>
    )
}

export default ExchangeWidget
