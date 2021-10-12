import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
// import { useRouter } from 'next/dist/client/router'
import React, { useCallback, useState } from 'react'
import Button from '../../components/Button'
import Page from '../../components/Page'

import { Headline1 } from '../../style/typography'
import Add from '../../style/icons/add.svg'
import styled from 'styled-components'
import { stack } from '../../style/mixins'
import { upToBreakpoint } from '../../style/breakpoints'
import { useRouter } from 'next/dist/client/router'
import InfoCard from '../../components/InfoCard'

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

const AddBuild: React.FC = () => {
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
        </StyledPage>
    )
}

export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser()(AddBuild)
