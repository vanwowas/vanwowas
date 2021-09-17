import React from 'react'
import styled, { css } from 'styled-components'
import colors from '../style/colors'
import { aspectRatio, hover, stack } from '../style/mixins'
import { Headline2, Paragraph } from '../style/typography'
import Image from './Image'
import Cheap from '../style/icons/cheap.svg'
import MapPin from '../style/icons/map-pin.svg'
import { upToBreakpoint } from '../style/breakpoints'
import Favorite from '../style/icons/star.svg'

const ImageContainer = styled.div`
    width: 40%;
    ${aspectRatio(4 / 3)}
    margin: 5% 0;
    z-index: 1;
`

const InfoContainer = styled.div`
    position: relative;
    background-color: ${colors.infoCard.background};
    width: 100%;
    margin-left: -20%;
    border-radius: 1000px;
    padding: 2rem 6rem 2rem calc(20% + 2rem);
    ${stack('1rem', 'y')}
    svg {
        width: 2rem;
    }
`

const Container = styled.div`
    display: flex;
    ${upToBreakpoint('medium')} {
        flex-direction: column;
        ${ImageContainer} {
            width: 100%;
            border-radius: 1000px;
            overflow: hidden;
            margin-bottom: -10%;
            z-index: 0;
        }
        ${InfoContainer} {
            padding: 2rem;
            margin-left: 0;
            border-radius: 1rem;
        }
    }
`

const List = styled.ul`
    list-style-type: disc;
    list-style-position: outside;
    margin-left: 1em;
    ${stack('1em', 'y')}
`

const IconContainer = styled.div`
    ${stack('1rem', 'x')}
`

const FavoriteContainer = styled.div`
    position: absolute;
    top: -2rem;
    right: 20%;
    padding: 0.5rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
        width: 2rem;
        height: 2rem;
        z-index: 1;
    }
    ${hover(css`
        transform: translate3d(0.2em, 0.2em, 0);
    `)}
    ::before {
        content: '';
        position: absolute;
        top: -0.4em;
        right: 0.4em;
        bottom: 0.4em;
        left: -0.4em;
        border-radius: 100%;
        background-color: ${colors.buttonBackground.secondary};
        transition: transform 250ms ease-in-out;
    }
    ::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 2px solid #000;
        border-radius: 100%;
    }
`

const icons = {
    cheap: <Cheap />,
    nearby: <MapPin />,
}

type Props = {
    image: string
    headline: string
    text: string
    bulletPoints: string[]
    properties: (keyof typeof icons)[]
} & (
    | { favorite?: false; onFavoriteClick?: never }
    | { favorite: true; onFavoriteClick: () => void }
)

const InfoCard: React.FC<Props> = ({
    image,
    headline,
    text,
    bulletPoints,
    properties,
    favorite,
    onFavoriteClick,
}) => {
    return (
        <Container>
            <ImageContainer>
                <Image
                    src={image}
                    alt="infocardimage"
                    objectFit="cover"
                    layout="fill"
                />
            </ImageContainer>
            <InfoContainer>
                <Headline2>{headline}</Headline2>
                <Paragraph>{text}</Paragraph>

                <List>
                    {bulletPoints.map((b) => (
                        <li key={b}>
                            <Paragraph>{b}</Paragraph>
                        </li>
                    ))}
                </List>
                <IconContainer>
                    {properties.map((p) => (
                        <React.Fragment key={p}>{icons[p]}</React.Fragment>
                    ))}
                </IconContainer>
                {favorite && (
                    <FavoriteContainer onClick={onFavoriteClick}>
                        <Favorite />
                    </FavoriteContainer>
                )}
            </InfoContainer>
        </Container>
    )
}

export default InfoCard
