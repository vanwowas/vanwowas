import React from 'react'
import styled, { keyframes } from 'styled-components'
import colors, { hexToRgb } from '../style/colors'
import Logo from '../style/icons/logo.svg'

const Container = styled.div<{ loading: boolean }>`
    position: relative;
    & > div:first-child {
        pointer-events: ${(p) => (p.loading ? 'none' : 'all')};
    }
`

const animation = keyframes`
    0% {
        transform: scale(0.3);
    }
    50% {
        transform: scale(1);
    }
    100% {
        transform: scale(0.3);
    }
`

const Loader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${`rgba(${hexToRgb(colors.secondary)}, 0.2)`};
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
    pointer-events: none;
    svg {
        width: 150px;
        height: 150px;
        animation: ${animation} 1.7s ease-in-out infinite;
        animation-direction: alternate-reverse;
    }
`

type Props = {
    loading: boolean
}

const LoadingContainer: React.FC<Props> = ({ children, loading }) => {
    return (
        <Container loading={loading}>
            <div>{children}</div>
            {loading && (
                <Loader>
                    <Logo />
                </Loader>
            )}
        </Container>
    )
}

export default LoadingContainer
