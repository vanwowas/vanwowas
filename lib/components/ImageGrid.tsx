/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled, { css } from 'styled-components'
import { upToBreakpoint } from '../style/breakpoints'
import colors from '../style/colors'
import { stack } from '../style/mixins'
import Image from './Image'
import { Image as ImageType } from '../types/db'
import TextArea from './TextArea'
import { AddButton } from './AddButton'

const Container = styled.div`
    ${stack('1rem', 'y')}
`

const Grid = styled.div<{ mobileStyle: MobileStyle }>`
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
        ${(p) =>
            p.mobileStyle === 'fullWidth' &&
            css`
                ${stack('1rem', 'y')};
                height: 100%;
                & > *:not(button) {
                    grid-area: none;
                    min-height: 50vh;
                }
            `};
    }
`

const ImageContainer = styled.div`
    position: relative;
`

const ImageOverlay = styled.div`
    position: absolute;
    bottom: 8px;
    left: 8px;
    right: 8px;
    background-color: ${colors.buttonBackground.primary};
    opacity: 0.75;
    padding: 1rem;
    align-items: flex-end;
    border-radius: 8px;
    * {
        max-width: 100%;
        min-width: 100%;
        flex: 1 0 auto;
    }
`

type Props = {
    images: ImageType[]
    mobileStyle?: MobileStyle
    editable?: boolean
}

type MobileStyle = 'fullWidth' | 'grid'

const ImageGrid: React.FC<Props> = ({
    images,
    mobileStyle = 'grid',
    editable = false,
}) => {
    return (
        <Container>
            <Grid mobileStyle={mobileStyle}>
                {images.map((img) => (
                    <ImageContainer key={img.url}>
                        <Image
                            onClick={(e) => e.stopPropagation()}
                            alt=""
                            layout="fill"
                            objectFit="cover"
                            src={img.url}
                            unoptimized={img.url.includes('blob')}
                        />
                        {editable && (
                            <ImageOverlay
                                onClick={(ev) => ev.stopPropagation()}
                            >
                                <TextArea
                                    defaultValue={img.description ?? undefined}
                                />
                            </ImageOverlay>
                        )}
                    </ImageContainer>
                ))}
                {images.length < 7 && editable && (
                    <AddButton
                        backgroundColor="secondary"
                        borderColor="dark"
                        color="light"
                    />
                )}
            </Grid>
        </Container>
    )
}

export default ImageGrid
