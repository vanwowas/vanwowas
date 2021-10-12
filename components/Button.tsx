import styled, { css } from 'styled-components'
import colors from '../style/colors'
import { border, hover } from '../style/mixins'

type ButtonProps = {
    backgroundColor: keyof typeof colors['buttonBackground']
    borderColor: keyof typeof colors['border']
    color: keyof typeof colors['buttonText']
    shakeHover?: boolean
}

const buttonStyle = css<ButtonProps>`
    outline: none;
    border: none;
    text-decoration: none;
    cursor: pointer;
    border-radius: 0.5rem;
    padding: 0.75rem 1rem;
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
        border-radius: 0.5rem;
        top: -0.4em;
        right: 0.4em;
        bottom: 0.4em;
        left: -0.4em;
        background-color: ${(p) => colors.buttonBackground[p.backgroundColor]};
        z-index: -1;
        transition: transform 250ms ease-in-out;
    }
    ${(p) =>
        border(
            2,
            p.borderColor,
            css`
                border-radius: 0.5rem;
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
