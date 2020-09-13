import React from 'react'
import styled from 'styled-components'
import actions from '../actions'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { RootState } from '../reducers'

const Wrapper = styled.div`
    height: 150px;
    background-image: linear-gradient(to bottom, white, white 50%, transparent 50%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 24px;
    padding-right: 24px;
`

const SwipeButton = styled.button`
    height: 50px;
    width: 50px;
    background-color: #1890ff;
    border: 2px solid #1890ff;
    color: white;
    border-radius: 50%;
    cursor: pointer;
    font-size: 20px;

    &:focus {
        outline: 0;
    }
`

const Price = styled.span`
    background-color: white;
    border: 1px solid rgb(0, 117, 235);
    font-weight: 700;
    font-size: 20px;
    height: 40px;
    line-height: 40px;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 20px;
    min-width: 60px;
`

interface ExchangeSwipeProps {
    price: number
    swipeCurrencies: Function
}
const ExchangeSwipe = () => {
    const dispatch = useDispatch()
    const { price } = useSelector(({ exchange: { currencyPair }, prices }: RootState) => {
        return {
            price: prices[`${currencyPair.source}/${currencyPair.target}`],
        }
    }, shallowEqual)
    const swipeCurrencies = () => {
        dispatch(actions.exchange.swipeCurrencies())
    }

    return (
        <Wrapper>
            <SwipeButton onClick={swipeCurrencies}>&#8645;</SwipeButton>
            <Price>{price.toFixed(3)}</Price>
        </Wrapper>
    )
}

export default ExchangeSwipe
