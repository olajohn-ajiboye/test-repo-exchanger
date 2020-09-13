import React, { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { ExchangeButton, ExchangeSwipe, PocketLine} from '../components'
import {WidgetWrapper} from '../components/Styled'

import actions from '../actions'
import Header from '../components/Header'
import { CurrencyPair, fetchCurrencyPairPrices } from '../services/priceApi'
import { RootState } from '../reducers'
import {Side} from '../types'





const PRICES_UPDATE_INTERVAL = 20 * 1000

const ExchangeWidget = () => {
    const dispatch = useDispatch()

    const { currencyPair } = useSelector(
        ({exchange: {currencyPair}}: RootState) => ({
            currencyPair
        }),
        shallowEqual
    )

    useEffect(() => {
        
        const updatePrice = (pair: string, price: string) => {
            dispatch(actions.prices.updateCurrencyPrice(pair, price))
        }

        const updatePrices = async (currencyPair: CurrencyPair) => {
            const updates = await fetchCurrencyPairPrices(currencyPair)
            Object.keys(updates).map(pair => updatePrice(pair, updates[pair]))
        }

        updatePrices(currencyPair)
        const priceFetchInterval = setInterval(() => updatePrices(currencyPair), PRICES_UPDATE_INTERVAL)

        return () => {
            clearInterval(priceFetchInterval)
        }
    }, [currencyPair, dispatch])
    
    return (
        <WidgetWrapper>
            <Header />
            <PocketLine side={Side.source} />
            <ExchangeSwipe />
            <PocketLine side={Side.target} />
            <ExchangeButton />
        </WidgetWrapper>
    )
}

export default ExchangeWidget
