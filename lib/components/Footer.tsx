import React from 'react'
import styled from 'styled-components'
import { upToBreakpoint } from '../style/breakpoints'
import colors from '../style/colors'
import { stack } from '../style/mixins'
import Link from './Link'

const Container = styled.footer`
    width: 100vw;
    padding: 2rem;
    background-color: ${colors.footerBackground};
    ${stack('2rem', 'x')}
    align-items: center;
    margin-top: 4rem;
    span {
        margin-left: auto;
    }
    ${upToBreakpoint('small')} {
        ${stack('2rem', 'y')}
        span {
            margin-right: auto;
        }
    }
`

const Footer: React.FC = () => {
    return (
        <Container>
            <Link href="/imprint">Impressum</Link>
            <Link href="/data-privacy">Datenschutzerklärung</Link>
            <span>© vanwowas 2022</span>
        </Container>
    )
}

export default Footer
