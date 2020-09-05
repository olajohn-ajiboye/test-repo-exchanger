import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'
import reducers from './reducers'
import { createStore } from 'redux'
import { AppWrapper } from './components/Styled'
import Exchange from './widgets/Exchange'

const store = createStore(reducers)

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
            <Provider store={store}>
                <GlobalStyles />
                <AppWrapper>
                    <Exchange />
                </AppWrapper>
            </Provider>
        </>
    )
}

export default App
