import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import React from 'react'
import ImageGrid from '../components/ImageGrid'
import Page from '../components/Page'

const InspirationPage: React.FC = () => {
    const AuthUser = useAuthUser()

    return (
        <Page user={AuthUser} withPadding>
            <ImageGrid />
        </Page>
    )
}

export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser()(InspirationPage)
