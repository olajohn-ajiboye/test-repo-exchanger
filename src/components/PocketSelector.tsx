import React from 'react'
import styled from 'styled-components'

interface BalanceProps {
    readonly warning: string
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

const PocketSelector = () => (
    <Wrapper>
        <Select value={'10000'}>
            <option key={'NGN'}>{'NGN'}</option>
        </Select>
        <Balance warning={''}>Balance: 1000</Balance>
    </Wrapper>
)

export default PocketSelector
