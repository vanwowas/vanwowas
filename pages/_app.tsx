import { AppProps } from 'next/dist/next-server/lib/router/router'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import initAuth from '../lib/firebase/initAuth'
import colors from '../lib/style/colors'

export const routes = {
    home: '/',
    inspiration: '/inspiration',
    category: '/category/:type',
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    background: ${colors.pageBackground};
    font-family: 'Nunito', sans-serif;
  }
  html, body {
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1;
  }
  body > div {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`
initAuth()

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default App
