import styled from 'styled-components'
import React, { useCallback, useEffect, useRef } from 'react'
import colors from '../style/colors'
import Button, { LinkButton } from './Button'
import Link from './Link'
import { stack } from '../style/mixins'
import { AuthUserContext } from 'next-firebase-auth'
import User from '../style/icons/user.svg'
import RouterLink from 'next/link'
import Logo from '../style/icons/logo.svg'
import { upFromBreakpoint, upToBreakpoint } from '../style/breakpoints'
const Container = styled.header`
    position: sticky;
    top: 0;
    display: flex;
    z-index: 10;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    background-color: ${colors.headerBackground};
    padding: 2rem;
    &.hidden {
        transform: translateY(-100%);
    }
    transform: translateY(0%);
    transition: transform 300ms ease-out;
    svg {
        width: 2.5rem;
        margin: 0 auto;
        cursor: pointer;
    }
    & > * {
        ${stack('3rem', 'x')}
        ${upToBreakpoint('medium')} {
            ${stack('1rem', 'y')}
        }
        svg {
            margin-bottom: 0.5rem;
        }
    }

    ${upToBreakpoint('medium')} {
        padding: 1rem;
    }
`

const LinkContainer = styled.div`
    /* ${upToBreakpoint('medium')} {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    } */
`

const LogoContainer = styled.div`
    width: 7rem;
    ${upToBreakpoint('medium')} {
        width: 5rem;
    }
    svg {
        width: 100%;
    }
`

type Props = {
    user: AuthUserContext
}

const Header: React.FC<Props> = ({ user }) => {
    const lastScroll = useRef(0)
    const containerRef = useRef<HTMLElement>(null)

    const handleScroll = useCallback(() => {
        window.requestAnimationFrame(function () {
            const currentScroll = window.pageYOffset
            if (currentScroll < lastScroll.current) {
                lastScroll.current = currentScroll
                containerRef.current?.classList.remove('hidden')
            }
            if (currentScroll > lastScroll.current + 100) {
                lastScroll.current = currentScroll
                containerRef.current?.classList.add('hidden')
            }
        })
    }, [])

    useEffect(() => {
        lastScroll.current = window.pageYOffset
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    return (
        <Container ref={containerRef}>
            <LinkContainer>
                <Link href="/">home</Link>
                <Link href="/inspiration">inspiration</Link>
            </LinkContainer>
            <LogoContainer>
                <Link href="/">
                    <Logo />
                </Link>
            </LogoContainer>
            {!user.id ? (
                <LinkContainer>
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
                </LinkContainer>
            ) : (
                <LinkContainer>
                    <RouterLink href="/user">
                        <User />
                    </RouterLink>
                    <Button
                        backgroundColor="secondary"
                        borderColor="dark"
                        color="dark"
                        onClick={user.signOut}
                    >
                        logout
                    </Button>
                </LinkContainer>
            )}
        </Container>
    )
}

export default Header
