import React from 'react'
import styled from 'styled-components'

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

const ExchangeButton = () => <Button>Exchange</Button>

export default ExchangeButton
