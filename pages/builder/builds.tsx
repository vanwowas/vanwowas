import {
    AuthAction,
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import React from 'react'
import Button from '../../lib/components/Button'
import Page from '../../lib/components/Page'

import { Headline1 } from '../../lib/style/typography'
import styled from 'styled-components'
import { stack } from '../../lib/style/mixins'
import { upToBreakpoint } from '../../lib/style/breakpoints'
import { Build } from '../../lib/types/db'
import db from '../../lib/db'
import BuildCard from '../../lib/components/BuildCard'
import Link from 'next/link'
import { AddLinkButton } from '../../lib/components/AddButton'

const StyledPage = styled(Page)`
    ${stack('3rem', 'y')}
    ${Button} {
        width: 10%;
        padding: 2rem;
        max-width: 20%;
        min-width: 100px;
        ${upToBreakpoint('medium')} {
            padding: 1rem;
        }
    }
`

type Props = {
    builds?: Build[]
}

const AddBuild: React.FC<Props> = ({ builds }) => {
    const AuthUser = useAuthUser()

    return (
        <StyledPage
            user={AuthUser}
            withPadding
            title="VanWoWas - Ausbau Konzepte"
            description="Ausbau Konzepte, Manufaktur Profil, bearbeiten, Profil, Camper Manufaktur finden. Ausbauen von Vans in Deutschland."
        >
            <Headline1>
                Hier kannst Du deine Konzepte bearbeiten oder Neue erstellen
            </Headline1>
            <Link passHref href="/builder/build/text">
                <AddLinkButton
                    borderColor="dark"
                    backgroundColor="primary"
                    color="pageBackground"
                />
            </Link>
            {builds?.map((b) => (
                <BuildCard key={b.id} build={b} editable />
            ))}
        </StyledPage>
    )
}

export const getServerSideProps = withAuthUserTokenSSR({
    whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser }) => {
    if (AuthUser.id) {
        const data = await db.userBuilds(AuthUser.id)
        return {
            props: { builds: data },
        }
    }
    return {
        redirect: {
            destination: '/user',
            permanent: false,
        },
    }
})

export default withAuthUser<Props>({
    whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(AddBuild)
