// import { InferGetServerSidePropsType } from 'next'
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import React from 'react'
import Page from '../components/Page'

// export async function getStaticProps(): Promise<{
//     props: {
//         name: string
//     }
// }> {
//     return {
//         props: {
//             name: 'inspiration',
//         },
//     }
// }

const InspirationPage: React.FC = () => {
    const AuthUser = useAuthUser()

    return <Page user={AuthUser}>inspiration</Page>
}

export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser()(InspirationPage)
