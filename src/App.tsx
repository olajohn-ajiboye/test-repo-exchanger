import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Exchange from './widgets/Exchange'

import { AppWrapper } from './components/Styled'

const GlobalStyles = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`

const App = () => {
    return (
        <>
            <GlobalStyles />
            <AppWrapper>
                <Exchange />
            </AppWrapper>
        </>
    )
}

export default App
