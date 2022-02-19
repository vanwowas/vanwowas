import styled from 'styled-components'
import React, { useCallback, useEffect, useRef } from 'react'
import Button, { LinkButton } from './Button'
import Link from './Link'
import { stack } from '../style/mixins'
import { AuthUserContext } from 'next-firebase-auth'
import RouterLink from 'next/link'
import Logo from '../style/icons/logo.svg'
import { upToBreakpoint } from '../style/breakpoints'
import colors from '../style/colors'
import { useRouter } from 'next/dist/client/router'
import ProfileImage from './ProfileImage'

const Container = styled.header`
    position: sticky;
    top: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    z-index: 10;
    background-color: ${colors.headerBackground};

    &.hidden {
        transform: translateY(-100%);
    }
    transform: translateY(0%);
    transition: transform 300ms ease-out;
    svg {
        width: 2rem;
        margin: 0 auto;
        cursor: pointer;
    }
    & > *:last-child {
        justify-content: flex-end;
        ${upToBreakpoint('medium')} {
            justify-content: space-evenly;
            align-items: flex-end;
        }
    }
    padding: 3rem;
    ${upToBreakpoint('medium')} {
        padding: 2rem;
    }
    ${upToBreakpoint('small')} {
        padding: 1rem;
    }
`

const LinkContainer = styled.div`
    ${stack('3rem', 'x')}
    align-items:flex-start;
    ${upToBreakpoint('medium')} {
        ${stack('1rem', 'y')};
        justify-content: space-evenly;
    }
    button {
        margin-top: 0.2rem;
    }
`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        width: 7rem;
        ${upToBreakpoint('medium')} {
            width: 5rem;
        }
    }
`

const StyledLink = styled(Link)<{ isActive: boolean }>`
    color: ${(p) => p.isActive && colors.primary};
    font-weight: 700;
`

type Props = {
    user: AuthUserContext
}

const Header: React.FC<Props> = ({ user }) => {
    const lastScroll = useRef(0)
    const containerRef = useRef<HTMLElement>(null)
    const router = useRouter()

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
                <StyledLink isActive={router.route === '/'} href="/">
                    home
                </StyledLink>
                <StyledLink
                    isActive={router.route === '/inspiration'}
                    href="/inspiration"
                >
                    inspiration
                </StyledLink>
                <StyledLink isActive={router.route === '/blog'} href="/blog">
                    blog
                </StyledLink>
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
                        color="light"
                        href={'/login'}
                    >
                        login
                    </LinkButton>
                    <LinkButton
                        backgroundColor="secondary"
                        borderColor="dark"
                        color="light"
                        href={'/signup'}
                    >
                        sign up
                    </LinkButton>
                </LinkContainer>
            ) : (
                <LinkContainer>
                    <RouterLink href="/user">
                        <a>
                            <ProfileImage photoURL={user.photoURL} small />
                        </a>
                    </RouterLink>
                    <Button
                        backgroundColor="secondary"
                        borderColor="dark"
                        color="light"
                        onClick={() => {
                            user.signOut()
                            window.location.reload()
                        }}
                    >
                        logout
                    </Button>
                </LinkContainer>
            )}
        </Container>
    )
}

export default Header
