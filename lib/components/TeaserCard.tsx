import styled, { css } from 'styled-components'
import Image from 'next/image'
import { aspectRatio, border, stack } from '../style/mixins'
import React from 'react'
import { Headline3, BodyM } from '../style/typography'
import colors from '../style/colors'
import Link, { LinkProps } from 'next/link'
import { LinkButton } from './Button'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    ${border(
        2,
        'dark',
        css`
            border-radius: 0.5rem;
        `
    )};
    cursor: pointer;
`

const ImageContainer = styled.div`
    width: 100%;
    ${aspectRatio(3 / 2)};
    transform: translate3d(-1.25rem, -1.25rem, 0);
    border-radius: 0.5rem;
    overflow: hidden;
`

const Info = styled.div`
    padding: 0 2rem 2rem;
    ${stack('1rem', 'y')}
    ${BodyM} {
        color: ${colors.teaserCard.description};
    }
`

const StyledButton = styled(LinkButton)`
    position: absolute;
    top: calc(100% - 1rem);
    right: 1rem;
    z-index: 2;
    width: 115px;
    text-align: center;
`
type Props = {
    headline: string
    description: string
    href?: LinkProps['href']
    cta: string
    image: string
}

const TeaserCard: React.FC<Props> = ({
    headline,
    description,
    href,
    cta,
    image,
}) => {
    return (
        <Link href={`${href}`} passHref>
            <Container>
                <ImageContainer>
                    <Image alt="" objectFit="cover" layout="fill" src={image} />
                </ImageContainer>
                <Info>
                    <Headline3 color="tertiary">{headline}</Headline3>
                    <BodyM>{description}</BodyM>
                </Info>
                {href && (
                    <StyledButton
                        backgroundColor="secondary"
                        borderColor="dark"
                        color="light"
                    >
                        {cta}
                    </StyledButton>
                )}
            </Container>
        </Link>
    )
}

export default TeaserCard
