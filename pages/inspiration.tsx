import { InferGetServerSidePropsType } from 'next'
import React from 'react'

export async function getStaticProps(): Promise<{
    props: {
        name: string
    }
}> {
    return {
        props: {
            name: 'inspiration',
        },
    }
}

function InspirationPage({
    name,
}: InferGetServerSidePropsType<typeof getStaticProps>): JSX.Element {
    return <div>{name}</div>
}

export default InspirationPage
