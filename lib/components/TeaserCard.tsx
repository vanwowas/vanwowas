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
`
type Props = {
    headline: string
    description: string
    href: LinkProps['href']
}

const TeaserCard: React.FC<Props> = ({ headline, description, href }) => {
    return (
        <Container>
            <ImageContainer>
                <Image
                    alt=""
                    objectFit="cover"
                    layout="fill"
                    src="https://images.unsplash.com/photo-1527786356703-4b100091cd2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80"
                />
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
                    see more
                </StyledLinkButton>
            </Link>
        </Container>
    )
}

export default TeaserCard
