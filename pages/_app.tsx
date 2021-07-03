import { AppProps } from 'next/dist/next-server/lib/router/router'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Header from '../components/Header'
import AuthProvider from '../context/AuthContext'
import colors from '../style/colors'

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
    height: 100%;
  }
`

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <AuthProvider>
            <GlobalStyle />
            <Header />
            <Component {...pageProps} />
        </AuthProvider>
    )
}

export default App
