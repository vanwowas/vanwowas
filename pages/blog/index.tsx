import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import React from 'react'
import styled from 'styled-components'
import { LinkButton } from '../../lib/components/Button'
import Page from '../../lib/components/Page'
import colors from '../../lib/style/colors'
import { stack } from '../../lib/style/mixins'
import { Headline1, Headline3 } from '../../lib/style/typography'

const Container = styled.div`
    ${stack('2rem', 'y')};
    align-items: center;
    justify-content: center;
    height: 100%;
    ${Headline1} {
        color: ${colors.primary};
    }
    ${Headline3} {
        max-width: 700px;
    }
`

type Props = {
    blog: string
}

const Blog: React.FC<Props> = () => {
    const AuthUser = useAuthUser()
    return (
        <Page
            user={AuthUser}
            withPadding
            title="VanWoWas - Impressum"
            description="Blog, Magazin, Artikel, Rund ums campen, Camper Manufaktur finden. Ausbauen von Vans in Deutschland. Inspiration finden. Bilder finden."
        >
            <Container>
                <Headline1>Kommt bald... </Headline1>
                <Headline3>
                    Um keinen Ausbau-Content, Manufakturempfehlungen und
                    Campinginspiration zu verpassen, abonniere gern unseren
                    Newsletter.
                </Headline3>
                <LinkButton
                    backgroundColor="secondary"
                    borderColor="dark"
                    color="light"
                    href="http://eepurl.com/hwW7m5"
                    target="_blank"
                >
                    Newsletter
                </LinkButton>
            </Container>
        </Page>
    )
}
export const getServerSideProps = withAuthUserTokenSSR()(async ({ query }) => {
    const { id } = query
    return {
        props: { blog: 'blog' + id },
    }
})
export default withAuthUser<Props>()(Blog)
