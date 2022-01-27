import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import React from 'react'
import Page from '../../lib/components/Page'

type Props = {
    blog: string
}

const Blog: React.FC<Props> = ({ blog }) => {
    const AuthUser = useAuthUser()
    return (
        <Page user={AuthUser} withPadding>
            <h1>{blog}</h1>
        </Page>
    )
}
export const getServerSideProps = withAuthUserTokenSSR()(async ({ query }) => {
    const { id } = query
    return {
        props: { blog: 'blog' + id },
    }

    return {
        redirect: {
            destination: '/',
            permanent: false,
        },
    }
})
export default withAuthUser<Props>()(Blog)
