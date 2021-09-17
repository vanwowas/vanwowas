import React, { useCallback } from 'react'

import {
    AuthAction,
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import Page from '../components/Page'
import styled from 'styled-components'
import colors from '../style/colors'
import User from '../style/icons/user.svg'
import { stack } from '../style/mixins'
import { Headline1 } from '../style/typography'
import InfoCard from '../components/InfoCard'
import { LinkButton } from '../components/Button'

const StyledPage = styled(Page)`
    --stage-height: 40vh;
    padding-top: var(--stage-height);
    ${Headline1} {
        color: ${colors.textColor.secondary};
    }
    ${stack('2rem', 'y')}
`

const Stage = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: var(--stage-height);
    background-color: ${colors.teaserCard.background};
    display: flex;
    align-items: center;
    justify-content: center;
    ${stack('2rem', 'y')}
    color: ${colors.textColor.white};
    & > svg {
        width: 4rem;
    }
    & > ${Headline1} {
        color: ${colors.textColor.white};
    }
`

const Login: React.FC = () => {
    const AuthUser = useAuthUser()

    const handleFavoriteClick = useCallback(() => {
        alert('remove favorite from list')
    }, [])

    return (
        <StyledPage user={AuthUser} withPadding>
            <Stage>
                <User />
                <Headline1>Moin, {AuthUser.displayName}</Headline1>
            </Stage>
            <Headline1>Deine Favoriten</Headline1>
            <InfoCard
                favorite
                onFavoriteClick={handleFavoriteClick}
                headline="manufactur"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                bulletPoints={['feature 1', 'feature 2', 'feature 3']}
                properties={['cheap', 'nearby']}
                image="https://images.unsplash.com/photo-1501722969499-fa2de05a9335?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1948&q=80"
            />
            <InfoCard
                favorite
                onFavoriteClick={handleFavoriteClick}
                headline="manufactur"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                bulletPoints={['feature 1', 'feature 2', 'feature 3']}
                properties={['cheap', 'nearby']}
                image="https://images.unsplash.com/photo-1501722969499-fa2de05a9335?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1948&q=80"
            />
            <Headline1>Du baust für andere aus?</Headline1>
            <div>
                <LinkButton
                    backgroundColor="secondary"
                    borderColor="dark"
                    color="dark"
                    href="/builder/general"
                >
                    Dann geht es hier weiter
                </LinkButton>
            </div>
        </StyledPage>
    )
}

export const getServerSideProps = withAuthUserTokenSSR({
    whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})()

export default withAuthUser()(Login)
