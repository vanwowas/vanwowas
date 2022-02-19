import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import React from 'react'
import styled, { css } from 'styled-components'
import BuildCard from '../../lib/components/BuildCard'
import Contacts from '../../lib/components/Contacts'

import Page from '../../lib/components/Page'
import PageImageStage from '../../lib/components/PageImageStage'
import Richtext from '../../lib/components/Richtext'
import db from '../../lib/db'
import colors from '../../lib/style/colors'
import { stack } from '../../lib/style/mixins'
import { Headline1 } from '../../lib/style/typography'

import { Build, Builder as BuilderType } from '../../lib/types/db'

const Stage = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 40vh;
    background-color: ${colors.teaserCard.background};
    display: flex;
    align-items: center;
    justify-content: center;
    ${stack('2rem', 'y')}
    color: ${colors.textColor.white};
    & > ${Headline1} {
        color: ${colors.textColor.white};
    }
`

const Content = styled.div<{ headerImage: boolean }>`
    ${stack('5rem', 'y')}
    ${Headline1} {
        color: ${colors.textColor.secondary};
    }
    margin-top: calc(40vh + 5rem);
    ${(p) =>
        p.headerImage &&
        css`
            margin-top: calc(75vh + 5rem);
        `}
`

type Props = {
    builder: BuilderType
    builds: Build[]
}

const Builder: React.FC<Props> = ({ builder, builds }) => {
    const AuthUser = useAuthUser()
    return (
        <Page
            user={AuthUser}
            withPadding
            title="VanWoWas - Ausbau Konzepte"
            description="Manufaktur Profil, Profil, Camper Manufaktur finden. Ausbauen von Vans in Deutschland."
        >
            {builder.headerImage ? (
                <PageImageStage
                    headline={<h1>{builder.name}</h1>}
                    url={builder.headerImage}
                />
            ) : (
                <Stage>
                    <Headline1>{builder.name}</Headline1>
                </Stage>
            )}
            <Content headerImage={!!builder.headerImage}>
                <h1>Das sind wird</h1>
                <Richtext text={builder.description} />
                <h1>Unsere Konzepte</h1>
                {builds.map((b) => (
                    <BuildCard build={b} key={b.id} />
                ))}

                <Contacts builder={builder} loggedIn={!!AuthUser.id} />
            </Content>
        </Page>
    )
}

export const getServerSideProps = withAuthUserTokenSSR()(async ({ query }) => {
    if (typeof query?.id === 'string') {
        const builder = await db.getBuilder(query.id)
        const builds = await db.getBuilderBuilds(query.id)

        if (builder) {
            return {
                props: { builder: builder, builds },
            }
        }
    }
    return {
        redirect: {
            permanent: false,
            destination: '/login',
        },
    }
})

export default withAuthUser<Props>()(Builder)
