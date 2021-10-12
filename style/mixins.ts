import { css, FlattenSimpleInterpolation, keyframes } from 'styled-components'
import colors from './colors'

export const hover = (
    style: FlattenSimpleInterpolation | string
): FlattenSimpleInterpolation => {
    return css`
        @media (hover: hover) and (pointer: fine) {
            :hover {
                ::before {
                    ${style}
                }
            }
        }
        :active {
            ::before {
                ${style}
            }
        }
    `
}

export const fadeIn = (duration: number): FlattenSimpleInterpolation => {
    const animation = keyframes`
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    `
    return css`
        animation: ${animation} ${duration}ms ease-in-out forwards;
    `
}

export const stack = (
    space: string,
    direction: 'x' | 'y' = 'x'
): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: ${direction === 'x' ? 'row' : 'column'};
    & > * {
        margin: 0;
    }

    & > * + * {
        ${direction === 'x' ? `margin-left: ${space}` : `margin-top: ${space}`};
    }
`

export const aspectRatio = (
    ratio: number,
    position: string | false = 'relative'
): FlattenSimpleInterpolation => css`
    ${position && `position: ${position}`};
    ::after {
        content: '';
        display: block;
        padding-top: ${(100 / ratio).toFixed(4)}%;
    }
`

export const border = (
    width: number,
    color: keyof typeof colors['border'],
    style?: FlattenSimpleInterpolation
): FlattenSimpleInterpolation => css`
    position: relative;
    ::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: ${width}px solid ${colors.border[color]};
        ${style}
    }
`
