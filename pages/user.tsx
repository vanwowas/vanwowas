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
import { Build, User } from '../lib/types/db'
import BuildCard from '../lib/components/BuildCard'

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
    favorites: Build[]
}

const UserPage: React.FC<Props> = ({ user, favorites }) => {
    const AuthUser = useAuthUser()
    const { name, isBuilder } = user

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
            {favorites.map((build) => (
                <BuildCard build={build} key={build.id} />
            ))}
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
        const favorites = await db.getUserFavoriteBuilds(user?.favorites || [])
        if (user) {
            return {
                props: { user, favorites },
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
