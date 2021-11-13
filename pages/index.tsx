import React from 'react'
import styled from 'styled-components'
import IntroText from '../lib/components/IntroText'
import { aspectRatio, stack } from '../lib/style/mixins'
import TeaserCard from '../lib/components/TeaserCard'
import { upToBreakpoint } from '../lib/style/breakpoints'
import Image, { ImageContainer } from '../lib/components/Image'
import colors from '../lib/style/colors'
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import Page from '../lib/components/Page'
import BuildCard from '../lib/components/BuildCard'
import FindManufactur from '../lib/components/FindManufactur'
import ImageGrid from '../lib/components/ImageGrid'
import { Image as ImageType } from '../lib/types/db'
import { Headline1 } from '../lib/style/typography'
import { LinkButton } from '../lib/components/Button'
import { Build } from '../lib/types/db'
import db from '../lib/db'

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
        ${stack('4rem', 'y')}
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

const StyledLinkButton = styled(LinkButton)`
    margin-left: auto;
    margin-right: auto;
`

type Props = {
    builds: Build[]
    images: ImageType[]
}

const IndexPage: React.FC<Props> = ({ builds, images }) => {
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
                <div>
                    <Headline1>inspiration</Headline1>
                    <ImageGrid images={images} />
                    <StyledLinkButton
                        backgroundColor="primary"
                        borderColor="dark"
                        color="dark"
                        href="/inspiration"
                    >
                        see more
                    </StyledLinkButton>
                </div>
                <FindManufactur />
                {builds.map((b) => (
                    <BuildCard key={b.id} build={b} />
                ))}
            </Content>
        </Page>
    )
}

export const getServerSideProps = withAuthUserTokenSSR()(async () => {
    const builds = await db.getBuilds()
    const images = await db.getImageSet()
    return {
        props: { builds, images },
    }
})
export default withAuthUser<Props>()(IndexPage)
