import React from 'react'

import {
    AuthAction,
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import Page from '../lib/components/Page'
import styled from 'styled-components'
import colors from '../lib/style/colors'
import UserIcon from '../lib/style/icons/user.svg'
import { stack } from '../lib/style/mixins'
import { Headline1 } from '../lib/style/typography'
import { LinkButton } from '../lib/components/Button'
import Link from 'next/link'
import db from '../lib/db'
import { User } from '../lib/types/db'

const StyledPage = styled(Page)`
    --stage-height: 40vh;
    padding-top: var(--stage-height);
    ${Headline1} {
        color: ${colors.textColor.secondary};
    }
    ${stack('4rem', 'y')}
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

type Props = {
    user: User
}

const UserPage: React.FC<Props> = ({ user }) => {
    const AuthUser = useAuthUser()
    const { name, isBuilder } = user
    // const favorites: InfoCardProps[] = [
    //     {
    //         id: 'xyz',
    //         headline: 'manufactur',
    //         text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    //         bulletPoints: ['feature 1', 'feature 2', 'feature 3'],
    //         properties: ['cheap', 'nearby'],
    //         image: 'https://images.unsplash.com/photo-1501722969499-fa2de05a9335?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1948&q=80',
    //     },
    // ]

    // const handleFavoriteClick = useCallback(() => {
    //     alert('remove favorite from list')
    // }, [])

    return (
        <StyledPage user={AuthUser} withPadding>
            <Stage>
                <UserIcon />
                <Headline1>Moin, {name}</Headline1>
                {isBuilder && (
                    <Link passHref href="/builder/general">
                        <LinkButton
                            backgroundColor="tertiary"
                            borderColor="light"
                            color="light"
                        >
                            Profil bearbeiten
                        </LinkButton>
                    </Link>
                )}
            </Stage>
            <Headline1>Deine Favoriten</Headline1>
            {/* {favorites.map((b) => (
                <InfoCard
                    onFavoriteClick={() => handleFavoriteClick()}
                    key={b.id}
                    {...b}
                />
            ))} */}
            <Headline1>
                {isBuilder ? 'Zu deinen Konzepten' : 'Du baust für andere aus?'}
            </Headline1>
            <div>
                <LinkButton
                    backgroundColor="secondary"
                    borderColor="dark"
                    color="dark"
                    href={isBuilder ? '/builder/builds' : '/builder/general'}
                >
                    {isBuilder ? 'deine Konzepte' : 'Dann geht es hier weiter'}
                </LinkButton>
            </div>
        </StyledPage>
    )
}

export const getServerSideProps = withAuthUserTokenSSR({
    whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser }) => {
    if (AuthUser.id) {
        const user = await db.getUser(AuthUser.id)
        if (user) {
            return {
                props: { user },
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

export default withAuthUser<Props>()(UserPage)
