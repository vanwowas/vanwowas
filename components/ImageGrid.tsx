/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { upToBreakpoint } from '../style/breakpoints'
import { stack } from '../style/mixins'
import Image from './Image'

const Container = styled.div`
    ${stack('1rem', 'y')}
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    height: 80vh;
    & > * {
        position: relative;
    }
    & > :nth-child(1n) {
        grid-area: 1 / 1 / 3 / 3;
    }
    & > :nth-child(2n) {
        grid-area: 3 / 1 / 4 / 2;
    }
    & > :nth-child(3n) {
        grid-area: 3 / 2 / 4 / 3;
    }
    & > :nth-child(4n) {
        grid-area: 2 / 3 / 4 / 4;
    }
    & > :nth-child(5n) {
        grid-area: 1 / 3 / 2 / 4;
    }
    & > :nth-child(6n) {
        grid-area: 1 / 4 / 3 / 5;
    }
    & > :nth-child(7n) {
        grid-area: 3 / 4 / 4 / 5;
    }
    ${upToBreakpoint('medium')} {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(11, 1fr);
        & > :nth-child(1n) {
            grid-area: 1 / 1 / 5 / 4;
        }
        & > :nth-child(2n) {
            grid-area: 5 / 1 / 7 / 3;
        }
        & > :nth-child(3n) {
            grid-area: 7 / 1 / 10 / 2;
        }
        & > :nth-child(4n) {
            grid-area: 10 / 1 / 12 / 3;
        }
        & > :nth-child(5n) {
            grid-area: 5 / 3 / 7 / 4;
        }
        & > :nth-child(6n) {
            grid-area: 7 / 2 / 10 / 4;
        }
        & > :nth-child(7n) {
            grid-area: 10 / 3 / 12 / 4;
        }
    }
`

type Props = {
    images: (string | ReactNode)[]
    unoptimized?: boolean
}

const ImageGrid: React.FC<Props> = ({ images, unoptimized = false }) => {
    return (
        <Container>
            <Grid>
                {images.map((i) =>
                    typeof i === 'string' ? (
                        <Image
                            key={i}
                            alt=""
                            layout="fill"
                            objectFit="cover"
                            src={i}
                            unoptimized={unoptimized}
                        />
                    ) : (
                        i
                    )
                )}
            </Grid>
        </Container>
    )
}

export default ImageGrid
