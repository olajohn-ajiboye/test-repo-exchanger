import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
    background-color: white;
    height: 48px;
    padding: 6px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const Title = styled.span`
    font-weight: 900;
    font-size: 24px;
    padding-left: 24px;
`

const AppHeader = () => (
    <HeaderWrapper>
        <Title>Exchange</Title>
    </HeaderWrapper>
)

export default AppHeader
