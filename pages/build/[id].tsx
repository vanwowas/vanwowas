import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import React from 'react'
import Page from '../../lib/components/Page'
import { Build } from '../../lib/types/db'

type Props = {
    build: Build
}

const BuildDetailPage: React.FC<Props> = ({ build }) => {
    const AuthUser = useAuthUser()

    return (
        <Page user={AuthUser} withPadding>
            details for: <b>{build.id}</b>
        </Page>
    )
}
export const getServerSideProps = withAuthUserTokenSSR()(async ({ query }) => {
    const { id } = query
    // const build = await db.getBuilds()

    return {
        props: { build: { id } },
    }
})
export default withAuthUser<Props>()(BuildDetailPage)
