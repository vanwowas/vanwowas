import {
    AuthAction,
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import React, { useCallback, useState } from 'react'
import Button from '../../lib/components/Button'
import Page from '../../lib/components/Page'

import { Headline1 } from '../../lib/style/typography'
import Add from '../../lib/style/icons/add.svg'
import styled from 'styled-components'
import { stack } from '../../lib/style/mixins'
import { upToBreakpoint } from '../../lib/style/breakpoints'
import { useRouter } from 'next/dist/client/router'
import { Build, Builds } from '../../lib/types/db'
import db from '../../lib/db'
import { getData } from '../../lib/utils/db'

export const AddButton = styled(Button)`
    width: 10%;
    padding: 2rem;
    max-width: 20%;
    min-width: 100px;
    ${upToBreakpoint('medium')} {
        padding: 1rem;
    }
`

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
    builds: Builds
}

const AddBuild: React.FC<Props> = ({ builds }) => {
    const AuthUser = useAuthUser()
    const [stepIndex, setStepIndex] = useState(0)
    const router = useRouter()
    const addConcept = useCallback(() => {
        setStepIndex(stepIndex + 1)
        router.push('/builder/add-build/text')
    }, [router, stepIndex])

    return (
        <StyledPage user={AuthUser} withPadding>
            <Headline1>Hier siehts du deine Ausbau-Konzepte</Headline1>
            <AddButton
                shakeHover
                borderColor="dark"
                backgroundColor="primary"
                color="pageBackground"
                onClick={addConcept}
            >
                <Add />
            </AddButton>
            {builds.map((b) => (
                <div key={b.id}>{b.data().title}</div>
            ))}
        </StyledPage>
    )
}

export const getServerSideProps = withAuthUserTokenSSR({
    whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser }) => {
    const data = await db.builds.where('userId', '==', AuthUser.id).get()
    const builds = getData<Build>(data)
    return {
        props: { builds },
    }
})

export default withAuthUser<Props>()(AddBuild)
