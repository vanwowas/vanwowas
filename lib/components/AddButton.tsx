import React from 'react'
import styled from 'styled-components'
import { upToBreakpoint } from '../style/breakpoints'
import Button, { ButtonProps, LinkButton } from './Button'
import Add from '../style/icons/add.svg'

const Container = styled(Button)`
    width: 10%;
    padding: 2rem;
    max-width: 20%;
    min-width: 100px;
    ${upToBreakpoint('medium')} {
        padding: 1rem;
    }
`

const Link = styled(LinkButton)`
    width: 10%;
    padding: 2rem;
    max-width: 20%;
    min-width: 100px;
    ${upToBreakpoint('medium')} {
        padding: 1rem;
    }
`

export const AddButton: React.FC<ButtonProps> = (props) => (
    <Container {...props}>
        <Add />
    </Container>
)

export const AddLinkButton: React.FC<ButtonProps> = (props) => (
    <Link {...props}>
        <Add />
    </Link>
)
