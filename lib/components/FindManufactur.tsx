import React, { ChangeEvent, useCallback, useState } from 'react'
import styled from 'styled-components'
import { upFromBreakpoint, upToBreakpoint } from '../style/breakpoints'
import colors from '../style/colors'
import { stack } from '../style/mixins'
import { Headline1 } from '../style/typography'
import { Place } from '../types/db'
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

export type OnFindChangeEvent = { place?: Place; price?: number }

type Props = {
    onChange: (params: OnFindChangeEvent) => void
}

const FindManufactur: React.FC<Props> = ({ onChange }) => {
    const [place, setPlace] = useState<Place>()
    const [price, setPrice] = useState<number>()

    const handleZipChange = useCallback(
        async (e: ChangeEvent<HTMLInputElement>) => {
            const zip = e.target.value
            try {
                const newPlace = await fetch(`/api/geohash?zip=${zip}`).then(
                    (e) => e.json()
                )
                if (newPlace && newPlace !== place) {
                    setPlace(newPlace)
                    onChange({ price: price, place: newPlace })
                }
            } catch {}
        },
        [onChange, place, price]
    )

    const handlePriceChange = useCallback(
        async (e: ChangeEvent<HTMLInputElement>) => {
            const newPrice = e.target.value
            setPrice(Number(newPrice))
            onChange({ price: Number(newPrice), place })
        },
        [onChange, place]
    )

    return (
        <Container>
            <Headline1>Manufaktur finden</Headline1>
            <InputWrapper>
                <Input
                    placeholder="Budget €"
                    onChange={handlePriceChange}
                    type="number"
                />
                <Input
                    placeholder="Standort PLZ"
                    onChange={handleZipChange}
                    maxLength={5}
                    type="text"
                />
            </InputWrapper>
        </Container>
    )
}

export default FindManufactur
