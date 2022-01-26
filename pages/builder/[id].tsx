import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import React from 'react'
import styled from 'styled-components'
import BuildCard from '../../lib/components/BuildCard'
import Contacts from '../../lib/components/Contacts'

import Page from '../../lib/components/Page'
import PageImageStage from '../../lib/components/PageImageStage'
import db from '../../lib/db'
import colors from '../../lib/style/colors'
import { stack } from '../../lib/style/mixins'
import { Headline1 } from '../../lib/style/typography'

import { Build, Builder as BuilderType } from '../../lib/types/db'
const Content = styled.div`
    ${stack('5rem', 'y')}
    ${Headline1} {
        color: ${colors.textColor.secondary};
    }
    margin-top: calc(75vh + 5rem);
`

type Props = {
    builder: BuilderType
    builds: Build[]
}

const Builder: React.FC<Props> = ({ builder, builds }) => {
    const AuthUser = useAuthUser()
    return (
        <Page user={AuthUser} withPadding>
            <PageImageStage
                headline={<h1>{builder.name}</h1>}
                url={
                    'https://firebasestorage.googleapis.com/v0/b/vanwowas-f6f3b.appspot.com/o/stage.JPG?alt=media'
                }
            />
            <Content>
                <h1>Das sind wird</h1>
                <p>{builder.description}</p>
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
