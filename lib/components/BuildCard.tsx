import React from 'react'
import styled from 'styled-components'
import colors from '../style/colors'
import { aspectRatio, stack } from '../style/mixins'
import { Headline2, Paragraph } from '../style/typography'
import Image from './Image'
// import Cheap from '../style/icons/cheap.svg'
// import MapPin from '../style/icons/map-pin.svg'
import { upToBreakpoint } from '../style/breakpoints'
// import { LinkButton } from './Button'
import { Build } from '../types/db'
import { LinkButton } from './Button'
import Link from 'next/link'
import Edit from '../style/icons/edit.svg'

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

// const IconContainer = styled.div`
//     ${stack('1rem', 'x')}
// `

const RoundButton = styled(LinkButton)`
    position: absolute;
    top: -2rem;
    right: 20%;
    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
    ${upToBreakpoint('medium')} {
        bottom: -2rem;
        top: auto;
        right: 10%;
    }
`

// const icons = {
//     cheap: <Cheap />,
//     nearby: <MapPin />,
// }

type Props = {
    build: Build
    editable?: boolean
}

const BuildCard: React.FC<Props> = ({ build, editable }) => {
    const { title, description, images } = build
    return (
        <Container>
            <ImageContainer>
                {images && (
                    <Image
                        src={images[0].url}
                        alt="infocardimage"
                        objectFit="cover"
                        layout="fill"
                    />
                )}
            </ImageContainer>
            <InfoContainer>
                <Headline2>{title}</Headline2>
                <Paragraph>{description}</Paragraph>

                <List>
                    {['bulletPoints', 'FS'].map((b) => (
                        <li key={b}>
                            <Paragraph>{b}</Paragraph>
                        </li>
                    ))}
                </List>
                {/* <IconContainer>
                    {['cheap', 'nearby'].map((p: any) => (
                        <React.Fragment key={p}>{icons[p]}</React.Fragment>
                    ))}
                </IconContainer> */}
                {editable && (
                    <Link href={`/builder/build/text/${build.id}`} passHref>
                        <RoundButton
                            round
                            backgroundColor="primary"
                            color="light"
                            borderColor="dark"
                        >
                            <Edit />
                        </RoundButton>
                    </Link>
                )}
                {/* {(onFavoriteClick || editable) && editHref ? (
                    <Link href={editHref} passHref>
                        <RoundButton
                            round
                            backgroundColor="primary"
                            color="light"
                            borderColor="dark"
                        >
                            {onFavoriteClick ? <Favorite /> : <Edit />}
                        </RoundButton>
                    </Link>
                ) : (
                    <RoundButton
                        round
                        backgroundColor="primary"
                        color="light"
                        borderColor="dark"
                        onClick={onFavoriteClick}
                    >
                        {onFavoriteClick ? <Favorite /> : <Edit />}
                    </RoundButton>
                )} */}
            </InfoContainer>
        </Container>
    )
}

export default BuildCard
