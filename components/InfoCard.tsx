import React from 'react'
import styled from 'styled-components'
import colors from '../style/colors'
import { aspectRatio, stack } from '../style/mixins'
import { Headline2, Paragraph } from '../style/typography'
import Image from './Image'
import Cheap from '../style/icons/cheap.svg'
import MapPin from '../style/icons/map-pin.svg'
import { upToBreakpoint } from '../style/breakpoints'

const ImageContainer = styled.div`
    width: 40%;
    ${aspectRatio(4 / 3)}
    margin: 5% 0;
`

const InfoContainer = styled.div`
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
        }
        ${InfoContainer} {
            padding: 2rem;
            margin-left: 0;
            border-radius: 1rem;
            z-index: 1;
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
}

const InfoCard: React.FC<Props> = ({
    image,
    headline,
    text,
    bulletPoints,
    properties,
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
                <IconContainer>{properties.map((p) => icons[p])}</IconContainer>
            </InfoContainer>
        </Container>
    )
}

export default InfoCard
