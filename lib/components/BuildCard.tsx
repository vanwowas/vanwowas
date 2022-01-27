import React from 'react'
import styled from 'styled-components'
import colors from '../style/colors'
import { aspectRatio, stack } from '../style/mixins'
import { Headline2 } from '../style/typography'
import Image from './Image'
import { upFromBreakpoint, upToBreakpoint } from '../style/breakpoints'
import { Build } from '../types/db'
import { LinkButton } from './Button'
import Link from 'next/link'
import Edit from '../style/icons/edit.svg'
import { useRouter } from 'next/dist/client/router'
import Richtext from './Richtext'

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

const StyledRichtext = styled(Richtext)`
    overflow: hidden;
    position: relative;
    height: 100%;
    ::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 5rem;
        background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 1) 0%,
            transparent 100%
        );
    }
`

const Container = styled.div<{ withPointerCursor: boolean }>`
    display: flex;
    ${(p) => p.withPointerCursor && 'cursor: pointer'};
    ${upFromBreakpoint('medium')} {
        max-height: 400px;
    }
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
            max-height: 300px;
        }
    }
`

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

const SeeMore = styled(LinkButton)`
    position: absolute;
    bottom: -2rem;
    right: 20%;
    ${upToBreakpoint('medium')} {
        bottom: -2rem;
        top: auto;
        right: 10%;
    }
`

type Props = {
    build: Build
    editable?: boolean
}

const BuildCard: React.FC<Props> = ({ build, editable }) => {
    const { title, description, images, id } = build
    const router = useRouter()

    return (
        <Container
            withPointerCursor={!editable}
            onClick={() => {
                if (!editable) {
                    router.push(`/build/${id}`)
                }
            }}
        >
            <ImageContainer>
                {!!images?.length && (
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
                <StyledRichtext text={description} />
                {/*</InfoContainer>  {['cheap', 'nearby'].map((p: any) => (
                        <React.Fragment key={p}>{icons[p]}</React.Fragment>
                    ))}
                </IconContainer> */}
                {!editable && (
                    <Link href={`/build/${build.id}`} passHref>
                        <SeeMore
                            backgroundColor="secondary"
                            color="light"
                            borderColor="dark"
                        >
                            mehr dazu
                        </SeeMore>
                    </Link>
                )}
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
            </InfoContainer>
        </Container>
    )
}

export default BuildCard
