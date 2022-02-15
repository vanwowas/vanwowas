import styled, { css } from 'styled-components'
import colors from '../style/colors'
import { border, hover } from '../style/mixins'

export type ButtonProps = {
    backgroundColor: keyof typeof colors['buttonBackground']
    borderColor: keyof typeof colors['border']
    color: keyof typeof colors['buttonText']
    shakeHover?: boolean
    round?: boolean
    onClick?: () => void
    small?: boolean
}

export const buttonStyle = css<ButtonProps>`
    --border-radius: ${(p) => (p.round ? '100rem' : '0.5rem')};
    outline: none;
    border: none;
    text-decoration: none;
    cursor: pointer;
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-weight: 700;
    background-color: transparent;
    color: ${(p) => colors.buttonText[p.color]};
    position: relative;
    z-index: 0;

    ${hover(css`
        transform: translate3d(0.2em, 0.2em, 0);
    `)}
    /* TODO: implement shakehover */
    &:disabled {
        ::before {
            background-color: ${colors.buttonBackground.disabled};
            transform: unset;
        }
    }
    ::before {
        content: '';
        display: block;
        position: absolute;
        border-radius: var(--border-radius);
        top: -0.4em;
        right: 0.4em;
        bottom: 0.4em;
        left: -0.4em;
        background-color: ${(p) => colors.buttonBackground[p.backgroundColor]};
        z-index: -1;
        transition: transform 250ms ease-in-out;
    }
    ${(p) =>
        p.small &&
        css`
            padding: 0.2rem 0.5rem;
            ::before {
                content: '';
                display: block;
                position: absolute;
                border-radius: var(--border-radius);
                top: -0.2em;
                right: 0.2em;
                bottom: 0.2em;
                left: -0.2em;
            }
        `}
    ${(p) =>
        border(
            2,
            p.borderColor,
            css`
                border-radius: var(--border-radius);
            `
        )}
`

const Button = styled.button<ButtonProps>`
    ${buttonStyle}
`

export default Button

export const LinkButton = styled.a<ButtonProps>`
    ${buttonStyle}
`
