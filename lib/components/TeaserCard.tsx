import styled from 'styled-components'
import Image from 'next/image'
import { aspectRatio, border, stack } from '../style/mixins'
import React from 'react'
import { Headline2, Paragraph } from '../style/typography'
import colors from '../style/colors'
import Link, { LinkProps } from 'next/link'
import { LinkButton } from './Button'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    ${border(2, 'dark')}
`

const ImageContainer = styled.div`
    width: 100%;
    ${aspectRatio(3 / 2)};
    transform: translate3d(-1.25rem, -1.25rem, 0);
`

const Info = styled.div`
    padding: 0 2rem 2rem;
    ${stack('1rem', 'y')}
    ${Headline2} {
        color: ${colors.teaserCard.headline};
    }
    ${Paragraph} {
        color: ${colors.teaserCard.description};
    }
`

const StyledLinkButton = styled(LinkButton)`
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
    href: LinkProps['href']
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
        <Container>
            <ImageContainer>
                <Image alt="" objectFit="cover" layout="fill" src={image} />
            </ImageContainer>
            <Info>
                <Headline2>{headline}</Headline2>
                <Paragraph>{description}</Paragraph>
            </Info>
            <Link href={href} passHref>
                <StyledLinkButton
                    backgroundColor="secondary"
                    borderColor="dark"
                    color="light"
                >
                    {cta}
                </StyledLinkButton>
            </Link>
        </Container>
    )
}

export default TeaserCard
