import styled from 'styled-components'
import React from 'react'
import colors from '../style/colors'
import { LinkButton } from './Button'
import Link from './Link'
import { stack } from '../style/mixins'

const Container = styled.header`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    background-color: ${colors.headerBackground};
    padding: 1rem;
    & > * {
        ${stack('1rem', 'x')}
    }
`

const Header: React.FC = () => {
    return (
        <Container>
            <div>
                <Link href="/">home</Link>
                <Link href="/inspiration">inspiration</Link>
            </div>
            <div>
                <LinkButton
                    backgroundColor="primary"
                    borderColor="dark"
                    color="dark"
                    href={'/login'}
                >
                    sign in
                </LinkButton>
                <LinkButton
                    backgroundColor="secondary"
                    borderColor="dark"
                    color="dark"
                    href={'/signup'}
                >
                    sign up
                </LinkButton>
            </div>
        </Container>
    )
}

export default React.memo(Header)
