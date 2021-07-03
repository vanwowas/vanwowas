// import { InferGetServerSidePropsType } from 'next'
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
    return <Page>category</Page>
}
export default Category
