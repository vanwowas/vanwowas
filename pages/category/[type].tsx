// import { InferGetServerSidePropsType } from 'next'
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import React from 'react'
import Page from '../../components/Page'

// export async function getServerSideProps({ params }: any) {
//     return {
//         props: {
//             type: params.type,
//         },
//     }
//   }
// function Category({
//     type,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) {

const Category: React.FC = () => {
    const AuthUser = useAuthUser()
    return <Page user={AuthUser}>category</Page>
}
export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser()(Category)
