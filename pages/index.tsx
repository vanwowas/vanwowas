import React from 'react'
import styled from 'styled-components'
import IntroText from '../components/IntroText'
import { aspectRatio, stack } from '../style/mixins'
import TeaserCard from '../components/TeaserCard'
import { upToBreakpoint } from '../style/breakpoints'
import Image, { ImageContainer } from '../components/Image'
import colors from '../style/colors'
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import Page from '../components/Page'
import InfoCard from '../components/InfoCard'
import FindManufactur from '../components/FindManufactur'
import ImageGrid from '../components/ImageGrid'
import { Headline1 } from '../style/typography'
import { LinkButton } from '../components/Button'

const Stage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 75vh;
`

const Content = styled.div`
    ${stack('5rem', 'y')}
    ${Headline1} {
        color: ${colors.textColor.secondary};
    }
`

const StyledIntroText = styled(IntroText)`
    margin-top: calc(75vh + 5rem);
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
    color: ${colors.textColor.white};
    ${stack('2rem', 'y')};
    ${ImageContainer} {
        position: relative;
        border-radius: 0.5rem;
        overflow: hidden;
        ${aspectRatio(16 / 8)}
    }
`

const InspirationContainer = styled.div`
    ${stack('3rem', 'y')}
    ${LinkButton} {
        margin-left: auto;
        margin-right: auto;
    }
`

const IndexPage: React.FC = () => {
    const AuthUser = useAuthUser()
    return (
        <Page user={AuthUser} withPadding>
            <Stage>
                <Image
                    alt=""
                    objectFit="cover"
                    layout="fill"
                    src="https://images.unsplash.com/photo-1515876305430-f06edab8282a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
                />
            </Stage>
            <Content>
                <StyledIntroText
                    fullWidth
                    headline="Lorem Ipsum"
                    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                />
                <CardContainer>
                    <TeaserCard
                        href={{
                            pathname: '/category/[slug]',
                            query: { slug: 'basic' },
                        }}
                        headline="basic"
                        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,"
                    />
                    <TeaserCard
                        href={{
                            pathname: '/category/[slug]',
                            query: { slug: 'comfort' },
                        }}
                        headline="comfort"
                        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,"
                    />
                    <TeaserCard
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
                        fullWidth
                        headline="lorem ipsum"
                        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                    />
                    <Image
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        src="https://images.unsplash.com/photo-1509721926668-25a8dd274c1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
                    />
                </ImageWithText>
                <InspirationContainer>
                    <Headline1>inspiration</Headline1>
                    <ImageGrid />
                    <LinkButton
                        backgroundColor="primary"
                        borderColor="dark"
                        color="dark"
                        href="/inspiration"
                    >
                        see more
                    </LinkButton>
                </InspirationContainer>
                <FindManufactur />
                <InfoCard
                    headline="manufactur"
                    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                    bulletPoints={['feature 1', 'feature 2', 'feature 3']}
                    properties={['cheap', 'nearby']}
                    image="https://images.unsplash.com/photo-1501722969499-fa2de05a9335?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1948&q=80"
                />
                <InfoCard
                    headline="manufactur"
                    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                    bulletPoints={['feature 1', 'feature 2', 'feature 3']}
                    properties={['cheap', 'nearby']}
                    image="https://images.unsplash.com/photo-1501722969499-fa2de05a9335?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1948&q=80"
                />
                <InfoCard
                    headline="manufactur"
                    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                    bulletPoints={['feature 1', 'feature 2', 'feature 3']}
                    properties={['cheap', 'nearby']}
                    image="https://images.unsplash.com/photo-1501722969499-fa2de05a9335?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1948&q=80"
                />
                <InfoCard
                    headline="manufactur"
                    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                    bulletPoints={['feature 1', 'feature 2', 'feature 3']}
                    properties={['cheap', 'nearby']}
                    image="https://images.unsplash.com/photo-1501722969499-fa2de05a9335?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1948&q=80"
                />
                <InfoCard
                    headline="manufactur"
                    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                    bulletPoints={['feature 1', 'feature 2', 'feature 3']}
                    properties={['cheap', 'nearby']}
                    image="https://images.unsplash.com/photo-1501722969499-fa2de05a9335?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1948&q=80"
                />
                <InfoCard
                    headline="manufactur"
                    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                    bulletPoints={['feature 1', 'feature 2', 'feature 3']}
                    properties={['cheap', 'nearby']}
                    image="https://images.unsplash.com/photo-1501722969499-fa2de05a9335?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1948&q=80"
                />
            </Content>
        </Page>
    )
}

export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser()(IndexPage)
