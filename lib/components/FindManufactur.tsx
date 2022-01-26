import React from 'react'
import styled from 'styled-components'
import { upFromBreakpoint, upToBreakpoint } from '../style/breakpoints'
import colors from '../style/colors'
import { stack } from '../style/mixins'
import { Headline1 } from '../style/typography'
import Input from './Input'

const Container = styled.div`
    ${Headline1} {
        color: ${colors.textColor.secondary};
    }
`

const InputWrapper = styled.div`
    margin-top: 2rem;
    ${stack('1rem', 'x')};
    ${upToBreakpoint('small')} {
        ${stack('1rem', 'y')};
    }
    input {
        ${upToBreakpoint('medium')} {
            width: 100%;
        }
        ${upFromBreakpoint('medium')} {
            width: 33%;
        }
    }
`

const FindManufactur: React.FC = () => {
    return (
        <Container>
            <Headline1>Manufaktur finden</Headline1>
            <InputWrapper>
                <Input placeholder="Budget €" />
                <Input placeholder="Standort PLZ" />
            </InputWrapper>
        </Container>
    )
}

export default FindManufactur
