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
import { Image as ImageType } from '../lib/types/db'
import { Headline1 } from '../lib/style/typography'
import { Build } from '../lib/types/db'
import db from '../lib/db'
import PageImageStage from '../lib/components/PageImageStage'

const Content = styled.div`
    ${stack('5rem', 'y')}
    ${Headline1} {
        color: ${colors.textColor.secondary};
    }
    margin-top: calc(75vh + 5rem);
`

const CardContainer = styled.div`
    padding: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    ${upToBreakpoint('medium')} {
        grid-template-columns: 1fr;
        grid-template-row: 1fr 1fr 1fr;
        grid-gap: 4rem;
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

const StageHeadlineContainer = styled.div``

const StageHeadline = styled(Headline1)<{ color: string }>`
    font-size: 2.5rem;
    margin-bottom: 0rem;
    color: ${(p) => p.color};
`

type Props = {
    builds: Build[]
    images: ImageType[]
}

const IndexPage: React.FC<Props> = ({ builds }) => {
    const AuthUser = useAuthUser()
    return (
        <Page user={AuthUser} withPadding>
            <PageImageStage
                headline={
                    <StageHeadlineContainer>
                        <StageHeadline color={colors.primary}>
                            Traumcamper
                        </StageHeadline>
                        <StageHeadline color={colors.secondary}>
                            bauen
                        </StageHeadline>
                        <StageHeadline color={colors.tertiary}>
                            lassen
                        </StageHeadline>
                    </StageHeadlineContainer>
                }
                url={
                    'https://firebasestorage.googleapis.com/v0/b/vanwowas-f6f3b.appspot.com/o/stage.JPG?alt=media'
                }
            />
            <Content>
                <CardContainer>
                    <TeaserCard
                        cta="finden"
                        image="https://firebasestorage.googleapis.com/v0/b/vanwowas-f6f3b.appspot.com/o/manufaktur.JPG?alt=media"
                        href={{
                            pathname: '/category/[slug]',
                            query: { slug: 'basic' },
                        }}
                        headline="Manufaktur finden"
                        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
                    />
                    <TeaserCard
                        cta="inspiration"
                        image="https://firebasestorage.googleapis.com/v0/b/vanwowas-f6f3b.appspot.com/o/inspiration.jpg?alt=media"
                        href={{
                            pathname: '/category/[slug]',
                            query: { slug: 'comfort' },
                        }}
                        headline="Inspirieren lassen"
                        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
                    />
                    <TeaserCard
                        cta="blog"
                        image="https://firebasestorage.googleapis.com/v0/b/vanwowas-f6f3b.appspot.com/o/DSCF9738-min.JPG?alt=media"
                        href={{
                            pathname: '/category/[slug]',
                            query: { slug: 'premium' },
                        }}
                        headline="Rund um's campen"
                        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
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
                        src="https://images.unsplash.com/photo-1524556079002-ba22995b7af7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
                    />
                </ImageWithText>
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
