import styled, { css } from 'styled-components'
import React from 'react'
import colors from '../style/colors'
import { buttonStyle } from './Button'
import { typoStyle } from '../style/typography'
import { hover } from '../style/mixins'

const Label = styled.label`
    display: block;
    position: relative;
    padding-left: 2.5rem;
    cursor: pointer;
    ${typoStyle.bodyM};
    user-select: none;
    border-radius: 0.5rem;
    color: ${colors.white};
    ${hover(css`
        input ~ span {
            background-color: ${colors.secondary};
        }
    `)}
`
const Input = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    &:checked ~ span {
        background-color: ${colors.secondary};
    }
    &:checked ~ span:after {
        display: block;
    }
`
const Checkmark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 2rem;
    width: 2rem;
    background-color: #eee;
    border-radius: 100%;
    :after {
        content: '';
        position: absolute;
        display: none;
        left: 11px;
        top: 5px;
        width: 0.5rem;
        height: 1rem;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`

const Test = styled.div`
    ${buttonStyle}
`

type Props = {
    onChange: () => void
    className?: string
    checked: boolean
} & React.ComponentProps<typeof Input>

const Checkbox: React.FC<Props> = ({
    className,
    children,
    checked,
    ...rest
}) => {
    return (
        <Label className={className}>
            <Test
                backgroundColor="primary"
                borderColor="dark"
                color="light"
                small
            >
                {children}
            </Test>
            <Input type="checkbox" {...rest} checked={checked} />
            <Checkmark />
        </Label>
    )
}

export default Checkbox
