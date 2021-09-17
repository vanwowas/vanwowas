import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
// import { useRouter } from 'next/dist/client/router'
import React from 'react'
import Page from '../../components/Page'

import { Headline1 } from '../../style/typography'

const AddBuild: React.FC = () => {
    const AuthUser = useAuthUser()
    // const router = useRouter()

    return (
        <Page user={AuthUser} withPadding>
            <Headline1>Basic</Headline1>
            <Headline1>Comfort</Headline1>
            <Headline1>Premium</Headline1>
        </Page>
    )
}

export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser()(AddBuild)
