import { AuthUserContext } from 'next-firebase-auth'
import React from 'react'
import styled, { css } from 'styled-components'
import {
    breakpoints,
    upFromBreakpoint,
    upToBreakpoint,
} from '../style/breakpoints'
import Footer from './Footer'
import Header from './Header'

const Main = styled.main`
    position: relative;
    flex: 1 0 auto;
`

const Content = styled.div<Pick<Props, 'withPadding'>>`
    width: 100%;
    height: 100%;
    max-width: ${breakpoints.large}px;
    margin: 0 auto;
    ${(p) =>
        p.withPadding &&
        css`
            padding: 3rem;
            ${upToBreakpoint('medium')} {
                padding: 2rem;
            }
            ${upToBreakpoint('small')} {
                padding: 1rem;
            }
        `};
`

type Props = {
    user: AuthUserContext
    className?: string
    withPadding?: boolean
}

const Page: React.FC<Props> = ({ children, user, className, withPadding }) => {
    return (
        <>
            <Header user={user} />
            <Main>
                <Content className={className} withPadding={withPadding}>
                    {children}
                </Content>
            </Main>
            <Footer />
        </>
    )
}

export default Page
