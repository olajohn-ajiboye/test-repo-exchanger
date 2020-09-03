import React from 'react'

import { ExchangeSwipe, PocketLine } from '../features'

import Header from '../components/Header'

import { WidgetWrapper } from '../components/Styled'

const ExchangeWidget = () => {
    return (
        <WidgetWrapper>
            <Header />
            <PocketLine />
            <ExchangeSwipe price={1000} swipeCurrencies={() => {}} />
            <PocketLine />
        </WidgetWrapper>
    )
}

export default ExchangeWidget
