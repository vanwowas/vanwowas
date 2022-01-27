import React, { useCallback, useRef } from 'react'
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
import Link from 'next/link'

const Content = styled.div`
    ${stack('5rem', 'y')}
    ${Headline1} {
        color: ${colors.textColor.secondary};
    }
    margin-top: calc(75vh + 5rem);
    svg {
        display: block;
        width: 100%;
        max-width: 250px;
        margin-left: auto;
        margin-right: auto;
    }
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
    const findRef = useRef<HTMLDivElement>(null)
    const goToFind = useCallback(() => {
        if (!findRef.current) return null
        const findPosition = findRef.current.getBoundingClientRect().top + 200
        if (findPosition) {
            window.scrollTo({ top: findPosition, behavior: 'smooth' })
        }
    }, [])
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
                        onButtonClick={goToFind}
                        href="/"
                        headline="Manufaktur finden"
                        description="Postleitzahl und Budget eingeben und alle passenden Manufakturen werden für dich aufgelistet"
                    />
                    <TeaserCard
                        cta="inspiration"
                        image="https://firebasestorage.googleapis.com/v0/b/vanwowas-f6f3b.appspot.com/o/inspiration.jpg?alt=media"
                        href="/inspiration"
                        headline="Inspirieren lassen"
                        description="Bilder durchstöbern und Inspiration finden. Gefunde Manufakturen als Favoriten in deinem Konto speichern"
                    />
                    <TeaserCard
                        cta="blog"
                        image="/action.jpg"
                        href="/blog"
                        headline="Rund um's campen"
                        description="Wie suche ich den passenden Bus? Welche Manufaktur passt zu mir? Kurze Artikel beantworten Deine Camper-Fragen"
                    />
                </CardContainer>
                <ImageWithText>
                    <IntroText
                        fullWidth
                        headline="VanWoWas?"
                        text="In ganz Deutschland Gibt es tolle Manufakturen, die maßgeschneiderte und handgefertigte Camper bauen. Doch versteckt das Internet die einen, eine Manufaktur die dir gefällt ist auf der anderen Seite Deutschlands oder in deiner Nähe aber hat nur Premium-Camper, obwohl du doch nur einen simplen Ausbau suchst…"
                    />
                    <Image
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        src="https://images.unsplash.com/photo-1524556079002-ba22995b7af7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
                    />
                </ImageWithText>
                <p>
                    Auf VanWoWas sammeln wir sie alle und Bringen Dich und deine
                    perfekt pasenden Ausbauer:innen zusammen. Am besten, Du
                    richtest dir mit drei clicks deinen{' '}
                    <Link href={'/login'}>privaten Vanwowas-Bereich</Link> ein
                    und legst los, dir Inspirierende Bilder, Ausbaukonzepte und
                    Manufakturen, die für dich infrage kommen, zu merken. Aus
                    deinem Profil heraus hast du dann Zugang zu den Kontaktdaten
                    und kannst ganz entspannt deine Favoriten kontaktieren.
                    <br />
                    <br />
                    Wir hoffen dir einen guten Überblick für den Start in dein
                    Camper-Abenteuer mitzugeben! Wir sind noch nicht perfekt.
                    Darum freuen wir uns, wenn du hier deine{' '}
                    <Link href={'mailto:moin@vanwowas.de'}>
                        Verbesserungsideen mit uns teilst.
                    </Link>{' '}
                    Nützliches, spaßiges und Tipps zum Camperkauf und Ausbau --
                    Checkt gern unsere Newsletter.
                </p>

                <FindManufactur />
                <div ref={findRef} />
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
