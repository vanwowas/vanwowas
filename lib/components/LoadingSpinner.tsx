import styled, { keyframes } from 'styled-components'
import React from 'react'
import colors from '../style/colors'

const animation = keyframes`
    0% {
        top: 72px;
        left: 72px;
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        top: 0px;
        left: 0px;
        width: 144px;
        height: 144px;
        opacity: 0;
    }
`

const Spinner = styled.div`
    display: inline-block;
    position: relative;
    width: 160px;
    height: 160px;
    div {
        position: absolute;
        border: 8px solid ${colors.spinner};
        opacity: 1;
        border-radius: 50%;
        animation: ${animation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    div:nth-child(2) {
        animation-delay: -0.5s;
    }
`

const LoadingSpinner: React.FC = () => {
    return (
        <Spinner>
            <div></div>
            <div></div>
        </Spinner>
    )
}

const FullHeight = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const FullPageSpinner: React.FC = () => {
    return (
        <FullHeight>
            <LoadingSpinner />
        </FullHeight>
    )
}

export default LoadingSpinner
