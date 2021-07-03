import React from 'react'
import styled from 'styled-components'
import IntroText from '../components/IntroText'
import Page from '../components/Page'
import { aspectRatio, stack } from '../style/mixins'
import Card from '../components/Card'
import { upToBreakpoint } from '../style/breakpoints'
import Image, { ImageContainer } from '../components/Image'
import colors from '../style/colors'

const StyledPage = styled(Page)`
    ${stack('3rem', 'y')}
`

const Stage = styled.div`
    position: relative;
    width: 100vw;
    height: 75vh;
`

const StyledIntroText = styled(IntroText)`
    margin-top: 5rem;
    margin-bottom: 2rem;
`

const CardContainer = styled.div`
    padding: 1rem 0;
    ${stack('2rem', 'x')}
    ${upToBreakpoint('medium')} {
        ${stack('1rem', 'y')}
    }
`

const ImageWithText = styled.div`
    padding: 2rem;
    color: ${colors.textColor.white};
    ${stack('2rem', 'y')};
    ${ImageContainer} {
        position: relative;
        border-radius: 0.5rem;
        overflow: hidden;
        ${aspectRatio(16 / 8)}
    }
`

const IndexPage: React.FC = () => {
    return (
        <>
            <Stage>
                <Image
                    alt=""
                    objectFit="cover"
                    layout="fill"
                    src="https://images.unsplash.com/photo-1515876305430-f06edab8282a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
                />
            </Stage>
            <StyledPage backgroundIllustration>
                <StyledIntroText
                    headline="Lorem Ipsum"
                    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                />
                <CardContainer>
                    <Card
                        href={{
                            pathname: '/category/[slug]',
                            query: { slug: 'basic' },
                        }}
                        headline="basic"
                        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,"
                    />
                    <Card
                        href={{
                            pathname: '/category/[slug]',
                            query: { slug: 'comfort' },
                        }}
                        headline="comfort"
                        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,"
                    />
                    <Card
                        href={{
                            pathname: '/category/[slug]',
                            query: { slug: 'premium' },
                        }}
                        headline="premium"
                        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,"
                    />
                </CardContainer>
                <ImageWithText>
                    <IntroText
                        fullWidth={true}
                        headline="Lorem Ipsum"
                        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                    />
                    <Image
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        src="https://images.unsplash.com/photo-1509721926668-25a8dd274c1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
                    />
                </ImageWithText>
            </StyledPage>
        </>
    )
}

export default IndexPage
