import styled from 'styled-components'
import React from 'react'
import colors from '../style/colors'
import Button, { LinkButton } from './Button'
import Link from './Link'
import { stack } from '../style/mixins'
import { AuthUserContext } from 'next-firebase-auth'
import User from '../style/icons/user.svg'
import RouterLink from 'next/link'
const Container = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.headerBackground};
    height: 80px;
    padding: 1rem;
    & > * {
        ${stack('1rem', 'x')}
    }
    svg {
        width: 2.5rem;
        margin-right: 1rem;
        cursor: pointer;
    }
`

type Props = {
    user: AuthUserContext
}

const Header: React.FC<Props> = ({ user }) => {
    return (
        <Container>
            <div>
                <Link href="/">home</Link>
                <Link href="/inspiration">inspiration</Link>
            </div>
            {!user.id ? (
                <div>
                    <LinkButton
                        backgroundColor="primary"
                        borderColor="dark"
                        color="dark"
                        href={'/login'}
                    >
                        login
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
            ) : (
                <div>
                    <RouterLink href="/user">
                        <div>
                            <User />
                        </div>
                    </RouterLink>
                    <Button
                        backgroundColor="secondary"
                        borderColor="dark"
                        color="dark"
                        onClick={user.signOut}
                    >
                        logout
                    </Button>
                </div>
            )}
        </Container>
    )
}

export default Header
